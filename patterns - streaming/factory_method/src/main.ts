import { MediaFactory } from "./MediaFactory";

try {
    const mediaType = "video"; 
    const media = MediaFactory.createMedia(mediaType);

    media.play();
    media.stop();
} catch (error) {
    const e = error as Error;
    console.error("Erro:", e.message);
}