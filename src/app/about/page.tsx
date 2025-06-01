import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About Page",
  },
};

export default function About() {
  return <h1>About Page</h1>;
}
