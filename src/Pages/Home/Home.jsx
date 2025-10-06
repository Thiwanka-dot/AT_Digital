import Navbar from "../../Components/NavBar/Navbar";
import style from "./home.module.css";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <section className={style.Hero}>
                <img src="./src/assets/Hero Image.png" alt="Hero Image" />
                <div className={style.heroInfo}>
                    <h1>
                        We Crush Your Competitors, Goals, 
                        And Sales Records - Without The B.S.
                    </h1>
                    <button>GET FREE CONSULTATION</button>
                </div>
            </section>
            <section className={style.Services}>
                <div className={style.serviceItem}>
                    <img src="./src/assets/image 2.png" alt="Web and Mobile" />
                    <div className={style.serviceInfo}>
                        <h2>Web & Mobile App Development</h2>
                        <p>
                            Your web and mobile Apps are pieces of the puzzle to grow your
                            business. We use frameworks which tailor content and engagement
                            methods to respond to different intents shown by your potential
                            customers who interact with your business online.
                        </p>
                        <button>LEARN MORE</button>
                    </div>
                </div>
                <div className={style.serviceItem}>
                    <div className={style.serviceInfo}>
                        <h2>Digital Strategy Consulting</h2>
                        <p>
                            Your digital strategy should complement the overall marketing
                            strategy of the company. In online marketing, each component will
                            never work in isolation and every business needs a different mix.
                            We provide a clear concept and strategic overview to find the most
                            efficient model for your business.
                        </p>
                        <button>LEARN MORE</button>
                    </div>
                    <img src="./src/assets/image 1.png" alt="Consulting" />
                </div>
                <div className="accordion-faq">
                    <h2>Frequently asked questions</h2>
                    <div className="accordion-list">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                                    <span className="accordion-icon"></span>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                                    suscipit id ipsum. Elementum ultrices nulla faucibus odio est
                                    sed aliquam. Sapien massa morbi risus sagittis tortor integer.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Another question goes here?
                                    <span className="accordion-icon"></span>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                                    suscipit id ipsum. Elementum ultrices nulla faucibus odio est
                                    sed aliquam. Sapien massa morbi risus sagittis tortor integer.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Third question example?
                                    <span className="accordion-icon"></span>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                                    suscipit id ipsum. Elementum ultrices nulla faucibus odio est
                                    sed aliquam. Sapien massa morbi risus sagittis tortor integer.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}
