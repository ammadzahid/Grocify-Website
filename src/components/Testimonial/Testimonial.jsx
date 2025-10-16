import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Heading from '../../components/Heading/Heading.jsx'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.jpg'
import Customer3 from '../../assets/customer3.jpg'
import Customer4 from '../../assets/customer4.jpg'
import Customer5 from '../../assets/customer5.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from "react-icons/fa";


const Testimonial = () => {

  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-10'>
        <Heading ColorText='Customers' SimpleText='Saying' />
        <div className='flex justify-end gap-x-2 py-5'>
          <button className='custom-pre bg-zinc-100 rounded-lg p-2 text-2xl cursor-pointer hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white '> <IoIosArrowBack /> </button>
          <button className='custom-next bg-zinc-100 rounded-lg p-2 text-2xl cursor-pointer hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white '> <IoIosArrowForward /> </button>
        </div>

        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-pre",
          }}
          loop={true}
          breakpoints={{

            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]} className="mySwiper">
          {
            review.map(data => {
              return (
                <SwiperSlide className='bg-zinc-100 p-5  rounded-xl'>
                  <div className='flex flex-wrap gap-5 items-center'>
                    <div className='flex w-15 h-15 rounded-full outline-2 outline-offset-2 outline-orange-500 overflow-hidden'>
                      <img src={data.image} alt="image" className='w-full h-full' />
                    </div>

                    <div>
                      <h5 className='text-zinc-800 font-bold text-2xl'>{data.name}</h5>
                      <p className='text-zinc-600'>{data.profession}</p>
                      <span div className='flex gap-1 text-yellow-400'>
                        {
                          Array.from({ length: data.Rating }, (_, index) => (
                            <FaStar />
                          ))
                        }
                      </span>
                    </div>
                  </div>
                  <div className='mt-7 min-h-[15vh]'>
                    <p>{data.para}</p>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonial

const review = [
  {
    id: 1,
    name: 'Emily Johnson',
    profession: 'Food Blogger',
    para: 'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!',
    Rating: 3,
    image: Customer1
  },
  {
    id: 2,
    name: 'David Smith',
    profession: 'Chef',
    para: 'As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!',
    Rating: 4,
    image: Customer2
  },
  {
    id: 3,
    name: 'Alya Zahra',
    profession: 'Model',
    para: 'Shopping online with FreshBasket has saved me so much time. I trust them for my family weekly groceries—always fresh, affordable, and reliable.',
    Rating: 5,
    image: Customer3
  },
  {
    id: 4,
    name: 'Carlos Mendes',
    profession: 'Fitness Coach',
    para: 'I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!',
    Rating: 3,
    image: Customer4
  },
  {
    id: 5,
    name: 'Natcha Phongchai',
    profession: 'Natcha Phongchai',
    para: 'FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.s',
    Rating: 3,
    image: Customer5
  },
]