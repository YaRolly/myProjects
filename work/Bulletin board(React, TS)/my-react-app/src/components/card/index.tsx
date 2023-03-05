import * as S from './styles';
import { urlImg, slides } from "../../const";
import Compare from "../../assets/compare.svg";
import Like from "../../assets/like.svg";
import Car from "../../assets/car.svg";
import Favorites from "../../assets/favorites.svg";
import { interfaceProduct } from "../../const";
import { formatTime, formatDate } from "../../formatDate";
import { Carousel } from "../carousel/index";
import { baseTheme } from "../../styles/theme";

export function Card({value} : {value: interfaceProduct}) {
    return(
        <S.Card color={`${value.seen === true ? baseTheme.colors.yellow : '#fff'}`}>
            {value.seen && <S.Seen>
                <p>Просмотрено</p>
            </S.Seen>}
            <S.ListImage>
                <Carousel>
                    {slides.map(item => (<S.ImageAd key={item.id} src={item.url} alt="image" />))}
                </Carousel>
                <S.IconList>
                    <S.Icon src={Compare} alt="compare" />
                    <S.Icon src={Like} alt="like" />
                </S.IconList>
            </S.ListImage>
            <S.Info>
                <S.Row>
                    <S.OldPrice>{value.oldPrice} ₽</S.OldPrice>
                    <S.IconsRow>
                        <S.Icon src={Car} alt="compare" />
                        <S.Icon src={Favorites} alt="compare" />
                    </S.IconsRow>
                </S.Row>
                <S.CurrentPrice>{value.price} ₽</S.CurrentPrice>
                <S.TitleAd>{value.title}</S.TitleAd>
                <S.RowBottom>
                    <S.TextAd>{value.locality}</S.TextAd>
                    <S.TextAd>{formatDate(value.date)}, {formatTime(value.date)}</S.TextAd>
                </S.RowBottom>
            </S.Info>
        </S.Card>
    )
}