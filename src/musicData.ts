export type Song = {
    id: string;
    name: string;
    artist: string;
    album: string;
    duration: number;
    image: string;
    audio: string;
};

export const songs: Song[] = [
    {
        id: "1",
        name: "Lost in the city lights",
        artist: "Cosmo Sheldrake",
        album: "The much much how how and I",
        duration: 208,
        image: "/images/cover-1.png",
        audio: "/audio/lost-in-city-lights-145038.mp3"
    },
    {
        id: "2",
        name: "forest lullaby",
        artist: "Lesfm",
        album: "Universal Law",
        duration: 208,
        image: "/images/cover-2.png",
        audio: "/audio/forest-lullaby-110624.mp3"
    }
];