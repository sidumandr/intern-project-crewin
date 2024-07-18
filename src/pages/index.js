import Info from "@/components/Info";
import Header from "../components/Header";
import FaqCardList from "@/components/FaqCardList";
import Footer from "../components/Footer";

import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Info />
      <FaqCardList />
      <Footer />
    </div>
  );
}
