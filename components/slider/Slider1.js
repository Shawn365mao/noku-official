import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation]);

const SlideCard = ({ img, title, sub }) => (
  <div className="w-full max-w-[980px] pb-5">
    <div className="card-slider group bg-white shadow rounded-2xl p-4">
      <div className="w-full overflow-hidden rounded-xl">
        <img src={img} alt={title} className="block w-full h-auto object-contain" />
      </div>
      <div className="mt-4 flex justify-between items-end">
        <div>
          <h3 className="text-xl font-semibold group-hover:text-blue-500 transition-colors">{title}</h3>
          <p className="mt-1 text-sm text-blueGray-400">{sub}</p>
        </div>
        <Link href="/services" legacyBehavior>
          <a className="px-4 py-2 text-sm font-semibold border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">View Details</a>
        </Link>
      </div>
    </div>
  </div>
);

const Slider1 = () => {
  return (
    <div className="w-full relative">
      <Swiper
        slidesPerView={1}
        navigation={{ prevEl: ".custom_prev", nextEl: ".custom_next" }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = ".custom_prev";
          swiper.params.navigation.nextEl = ".custom_next";
        }}
      >
        {/* ✅ 恢复为 3 张图片 */}
        <SwiperSlide className="flex justify-end">
          <SlideCard img="/assets/imgs/placeholders/img-10.jpg" title="User growth" sub="Harvard university" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-end">
          <SlideCard img="/assets/imgs/placeholders/img-11.jpg" title="Products" sub="Cocacola Co." />
        </SwiperSlide>
        <SwiperSlide className="flex justify-end">
          <SlideCard img="/assets/imgs/placeholders/img-12.jpg" title="Event" sub="Oxford university" />
        </SwiperSlide>
      </Swiper>

      {/* ✅ 确保显示切换箭头 */}
      <div className="flex justify-center mt-6">
        <div className="custom_prev cursor-pointer text-blue-500 hover:text-blue-700 mx-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
        </div>
        <div className="custom_next cursor-pointer text-blue-500 hover:text-blue-700 mx-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Slider1;