export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-20 m-2.5  shadow-md rounded-lg border flex justify-center items-center">
      {children}
    </div>
  );
};
