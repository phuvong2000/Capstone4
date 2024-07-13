import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import NumberCounter from "./components/NumberCounter";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Carousel></Carousel>
      <div className={`${styles.homePage} container`}>
        <h3>Các khoá học mới nhất</h3>
        <div className="newProd">
          <div className="row">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <Link href="#" className={styles.cardBox}>
                <div className={`${styles.card} mb-3 card`}>
                  <img className="card-img-top" src="https://media.licdn.com/dms/image/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=rtD52hfy37nFVmc4_MXfnflV6C-ke773W70SYJLoWRc" alt="Title" />
                  <div className="card-body">
                    <h4 className="card-title">Lập trình javascript</h4>
                    <p className="card-text">400.000đ</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <Link href="#" className={styles.cardBox}>
                <div className={`${styles.card} mb-3 card`}>
                  <img className="card-img-top" src="https://media.licdn.com/dms/image/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=rtD52hfy37nFVmc4_MXfnflV6C-ke773W70SYJLoWRc" alt="Title" />
                  <div className="card-body">
                    <h4 className="card-title">Lập trình javascript</h4>
                    <p className="card-text">400.000đ</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <Link href="#" className={styles.cardBox}>
                <div className={`${styles.card} mb-3 card`}>
                  <img className="card-img-top" src="https://media.licdn.com/dms/image/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=rtD52hfy37nFVmc4_MXfnflV6C-ke773W70SYJLoWRc" alt="Title" />
                  <div className="card-body">
                    <h4 className="card-title">Lập trình javascript</h4>
                    <p className="card-text">400.000đ</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <Link href="#" className={styles.cardBox}>
                <div className={`${styles.card} mb-3 card`}>
                  <img className="card-img-top" src="https://media.licdn.com/dms/image/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=rtD52hfy37nFVmc4_MXfnflV6C-ke773W70SYJLoWRc" alt="Title" />
                  <div className="card-body">
                    <h4 className="card-title">Lập trình javascript</h4>
                    <p className="card-text">400.000đ</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <Link href="#" className={styles.cardBox}>
                <div className={`${styles.card} mb-3 card`}>
                  <img className="card-img-top" src="https://media.licdn.com/dms/image/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=rtD52hfy37nFVmc4_MXfnflV6C-ke773W70SYJLoWRc" alt="Title" />
                  <div className="card-body">
                    <h4 className="card-title">Lập trình javascript</h4>
                    <p className="card-text">400.000đ</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <NumberCounter></NumberCounter>
      <Footer></Footer>
    </main>
  );
}
