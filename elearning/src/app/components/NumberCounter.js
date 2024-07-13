"use client"
import React, { useEffect } from 'react';
import { CountUp } from 'countup.js';
import styles from '../assets/css/Components/numberCounter.module.css'
const NumberCounter = () => {
    useEffect(() => {
        const counters = document.querySelectorAll('.counter');

        counters.forEach(counter => {
            const startValue = 0; // Đặt giá trị ban đầu là 0
            const endValue = parseInt(counter.dataset.count.replace(/,/g, '')); // Lấy giá trị kết thúc từ thuộc tính data-count của phần tử và chuyển đổi thành số nguyên, loại bỏ dấu phẩy bằng cách sử dụng biểu thức chính quy

            const countUp = new CountUp(counter, endValue, {
                startVal: startValue, // Sử dụng startVal là 0
                duration: 2, // Thời gian animation (giây)
            });

            if (!countUp.error) {
                countUp.start(); // Bắt đầu animation
            } else {
                console.error(countUp.error);
            }
        });
    }, []);

    return (
        <div className={`py-5 my-5 ${styles.numbercounter}`}>
            <div className={`${styles.number__list} container`}>
                <div className="row text-center justify-content-center">
                    <div className={`${styles.number__item} col-12 col-sm-6 col-lg-3`}>
                        <p className="counter" data-count="6300">6,300</p>
                        <span>HỌC VIÊN</span>
                    </div>
                    <div className={`${styles.number__item} col-12 col-sm-6 col-lg-3`}>
                        <p className="counter" data-count="638">638</p>
                        <span>KHOÁ HỌC</span>
                    </div>
                    <div className={`${styles.number__item} col-12 col-sm-6 col-lg-3`}>
                        <p className="counter" data-count="7600">7,600</p>
                        <span>GIỜ HỌC</span>
                    </div>
                    <div className={`${styles.number__item} col-12 col-sm-6 col-lg-3`}>
                        <p className="counter" data-count="36">36</p>
                        <span>GIẢNG VIÊN</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberCounter;
