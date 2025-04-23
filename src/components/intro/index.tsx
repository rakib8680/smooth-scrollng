import Image from "next/image";
import styles from "./style.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const Index = () => {
  const backgroundImage = useRef(null);
  const introImage = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px",
        scrub: true,
        // markers: true,
      },
    });
    timeline
      .from(backgroundImage.current, {
        clipPath: "inset(15%)",
      })
      .to(
        introImage.current,
        {
          height: "200px",
        },
        0
      );
  }, []);

  return (
    <div className={styles.intro}>
      <div ref={backgroundImage} className={styles.backgroundImage}>
        <Image src={"/images/img6.jpg"} fill={true} alt="background" />
      </div>
      <div className={styles.introContainer}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className={styles.introImage}
        >
          <Image src={"/images/img2.jpg"} fill={true} alt="intro" />
        </div>
        <h1 data-scroll data-scroll-speed="0.4">
          Smooth Scroll
        </h1>
      </div>
    </div>
  );
};

export default Index;
