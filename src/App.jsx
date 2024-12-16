import { useState, useEffect } from 'react';

import "./App.css";
import Nav from "./Nav";

import logo from "./assets/Logo.svg";
import PoPuti from "./assets/Poputi.svg";
import map from "./assets/map.svg";

import pp from "./assets/pp.svg";
import fast from "./assets/fast.svg";
import safety from "./assets/safety.svg";

import AppleIcon from "./assets/AppleIcon";
import AndroidIcon from "./assets/AndroidIcon";

import mokap from './assets/Мокап.png'

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

function App() {
  const width = useWindowWidth();

  return (
    <div className="App">
      <Nav width={width} />
      <div className="firstScreen">
      {width <= 1024 &&
            <p className='service'>
              Сервис доставки посылок
              <br />с использованием попутных перевозок
            </p>
          }
        <div className="forLogo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="helloTextBlock">
          {width > 1024 &&
            <p>
              Сервис доставки посылок
              <br />с использованием попутных перевозок
            </p>
          }
          <img src={PoPuti} alt="По пути" />
        </div>
      </div>
      <div className="secondScreen" id='about'>
        <div className="container">
          <h1>Что это такое?</h1>
          <p>
            Приложение "По пути" – это удобный сервис доставки посылок
            <br />с использованием попутных перевозок.
          </p>
        </div>
        <div className="container" style={{ flex: 1 }}>
          <h2>Как это работает:</h2>
          <div className="maps">
            <div className="map mapTop">
              <p>
                Укажите маршрут
                <br />и параметры посылки
              </p>
              <p>
                Свяжитесь с попутчиком
                <br />и передайте посылку
              </p>
            </div>
            <div className="map mapBot">
              <p>
                Система подберет подходящих
                <br />
                попутчиков, которые едут
                <br />в нужном направлении
              </p>
              <p>
                Попутчик доставит
                <br />
                посылку получателю
              </p>
            </div>
            <img src={map} alt="Карта" className="mapImg" />
          </div>
        </div>
      </div>
      <div className="thirdScreen" id='advantages'>
        <h1>Почему Мы?</h1>
        <div className="slider">
          <div className="slide">
            <h3>1.</h3>
            <div className="content">
              <img src={pp} alt="Передавать" className="contentImg" />
              <p>Передавайте посылки без<br/>лишних хлопот</p>
            </div>
          </div>
          <div
            className="slide"
            style={{
              borderRight: "1px solid #292929",
              borderLeft: "1px solid #292929",
            }}
          >
            <h3>2.</h3>
            <div className="content">
              <img src={fast} alt="Быстрая" className="contentImg" />
              <p>Быстрая и выгодная<br/>доставка</p>
            </div>
          </div>
          <div className="slide">
            <h3>3.</h3>
            <div className="content">
              <img src={safety} alt="Надежно" className="contentImg" />
              <p>Надежно и удобно</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fourScreen" id='app'>
        <div className="whiteContainer">
          <h1>Доставка в 2 клика</h1>
          <div className="wrapper">
            <div className="wrapperContent">
              <p>
                Скачайте наше приложение и откройте для себя удобный
                <br />и выгодный способ доставки посылок{" "}
              </p>
              <div className="offer">
                <h2>Вместе проще - по пути</h2>
                <div className="buttons">
                  <button className="button">
                    <AppleIcon size={'clamp(20px, 6vw, 89px)'}/>
                    <div className="textBtn">
                      <p>Доступно в</p>
                      <h3>App Store</h3>
                    </div>
                  </button>
                  <button className="button">
                    <AndroidIcon size={'clamp(20px, 6vw, 89px)'}/>
                    <div className="textBtn">
                      <p>Загрузите на</p>
                      <h3>Google play</h3>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="phone">
            <img src={mokap} alt="Телефон" className="mokap"/>
            </div>
          </div>
        </div>
        <p className="copyright">Copyright © 2024 | Built by <a href="#" className="cube">CubeIT</a></p>
      </div>
    </div>
  );
}

export default App;
