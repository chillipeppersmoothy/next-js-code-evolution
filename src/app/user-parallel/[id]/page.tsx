interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type Album = Omit<Post, "body">;

async function getUserPosts(userId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  return response.json();
}

async function getUserAlbums(userId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );

  return response.json();
}

export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const postsData: Promise<Post[]> = getUserPosts(id);
  const albumsData: Promise<Album[]> = getUserAlbums(id);

  const [posts, albums] = await Promise.all([postsData, albumsData]);

  return (
    <div className="flex bg-amber-200 p-4 w-full">
      <div className="bg-red-300 p-4 flex-1/2 rounded-xl">
        <h1 className="font-bold text-2xl">Posts</h1>
        {posts.map((post: Post) => (
          <div key={post.id} className="mt-2 p-2 border rounded-xl">
            <h1 className="font-bold">{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <div className="bg-blue-300 p-4 flex-1/2 rounded-xl">
        <h1 className="font-bold text-2xl">Albums</h1>
        {albums.map((album: Album) => (
          <div key={album.id} className="mt-2 p-2 border rounded-xl">
            <h1>{album.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
