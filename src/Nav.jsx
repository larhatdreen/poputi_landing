import React, { useState, useEffect, useRef  } from 'react'
import './App.css';

export default function Nav({ width }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = useRef(null); // Используем useRef для хранения таймера
  const SCROLL_TIMEOUT = 3000;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setIsScrolling(true);

      // Сбрасываем старый таймер и запускаем новый
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, SCROLL_TIMEOUT);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='nav' 
      style={{
        height: !isScrolling && width <= 1024 ? '50px' : '',
        top: !isScrolling && width <= 1024 ? '-60px' : '',
    }}
    >
        <a href="#about" className="item"
          style={{
            // display: !isScrolling && width <= 1024 ? 'none' : '',
            opacity: !isScrolling && width <= 1024 ? '0' : ''
          }}
        >
          О НАС
          </a>
        {width <= 1024 && <div className='line'></div>}
        <a href="#advantages" className="item"
          style={{
            // display: !isScrolling && width <= 1024 ? 'none' : '',
            opacity: !isScrolling && width <= 1024 ? '0' : ''
          }}
        >
          ПРЕИМУЩЕСТВА
        </a>
        {width <= 1024 && <div className='line'></div>}
        <a href="#app" className="item" 
          style={{
            // display: !isScrolling && width <= 1024 ? 'none' : '',
            opacity: !isScrolling && width <= 1024 ? '0' : ''
          }}
        >
          {width > 1024 && 'СКАЧАТЬ '}ПРИЛОЖЕНИЕ
        </a>
    </div>
  )
}
