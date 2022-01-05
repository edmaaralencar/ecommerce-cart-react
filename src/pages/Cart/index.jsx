import { Container, Table, EmptyContainer, ShopLink } from './styles';

import { FiPlusCircle, FiMinusCircle, FiTrash } from 'react-icons/fi';
import { useCart } from '../../hooks/useCart';

const Cart = () => {
    const {
        cart,
        incrementProductInCart,
        decrementProductInCart,
        deleteProductFromCart,
    } = useCart();

    const formatMoney = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);
    };

    const total = cart.reduce(
        (acc, product) => acc + product.quantity * product.price,
        0
    );

    return (
        <>
            {cart.length > 0 ? (
                <Container>
                    <Table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Produto</th>
                                <th>Quantidade</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        <img
                                            src={
                                                require('../../assets/products/sapato-preto.png')
                                                    .default
                                            }
                                            alt="Imagem do produto"
                                        />
                                    </td>
                                    <td>
                                        {product.title} ({product.size})
                                        <span className="product-price">
                                            {formatMoney(product.price)}
                                        </span>
                                    </td>
                                    <td>
                                        <div>
                                            <FiMinusCircle
                                                size={25}
                                                color="#233BAA"
                                                onClick={() =>
                                                    decrementProductInCart(
                                                        product
                                                    )
                                                }
                                            />
                                            <span className="product-quantity">
                                                {product.quantity}
                                            </span>
                                            <FiPlusCircle
                                                size={25}
                                                color="#233BAA"
                                                onClick={() =>
                                                    incrementProductInCart(
                                                        product
                                                    )
                                                }
                                            />
                                        </div>
                                    </td>
                                    <td className='product-subtotal'>
                                        {formatMoney(
                                            product.quantity * product.price
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                deleteProductFromCart(
                                                    product.id
                                                )
                                            }
                                            type="button"
                                        >
                                            <FiTrash
                                                size={25}
                                                color="#233BAA"
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <div className='product-total'>
                        <p>
                            Total: <span>{formatMoney(total)}</span>
                        </p>
                        <button className="checkout-button" type="button">
                            Ir para o checkout
                        </button>
                    </div>
                </Container>
            ) : (
                <EmptyContainer>
                    <h1>OPS! <span>O carrinho está vázio!</span></h1>
                    <ShopLink to="/">Ver os produtos</ShopLink>
                </EmptyContainer>
            )}
        </>
    );
};

export default Cart;
