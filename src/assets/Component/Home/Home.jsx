import React, { useEffect } from 'react'
import image1 from "../../../Gallery/react.png"
import image2 from "../../../Gallery/html.png"
import image3 from "../../../Gallery/css.png"
import image4 from "../../../Gallery/js.png"
import "./Home.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import MultiProject from '../MultiProject/MultiProject'

export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease-out',
            once: true,
            delay: 100,
        });
        AOS.refresh();
    }, []);


    return (
        <div>
            <div className='bg-gradient-to-br from-teal-200 to-purple-200 text-center relative h-full'>
                <div data-aos="fade-up" className='p-10 lg:p-24'>
                    <div className='relative'>

                        <div className='flex justify-center items-center text-slate-950 kal h-full'>
                            <div>
                                <h1 className='text-9xl font-bold text-purple-950'>Kal</h1>
                                <h1 className='font-medium text-purple-950 text-5xl my-8 hidden lg:block'>Fair of high-quality React landing pages.</h1>
                                <h1 className='font-medium text-3xl my-8 block lg:hidden'>Fair of high-quality <br />
                                    React landing pages.</h1>
                                <div className='space-x-5 btn'>
                                </div>
                                <div className='grid grid-cols-5 gap-8 mt-10'>
                                    <div data-aos="fade-up" className='flex justify-center items-center'>
                                        <h1 className='text-xl lg:text-3xl font-bold text'>Tailwind CSS</h1>
                                    </div>
                                    <div data-aos="fade-up" className='flex justify-center items-center'>
                                        <img src={image1} className='w-8 md:w-10 lg:w-16' />
                                    </div>
                                    <div data-aos="fade-up" className='flex justify-center items-center'>
                                        <img src={image2} className='w-8 md:w-10 lg:w-16' />
                                    </div>
                                    <div data-aos="fade-up" className='flex justify-center items-center'>
                                        <img src={image3} className='w-8 md:w-10 lg:w-16' />
                                    </div>
                                    <div data-aos="fade-up" className='flex justify-center items-center'>
                                        <img src={image4} className='w-8 md:w-10 lg:w-16' />
                                    </div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <button className='bg-purple-500 text-slate-100 rounded px-5 
                                    py-2.5 font-bold text-xl mt-10 mr-4'>Purchase Now</button>
                                    <a target='_blank' href="https://live-documentation-six.vercel.app/"> <button className='bg-teal-200 text-slate-700 rounded px-5 
                                    py-2.5 font-bold text-xl shadow mt-10'>Documentation</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <MultiProject></MultiProject>
            </div>
        </div>
    )
}