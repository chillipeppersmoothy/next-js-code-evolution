import Link from "next/link";
import wondersImages from "./wonders";
import Image from "next/image";

export default function PhotoFeedPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-3xl">Photo Feed</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4">
        {wondersImages.map(({ id, src, name }) => (
          <Link key={id} href={`photo-feed/${id}`}>
            <Image
              src={src}
              alt={name}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
