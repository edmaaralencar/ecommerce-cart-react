import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

import { api } from '../../services/api';

import {
    AddToCartButton,
    Container,
    DetailBuyBox,
    DetailContent,
    DetailImg,
    DetailSizesBox,
    DetailSizesButton,
} from './styles';

import { useCart } from '../../hooks/useCart';

const ProductDetail = () => {
    const { addProductToCart } = useCart();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);

    const [sizes, setSizes] = useState([]);
    const [size, setSize] = useState({
        size: '',
        sizeSelected: false,
    });

    useEffect(() => {
        api.get(`/products/${id}`).then((response) => {
            setProduct(response.data);
            setSizes(response.data.sizes);
        });
    }, []);

    const handleSize = (size) => {
        setSize({ size, sizeSelected: true });
    };

    const handlePlusQuantity = () => {
        setQuantity((prevState) => prevState + 1);
    };

    const handleMinusQuantity = () => {
        setQuantity((prevState) => (prevState > 1 ? prevState - 1 : 1));
    };

    const handleAddToCartButton = () => {
        if (size.size) {
            addProductToCart({
                id: product.id,
                size: size.size,
                quantity,
                price: product.price,
                title: product.title,
                identifier: `${product.id}@${size.size}`,
            });
            return
        }
        console.log('Erro')

    };

    return (
        <Container>
            <DetailImg>
                <img
                    src={
                        require('../../assets/products/sapato-preto.png')
                            .default
                    }
                    alt="Imagem do produto"
                />
            </DetailImg>
            <DetailContent>
                <p>{product.title}</p>
                <small>{product.description}</small>
                <DetailSizesBox>
                    {sizes.map((sizeItem) => (
                        <DetailSizesButton
                            onClick={() => handleSize(sizeItem)}
                            className={size.size === sizeItem ? 'active' : ''}
                            key={sizeItem}
                        >
                            {sizeItem}
                        </DetailSizesButton>
                    ))}
                </DetailSizesBox>
                <h4>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(product.price)}
                </h4>
                <DetailBuyBox>
                    <div>
                        <FiMinusCircle
                            onClick={() => handleMinusQuantity()}
                            size={35}
                        />
                        {quantity}
                        <FiPlusCircle
                            onClick={() => handlePlusQuantity()}
                            size={35}
                        />
                    </div>
                    <AddToCartButton
                        onClick={() => handleAddToCartButton()}
                        to="/cart"
                    >
                        Comprar
                    </AddToCartButton>
                </DetailBuyBox>
            </DetailContent>
        </Container>
    );
};

export default ProductDetail;
