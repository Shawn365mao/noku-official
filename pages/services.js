import React from 'react';
import Layout from "../components/layout/Layout";
import Link from "next/link";

const Services = () => {
    return (
        <>
            <Layout>
                {/* === 头部：服务愿景 === */}
                <section className="py-20 bg-blueGray-50 -mt-24 pt-40">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-6 wow animate__animated animate__fadeIn">
                                诺库服务体系：<br />
                                <span className="text-blue-600">从真实行为到信用资产</span>
                            </h2>
                            <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                                NoKu 不做“撮合平台”，我们做“信任基础设施”。WeXun 与 YouBo 产生真实履约与交易，
                                NueKu 将这些行为沉淀为可验证、可携带、可复用的信用资产。
                            </p>
                        </div>
                    </div>
                </section>

                {/* === 三大核心服务块（顺序：WeXun → YouBo → NueKu） === */}
                <section className="py-20">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap -mx-3">

                            {/* 服务 1: WeXun（微讯）— 工业蓝 */}
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-12">
                                <div className="p-8 bg-white shadow-xl rounded-2xl border border-blueGray-100 hover-up-5 transition duration-300 h-full">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-6">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 012 2h2v4l4-4z" />
                                        </svg>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2">WeXun（微讯）</h3>
                                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">
                                        工业蓝 · 生产力 / 效率 / 可靠技能对接
                                    </p>

                                    <p className="text-blueGray-400 leading-relaxed mb-6">
                                        一句话：<strong>好好干活，记录你的职业身价。</strong><br />
                                        WeXun 致敬蓝领与实干者，把每一次接单、协作、交付与履约过程沉淀为可信记录，
                                        让“能干、靠谱、守约”成为可被验证的职业资产。
                                    </p>

                                    <ul className="text-sm text-blueGray-500 space-y-2 mb-6">
                                        <li>• 技能与需求精准匹配（更快、更准）</li>
                                        <li>• 履约过程留痕（可追溯）</li>
                                        <li>• 长期可靠度沉淀（越做越值钱）</li>
                                    </ul>
                                </div>
                            </div>

                            {/* 服务 2: YouBo（优博）— 活力橙 */}
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-12">
                                <div className="p-8 bg-white shadow-xl rounded-2xl border border-blueGray-100 hover-up-5 transition duration-300 h-full">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6"
                                        style={{ backgroundColor: "rgba(255,149,0,.15)", color: "#FF9500" }}>
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2">YouBo（优博）</h3>
                                    <p className="text-sm font-semibold uppercase tracking-widest mb-4"
                                        style={{ color: "#FF9500" }}>
                                        活力橙 · 生活圈烟火气 / 交易热度 / 社区温度
                                    </p>

                                    <p className="text-blueGray-400 leading-relaxed mb-6">
                                        一句话：<strong>诚实交易，积累你的生活声誉。</strong><br />
                                        YouBo 聚焦本地生活与二手流转，让每一次交易、租赁与服务都在“真实、可核验”的规则里发生，
                                        用事实沉淀口碑，让信任在社区内自然流动。
                                    </p>

                                    <ul className="text-sm text-blueGray-500 space-y-2 mb-6">
                                        <li>• 真实身份与交易链路（更放心）</li>
                                        <li>• 纠纷可追溯（有依据）</li>
                                        <li>• 社区口碑沉淀（越久越可信）</li>
                                    </ul>
                                </div>
                            </div>

                            {/* 服务 3: NueKu（纽库）— 磨砂金 */}
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-12">
                                <div className="p-8 bg-white shadow-xl rounded-2xl border border-blueGray-100 hover-up-5 transition duration-300 h-full">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6"
                                        style={{ backgroundColor: "rgba(212,175,55,.18)", color: "#D4AF37" }}>
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2">NueKu（纽库）</h3>
                                    <p className="text-sm font-semibold uppercase tracking-widest mb-4"
                                        style={{ color: "#B8860B" }}>
                                        磨砂金 · 信用资产恒久价值 / 底层数据库 / 沉稳尊贵
                                    </p>

                                    <p className="text-blueGray-400 leading-relaxed mb-6">
                                        一句话：<strong>行为变资产，这是你走遍全球的通行证。</strong><br />
                                        NueKu 是 NoKu 体系的底层协议与数据库：不主观打分、不制造标签，只如实记录与存证。
                                        让你的履约与交易形成可验证的信用凭证，在不同城市、平台与场景中持续生效。
                                    </p>

                                    <ul className="text-sm text-blueGray-500 space-y-2 mb-6">
                                        <li>• 可核验的行为存证（更权威）</li>
                                        <li>• 跨国/跨平台信用映射（更通用）</li>
                                        <li>• 机构级接口与授权机制（更可用）</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* === 技术优势（强化“隐私第一 / 全球共识”与底层定位） === */}
                <section className="py-20 bg-blue-900 text-white">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap items-center -mx-3">
                            <div className="w-full lg:w-1/2 px-3 mb-12 lg:mb-0">
                                <h2
  className="text-3xl lg:text-4xl font-bold mb-6"
  style={{ color: "#B8860B" }}   // 深金色 / Dark Gold
>
  为什么诺库不可或缺？
</h2>

                                <p className="text-blue-200 mb-8 leading-relaxed">
                                    传统信用体系（如 FICO）往往无法覆盖跨境华人初期的“信用空白期”。NoKu 通过 WeXun 与 YouBo 的真实行为数据，
                                    在 NueKu 中沉淀为可验证的信用资产，让信任不再从零开始。
                                </p>

                                <div className="flex items-start mb-6">
                                    <div className="mr-4 p-2 bg-blue-800 rounded-lg" style={{ color: "#D4AF37" }}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">隐私第一</h4>
                                        <p className="text-blue-300">
                                            只验证结论，不暴露隐私细节。你的数据由你授权，最小披露、可随时撤回。
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="mr-4 p-2 bg-blue-800 rounded-lg" style={{ color: "#D4AF37" }}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">全球可携带</h4>
                                        <p className="text-blue-300">
                                            无论在洛杉矶、纽约还是东京，你的信用凭证随身而行，可跨平台复用。
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="w-full lg:w-1/2 px-3">
                                <img className="rounded-2xl shadow-2xl" src="/assets/imgs/illustrations/work-tv.png" alt="Tech Background" />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Services;
