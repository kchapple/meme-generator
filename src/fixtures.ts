import { MemeProperties } from "./models/meme";

export const createTestMemeProperties = (meme?: Partial<MemeProperties>) => ({
  url: meme?.url || "https://example.com/image.jpg",
  scale: meme?.scale || 150,
  rotation: meme?.rotation || 45,
  mirror: meme?.mirror || true,
  topText: meme?.topText || "Top Text",
  bottomText: meme?.bottomText || "Bottom Text",
  textColor: meme?.textColor || "#ff0000",
});
