import { useEffect, useState } from "react"
import { Container } from "./styles"

import ProductItem from "../ProductItem"

import { api } from '../../services/api'

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        api.get('/products').then(response => setProducts(response.data))
    }, [])

    return (
        <Container>
            {products.map(product => <ProductItem product={product} key={product.id} />)}
        </Container>
    )
}

export default ProductList
