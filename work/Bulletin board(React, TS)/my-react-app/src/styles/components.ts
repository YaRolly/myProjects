import styled, { css } from "styled-components";
import { baseTheme } from "./theme";

export const fontTitle = css`
    font-size: 22px;
    font-weight: ${baseTheme.weight.bold};
    color: ${baseTheme.colors.font};
    @media (${baseTheme.media.medium}) {
        font-size: 24px;
    }
    @media (${baseTheme.media.small}) {
        font-size: 26px;
    }
    @media (${baseTheme.media.smallXS}) {
        font-size: 30px;
    }
    @media (${baseTheme.media.mobileM}) {
        font-size: 34px;
    }
    @media (${baseTheme.media.mobileS}) {
        font-size: 40px;
    }
`
export const TitleMain = styled.h1`
    margin-left: 32px;
    ${fontTitle};
`
export const fontText = css`
    font-size: 14px;
    font-weight: ${baseTheme.weight.medium};
    @media (${baseTheme.media.medium}) {
        font-size: 17px;
    }
    @media (${baseTheme.media.smallXS}) {
        font-size: 24px;
    }
    @media (${baseTheme.media.mobileM}) {
        font-size: 28px;
    }
    @media (${baseTheme.media.mobileS}) {
        font-size: 35px;
    }
`

export const TextButton = styled.h3`
    color: ${baseTheme.colors.success};
    ${fontText};
`