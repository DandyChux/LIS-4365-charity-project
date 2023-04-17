import React from 'react'
import styles from '../styles/shop.module.css'
import ProductCard from './ProductCard'

export interface IProduct {
    title: string;
    description: string;
    price: number;
    buttonText: string;
}

interface IProductCategory {
    categoryName: string;
    products: IProduct[];
}

const ProductCategory: React.FC<IProductCategory> = ({ categoryName, products }) => {

    return (
        <section className={styles.category}>
            <h2>{categoryName}</h2>
            <div className={styles.productList}>
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </section>
    )

}

export default ProductCategory