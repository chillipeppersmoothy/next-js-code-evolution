import wondersImages, { WonderImage } from "../wonders";
import Image from "next/image";

export default async function PhotoFeedDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const imageData: WonderImage = wondersImages.find(
    (image) => image.id === id
  )!;
  if (!imageData) {
    return <div>Image not found</div>;
  }
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="font-bold text-3xl text-center mb-2">
            {imageData.name}
          </h1>
        </div>
        <Image
          src={imageData.src}
          alt={imageData.name}
          className="w-full object-cover aspect-square"
        />
        <div className="mt-4 text-center font-bold text-xl">
          <h3>{imageData.photographer}</h3>
          <h3>{imageData.location}</h3>
        </div>
      </div>
    </div>
  );
}
