import AOS from 'aos';
import './App.css';
import 'aos/dist/aos.css';
import logo from './logo.svg'
import {useEffect, useState} from 'react';

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
    </div>
  );
}

export default App;
