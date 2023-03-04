import { Bar, ClimateS, Degrees, Desc, Icon, Title } from "@/styles/ClimateS";

export function Climate({
  weather,
}: {
  weather: { current_weather: { temperature: string; weathercode: number } };
}) {
  function weatherCode(code: number) {
    console.log(iconWeatherCode(2));

    switch (code) {
      case 0:
        return "Céu limpo";
      case 1 | 2 | 3:
        return "Principalmente limpo, parcialmente nublado e encoberto";
      case 45 | 48:
        return "Nevoeiro e depósito de nevoeiro de geada";
      case 51 | 53 | 55:
        return "Garoa: Intensidade leve, moderada e densa";
      case 56 | 57:
        return "Garoa Congelante: Intensidade leve e densa";
      case 61 | 63 | 65:
        return "Chuva: Intensidade leve, moderada e forte";
      case 66 | 67:
        return "Chuva Congelante: Intensidade leve e forte";
      case 71 | 73 | 75:
        return "Queda de neve: Intensidade leve, moderada e forte";
      case 77:
        return "Flocos de neve";
      case 80 | 81 | 82:
        return "Pancadas de chuva: Leves, moderadas e violentas";
      case 85 | 86:
        return "Aguaceiros de neve leves e pesados";
      case 95:
        return "Trovoada: leve ou moderada";
      case 96 | 99:
        return "Trovoada com granizo leve e forte";
      default:
        return "Céu limpinho";
    }
  }

  function iconWeatherCode(code: number) {
    switch (code) {
      case 1 | 2 | 3:
        return "../assets/imgs/nublado";
      case 51 | 53 | 55 | 61 | 63 | 65 | 95:
        return "@/assets/imgs/trovoada";
      case 0:
        return "@/assets/imgs/sol";
      default:
    }
  }

  return (
    <ClimateS>
      <Title>São Paulo</Title>
      <Bar>
        <Icon src={iconWeatherCode(1)} />
        <Degrees>{weather.current_weather.temperature}°</Degrees>
      </Bar>
      <Desc>{weatherCode(weather.current_weather.weathercode)}</Desc>
    </ClimateS>
  );
}
