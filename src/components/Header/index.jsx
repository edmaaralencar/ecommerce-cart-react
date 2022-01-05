import { FiShoppingCart } from 'react-icons/fi';

import { Container, NavbarLink, Logo, NavbarLinkButton } from './styles';

const Header = () => {
    return (
        <Container>
            <Logo to="/">EShop</Logo>
            <nav>
                <NavbarLink to="/products">Produtos</NavbarLink>
                <NavbarLinkButton to='/cart'>
                    <FiShoppingCart color="#FFFFFF" size={25} />
                    Carrinho
                </NavbarLinkButton>
            </nav>
        </Container>
    );
};

export default Header;
