import { useState, useRef, useLayoutEffect } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const projects = [
    {
      title: "Salar de Atacama",
      src: "img1.jpg",
    },
    {
      title: "Valle de la luna",
      src: "img3.jpg",
    },
    {
      title: "Miscanti Lake",
      src: "img4.jpg",
    },
    {
      title: "Miniques Lagoons",
      src: "img5.jpg",
    },
  ];
  const container = useRef(null);
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: "top-=70px",
      end: document.body.offsetHeight - window.innerHeight - 50,
    });
  }, []);

  return (
    <div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={`/images/${projects[selectedProject].src}`}
            fill={true}
            alt="project image"
            priority={true}
          />
        </div>
        <div className={styles.column}>
          <p>
            The flora is characterized by the presence of high elevation
            wetland, as well as yellow straw, broom sedge, tola de agua and tola
            amaia.
          </p>
        </div>
        <div className={styles.column}>
          <p>
            Some, like the southern viscacha, vicuña and Darwins rhea, are
            classified as endangered species. Others, such as Andean goose,
            horned coot, Andean gull, puna tinamou and the three flamingo
            species inhabiting in Chile (Andean flamingo, Chilean flamingo, and
            Jamess flamingo) are considered vulnerable.
          </p>
        </div>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => {
                setSelectedProject(index);
              }}
              className={styles.projectEl}
            >
              <h2>{project.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
