import AOS from 'aos';
import './App.css';
import 'aos/dist/aos.css';
import logo from './logo.svg'
import {useEffect, useState} from 'react';
import rocket from './rocket.png'

function App() {

  //AOS초기화
  useEffect(() =>{
    AOS.init();
  })

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
    </div>
  );
}

export default App;
