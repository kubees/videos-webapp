import { VideoDTO } from "./video.dto"

export interface PlaylistDTO {
    id: string
    name: string
    videos: VideoDTO[]
}
