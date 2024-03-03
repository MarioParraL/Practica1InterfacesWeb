import Axios from "npm:axios";
import Button from "../components/Button.tsx";
type Data = {
  phrase: string;
};

type Episode = {
  id: string;
  thumbnailUrl: string;
};

export default async function Home() {
  const films = await Axios.get<Data>(
    "https://filmquotes.deno.dev/",
  );

  const randomNumber2 = Math.floor(Math.random() * 100) + 1;
  const randomResponse2 = await Axios.get<Episode>(
    `https://api.sampleapis.com/simpsons/episodes/${randomNumber2}`,
  );

  const episode = randomResponse2.data;
  return (
    <div class="principal">
      <div class="tittle">HEY! THE BEST FILM CUOTES IN YOUR SCREEN!</div>
      <audio class="miaudio" controls loop>
        <source src="TRS.mp3" />
      </audio>

      <h2 class="phrase">{films.data}</h2>
      <div class="info">Click play to listen</div>
      <img class="imagenApi" src={episode.thumbnailUrl} />
      <img class="gif" src="gifTitanic.gif" />

      <div class="buttons">
        <a href="https://github.com/MarioParraL">
          <Button variant="primary">MY GitHub</Button>
        </a>
        <a href="https://www.filmaffinity.com/es/ranking.php?rn=ranking_fa_movies">
          <Button variant="secondary">TOP HISTORY MOOVIES</Button>
        </a>
      </div>
    </div>
  );
}
