"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) throw new Error("Failed to fetch users");

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An Unknown error has occured");
      }
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <ul>
      {users?.map((user) => (
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
