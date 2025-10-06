import style from "./footer.module.css"
import ATD from "../../assets/Logo.png"

export default function Footer() {
    return (
        <footer>
            <div className={style.footInfo}>
                <div className={style.footCompany}>
                    <img src={ATD} alt="AT Digital" />
                    <p>
                        Your goal is our target. Not anything in between. We use 
                        online marketing platforms and tools to achieve single 
                        objective - your business results.
                    </p>
                </div>
                <div className={style.techServices}>
                    <div className={style.tsItem}>
                        <h3>Our Technologies</h3>
                        <ul>
                            <li>ReactJS</li>
                            <li>Gatsby</li>
                            <li>NextJS</li>
                            <li>NodeJS</li>
                        </ul>
                    </div>
                    <div className={style.tsItem}>
                        <h3>Our Services</h3>
                        <ul>
                            <li>Social Media Marketing</li>
                            <li>Web & Mobile App Development</li>
                            <li>Data & Analytics</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.footBottom}>
                <div className={style.separator}></div>
                <div className={style.policyCon}>
                    <p>Privacy Policy </p>
                    <p>|</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </footer>
    )
}