import styled, { keyframes } from 'styled-components';
import { baseTheme } from "../../styles/theme";

export const Container = styled.div`
  ${({ theme }) => theme.sizes.container};
  margin-left: auto;
  margin-right: auto;
  padding: 25px 15px;
  display: 'flex';
  @media (${baseTheme.media.smallXS}) {
    padding: 25px 25px;
  }
`
export const ListCard = styled.ul`
  margin-top: 8px;
  margin-bottom: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  grid-auto-rows: minmax(100px, auto);
  @media (${baseTheme.media.medium}) {
    grid-template-columns: repeat(3, 0.3fr);
    justify-items: end;
  }
  @media (${baseTheme.media.smallXS}) {
    grid-template-columns: repeat(2, 0.5fr);
    justify-items: center;
  }
  @media (${baseTheme.media.mobileS}) {
    grid-template-columns: repeat(1, 1fr);
  }
` 
export const ButtonMain = styled.button`
    display: flex;
    align-items: flex-end;
    margin-left: auto;
    @media (${baseTheme.media.smallXS}) {
      align-items: center
    }
`
export const ImageButton = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 5px;
  @media (${baseTheme.media.smallXS}) {
    width: 18px;
    height: 18px;
  }
  @media (${baseTheme.media.mobileS}) {
    width: 23px;
    height: 23px;
  }
`
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50%;
`;