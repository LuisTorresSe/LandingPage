import styles from "./Main.module.css";
import imgPortedMobile from "./../../../../assets/portedMobile.jpg";
import Button from "../../../../components/Button/Button";
import service from "../../../../data/services.json";
import { images } from "./../../../../assets/images";

interface Service {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  customClass: string;
}

function Main() {
  return (
    <div className={styles["main"]}>
      <div className={styles["main__ported"]}>
        <div className={styles["main__ported-slogan"]}>
          <div className={styles["ported__slogan"]}>
            <h2 className={styles["slogan__h2"]}>Te acompañamos en tu metas</h2>
            <h1 className={styles["slogan__h1"]}>
              Somos la plataforma digital para emprendedores como tú
            </h1>
          </div>
          <div className={styles["ported__container-img"]}>
            <img
              src={imgPortedMobile}
              alt="ported"
              loading="lazy"
              className={styles["ported__img"]}
            />
          </div>
        </div>
        <div className={styles["ported__submit"]}>
          <button className={styles["ported__button"]}>Registrate</button>
        </div>
      </div>

      <div className={styles["main__content"]}>
        {service.map((e: Service, index) => {
          const { title, description, imgAlt, imgSrc, customClass } = e;
          return (
            <div className={styles["content__section"]} key={index}>
              <div className={styles["des"]}>
                <h2 className={styles["section__title"]}>{title}</h2>
                <p className={styles["section__description"]}>{description}</p>
                <Button stylesClass={styles["section__button"]}>
                  Contáctenos ahora
                </Button>
              </div>
              <img
                src={`${images[imgSrc]}`}
                alt={imgAlt}
                loading="lazy"
                className={styles["section__img"]}
              />
              <Button stylesClass={styles["section__button-mobile"]}>
                Contáctenos ahora
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
