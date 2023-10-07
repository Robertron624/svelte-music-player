<script lang="ts">
    import type { Song } from "./musicData";
    import { songs } from "./musicData";

    // Create state for current song

    const currentSong: Song = songs[0];

    console.log(currentSong)

    // Create state for playing

    let isPlaying = false;

    // Create state for song progress

    let songProgress = 0;


</script>

<main>
    <h1 class="sr-only">Music player</h1>

    <div class="container">
        <div class="song-info">
            <div class="cover" >
                <img src={currentSong.image} alt={currentSong.name} />
            </div>
            <div class="name-artist">
                <h2>{currentSong.name}</h2>
                <h3>{currentSong.artist}</h3>
            </div>
        </div>
    </div>
</main>

<style lang="scss">
    @import "./variables.scss";

    .container {
        width: 20rem;
        background: linear-gradient(
            to bottom,
            $light-gray,
            $dark-gray
        );
        padding: 1.3rem .8rem;
        border-radius: 1rem;

        .song-info {

            .cover {
                border-radius: 1rem;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 1rem;
                }
            }

            .name-artist {
                text-align: center;
                margin-top: 1rem;

                h2 {
                    font-size: 1.3rem;
                    margin: 0;
                    color: $white;
                }

                h3 {
                  color: $light-gray;
                  font-size: .8rem;
                  margin-top: .5rem;
                }
            }
        }
    }
</style>
