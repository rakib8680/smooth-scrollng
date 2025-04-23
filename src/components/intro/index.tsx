import Image from "next/image";
import styles from "./style.module.css";

const Index = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.backgroundImage}>
        <Image src={"/images/img1.jpg"} fill={true} alt="background" />
      </div>
      <div className={styles.introContainer}>
        <div data-scroll data-scroll-speed="0.3" className={styles.introImage}>
          <Image src={"/images/img3.jpg"} fill={true} alt="intro" />
        </div>
        <h1 data-scroll data-scroll-speed="0.4">Smooth Scroll</h1>
      </div>
    </div>
  );
};

export default Index;
