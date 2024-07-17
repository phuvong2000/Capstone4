import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import NumberCounter from "./components/NumberCounter";
import { getCourseApi } from "./server/action/course";
import { Rate } from 'antd';
import './assets/scss/main.scss'

export default async function Home() {
  const courseList = await getCourseApi();
  const sortedCourses = courseList.sort((a, b) => new Date(b.ngayTao) - new Date(a.ngayTao)).slice(0, 8);
  return (
    <main>
      <Header></Header>
      <Carousel></Carousel>
      <div className={`${styles.homePage} container`}>
        <h3>Các khoá học mới nhất</h3>
        <div className="newProd">
          <div className="row">
            {/* Render khoá học */}
            {
              sortedCourses?.map((course, index) => {
                return (
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <Link href="#" className={styles.cardBox} key={index}>
                      <div className={`${styles.card} mb-3 card`}>
                        <img className="card-img-top" src={course.hinhAnh} alt="Title" />
                        <div className={`card-body ${styles.cardBody}`}>
                          <h5 className={`card-title ${styles.cardTitle}`}>{course.tenKhoaHoc}</h5>
                          <Rate allowHalf defaultValue={4.5} /><span className="card-text px-3">({course.luotXem})</span>
                        </div>
                        <div className={styles.overlay}>{course.biDanh}</div>
                      </div>
                    </Link>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
      <NumberCounter></NumberCounter>
      <Footer></Footer>
    </main>
  );
}
