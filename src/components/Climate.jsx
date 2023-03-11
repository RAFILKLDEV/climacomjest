import { Bar, ClimateS, Degrees, Desc, Icon, Title } from "@/styles/ClimateS";
import { ClimateTypes } from "@/types";

export function Climate({ weather, name }) {
  function weatherCode(code) {
    switch (code) {
      case 0:
        return "Céu limpo";
      case 1:
        return "Parcialmente limpo";
      case 2:
        return "Parcialmente nublado";
      case 3:
        return "Nublado e encoberto";
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
        return "Pancadas de neve leves";
      case 86:
        return "Pancadas de neve pesados";
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

  function backgroundImg(code) {
    switch (code) {
      case 0:
      case 1:
        return "/imgs/Limpo.png";
      case 2:
        return "/imgs/ParcialNublado.png";
      case 3:
        return "/imgs/Nublado.png";
      case 45:
      case 48:
      case 55:
      case 56:
      case 57:
      case 66:
      case 67:
      case 71:
      case 73:
      case 75:
      case 77:
        return "/imgs/Neve.png";
      case 51:
      case 53:
      case 61:
      case 63:
      case 65:
        return "/imgs/Chuva.png";
      case 80:
      case 81:
      case 82:
      case 85:
      case 86:
      case 95:
      case 96:
      case 99:
        return "/imgs/Tempestade.png";
    }
  }

  return (
    <ClimateS image={backgroundImg(weather.current_weather.weathercode)}>
      <Title>{name}</Title>
      <Bar>
        <Degrees>{weather.current_weather.temperature}°C</Degrees>
      </Bar>
      <Desc>{weatherCode(weather.current_weather.weathercode)}</Desc>
    </ClimateS>
  );
}
