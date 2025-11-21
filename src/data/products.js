import product1 from '../assets/images/fashion/hoddies.jpg'
import product2 from '../assets/images/fashion/Hoddies2.jpg'
import product3 from '../assets/images/fashion/pants.jpg'
import product4 from '../assets/images/fashion/jackets.jpg'
const products = [
    {
        id: 1,
        name: "Product 1",
        price: 29.99,
        image: product1,
        description: "This is a great product.",
        categoryId: 1,
        gender: 'women'
    },
    {
        id:2,
        name: "Product 2",
        price: 49.99,
        image: product2,
        description: "This product is even better.",
        categoryId: 2,
        gender: 'men'
    },
    {
        id:3,
        name: "Product 3",
        price: 19.99,
        image: product3,
        description: "An affordable and quality product.",
        categoryId: 1,
        gender: 'men'
    },
    {
        id:4,
        name: "Product 4",
        price: 99.99,
        image: product4,
        description: "Premium product for discerning customers.",
        categoryId: 3,
        gender: 'men'
    }


]
export default products;