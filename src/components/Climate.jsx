import { Bar, ClimateS, Degrees, Desc, Icon, Title } from "@/styles/ClimateS";
import { ClimateTypes } from "@/types";

export function Climate({ weather }) {
  function weatherCode(code) {
    console.log(iconWeatherCode(2));

    switch (code) {
      case 0:
        return "Céu limpo";
      case 1:
        return "Principalmente limpo";
      case 2:
        return "Parcialmente nublado";
      case 3:
        return "Parcialmente nublado e encoberto";
      case 45:
        return "Nevoeiro";
      case 48:
        return "Nevoeiro e com possibilidade de geada";
      case 51:
        return "Garoa leve";
      case 53:
        return "Garoa moderada";
      case 55:
        return "Garoa alta Intensidade";
      case 56:
        return "Garoa Congelante Leve";
      case 57:
        return "Garoa Congelante Densa";
      case 61:
        return "Chuva Leve";
      case 63:
        return "Chuva Moderada";
      case 65:
        return "Chuva Forte";
      case 66:
        return "Chuva Congelante leve";
      case 67:
        return "Chuva Congelante forte";
      case 71:
        return "Queda de neve leve";
      case 73:
        return "Queda de neve moderada";
      case 75:
        return "Queda de neve forte";
      case 77:
        return "Flocos de neve";
      case 80:
        return "Pancadas de chuva Leve";
      case 81:
        return "Pancadas de chuva Moderadas";
      case 82:
        return "Pancadas de chuva Violentas";
      case 85:
        return "Aguaceiros de neve leves";
      case 86:
        return "Aguaceiros de neve pesados";
      case 95:
        return "Trovoada: leve ou moderada";
      case 96:
        return "Trovoada com granizo leve";
      case 99:
        return "Trovoada com granizo forte";
      default:
        return "Céu limpinho";
    }
  }

  function iconWeatherCode(code) {
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
