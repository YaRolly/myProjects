export const urlImg = 'https://source.unsplash.com/random';
export const slides = [
    {id: '1', url: 'https://source.unsplash.com/random'},
    {id: '2', url: 'https://source.unsplash.com/random'},
    {id: '3', url: 'https://source.unsplash.com/random'},
    {id: '4', url: 'https://source.unsplash.com/random'},
]
export const url = "https://6075786f0baf7c0017fa64ce.mockapi.io/products";
export const limit = 16;
export const maxLenght = 100;
export const firstPage = 1;

export interface interfaceProduct {
    date: number,
    id: string,
    locality: string,
    oldPrice: string,
    price: string,
    seen: boolean,
    title: string,
}