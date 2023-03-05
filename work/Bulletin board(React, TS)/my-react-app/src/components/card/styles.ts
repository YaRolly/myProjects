import styled, { css } from "styled-components";
import { baseTheme } from "../../styles/theme";
import { fontTitle, fontText } from "../../styles/components";

export const Card = styled.li`
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    max-width: 240px;
    position: relative;
    background-color: ${({ color }) => color};
    @media (${baseTheme.media.medium}) {
        max-width: 250px;
    }
    @media (${baseTheme.media.small}) {
        max-width: 275px;
    }
    @media (${baseTheme.media.smallXS}) {
        max-width: 350px;
    }
    @media (${baseTheme.media.mobileM}) {
        max-width: 400px;
    }
    @media (${baseTheme.media.mobileS}) {
        max-width: 540px;
    }
`
export const ListImage = styled.div`
    position: relative;
`
export const ImageAd = styled.img`
    width: 100%;
    border-radius: 8px 8px 0 0;
    heigh: 260px;
`
export const IconList = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    row-gap: 12px;
    right: 12px;
    bottom: 34px;
`
export const Icon = styled.img`
    :hover {
        filter: invert(37%) sepia(97%) saturate(1039%) hue-rotate(152deg) brightness(95%) contrast(101%);
    }
    @media (${baseTheme.media.smallXS}) {
        width: 24px;
        height: 24px;
    }
    @media (${baseTheme.media.mobileM}) {
        width: 30px;
        height: 30px;
    }
    @media (${baseTheme.media.mobileS}) {
        width: 40px;
        height: 40px;
    }
`
export const IconsEllipse = styled.div`
    display: flex;
    column-gap: 8px;
    position: absolute;
    bottom: 4px;
    left: 40%;
    @media (${baseTheme.media.smallXS}) {
        width: 10px;
        height: 10px;
    }
    @media (${baseTheme.media.mobileM}) {
        width: 15px;
        height: 15px;
    }
    @media (${baseTheme.media.mobileS}) {
        width: 20px;
        height: 20px;
    }
`
export const Info = styled.div`
    padding: 2px 12px 12px;
    position: relative;
    height: 108px;
    @media (${baseTheme.media.small}) {
        height: 150px;
    }
    @media (${baseTheme.media.mobileM}) {
        
    }
    @media (${baseTheme.media.mobileS}) {
        height: 210px;
    }
`
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
`
const styleText = css`
    font-weight: ${baseTheme.weight.regular};
    font-size: 14px;
    @media (${baseTheme.media.medium}) {
        font-size: 16px;
    }
    @media (${baseTheme.media.small}) {
        font-size: 18px;
    }
    @media (${baseTheme.media.smallXS}) {
        font-size: 22px;
    }
    @media (${baseTheme.media.mobileM}) {
        font-size: 26px;
    }
    @media (${baseTheme.media.mobileS}) {
        font-size: 30px;
    }
`
export const OldPrice = styled.h3`
    color: ${baseTheme.colors.secondary};
    ${styleText};
    text-decoration: line-through;
`
export const IconsRow = styled.div`
    display: flex;
    column-gap: 14px;
    align-items: flex-end
`
export  const CurrentPrice = styled.h1`
    ${fontTitle};
`
export  const TitleAd = styled.h3`
    margin-top: 8px;
    color: ${baseTheme.colors.font};
    margin-bottom: 14px;
    ${fontText};
`
export const RowBottom = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 5px;
    width: 93%;
`
export const TextAd = styled.h5`
    color: #8F8F8F;
    font-size: 12px;
    line-height: 10px;
    white-space: nowrap;
    @media (${baseTheme.media.medium}) {
        font-size: 14px;
    }
    @media (${baseTheme.media.small}) {
        font-size: 16px;
    }
    @media (${baseTheme.media.smallXS}) {
        font-size: 20px;
    }
    @media (${baseTheme.media.mobileM}) {
        font-size: 24px;
    }
    @media (${baseTheme.media.mobileS}) {
        font-size: 28px;
    }
`
export const Seen = styled.div`
    z-index: 6;
    position: absolute;
    width: 94px;
    height: 24px;
    left: 65px;
    top: 12px;  
    background: rgba(44, 44, 44, 0.74);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 3px;
    p {
        color: #FFF;
        font-size: 12px;
    }
`