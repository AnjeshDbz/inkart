"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/navigation";

const feedbacks = [
  {
    id: 1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    name: "Amrita Singh",
    role: "Accountant, ABC Company",
    image: "/images/user1.jpg", // you can change image
  },
  {
    id: 2,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    name: "Amrita Singh",
    role: "Accountant, ABC Company",
    image: "/images/user1.jpg",
  },
  {
    id: 3,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    name: "Amrita Singh",
    role: "Accountant, ABC Company",
    image: "/images/user1.jpg",
  },
  {
    id: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    name: "Raj Singh",
    role: "Seo, ABC Company",
    image: "/images/user1.jpg",
  },
];

export default function CustomerFeedback() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-4 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <div className="text-[120px] leading-none text-gray-200 font-bold">“</div>
          <h2 className="text-xl md:text-4xl font-bold text-primary -mt-6">
            Our Customer’s <br /> Feedback
          </h2>

          <div className="flex items-center gap-4 mt-6">
            <button className="swiper-prev border w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
              ←
            </button>
            <button className="swiper-next border w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
              →
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="lg:col-span-3">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            autoplay={{ delay: 3500 }}
            loop
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {feedbacks.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-[#F7F7F7]  rounded-2xl p-6 shadow hover:shadow-md transition h-full flex flex-col">
                  
                  {/* TEXT */}
                  <p className="text-gray-600 text-sm mb-4">
                    {item.text}
                  </p>

                  {/* STARS */}
                  <div className="flex gap-1 text-red-500 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                  </div>

                  {/* USER */}
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="font-semibold text-primary text-sm">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
