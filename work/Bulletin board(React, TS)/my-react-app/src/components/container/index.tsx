import * as C from '../../styles/components';
import * as S from './styles';
import { Card } from "../card/index";
import YourSvg from "../../assets/reversal.svg";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { limit, url, maxLenght, firstPage, interfaceProduct } from "../../const";

export function Container() {
    const [currentPage, setCurrentPage] = useState(firstPage);
    const [product, setProduct] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        if (loading) {
            axios.get(`${url}?limit=${limit}&page=${currentPage}`)
            .then((response) => {
                setProduct([...product, ...response.data]);                
            })
            .catch((err) => {
                console.error(err.message);
            })
            .finally(() => {
                setloading(false);
            });
        }
    }, [loading]);

    const handleClick = () => {
        setloading(true);
        setCurrentPage(prevState => prevState + firstPage);
    }

    return(
        <S.Container>
            <C.TitleMain>Похожие объявления</C.TitleMain>
            {
                loading
                ? <S.Spinner />
                : <>
                    <S.ListCard>
                        {product.map(item => <Card key={item.id} value={item} />)}
                    </S.ListCard>
                    {
                        product.length === maxLenght 
                        ?  <C.TextButton>Объявлений больше нет</C.TextButton>
                        :  <S.ButtonMain>
                                <C.TextButton onClick={handleClick}>Показать еще</C.TextButton>
                                <S.ImageButton src={YourSvg} alt="reversal" />
                        </S.ButtonMain>
                    }
                </>
            }
            
        </S.Container>
    )
}