import loaderToggle from "./loader";
const request = async (resours) => {
  loaderToggle(true);
  const req = await fetch(resours);
  if (!req.ok) {
    loaderToggle(false);
    throw new Error("Something went wrong ):");
  }
  const data = await req.json();
  loaderToggle(false);
  return data;
};

export default request;
