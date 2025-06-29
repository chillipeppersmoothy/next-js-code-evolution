type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UserServer() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: User[] = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id} className="bg-gray-400 shadow-2xl rounded-xl m-2 p-2">
          <div>Name: {user.name}</div>
          <div>UserName: {user.username}</div>
          <div>Phone: {user.phone}</div>
          <div>Email: {user.email}</div>
        </li>
      ))}
    </ul>
  );
}
