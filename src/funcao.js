import React, { useState, useEffect } from 'react';

export const useSlideShow = (totalSlides) => {
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        const slides = document.getElementsByClassName("mySlide");
        const dots = document.getElementsByClassName("dot");

        if (slides.length > 0) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            if (slideIndex > totalSlides) {
                setSlideIndex(1);
            } else if (slideIndex < 1) {
                setSlideIndex(totalSlides);
            } else {
                slides[slideIndex - 1].style.display = "block";
                dots[slideIndex - 1].className += " active";
            }
        }
    }, [slideIndex, totalSlides]);

    const plusSlides = (n) => {
        setSlideIndex(prevIndex => prevIndex + n);
    };

    const currentSlide = (n) => {
        setSlideIndex(n);
    };

    return { plusSlides, currentSlide };
};
