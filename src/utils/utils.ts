export function formatDate(date: string | number | Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

import { getImage } from "astro:assets";

// width is the target max width of the output file
export async function getOptimizedImage(image: ImageMetadata, width = 1400) {
  const optimizedImage = await getImage({
    src: image,
    width,          // this is the key change
    format: "webp", // keep or adjust as you want
    quality: 100,
  });

  return optimizedImage;
}

export function trimArrSlashes(arr: string[]) {
  return arr.map((str) => str.replace(/^\/+|\/+$/g, ""));
}

export function trimStringSlashes(arr: string) {
  return arr.replace(/^\/+|\/+$/g, "");
}
