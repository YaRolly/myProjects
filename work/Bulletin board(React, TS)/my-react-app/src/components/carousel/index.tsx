import { useState } from 'react';
import * as S from './styles';
import { baseTheme } from "../../styles/theme";
import Right from "../../assets/right.svg";
import Left from "../../assets/left.svg";

export function Carousel({children}) {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent(currentSlide => currentSlide === 0 ? children.length - 1 : currentSlide - 1);
    const next = () => setCurrent(currentSlide => currentSlide === children.length - 1 ? 0 : currentSlide + 1);

    return (
        <S.SliderContainer>
            <S.SliderList style={{transform: `translateX(-${current*100}%)`}}>{children}</S.SliderList>
            <S.ListBottom>
                <button onClick={prev}>
                    <img src={Left} alt="left" />
                </button>
                <button onClick={next}>
                    <img src={Right} alt="right" />
                </button>
            </S.ListBottom>
            <S.CircleContainer>
                <S.CircleList>
                    {
                        children.map((item, index) => <S.Circle key={Math.random()} color={`${current === index ? baseTheme.colors.success : baseTheme.colors.font}`}/>)
                    }
                </S.CircleList>
            </S.CircleContainer>
        </S.SliderContainer>
    )
}