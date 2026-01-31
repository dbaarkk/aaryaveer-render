import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function openExternalUrl(url: string) {
  if (typeof window !== "undefined") {
    // Check if running in an iframe (Orchids preview)
    const isInIframe = window.self !== window.top;
    
    if (isInIframe) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
    } else {
      if (url.startsWith("mailto:") || url.startsWith("tel:")) {
        window.location.href = url;
      } else {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    }
  }
}
