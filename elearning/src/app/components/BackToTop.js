'use client';
import React, { useEffect, useState } from 'react';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowButton(window.scrollY > 100); // Dùng setShowButton để cập nhật
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {showButton && (
        <button
        style={{

        }} onClick={scrollToTop}><i class="fa fa-home"></i></button>
      )}
    </div>
  );
};

export default BackToTop;
