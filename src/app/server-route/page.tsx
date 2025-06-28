import { serverSideFunction } from "@/app/utils/server-utils";
import { ImageSlider } from "@/components/imageSlider";

export default async function ServerRoutePage() {
  const result = serverSideFunction();

  console.log(result);
  return (
    <div>
      <ImageSlider />;
    </div>
  );
}
