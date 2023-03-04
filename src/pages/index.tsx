import { Climate } from "@/components/Climate";
import { GlobalStyle } from "@/styles/GlobalStyles";
import Head from "next/head";

export async function getStaticProps() {
  const address =
    "https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.64&current_weather=true&timezone=America%2FSao_Paulo";
  const data = await fetch(address);
  const result = await data.json();

  return { props: { result } };
}

export default function Home({
  result,
}: {
  result: { current_weather: { temperature: string; weathercode: number } };
}) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Climas ao Redor do Mundo</title>
        <meta name="description" content="App criado com Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Climate weather={result}></Climate>
      </main>
    </>
  );
}
