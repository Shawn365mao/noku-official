import React from "react";
import Link from "next/link";

const MobileMenu = ({ hiddenClass, handleRemove }) => {
    const isHidden = hiddenClass === "hidden";

    return (
        <>
            {/* 整个 MobileMenu 容器 */}
            <div
                className={`
                  navbar-menu
                  fixed inset-0 z-50
                  transition-opacity duration-300
                  ${isHidden ? "pointer-events-none opacity-0" : "opacity-100"}
                `}
            >
                {/* 遮罩层（点击即可关闭） */}
                <div
                    className="absolute inset-0 bg-blueGray-800/30"
                    onClick={handleRemove}
                ></div>

                {/* 菜单主体 */}
                <nav
                    className={`
                      absolute top-0 left-0 bottom-0
                      flex flex-col
                      w-5/6 max-w-sm
                      py-6 px-6
                      bg-white
                      border-r
                      overflow-y-auto
                      transform transition-transform duration-300
                      ${isHidden ? "-translate-x-full" : "translate-x-0"}
                    `}
                >
                    {/* 顶部 Logo + 关闭 */}
                    <div className="flex flex-col items-center mb-8 relative">
                        <button
                            className="absolute right-0 top-0"
                            onClick={handleRemove}
                            aria-label="Close menu"
                        >
                            <svg
                                className="h-6 w-6 text-blueGray-400 hover:text-blue-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <Link href="/" legacyBehavior>
                            <a
                                className="text-3xl font-bold leading-none text-blue-600"
                                onClick={handleRemove}
                            >
                                NOKU.
                            </a>
                        </Link>

                        <Link href="/" legacyBehavior>
                            <a
                                onClick={handleRemove}
                                className="mt-4 px-6 py-2 text-xs font-semibold bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                            >
                                进入平台
                            </a>
                        </Link>
                    </div>

                    {/* 菜单项 */}
                    <ul className="mobile-menu">
                        <li className="mb-1 rounded-xl">
                            <Link href="/" legacyBehavior>
                                <a
                                    onClick={handleRemove}
                                    className="block p-4 text-sm font-semibold text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl"
                                >
                                    首页
                                </a>
                            </Link>
                        </li>

                        <li className="mb-1 rounded-xl">
                            <Link href="/about" legacyBehavior>
                                <a
                                    onClick={handleRemove}
                                    className="block p-4 text-sm font-semibold text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl"
                                >
                                    关于我们
                                </a>
                            </Link>
                        </li>

                        <li className="mb-1 rounded-xl">
                            <Link href="/services" legacyBehavior>
                                <a
                                    onClick={handleRemove}
                                    className="block p-4 text-sm font-semibold text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl"
                                >
                                    服务体系
                                </a>
                            </Link>
                        </li>

                        <li className="mb-1 pb-4 border-b border-blueGray-100">
                            <Link href="/contact" legacyBehavior>
                                <a
                                    onClick={handleRemove}
                                    className="block p-4 text-sm font-semibold text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl"
                                >
                                    联系我们
                                </a>
                            </Link>
                        </li>

                        {/* 语言切换（示例） */}
                        <li className="mt-4 px-4 flex items-center space-x-4">
                            <span className="text-sm font-bold text-blue-600">
                                中文
                            </span>
                            <span className="text-gray-300">|</span>
                            <Link href="/en" legacyBehavior>
                                <a
                                    onClick={handleRemove}
                                    className="text-sm text-blueGray-400 hover:text-blue-500 transition"
                                >
                                    English
                                </a>
                            </Link>
                        </li>
                    </ul>

                    {/* 底部 */}
                    <div className="mt-auto pt-6 border-t">
                        <p className="text-xs text-blueGray-400 mb-4">
                            联系邮箱：
                            <a
                                href="mailto:contact@nokuinc.com"
                                className="text-blue-500 font-medium ml-1 hover:underline"
                            >
                                contact@nokuinc.com
                            </a>
                        </p>

                        <div className="flex space-x-3">
                            <a className="p-2 bg-blue-50 rounded-lg" href="#">
                                <img
                                    className="h-4"
                                    src="/assets/imgs/icons/facebook-blue.svg"
                                    alt="FB"
                                />
                            </a>
                            <a className="p-2 bg-blue-50 rounded-lg" href="#">
                                <img
                                    className="h-4"
                                    src="/assets/imgs/icons/twitter-blue.svg"
                                    alt="TW"
                                />
                            </a>
                            <a className="p-2 bg-blue-50 rounded-lg" href="#">
                                <img
                                    className="h-4"
                                    src="/assets/imgs/icons/instagram-blue.svg"
                                    alt="IG"
                                />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default MobileMenu;
