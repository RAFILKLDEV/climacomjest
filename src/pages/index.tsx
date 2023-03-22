import { Climate } from "@/components/Climate";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { WeatherS } from "@/styles/WeatherS";
import { resultTypes } from "@/types";
import Head from "next/head";

export async function getStaticProps() {
  const addressList = [
    "https://api.open-meteo.com/v1/forecast?latitude=-21.18&longitude=-47.81&current_weather=true&timezone=America%2FSao_Paulo",
  ];

  const result: resultTypes[] = [];

  for (let index = 0; index < addressList.length; index++) {
    const element = addressList[index];
    await fetch(element)
      .then((res) => res.json())
      .then((res2) => result.push(res2));
  }

  return {
    props: { data: result },
  };
}

export default function Home({
  data,
}: {
  data: { current_weather: { weathercode: number; temperature: string } }[];
}) {
  const countryList = [
    "Brasília",
    "Washington",
    "Pequim",
    "Moscou",
    "Tóquio",
    "Paris",
    "Londres",
    "Nova Delhi",
    "Berlim",
    "Ancara",
  ];
  console.log(data);
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Climas ao Redor do Mundo</title>
        <meta name="description" content="App criado com Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WeatherS>
        {data.map((e, i) => (
          <Climate key={i} weather={e} name={countryList[i]} />
        ))}
      </WeatherS>
    </>
  );
}
