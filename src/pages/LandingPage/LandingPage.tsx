import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import styles from "./LandingPage.module.css";
import Footer from "./components/Footer/Footer";
function LandingPage() {
  const [showHeader, setShowHeader] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles["page"]}>
      <Header showHeader={showHeader} />
      <Main />
      <Footer />
    </div>
  );
}

export default LandingPage;
