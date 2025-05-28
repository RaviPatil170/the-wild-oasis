import supabase, { supabaseUrl } from "./supabase";
export async function getCabin() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return cabins;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  //https://wyaxmpxalslgtxuinbfs.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg
  //create a cabin

  const hasImagePath = newCabin.image.startsWith(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images//${imageName}`;
  const { file, ...rest } = newCabin;

  let query = supabase.from("cabins");

  if (!id) query = query.insert([{ ...rest, image: imagePath }]);

  //edid
  if (id) query = query.update({ ...rest, image: imagePath }).eq("id", id);
  const { data, error } = await query.select().single();

  //update the cabin

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  if (hasImagePath) return data;
  //upload a imaage
  //const avatarFile = event.target.files[0]
  const { error: storageErrors } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //delete the cabin if file uploading fails
  if (storageErrors) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageErrors);
    throw new Error("cabin could not be created since file uplaod fails");
  }
  return data;
}
