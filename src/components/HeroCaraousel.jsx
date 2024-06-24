import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const bgImages = [
  "https://iuk.ktn-uk.org/wp-content/uploads/2021/01/AdobeStock_375393450-scaled-e1611136805546.jpeg",
  "https://photos.peopleimages.com/picture/202304/2684915-business-people-shaking-hands-and-success-in-meeting-with-support-and-applause-hiring-or-onboarding-with-team.-collaboration-handshake-and-congratulations-promotion-and-achievement-with-diversity-fit_400_400.jpg",
  "https://media.istockphoto.com/id/1178511783/photo/group-of-asian-business-people-celebrate-for-trophy-reward-winner-champion-and-teamwork.jpg?s=612x612&w=0&k=20&c=ROqV7z1QOYnkiHQ9H1zUqhSKMI6w5-BpeZaj70cjnR4=",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfdD1qwvCmLRln-oq4aUXKa6EPLmbUhltzw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoJLyE0_ebtwSwbgm4VIvfkGFiDtDHBagXXmTFo6yetF_DwuTEE8H0DzGUkrynV5x6Zc&usqp=CAU",
];

const HeroCaraousel = () => {
  return (
    <div className="w-full h-screen">
      <Carousel

      >
       {bgImages.map((item , ind) => (
         <div key={ind} className=" h-screen bg-gray-400 block">
         <img src={item} className="w-full  relative " />
     </div>
       ))}
      </Carousel>

    </div>
  );
};

export default HeroCaraousel;
