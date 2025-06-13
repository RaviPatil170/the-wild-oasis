import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);

  return data;
}
export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}
export async function getCurrentuser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
  // const { data: sessionData } = await supabase.auth.getSession();
  // if (!sessionData.session) return null;
  // const { data, error } = await supabase.auth.getUser();
  // if (error) throw new Error(error.message);

  // return data;
}
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new error(error.message);
}
export async function updateCurrentUser({ fullName, password, avatar }) {
  //1. update the fullname or password
  let updatedData;
  if (fullName) {
    updatedData = { data: { fullName } };
  }
  if (password) updatedData = { password };
  const { data, error } = await supabase.auth.updateUser(updatedData);
  if (error) throw new Error(error.message);
  if (!avatar) return data;
  //2 upload the avatar image
  const fileName = `avatar-${data?.user?.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (storageError) throw new Error(storageError.message);
  //3 update the  avatar in user table

  const { data: updateUser, error: upateError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars//${fileName}`,
      },
    });
  if (upateError) throw new Error(upateError.message);

  return updateUser;
}
