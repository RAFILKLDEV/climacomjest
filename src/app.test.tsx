import { render, screen } from "@testing-library/react";
import { Climate } from "@/components/Climate";

const mock =
  "https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&current_weather=true&timezone=America%2FSao_Paulo";

describe("Climate Component", () => {
  test("Deve conter o name Tókyo", async () => {
    render(<Climate name={"Tókyo"} />);
    const label = screen.getByText("Tókyo");
    expect(label).toBeInTheDocument();
  });
});
