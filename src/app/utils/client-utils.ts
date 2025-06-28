import "client-only";

export const clientSideFunction = () => {
  console.log(`Use window object, localstorage`);
  return "client result";
};
