import { Climate } from "@/components/Climate";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { ClimateTypes } from "@/types";
import Head from "next/head";

export function getStaticProps() {
  const addressList = [
    "https://api.open-meteo.com/v1/forecast?latitude=-21.11&longitude=-47.83&current_weather=true&timezone=America%2FSao_Paulo",
  ];
  const address =
    "https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.64&current_weather=true&timezone=America%2FSao_Paulo";

  return {
    props: { adressfoda },
  };
}

export default function Home({ results }) {
  console.log(results);
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Climas ao Redor do Mundo</title>
        <meta name="description" content="App criado com Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
    </>
  );
}
