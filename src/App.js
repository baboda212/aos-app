import AOS from 'aos';
import './App.css';
import 'aos/dist/aos.css';
import logo from './logo.svg'
import {useEffect, useState} from 'react';
import rocket from './rocket.png';
import {BsFillClockFill} from 'react-icons/bs';
import {BsFillDropletFill} from 'react-icons/bs';
import { FcSettings } from "react-icons/fc";
import { FcShipped } from "react-icons/fc"; //트럭1
import { FcFactory } from "react-icons/fc";//공장
import { FcDepartment } from "react-icons/fc";//건물
import { FcHome } from "react-icons/fc";//건물
import { FcLandscape } from "react-icons/fc"; //산
import { FcLibrary } from "react-icons/fc";//도서관
import { FcInTransit } from "react-icons/fc"; //트럭
import { FcOrganization } from "react-icons/fc"; //빌딩
import { FcShop } from "react-icons/fc"; //가게
/* 아이콘 :https://react-icons.github.io/react-icons/icons?name=fc */





function App() {

  //AOS초기화
  useEffect(() =>{
    AOS.init();
  })

  const IconLarge = {fontSize: '80px'};
  const IconSmall = {fontSize: '40px'};
  const IconBig = {fontSize: '150px'};

  return (
    <div className="App">
      <section className='s1'>
        <div>
          <h1>Animation on Scroll</h1>
          <p>스크롤시 애니메이션 효과 주기</p>
        </div>
      </section>
      <section className='s2'>
        <div>
          <h1 data-aos='fade-left'>section2</h1>
        </div>
      </section>
      <section className='s3'>
        <img 
        className='logo'
        data-aos
        data-aos-delay='500'
        data-aos-duration='3000'
        
        src={logo} alt="logo" 
        />
      </section>
      <section className='s4'>
        <div>
          <h1 
            data-aos="fade-down" 
            data-aos-delay="1500">위대한 도약</h1>
          {/* custom ani */}
          <img 
            data-aos 
            data-aos-duration='3000'
            data-aos-delay='0'
            className='rocket'
            style={{
              width: '600px'
            }}
            src={rocket} alt="rocket" />
        </div>
      </section>
      <section className='s5'>
        <div>
          <BsFillClockFill style={IconLarge}/>
          <BsFillDropletFill style={IconSmall}/>
          <FcSettings 
          className='loading'
          data-aos
          data-aos-delay='0'
          data-aos-duration='3000'
          style={IconLarge}
          />
          <FcFactory style={IconLarge}/>
          <FcShipped 
          className='drive'
          style={IconLarge}
          data-aos
          data-aos-delay='1000'
          data-aos-duration='10000'
          />
        </div>
      </section>
      <section className='s6'>
        <div className='back'>
            <FcFactory style={IconLarge}/>
            <FcDepartment style={IconLarge}/>
            <FcHome style={IconLarge}/>
            <FcLibrary style={IconLarge}/>
            <FcOrganization style={IconLarge}/>
            <FcShop style={IconLarge}/>
            <div className='car'>
              <FcInTransit 
              style={IconLarge}
              className='truck'
              data-aos
              data-aos-delay='1000'
              data-aos-duration='10000'
              />
            </div>
        </div>
      </section>
    </div>
  );
}

export default App;
