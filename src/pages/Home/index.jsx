import {
    SectionHero,
    Container,
    ContentHero,
    SectionBenefits,
    BenefitsItem,
    SectionProducts,
} from './styles';
import heroImg from '../../assets/hero-image.png';
import { FiTruck } from 'react-icons/fi';

import ProductList from '../../components/ProductList';

const Home = () => {
    return (
        <main>
            <SectionHero>
                <Container>
                    <ContentHero>
                        <small>NOVOS PRODUTOS</small>
                        <h1>Tênis Adidas Grand Court Base</h1>
                        <p>
                            Confort e estilo da melhor forma e no menor preço.
                        </p>
                    </ContentHero>
                    <img src={heroImg} alt="Imagem do produto" />
                </Container>
            </SectionHero>

            <SectionBenefits>
                <Container benefits>
                    <BenefitsItem>
                        <FiTruck size={50} />
                        <p>Entrega rápida</p>
                    </BenefitsItem>
                    <BenefitsItem>
                        <FiTruck size={50} />
                        <p>Entrega rápida</p>
                    </BenefitsItem>
                    <BenefitsItem>
                        <FiTruck size={50} />
                        <p>Entrega rápida</p>
                    </BenefitsItem>
                </Container>
            </SectionBenefits>

            <SectionProducts>
                <div className="container">
                    <h2>Alguns produtos</h2>
                    <ProductList />
                </div>
            </SectionProducts>
        </main>
    );
};

export default Home;
