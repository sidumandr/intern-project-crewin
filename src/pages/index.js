import Info from "@/components/Info";
import Header from "../components/Header";
import FaqCardList from "@/components/FaqCardList";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
export default function Home() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/Dashboard");
  };

  return (
    <div className={styles.container}>
      <Header onLogin={handleLogin} />
      <Info />
      <FaqCardList />
      <Footer onLogin={handleLogin} />
    </div>
  );
}
