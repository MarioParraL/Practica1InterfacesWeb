import Axios from "npm:axios";
type Data = {
  phrase: string;
};

export default async function Home() {
  const nRandom: number = Math.floor(Math.random() * 40) + 1;
  const films = await Axios.get<Data>(
    "https://filmquotes.deno.dev/",
  );

  return (
    <body>
      <audio controls loop>
        <source src="TRS.mp3" />
      </audio>

      <h1 class="tittle">Welcome, play the music & enjoy</h1>
      <h2 class="subtittle">A wise man / woman once said:</h2>
      <h3 class="phrase">{films.data}</h3>

      <img class="gif" src="gifTitanic.gif" />
      <button class="button">Touch here</button>
      <div>
      </div>
    </body>
  );
}
