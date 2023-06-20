import { useEffect, useState } from "react";
import { hero_1, hero_2 } from "../../assets";
import { Fade } from "react-awesome-reveal";

import "./hero.css";

const heroArray = [
  {
    id: 1,
    img: hero_1,
    title: "Hey I'am Ian",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dolore",
  },
  {
    id: 2,
    img: hero_2,
    title: "I am a software developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dolore",
  },
];
const Hero = () => {
  const [hero, setHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHero((prevHero) => {
        if (prevHero === 1) {
          return 0;
        }
        return 1;
      });
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  console.log(hero);
  return (
    <section>
      <Fade>
      <div className="hero__one">
        <img src={heroArray[hero].img} alt="hero image" />
        <div className="hero__one_description">
          <h1>{heroArray[hero].title}</h1>
          <p>{heroArray[hero].description}</p>
        </div>
      </div>
      </Fade>
    </section>
  );
};

export default Hero;
