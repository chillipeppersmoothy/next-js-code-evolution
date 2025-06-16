"use client";

import Modal from "@/components/modal";
import Image from "next/image";
import { use } from "react";
import wondersImages, { WonderImage } from "../../wonders";

export default function ModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const imageData: WonderImage = wondersImages.find(
    (image) => image.id === id
  )!;

  return (
    <Modal>
      <div className="bg-white p-2 rounded-lg shadow-lg">
        <Image
          src={imageData.src}
          alt={imageData.name}
          width={500}
          height={500}
          className="w-full object-cover aspect-square"
        />
        <div className="mt-4 text-center font-bold text-xl">
          <h1>{imageData.name}</h1>
          <h3>{imageData.photographer}</h3>
          <h3>{imageData.location}</h3>
        </div>
      </div>
    </Modal>
  );
}
