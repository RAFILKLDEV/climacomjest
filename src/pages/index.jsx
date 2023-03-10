import { Climate } from "@/components/Climate";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { ClimateTypes } from "@/types";
import Head from "next/head";

export async function getStaticProps() {
  const addressList = [
    "https://api.open-meteo.com/v1/forecast?latitude=-15.78&longitude=-47.93&current_weather=true&timezone=America%2FSao_Paulo",
    "https://api.open-meteo.com/v1/forecast?latitude=38.90&longitude=-77.04&current_weather=true&timezone=America%2FSao_Paulo",
    "https://api.open-meteo.com/v1/forecast?latitude=39.91&longitude=116.40&current_weather=true&timezone=America%2FSao_Paulo",
    "https://api.open-meteo.com/v1/forecast?latitude=55.75&longitude=37.62&current_weather=true&timezone=America%2FSao_Paulo",
    "https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&current_weather=true&timezone=America%2FSao_Paulo",
    "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current_weather=true&timezone=America%2FSao_Paulo",
    "https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&current_weather=true&timezone=America%2FSao_Paulo",
    "https://api.open-meteo.com/v1/forecast?latitude=28.65&longitude=77.23&current_weather=true&timezone=America%2FSao_Paulo",
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&timezone=America%2FSao_Paulo",
    "https://api.open-meteo.com/v1/forecast?latitude=-17.05&longitude=-68.62&current_weather=true&timezone=America%2FSao_Paulo",
  ];

  // const response = await fetch(address);
  // const data = await response.json();
  const result = [];

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

export default function Home({ data }) {
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
      <main>
        {data.map((e, i) => (
          <Climate key={i} weather={e} name={countryList[i]} />
        ))}
      </main>
    </>
  );
}
