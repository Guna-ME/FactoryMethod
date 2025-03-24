import { Media } from "./Media";
import { AudioMedia } from "./AudioMedia";
import { VideoMedia } from "./VideoMedia";
import { PodcastMedia } from "./PodcastMedia";

export class MediaFactory {
    static createMedia(mediaType: string): Media {
        if (mediaType === "audio") {
            return new AudioMedia();
        } else if (mediaType === "video") {
            return new VideoMedia();
        } else if (mediaType === "podcast") {
            return new PodcastMedia();
        } else {
            throw new Error("Tipo de mídia inválido");
        }
    }
}