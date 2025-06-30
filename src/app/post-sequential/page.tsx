import { Suspense } from "react";
import { Author } from "./author";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostSequential() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  const filteredPosts = posts.filter((post) => post.id % 10 === 1);

  return (
    <div className="m-2">
      <h1 className="font-bold text-2xl my-2 mx-1">Blog Posts</h1>
      <div>
        {filteredPosts?.map((post) => (
          <div key={post.id} className="bg-gray-400 m-1 p-2 rounded-xl">
            <h2>Title: {post.title}</h2>
            <p>{post.body}</p>
            <Suspense fallback={<p>Fetching user data...</p>}>
              <Author userId={post.userId} />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
}
