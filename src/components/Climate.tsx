import { Bar, ClimateS, Degrees, Icon, Title } from "@/styles/ClimateS";

export function getStaticProps() {
  async function getInfo(option?: string) {
    const link = "http://apiadvisor.climatempo.com.br";
    const result = fetch(link + option);
    return result;
  }
  getInfo();
}

export function Climate() {
  return (
    <ClimateS image={"kek"}>
      <Title>Ribeirão Preto</Title>
      <Bar>
        <Icon />
        <Degrees>60</Degrees>
      </Bar>
      <Title>Ensolarado</Title>
    </ClimateS>
  );
}
