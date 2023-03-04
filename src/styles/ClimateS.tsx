import styled from "styled-components";

export const ClimateS = styled.div`
  height: 300px;
  width: 300px;
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: white;
`;

export const Desc = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: white;
  padding: 0px 20px;
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
`;
