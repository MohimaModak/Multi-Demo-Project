import React, { useEffect } from 'react'
import Demo1 from "../../../Gallery/demo1.png"
import Demo2 from "../../../Gallery/demo2.png"
import Demo3 from "../../../Gallery/demo3.png"
import Demo4 from "../../../Gallery/demo4.png"
import Demo5 from "../../../Gallery/demo5.png"
import './MultiProject.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function MultiProject() {

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
    <div className='py-24 px-10 text-center bg-slate-50'>
      <h1 className='text-4xl md:text-5xl font-bold text-blue-900'>Landing Pages</h1>
      <div>
        <div className='flex justify-center items-center my-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
            <div data-aos="fade-up" className='flex justify-center items-center'>
              <a href="https://ai-platform-kappa.vercel.app/">
                <img src={Demo1} className='object-cover shadow-md transition-all duration-300 hover:translate-y-[-15px] hover:shadow-2xl rounded-md w-96' />
              </a>
            </div>

            <div data-aos="fade-up" className='flex justify-center items-center'>
              <a href="https://resturant-ten-zeta.vercel.app/">
                <img src={Demo2} className='object-cover shadow-md transition-all duration-300 hover:translate-y-[-15px] hover:shadow-2xl rounded-md w-96' />
              </a>
            </div>

            <div data-aos="fade-up" className='flex justify-center items-center'>
              <a href="https://cloud-hosting-dusky.vercel.app/">
                <img src={Demo3} className='object-cover shadow-md transition-all duration-300 hover:translate-y-[-15px] hover:shadow-2xl rounded-md w-96' />
              </a>
            </div>

            <div data-aos="fade-up" className='flex justify-center items-center'>
              <a href="https://health-care-kappa-ivory.vercel.app/">
                <img src={Demo4} className='object-cover shadow-md transition-all duration-300 hover:translate-y-[-15px] hover:shadow-2xl rounded-md w-96' />
              </a>
            </div>

            <div data-aos="fade-up" className='flex justify-center items-center'>
              <a href="https://finance-and-investment-obce.vercel.app/">
                <img src={Demo5} className='object-cover shadow-md transition-all duration-300 hover:translate-y-[-15px] hover:shadow-2xl rounded-md w-96' />
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className='flex justify-center items-center'>
          <button className='bg-blue-900 text-slate-50 px-5 py-2 font-medium rounded'>View More</button>
        </div>
      </div>
    </div>
  )
}
