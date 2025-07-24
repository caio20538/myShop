interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {rate: number, count: number}
}

export const Products:Product[] = [
    {
        id: 1,
        title: "produto 1",
        price: 20.00,
        description: "lorem ipsum",
        category: "Men's",
        image: "https://images.tcdn.com.br/img/img_prod/275189/camisa_azul_royal_100_poliester_para_sublimacao_m_2701_1_20200722153204.jpg",
        rating: {rate: 3.9, count: 120}
    },
    {
        id: 2,
        title: "produto 2",
        price: 23.40,
        description: "lorem ipsum",
        category: "Woman's",
        image: "https://images.tcdn.com.br/img/img_prod/275189/camisa_azul_royal_100_poliester_para_sublimacao_m_2701_1_20200722153204.jpg",
        rating: {rate: 4.9, count: 180}
    }
]