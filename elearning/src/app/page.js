import Image from "next/image";
import Link from "next/link";
import styles from "./assets/css/Components/card.module.css";
import title from "./assets/css/Components/title.module.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import NumberCounter from "./components/NumberCounter";
import { getCategoryCourse, getCourseApi } from "./server/action/course";
import { Rate } from 'antd';
import Feedback from "./components/Feedback";
import Instructor from "./components/Instructor";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";


export default async function Home() {
  const category = await getCategoryCourse();
  const courseList = await getCourseApi();
  const sortedCourses = courseList.sort((a, b) => new Date(b.ngayTao) - new Date(a.ngayTao)).slice(0, 8);
  return (
    <main>
      <Header category={category}></Header>
      <Carousel></Carousel>
      <div className='homePage container'>
        {/* Title */}
        <div className={`${title.title2}`}>
          <h3 className={`${title.title_content}`}>Các Khoá Học <span>Mới Nhất</span></h3>
        </div>
        {/* Content */}
        <div className="newProd">
          <div className="row">
            {/* Render khoá học */}
            {
              sortedCourses?.map((course, index) => {
                return (
                  <div className={`${styles.course} col-12 col-md-6 col-lg-4 col-xl-3`} key={index}>
                    <Link href={`/chitiet/${course.maKhoaHoc}`} className={`${styles.cardBox}`}>
                      <div className={`mb-3 card ${styles.card}`}>
                        <img className="card-img-top" src={course.hinhAnh} alt="Title" />
                        <div className='card-body'>
                          <h5 className={`card-title ${styles.cardTitle}`}>{course.tenKhoaHoc}</h5>
                          <Rate allowHalf defaultValue={4.5} disabled /><span className="card-text px-3">({course.luotXem})</span>
                        </div>
                        <div className={`${styles.ribbon} ${styles.left}`}>Bán chạy</div>
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
      <Feedback></Feedback>
      <Instructor></Instructor>
      <Contact></Contact>
      <Footer></Footer>
      <BackToTop></BackToTop>
    </main>
  );
}