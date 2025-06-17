import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles.css'; 

function Home() {
  useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/public/AliaCV.pdf'; 
    link.download = 'Alia_Haizat_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <>
      <section>
        <div className="main-container">
          <div className="image" data-aos="zoom-in-right" data-aos-duration="2500">
            <img src="/images/mainSquare.png" alt="picture of Alia" />
          </div>
          <div className="content">
            <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
              Hey I'm <span>Alia</span>
            </h1>
            <div className="typewriter" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="900">
              I'm a <span></span>
            </div>
            <p data-aos="flip-up" data-aos-duration="1000" data-aos-delay="1000">
              I'm currently in my final year of the Bachelors of Information Technology at the Southern Institute of Technology in Invercargill. I work part time at Farmers as a Sales Assistant. 
              My hobbies are binge watching shows, buying unnecessary knick knacks and moving as little as possible. 
            </p>
            <div className="social-links" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
              <a href="https://github.com/Aliaihaizat"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.facebook.com/alia.haizat/"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/aliaihaizat/"><i className="fa-brands fa-instagram"></i></a>
            </div>
            <div className="btn" data-aos="zoom-out-left" data-aos-duration="1000" data-aos-delay="1300">
              <button onClick={handleDownloadCV}>Download CV</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;