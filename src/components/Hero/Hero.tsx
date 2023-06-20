import { hero_1 } from "../../assets"
import './hero.css'
const Hero = () => {
  return (
    <section>
        <div className="hero_one">
            <img src={hero_1} alt="hero image" />
        </div>
    </section>
  )
}

export default Hero