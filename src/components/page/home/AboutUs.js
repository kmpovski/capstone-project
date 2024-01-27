import './AboutUs_desktop.css';
import './AboutUs_mobile.css';
import MarioAndAdrianA from '../../../assets/Mario_and_Adrian_A.jpg';
import MarioAndAdrianB from '../../../assets/Mario_and_Adrian_B.jpg';

const OurStory = () => {
  return (
    <section className="content grid about-us">
      <div className="about-us-description">
        <h3 className='section-title'>About us</h3>
        <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet.
        Amet minim mollit non deserunt ullamco est sit 
        aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit. 
        </p>
        <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet.
        Amet minim mollit non deserunt ullamco est sit 
        aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit. 
        </p>
      </div>
      <div className="about-us-images">
        <img className="picture-a" src={MarioAndAdrianA} alt="Mario and Adrian picture" />
        <img className="picture-b" src={MarioAndAdrianB} alt="Mario and Adrian picture" />
      </div>
    </section>
  );
};

export default OurStory;
