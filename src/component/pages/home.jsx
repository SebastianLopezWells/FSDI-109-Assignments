
import './home.css';
import Footer from '../footer';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1 className='title'>Some Shop</h1>
            <h1>Welcome to the Some shop!</h1>

            <div className='Hone-section'>
                <h1 className='section-text'>BEST SHOP EVERRRR</h1>

                <img className='section-img' src="./images/chess.jpg" alt="shoes" />
            </div>

            <Link className="btn btn-dark" to='/Catalog' id='checkOut'>CHECK OUT OUT CATALOG</Link>

            <section className='AboutSneakers'>
                <div className='main'>
                    <img src="./images/sneakers.jpg" alt="sneakers"/>
                    <div className='about-text'>
                        <h2>About Us</h2>
                        <h5>Some shop</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil assumenda autem, consectetur pariatur at facere, in maiores totam perferendis corporis dolorem mollitia eius accusantium sed voluptates, aperiam esse nisi vel!</p>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>

    )
};

export default Home;