import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const Header = ({ handleHidden }) => {
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const isEnglish = router.pathname === "/en" || router.pathname.startsWith("/en_");

    const getSwitchPath = (targetLang) => {
        const path = router.pathname;
        if (targetLang === "en") {
            if (path === "/") return "/en";
            if (path === "/about") return "/en_about";
            if (path === "/services") return "/en_services";
            if (path === "/contact") return "/en_contact";
            return "/en";
        } else {
            if (path === "/en") return "/";
            if (path === "/en_about") return "/about";
            if (path === "/en_services") return "/services";
            if (path === "/en_contact") return "/contact";
            return "/";
        }
    };

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                className={`
                  fixed top-0 left-0 w-full z-50
                  transition-all duration-300
                  ${scrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur"}
                `}
            >
                <div className="container mx-auto">
                    <nav className="flex justify-between items-center py-3 px-4">
                        {/* Logo */}
                        <Link href={isEnglish ? "/en" : "/"} legacyBehavior>
                            <a className="flex items-center">
                                <img
                                    src="/assets/imgs/icons/NOKU.png"
                                    alt="NOKU Logo"
                                    className="h-10 w-auto"
                                />
                            </a>
                        </Link>

                        {/* Desktop Menu */}
                        <ul className="hidden lg:flex items-center space-x-12">
                            <li>
                                <Link href={isEnglish ? "/en" : "/"} legacyBehavior>
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blue-600">
                                        {isEnglish ? "Home" : "首页"}
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={isEnglish ? "/en_about" : "/about"} legacyBehavior>
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blue-600">
                                        {isEnglish ? "About" : "关于我们"}
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={isEnglish ? "/en_services" : "/services"} legacyBehavior>
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blue-600">
                                        {isEnglish ? "Infrastructure" : "服务体系"}
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={isEnglish ? "/en_contact" : "/contact"} legacyBehavior>
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blue-600">
                                        {isEnglish ? "Contact" : "联系我们"}
                                    </a>
                                </Link>
                            </li>
                        </ul>

                        {/* Language Switch (Desktop) */}
                        <div className="hidden lg:flex items-center text-sm font-semibold">
                            <Link href={getSwitchPath("en")} legacyBehavior>
                                <a className={`${isEnglish ? "text-blue-600" : "text-blueGray-400"} hover:text-blue-600`}>
                                    EN
                                </a>
                            </Link>
                            <span className="mx-2 text-blueGray-300">|</span>
                            <Link href={getSwitchPath("zh")} legacyBehavior>
                                <a className={`${!isEnglish ? "text-blue-600" : "text-blueGray-400"} hover:text-blue-600`}>
                                    中文
                                </a>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                className="flex items-center justify-center h-10 w-10 text-blue-600 border border-blue-200 rounded"
                                onClick={handleHidden}
                                aria-label="Open Menu"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* ✅ 给页面内容让出 Header 高度（关键） */}
            <div className="h-16"></div>
        </>
    );
};

export default Header;
