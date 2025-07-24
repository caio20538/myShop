export interface Product {
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
        title: "Camisa Polo Masculina",
        price: 49.90,
        description: "Camisa polo de algodão confortável para o dia a dia.",
        category: "Men's",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.2, count: 95 }
    },
    {
        id: 2,
        title: "Blusa de Frio Feminina",
        price: 89.90,
        description: "Blusa de frio com capuz ideal para o inverno.",
        category: "Women's",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: { rate: 3.8, count: 150 }
    },
    {
        id: 3,
        title: "Tênis Esportivo Unissex",
        price: 139.99,
        description: "Tênis leve e resistente para corrida e academia.",
        category: "Shoes",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: { rate: 4.5, count: 212 }
    },
    {
        id: 4,
        title: "Relógio de Pulso Digital",
        price: 199.90,
        description: "Relógio digital resistente à água com diversas funções.",
        category: "Accessories",
        image: "https://fakestoreapi.com/img/71IB4H-yG8L._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 4.7, count: 320 }
    },
    {
        id: 5,
        title: "Jaqueta Corta Vento",
        price: 109.90,
        description: "Jaqueta leve com proteção contra vento e chuva leve.",
        category: "Men's",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: { rate: 4.3, count: 130 }
    },
    {
        id: 6,
        title: "Saia Jeans Feminina",
        price: 59.90,
        description: "Saia jeans de cintura alta, ideal para ocasiões casuais.",
        category: "Women's",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        rating: { rate: 4.6, count: 87 }
    },
    {
        id: 7,
        title: "Mochila Escolar Resistente",
        price: 79.90,
        description: "Mochila espaçosa com compartimentos para notebooks.",
        category: "Accessories",
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        rating: { rate: 4.4, count: 144 }
    },
    {
        id: 8,
        title: "Óculos de Sol Estiloso",
        price: 29.90,
        description: "Óculos com proteção UV400 e armação leve.",
        category: "Accessories",
        image: "https://fakestoreapi.com/img/71sYJEaT2eL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 4.1, count: 76 }
    },
    {
        id: 9,
        title: "Calça Legging Fitness",
        price: 65.00,
        description: "Calça legging ideal para treinos e atividades físicas.",
        category: "Women's",
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        rating: { rate: 4.9, count: 198 }
    }
]