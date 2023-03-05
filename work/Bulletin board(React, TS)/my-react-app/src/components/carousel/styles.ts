import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

export const SliderList = styled.div`
    display: flex;
    transition-duration: 500ms;
`
export const SliderContainer = styled.div`
    overflow: hidden;
    position: relative;
    
`
export const ListBottom = styled.div`
    padding: 5px 0; 
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 50%;
    z-index: 5;
    img {
        height: 25px;
        width: 25px;
        filter: invert(37%) sepia(97%) saturate(1039%) hue-rotate(152deg) brightness(95%) contrast(101%);
    }
`
export const CircleContainer = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    bottom: 3px;
    justify-content: center;
`
export const CircleList = styled.div`
    display: flex;
    column-gap: 3px;
`
export const Circle = styled.div`
    transition: all;
    width: 8px;
    height: 8px;
    background-color: ${({ color }) => color};
    border: 1px solid #000;
    border-radius: 100%;
`