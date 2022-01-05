import { BuyButton, Container } from './styles';

const ProductItem = ({ product }) => {
    return (
        <Container>
            <img
                src={require(`../../assets/products/${product.img_name}`).default}
                alt="Imagem do produto"
            />
            <p>{product.title}</p>   
            <h3>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(product.price)}
            </h3>
            <BuyButton to={`/products/${product.id}`}>Comprar</BuyButton>
        </Container>
    );
};

export default ProductItem;
