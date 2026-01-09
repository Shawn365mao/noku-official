import React from 'react';
import Layout from "../components/layout/Layout";
import Link from "next/link";

const ServicesEn = () => {
    return (
        <>
            <Layout>
                {/* === Header: Vision === */}
                <section className="py-20 bg-blueGray-50 -mt-24 pt-40">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-6 wow animate__animated animate__fadeIn">
                                NOKU Infrastructure:<br/>
                                <span className="text-blue-600">From Protocol to Ecosystem</span>
                            </h2>
                            <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                                We provide multi-dimensional credit support for the global Chinese community.
                                Through the NueKu Protocol, we are redefining the cost of trust for overseas life.
                            </p>
                        </div>
                    </div>
                </section>

                {/* === Core Services === */}
                <section className="py-20">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap -mx-3">

                            {/* WeXun */}
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-12">
                                <div className="p-8 bg-white shadow-xl rounded-2xl border border-blueGray-100 hover-up-5 transition duration-300 h-full">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 012 2h2v4l4-4z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">WeXun Social</h3>
                                    <p className="text-blueGray-400 leading-relaxed mb-6">
                                        The productivity and collaboration layer. WeXun honors skilled workers by
                                        recording real delivery, reliability, and long-term professional value.
                                    </p>
                                    <ul className="text-sm text-blueGray-500 space-y-2 mb-6">
                                        <li>• Skill-to-demand matching</li>
                                        <li>• Verifiable work delivery</li>
                                        <li>• Long-term credibility accumulation</li>
                                    </ul>
                                </div>
                            </div>

                            {/* YouBo */}
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-12">
                                <div className="p-8 bg-white shadow-xl rounded-2xl border border-blueGray-100 hover-up-5 transition duration-300 h-full">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6"
                                        style={{ backgroundColor: "rgba(255,149,0,.15)", color: "#FF9500" }}>
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">YouBo Assurance</h3>
                                    <p className="text-blueGray-400 leading-relaxed mb-6">
                                        A community-driven marketplace where honest transactions build
                                        real-life reputation and trust.
                                    </p>
                                    <ul className="text-sm text-blueGray-500 space-y-2 mb-6">
                                        <li>• Verified identities</li>
                                        <li>• Traceable disputes</li>
                                        <li>• Community-based reputation</li>
                                    </ul>
                                </div>
                            </div>

                            {/* NueKu */}
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-12">
                                <div className="p-8 bg-white shadow-xl rounded-2xl border border-blueGray-100 hover-up-5 transition duration-300 h-full">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6"
                                        style={{ backgroundColor: "rgba(212,175,55,.18)", color: "#D4AF37" }}>
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">NueKu Protocol</h3>
                                    <p className="text-blueGray-400 leading-relaxed mb-6">
                                        The foundational credit ledger. NueKu does not score people —
                                        it records verified actions and turns them into portable trust assets.
                                    </p>
                                    <ul className="text-sm text-blueGray-500 space-y-2 mb-6">
                                        <li>• Verifiable action records</li>
                                        <li>• Cross-platform portability</li>
                                        <li>• Institution-ready credentials</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* === Strategic Advantage === */}
                <section className="py-20 bg-blue-900 text-white">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap items-center -mx-3">
                            <div className="w-full lg:w-1/2 px-3 mb-12 lg:mb-0">
                                {/* 🔑 深金色标题 */}
                                <h2
                                    className="text-3xl lg:text-4xl font-bold mb-6"
                                    style={{ color: "#B8860B" }}
                                >
                                    Why NOKU Is Essential?
                                </h2>
                                <p className="text-blue-200 mb-8 leading-relaxed">
                                    Traditional credit systems such as FICO fail to cover the early stages
                                    of cross-border life. NOKU transforms real actions into verifiable trust,
                                    so credibility no longer starts from zero.
                                </p>
                            </div>

                            {/* 右侧图片（已验证路径可用） */}
                            <div className="w-full lg:w-1/2 px-3">
                                <img
                                    className="rounded-2xl shadow-2xl"
                                    src="/assets/imgs/illustrations/work-tv.png"
                                    alt="Trust Infrastructure Illustration"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default ServicesEn;
