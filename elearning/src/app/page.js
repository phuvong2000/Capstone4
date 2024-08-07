import Image from "next/image";
import Link from "next/link";
// import styles from "./page.module.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import NumberCounter from "./components/NumberCounter";
import { getCategoryCourse, getCourseApi } from "./server/action/course";
import { Rate } from 'antd';
import './assets/scss/main.scss'
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
        <div className="title-2">
          <h3 className="title_content">Các khoá học mới nhất</h3>
        </div>
        <div className="newProd">
          <div className="row">
            {/* Render khoá học */}
            {
              sortedCourses?.map((course, index) => {
                return (
                  <div className="course col-12 col-md-6 col-lg-4 col-xl-3" key={index}>
                    <Link href={`/chitiet/${course.maKhoaHoc}`} className='cardBox'>
                      <div className='mb-3 card'>
                        <img className="card-img-top" src={course.hinhAnh} alt="Title" />
                        <div className='card-body'>
                          <h5 className='card-title'>{course.tenKhoaHoc}</h5>
                          <Rate allowHalf defaultValue={4.5} /><span className="card-text px-3">({course.luotXem})</span>
                        </div>
                        <div className="ribbon left">Bán chạy</div>
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
