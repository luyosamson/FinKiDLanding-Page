import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/image2.png";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about.png";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import { FiArrowRight } from "react-icons/fi";
import { BsFillPlayCircleFill } from "react-icons/bs";

import Profile1 from "../Assets/profile.jpeg"
import Profile2 from "../Assets/profile2.png"
import Profile3 from "../Assets/profile3.png"
import Profile4 from "../Assets/peris.jpg"
import Profile5 from "../Assets/profile5.jpg"


import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const LandingPage = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];

  // Team Profile
  const teams = [
    {
      image: Profile1,
      name:"Your Name",
      title: "Financial Expert",
      
    },
    {
      image: Profile2,
      name:"Your Name",
      title: "Software Developer",
      
    },
    {
      image: Profile3,
      name:"Your Name",
      title: "Software Developer",
     
    },
    {
      image: Profile4,
      name:"Your Name",
      title: "Digital marketer",
      
    },
    {
      image: Profile5,
      name:"Your Name",
      title: "Project Manager",
      
    },
  ];

  return (
    <div>
      {/* Home Section */}
      <div id="home" className="home-container">
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="Banner Background" />
          </div>
          <div className="home-text-section">
            <h3 className="primary-heading">Financial Literacy Meets Fun</h3>
            <p className="primary-text">
            At Finkid, we believe that learning about money should be as fun as playing a game. 
            That's why we've combined financial literacy with engaging, 
            interactive activities, making it easy and enjoyable for kids to understand the basics of money management.
            </p>
            <button className="secondary-button">
              Explore More <FiArrowRight />{" "}
            </button>
            <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        
        </div>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="Banner" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="About Background" />
        </div>
        <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="About" />
        </div>
        <div className="about-section-text-container">
          <p className="primary-subheading">About</p>
          <h4 className="primary-heading">
          Empowering the Next Generation Through Financial Literacy
          </h4> 
          <p className="primary-text">

          </p>
          <p className="primary-text">
At FinKid, our mission is to empower children with essential financial literacy skills for a sustainable future. 
We've developed an innovative digital platform designed to make learning about money management engaging and accessible for children aged 6-16. 

          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button">
              <BsFillPlayCircleFill /> Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* Work Section */}
      <div id="work" className="work-section-wrapper">
        <div className="work-section-top">
          <p className="primary-subheading">Work</p>
          <h1 className="primary-heading">How It Works</h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt={data.title} />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
            {/* Project Team Section*/}
            <div id="work" className="work-section-wrapper">
        <div className="work-section-top">
          <p className="primary-subheading">Team</p>
          {/* <h1 className="primary-heading">How It Works</h1> */}
          <p className="primary-text">
            FinKid Team
          </p>
        </div>
        <div className="work-section-bottom">
          {teams.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt={data.title} />
              </div>
              <h2>{data.name}</h2>
              <p>{data.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="contact-page-wrapper">
        <h1 className="primary-heading">Have Question In Mind?</h1>
        <h1 className="primary-heading">Let Us Help You</h1>
        <div className="contact-form-container">
          <input type="text" placeholder="yourmail@gmail.com" />
          <button className="secondary-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage