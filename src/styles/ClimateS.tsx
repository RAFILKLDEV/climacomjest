import styled from "styled-components";

export const ClimateS = styled.div`
  height: 280px;
  width: 400px;
  background-image: ${({ image }: { image: string }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  border: 1px black solid;
  border-radius: 10px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: white;
  text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
    1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
`;

export const Desc = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: white;
  padding: 0px 20px;
  text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
    1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
`;

export const Bar = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Icon = styled.img`
  height: 50px;
  width: 50px;
`;

export const Degrees = styled.div`
  font-size: 50px;
  color: white;
  text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
    1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
`;
