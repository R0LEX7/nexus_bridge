import React from "react";
import { motion } from "framer-motion"


const items = [
  {
    title: "Artifical Intelligence",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam a quidem magni sint laudantium eius!",
  },
  {
    title: "Internet of Things",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam a quidem magni sint laudantium eius!",
  },
  {
    title: "Blockchain development",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam a quidem magni sint laudantium eius!",
  },
  {
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam a quidem magni sint laudantium eius!",
  },
  {
    title: "Android development",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam a quidem magni sint laudantium eius!",
  },
  {
    title: "Android development",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam a quidem magni sint laudantium eius!",
  },
];

const variants = {
    right : {
        initial : {x:100 , opacity : 0.6},
        animate : {x : 0 , opacity : 1 , transition : {
            type:"spring",
            duration: 1.7,
                staggerChildren: 0.1,
          }}
    },
    left : {
        initial : {x:-100 , opacity : 0.6},
        animate : {x : 0 , opacity : 1 , transition : {
            type:"spring",
            duration: 1.7,
                staggerChildren: 0.1,
          }}
    }
}

const Service = () => {
  return (
    <section id="service" className="relative px-2 overflow-hidden bg-gradient-to-r from-sky-800 to-cyan-400 pt-16 pb-32 space-y-24">
    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <motion.div
            // initial={variants.left.initial}
            // whileInView={variants.left.animate}
            className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl border-[#E7E7E8] border-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                                </path>
                            </svg>
                        </span>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-[#E7E7E8]">
                            Natural Language Processing (NLP):
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            The AI product utilizes advanced NLP algorithms to understand and interpret human language,
                            enabling it to accurately process and analyze text-based inputs.
                        </p>
                        <div className="mt-6">
                            <a className="inline-flex rounded ring-1 ring-[#E7E7E8] bg-[#E7E7E8] px-4 py-1.5 text-base font-semibold leading-7 text-cyan-800 hover:text-[#E7E7E8] shadow-sm   hover:bg-cyan-700"
                                href="/login">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
            initial={variants.right.initial}
            whileInView={variants.right.animate}
            className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative w-full contents  lg:block lg:m-0 lg:h-full lg:px-0">
                    <img loading="lazy" width="647" height="486"
                        className=" w-[560px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full"
                        style={{color:"transparent"}} src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"/>
                </div>
            </motion.div>
        </div>
    </div>



    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <motion.div initial={variants.right.initial}
            whileInView={variants.right.animate} className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl border-[#E7E7E8] border-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                            Sentiment Analysis:
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            The product has built-in sentiment analysis capabilities, allowing it to determine the
                            sentiment (positive, negative, or neutral) expressed in text or customer feedback.
                        </p>
                        <div className="mt-6">
                        <a className="inline-flex rounded ring-1 ring-[#E7E7E8] bg-[#E7E7E8] px-4 py-1.5 text-base font-semibold leading-7 text-cyan-800 hover:text-[#E7E7E8] shadow-sm   hover:bg-cyan-700"
                                href="/login">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div  initial={variants.left.initial}
            whileInView={variants.left.animate}  className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16  contents  lg:block lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                        className=" rounded-xl w-[560px] shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 "
                        style={{color:"transparent"}} src="https://images.unsplash.com/photo-1599134842279-fe807d23316e"/>
                </div>
            </motion.div>
        </div>
    </div>



    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <motion.div  initial={variants.left.initial}
            whileInView={variants.left.animate} className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                    <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border-[#E7E7E8] border-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                            Natural Language Generation (NLG):
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            The AI product can generate human-like written content, summaries, or reports based on
                            structured data or analysis results.
                        </p>
                        <div className="mt-6">
                        <a className="inline-flex rounded ring-1 ring-[#E7E7E8] bg-[#E7E7E8] px-4 py-1.5 text-base font-semibold leading-7 text-cyan-800 hover:text-[#E7E7E8] shadow-sm   hover:bg-cyan-700"
                                href="/login">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
             initial={variants.right.initial}
             whileInView={variants.right.animate}
            className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative contents lg:block lg:m-0 lg:h-full lg:px-0">
                    <img loading="lazy" width="646" height="485"
                        className="md:w-[560px] rounded-xl shadow-2xl ring-1  ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        style={{color:"transparent"}}
                        src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e"/>
                </div>
            </motion.div>
        </div>
    </div>
</section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
