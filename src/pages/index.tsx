import { Climate } from "@/components/Climate";
import { GlobalStyle } from "@/styles/GlobalStyles";
import Head from "next/head";

export default function Home() {
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
        <Climate></Climate>
      </main>
    </>
  );
}
