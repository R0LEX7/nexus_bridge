import React from 'react'

const Gallery = () => {
  return (
      <div>
        <h2 className='text-center font-bold text-3xl text-sky-800 '>Gallery</h2>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
    <div className="-m-1 flex flex-wrap md:-m-2">
      <div className="flex w-1/2 flex-wrap">
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://iuk.ktn-uk.org/wp-content/uploads/2021/01/AdobeStock_375393450-scaled-e1611136805546.jpeg" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://photos.peopleimages.com/picture/202304/2684915-business-people-shaking-hands-and-success-in-meeting-with-support-and-applause-hiring-or-onboarding-with-team.-collaboration-handshake-and-congratulations-promotion-and-achievement-with-diversity-fit_400_400.jpg" />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://media.istockphoto.com/id/1178511783/photo/group-of-asian-business-people-celebrate-for-trophy-reward-winner-champion-and-teamwork.jpg?s=612x612&w=0&k=20&c=ROqV7z1QOYnkiHQ9H1zUqhSKMI6w5-BpeZaj70cjnR4=" />
        </div>
      </div>
      <div className="flex w-1/2 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfdD1qwvCmLRln-oq4aUXKa6EPLmbUhltzw&s" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoJLyE0_ebtwSwbgm4VIvfkGFiDtDHBagXXmTFo6yetF_DwuTEE8H0DzGUkrynV5x6Zc&usqp=CAU" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://d3m889aznlr23d.cloudfront.net/img/events/id/458/458322302/assets/88bb75294971cb864036ca143b116ee1.2022-ceremony-collage-min.jpg" />
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Gallery
