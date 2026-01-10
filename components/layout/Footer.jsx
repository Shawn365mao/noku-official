import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  // 判断当前是否处于英文页面
  const isEnglish = router.pathname === "/en" || router.pathname.startsWith("/en_");

  return (
    <footer className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap mb-10 sm:mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
          {/* 左侧：品牌与简介 */}
          <div className="w-full lg:w-1/3 px-3 mb-8 lg:mb-0">
            <Link href={isEnglish ? "/en" : "/"} legacyBehavior>
              <a className="inline-block mb-4 sm:mb-6 text-3xl font-bold leading-none">
                <span className="text-blue-900 font-heading text-4xl tracking-tighter">
                  NOKU<span className="text-nokuGold">.</span>
                </span>
              </a>
            </Link>

            <p className="max-w-md mx-auto lg:max-w-full text-blueGray-400 leading-relaxed lg:pr-32 text-[14px] sm:text-base">
              {isEnglish
                ? "A Trust & Credit Infrastructure for the Global Chinese Community."
                : "为海外华人构建可信的承诺与信用基础设施。"}
            </p>
          </div>

          {/* 右侧：链接列表 */}
          <div className="w-full lg:w-2/3 px-3 flex flex-wrap justify-center lg:justify-end">
            {/* ✅ 手机端：3 列改为 2 列 + 末列独占一行，避免太挤 */}
            <div className="w-1/2 md:w-1/3 px-3 mb-8 sm:mb-6">
              <h4 className="font-bold text-gray-900 mb-3 sm:mb-4">
                {isEnglish ? "Ecosystem" : "平台生态"}
              </h4>
              <ul className="text-blueGray-500 text-sm sm:text-base">
                <li className="mb-2">
                  <a
                    href="https://wexun.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    WeXun
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://youbo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    YouBo
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://nueku.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    NueKu
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-1/2 md:w-1/3 px-3 mb-8 sm:mb-6">
              <h4 className="font-bold text-gray-900 mb-3 sm:mb-4">
                {isEnglish ? "Company" : "关于我们"}
              </h4>
              <ul className="text-blueGray-500 text-sm sm:text-base">
                <li className="mb-2">
                  <Link href={isEnglish ? "/en_about" : "/about"} legacyBehavior>
                    <a className="hover:text-blue-600">{isEnglish ? "About Us" : "公司简介"}</a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href={isEnglish ? "/en_services" : "/services"} legacyBehavior>
                    <a className="hover:text-blue-600">{isEnglish ? "Infrastructure" : "服务架构"}</a>
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href={isEnglish ? "/en_contact" : "/contact"} legacyBehavior>
                    <a className="hover:text-blue-600">{isEnglish ? "Contact" : "联系合作"}</a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* ✅ 联系方式：手机端独占一行，更清晰 */}
            <div className="w-full md:w-1/3 px-3 mb-6">
              <h4 className="font-bold text-gray-900 mb-3 sm:mb-4">
                {isEnglish ? "Contact" : "联系方式"}
              </h4>
              <div className="text-blueGray-500 text-sm sm:text-base">
                <p className="mb-2">{isEnglish ? "Global Operations" : "Global Operations"}</p>
                <p className="mb-2">
                  <a
                    href="mailto:nokuinc@outlook.com"
                    className="text-blue-600 hover:text-blue-700 font-semibold break-all"
                  >
                    nokuinc@outlook.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 底部版权行 */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between border-t border-blueGray-100 pt-6 sm:pt-8">
          {/* ✅ 手机端先展示社交，再展示版权（更符合“操作优先”） */}
          <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
            {/* ✅ 避免空链接 # 误触：先置灰禁用（需要时再换成真实链接） */}
            <span className="inline-block px-2 opacity-50 cursor-not-allowed">
              <img
                src="/assets/imgs/icons/facebook-blue.svg"
                alt="Facebook"
                className="h-5 opacity-60"
              />
            </span>
            <span className="inline-block px-2 opacity-50 cursor-not-allowed">
              <img
                src="/assets/imgs/icons/twitter-blue.svg"
                alt="Twitter"
                className="h-5 opacity-60"
              />
            </span>
            <span className="inline-block px-2 opacity-50 cursor-not-allowed">
              <img
                src="/assets/imgs/icons/instagram-blue.svg"
                alt="Instagram"
                className="h-5 opacity-60"
              />
            </span>
          </div>

          <p className="text-xs sm:text-sm text-blueGray-400 text-center">
            &copy; 2026 NOKU Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
