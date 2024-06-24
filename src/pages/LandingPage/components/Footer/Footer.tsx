import styles from "./Footer.module.css";

function Footer() {
  const footerData = [
    {
      name: "Acerca de nosotros",
      links: [
        { name: "Términos y condiciones", link: "./termsOfCondition" },
        { name: "Legal", link: "./legal" },
      ],
    },
    {
      name: "Atención al cliente",
      links: [
        { name: "Centro de ayuda", link: "./HelpCenter" },
        {
          name: "Comunidad",
          link: "./community",
        },
      ],
    },
    {
      name: "Productos",
      links: [
        { name: "Punto de venta", link: "./POS" },
        {
          name: "Tienda Online",
          link: "./ecommerce",
        },
      ],
    },
  ];
  return (
    <footer className={styles["footer"]}>
      {footerData.map((data, index) => {
        return (
          <div className={styles["footer__content"]} key={index}>
            <p className={styles["content__title"]}>{data.name}</p>
            {data.links.map((link, index) => {
              return (
                <a
                  href={link.link}
                  key={index}
                  className={styles["content__link"]}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        );
      })}
    </footer>
  );
}

export default Footer;
