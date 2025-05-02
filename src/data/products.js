import tranding5 from '../assets/images/tranding5.jpeg';
import img11 from '../assets/images/riwaqimg/img11.jpg';
import img5 from '../assets/images/riwaqimg/img5.jpg';
import img3 from '../assets/images/riwaqimg/img3.jpg';
import img6 from '../assets/images/riwaqimg/img6.jpg';
import img2 from '../assets/images/riwaqimg/img2.jpg';
import img4 from '../assets/images/riwaqimg/img4.jpg';
import tranding9 from '../assets/images/tranding9.jpeg';
import img7 from '../assets/images/riwaqimg/img7.jpg';

const products = [
    {
        id: 1,
        name: 'Jeans pants',
        artist: 'Blue styles',
        description: '',
        price: 85.00,
        stockQnt: 10,
        trendingRate: 5,
        categoryId: 2, // Pants & Jeans
        image: tranding5
    },
    {
        id: 2,
        name: 'Hoody',
        artist: 'Moon light',
        description: '',
        price: 99.45,
        stockQnt: 8,
        trendingRate: 4,
        categoryId: 3, // Hoodies
        image: img11
    },
    {
        id: 3,
        name: 'Restyled tshirt',
        artist: 'ByTaha',
        description: '',
        price: 129.00,
        stockQnt: 15,
        trendingRate: 4.5,
        categoryId: 1, // T-Shirts
        image: img5
    },
    {
        id: 4,
        name: 'Casual',
        artist: 'Blue styles',
        description: '',
        price: 98.00,
        stockQnt: 12,
        trendingRate: 5,
        categoryId: 1, // T-Shirts
        image: img3
    },
    {
        id: 5,
        name: 'Hoody moon light',
        artist: 'Moon light',
        description: '',
        price: 99.45,
        stockQnt: 7,
        trendingRate: 3.5,
        categoryId: 3, // Hoodies
        image: img6
    },
    {
        id: 6,
        name: 'Restyled Hoody',
        artist: 'Bytaha',
        description: '',
        price: 85.00,
        stockQnt: 9,
        trendingRate: 4,
        categoryId: 3, // Hoodies
        image: img2
    },
    {
        id: 7,
        name: 'New look Jacket',
        artist: 'Studio lamp',
        description: '',
        price: 39.00,
        stockQnt: 11,
        trendingRate: 4.2,
        categoryId: 4, // Jackets & Coats
        image: img4
    },
    {
        id: 8,
        name: 'Tshirt',
        artist: 'Moon light',
        description: '',
        price: 75.00,
        stockQnt: 6,
        trendingRate: 3.8,
        categoryId: 1, // T-Shirts
        image: tranding9
    },
    {
        id: 9,
        name: 'Colors',
        artist: 'Craig Joyce',
        description: '',
        price: 27.00,
        stockQnt: 5,
        trendingRate: 3.9,
        categoryId: 1, // T-Shirts
        image: img7
    },
    {
        id: 10,
        name: 'Restyled tshirt',
        artist: 'ByTaha',
        description: '',
        price: 49.00,
        stockQnt: 10,
        trendingRate: 4.1,
        categoryId: 1, // T-Shirts
        image: img5
    }
];

export default products;