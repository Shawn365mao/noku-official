import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
    const router = useRouter();
    // 判断当前是否处于英文页面
    const isEnglish = router.pathname === '/en' || router.pathname.startsWith('/en_');

    return (
        <footer className="py-20 bg-white">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
                    {/* 左侧：品牌与简介 */}
                    <div className="w-full lg:w-1/3 px-3 mb-8 lg:mb-0">
                        <Link href={isEnglish ? "/en" : "/"} legacyBehavior>
                            <a className="inline-block mb-6 text-3xl font-bold leading-none">
                                <span className="text-blue-900 font-heading text-4xl tracking-tighter">
                                    NOKU<span className="text-nokuGold">.</span>
                                </span>
                            </a>
                        </Link>
                        <p className="max-w-md mx-auto lg:max-w-full text-blueGray-400 leading-relaxed lg:pr-32">
                            {isEnglish 
                                ? "A Trust & Credit Infrastructure for the Global Chinese Community." 
                                : "为海外华人构建可信的承诺与信用基础设施。"}
                        </p>
                    </div>

                    {/* 右侧：链接列表 */}
                    <div className="w-full lg:w-2/3 px-3 flex flex-wrap justify-center lg:justify-end">
                        <div className="w-1/2 md:w-1/3 px-3 mb-6">
                            <h4 className="font-bold text-gray-900 mb-4">
                                {isEnglish ? "Ecosystem" : "平台生态"}
                            </h4>
                            <ul className="text-blueGray-500">
                                <li className="mb-2"><a href="https://wexun.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">WeXun</a></li>
                                <li className="mb-2"><a href="https://youbo.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">YouBo</a></li>
                                <li className="mb-2"><a href="https://nueku.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">NueKu</a></li>
                            </ul>
                        </div>
                        
                        <div className="w-1/2 md:w-1/3 px-3 mb-6">
                            <h4 className="font-bold text-gray-900 mb-4">
                                {isEnglish ? "Company" : "关于我们"}
                            </h4>
                            <ul className="text-blueGray-500">
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

                        <div className="w-full md:w-1/3 px-3 mb-6">
                            <h4 className="font-bold text-gray-900 mb-4">
                                {isEnglish ? "Contact" : "联系方式"}
                            </h4>
                            <div className="text-blueGray-500">
                                <p className="mb-2">Global Operations</p>
                                <p className="mb-2">
                                    <a href="mailto:nokuinc@outlook.com" className="text-blue-600 hover:text-blue-700">
                                        nokuinc@outlook.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 底部版权行 */}
                <div className="flex flex-col lg:flex-row items-center lg:justify-between border-t border-blueGray-100 pt-8">
                    <p className="text-sm text-blueGray-400">
                        &copy; 2026 NOKU Inc. All rights reserved.
                    </p>
                    <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                        <a className="inline-block px-2" href="#">
                            <img src="/assets/imgs/icons/facebook-blue.svg" alt="Facebook" className="h-5 opacity-60 hover:opacity-100 transition" />
                        </a>
                        <a className="inline-block px-2" href="#">
                            <img src="/assets/imgs/icons/twitter-blue.svg" alt="Twitter" className="h-5 opacity-60 hover:opacity-100 transition" />
                        </a>
                        <a className="inline-block px-2" href="#">
                            <img src="/assets/imgs/icons/instagram-blue.svg" alt="Instagram" className="h-5 opacity-60 hover:opacity-100 transition" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;