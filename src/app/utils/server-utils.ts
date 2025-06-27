import "server-only";

export const serverSideFunction = () => {
  console.log(
    `use multiple libraries, environment variables, interact with database and other confidential information`
  );

  return "server result";
};
