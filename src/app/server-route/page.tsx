import { serverSideFunction } from "@/app/utils/server-utils";
import { ImageSlider } from "@/components/imageSlider";

export default async function ServerRoutePage() {
  const result = serverSideFunction();

  return (
    <div>
      <h1>Server Route, {result}</h1>
      <ImageSlider />;
    </div>
  );
}
