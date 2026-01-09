import { useEffect, useState } from 'react'
import CounterUp from "../components/elements/Counterup"
import TextEffect from "../components/elements/TextEffect"
import Layout from "../components/layout/Layout"
import Slider1 from "../components/slider/Slider1"
import Link from "next/link"

function Home() {
    const [inViewport, setInViewport] = useState(false);

    const handleScroll = () => {
        const elements = document.getElementsByClassName("counterUp");
        if (elements.length > 0) {
            const element = elements[0];
            const rect = element.getBoundingClientRect();
            const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
            if (isInViewport && !inViewport) setInViewport(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [inViewport]);

    return (
        <>
            <Layout>
                {/* [1] 首页首屏｜定位（Hero） */}
                <section
                    className="xl:bg-contain bg-top bg-no-repeat -mt-24 pt-24"
                    style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}
                >
                    <div className="container px-4 mx-auto">
                        <div className="pt-12 text-center">
                            <div className="max-w-3xl mx-auto mb-8">
                                <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                                    NoKu LLC <br />
                                    <span className="text-blue-500">一个面向长期的信任基础设施</span>
                                </h1>

                                <div className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn d-inline text-lg">
                                    核心机制：{" "}
                                    <div className="typewrite d-inline text-brand font-bold">
                                        <TextEffect text1="记录事实" text2="验证完整性" />
                                    </div>
                                    {" "}· 出具证明（最小披露）
                                </div>

                                <p className="mt-6 text-blueGray-400 leading-loose max-w-2xl mx-auto wow animate__animated animate__fadeIn">
                                    NoKu（诺库）不是撮合平台，也不是评分系统。
                                    我们把真实发生过的履约与交易，转化为可验证、可授权、可复用的信任凭证——
                                    让信任不再依赖关系、情绪或平台背书。
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="mb-10 flex flex-wrap justify-center gap-4">
  {/* 主按钮 */}
  <a
    href="#ecosystem"
    className="
      inline-flex items-center justify-center
      h-12 min-w-[160px]
      px-8
      text-base font-semibold
      rounded-lg
      bg-blue-500 text-white
      hover:bg-blue-600
      transition
    "
  >
    探索生态矩阵
  </a>

  {/* 次按钮 */}
  <Link href="/contact" legacyBehavior>
    <a
      className="
        inline-flex items-center justify-center
        h-12 min-w-[160px]
        px-8
        text-base font-semibold
        rounded-lg
        bg-white text-blueGray-800
        border border-blueGray-200
        hover:border-blueGray-300
        transition
      "
    >
      讨论合作与接入
    </a>
  </Link>
</div>

                            {/* Snapshot */}
                            <div className="max-w-3xl mx-auto">
                                <div className="bg-white border border-blueGray-100 shadow rounded-2xl p-6 text-left wow animate__animated animate__fadeIn">
                                    <div className="text-xs font-bold uppercase tracking-widest text-blueGray-400 mb-2">
                                        Infrastructure Snapshot
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <div className="text-lg font-bold text-blueGray-900">
                                            Record · Verify · Attest
                                        </div>
                                        <div className="text-sm text-blueGray-500">
                                            只验证结论 · 最小披露 · 可授权 · 可撤回
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* [2] 动态数字看板（保持你的基线对齐方案） */}
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap justify-center lg:justify-between gap-y-6 pt-10 pb-16">
                            {/* Card 1 */}
                            <div className="hover-up-5 flex w-full lg:w-auto justify-center wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold font-heading text-blue-600">
                                            {inViewport ? <CounterUp end={100} duration={3} /> : "0"}
                                        </span>
                                        <span className="text-3xl font-bold font-heading text-blue-600">%</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-base text-blueGray-400 font-semibold uppercase leading-tight">
                                        记录完整性
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="hover-up-5 flex w-full lg:w-auto justify-center wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold font-heading text-blue-600 count counterUp">
                                            {inViewport ? <CounterUp end={24} duration={3} /> : "0"}
                                        </span>
                                        <span className="text-3xl font-bold font-heading text-blue-600">/7</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-base text-blueGray-400 font-semibold uppercase leading-tight">
                                        持续运行
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="hover-up-5 flex w-full lg:w-auto justify-center wow animate__animated animate__fadeIn" data-wow-delay=".6s">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold font-heading text-blue-600 count counterUp">
                                            {inViewport ? <CounterUp end={50} duration={3} /> : "0"}
                                        </span>
                                        <span className="text-3xl font-bold font-heading text-blue-600">M+</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-base text-blueGray-400 font-semibold uppercase leading-tight">
                                        可验证连接
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* [3] 生态矩阵｜The Ecosystem */}
                <section className="py-20 bg-blueGray-50" id="ecosystem">
                    <div className="container px-4 mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                                生态矩阵 | The Ecosystem
                            </h2>
                            <p className="text-blueGray-400 mt-2 text-lg leading-relaxed">
                                上层场景产生事实，底层机制沉淀证明
                            </p>
                        </div>

                        <div className="flex flex-wrap -mx-3 text-center">
                            {/* WeXun */}
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <a href="https://wexun.com" target="_blank" rel="noopener noreferrer"
                                   className="block p-12 bg-white shadow rounded hover-up-5 transition duration-500 h-full">
                                    <img className="h-20 mx-auto mb-4" src="/assets/imgs/icons/WeXun.png" alt="WeXun" />
                                    <h3 className="mb-2 font-bold font-heading text-2xl text-blue-600">WeXun（微讯）</h3>
                                    <p className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">
                                        生产力履约事实
                                    </p>
                                    <div className="text-sm text-blueGray-400 leading-relaxed text-left">
                                        <p className="mb-2"><strong>业务领域：</strong>找工 ｜ 用工 ｜ 合作</p>
                                        <p>记录接单、协作与交付，让职业可靠度成为可验证的长期资产。</p>
                                    </div>
                                </a>
                            </div>

                            {/* YouBo */}
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <a href="https://youbo.com" target="_blank" rel="noopener noreferrer"
                                   className="block p-12 bg-white shadow rounded hover-up-5 transition duration-500 h-full">
                                    <img className="h-20 mx-auto mb-4" src="/assets/imgs/icons/YouBo.png" alt="YouBo" />
                                    <h3 className="mb-2 font-bold font-heading text-2xl text-blue-600">YouBo（优博）</h3>
                                    <p className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">
                                        生活交易事实
                                    </p>
                                    <div className="text-sm text-blueGray-400 leading-relaxed text-left">
                                        <p className="mb-2"><strong>业务领域：</strong>闲置 ｜ 租房 ｜ 美食</p>
                                        <p>记录交易与履约结果，让生活口碑建立在可追溯的事实之上。</p>
                                    </div>
                                </a>
                            </div>

                            {/* NueKu */}
                            <div className="w-full lg:w-1/3 px-3 mb-6">
                                <a href="https://nueku.com" target="_blank" rel="noopener noreferrer"
                                   className="block p-12 bg-white shadow rounded hover-up-5 border-2 border-brand transition duration-500 h-full text-center">
                                    <img className="h-20 mx-auto mb-4" src="/assets/imgs/icons/NueKu.png" alt="NueKu" />
                                    <h3 className="mb-2 font-bold font-heading text-2xl text-blue-600">NueKu（纽库）</h3>
                                    <p className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">
                                        账本与证明层
                                    </p>
                                    <div className="text-sm text-blueGray-400 leading-relaxed text-left">
                                        <p className="mb-2"><strong>核心定位：</strong>信用基础设施</p>
                                        <p>不撮合、不评分，只记录与出具证明：可授权、最小披露、可跨平台复用。</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* [4] 三句话秒懂 */}
                <section className="py-20 overflow-x-hidden bg-white">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap lg:flex-nowrap items-center">
                            <div className="w-full lg:w-1/2">
                                <div className="lg:py-6 lg:pr-12 wow animate__animated animate__fadeIn">
                                    <h2 className="text-3xl font-bold font-heading mb-8">三句话秒懂 NoKu 生态</h2>
                                    <div className="space-y-6">
                                        <div className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                                            <div className="flex-shrink-0 w-8 text-blue-500 font-bold">01</div>
                                            <p className="text-blueGray-700 font-semibold ml-2">
                                                <strong>在 WeXun（微讯）：</strong>履行过程，记录你的职业身价。
                                            </p>
                                        </div>
                                        <div className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                                            <div className="flex-shrink-0 w-8 text-blue-500 font-bold">02</div>
                                            <p className="text-blueGray-700 font-semibold ml-2">
                                                <strong>在 YouBo（优博）：</strong>诚实交易，积累你的生活声誉。
                                            </p>
                                        </div>
                                        <div className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                                            <div className="flex-shrink-0 w-8 text-blue-500 font-bold">03</div>
                                            <p className="text-blueGray-700 font-semibold ml-2">
                                                <strong>在 NueKu（纽库）：</strong>行为变资产，成为你信用的卷轴。
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-8 text-blueGray-400 italic">
                                        对应逻辑：事实产生 → 证明沉淀 → 信用可迁移
                                    </p>
                                </div>
                            </div>

                            <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
                                <Slider1 />
                            </div>
                        </div>
                    </div>
                </section>

                {/* [5] 企业价值 */}
                <section className="py-20 bg-blueGray-50" id="values">
                    <div className="container px-4 mx-auto text-center">
                        <h2 className="text-4xl mb-6 font-bold font-heading text-blueGray-900 wow animate__animated animate__fadeInDown">
                            行为即资产 · 记录即信用
                        </h2>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-lg mb-8 leading-loose text-blueGray-600 wow animate__animated animate__fadeIn">
                                我们不做主观评分，也不制造短期标签。可信，来自长期、稳定、可核验的事实记录。
                            </p>
                            <p className="text-blueGray-500 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                通过 WeXun 的协作履约与 YouBo 的交易履约，NueKu 把分散的行为沉淀为可验证、可授权、可复用的信任凭证，
                                为个人、商户与组织提供长期可信的基础设施。
                            </p>
                        </div>
                        <div className="mt-10 w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    </div>
                </section>

                {/* [6] 页脚 */}
                <footer className="py-20 bg-blueGray-100">
                    <div className="container px-4 mx-auto text-center">
                        <h2 className="text-3xl font-bold font-heading mb-4 text-blueGray-900">NoKu LLC</h2>
                        <div className="flex flex-wrap justify-center space-x-8 mb-10 text-blueGray-600">
                            <div className="flex items-center">
                                <span className="text-brand mr-2">📧</span>
                                <a href="mailto:nokuinc@outlook.com" className="font-bold hover:underline">nokuinc@outlook.com</a>
                            </div>
                            <div className="flex items-center">
                                <span className="text-brand mr-2">🌍</span>
                                <span className="font-bold">愿景：赋能每一份承诺</span>
                            </div>
                        </div>
                        <p className="text-blueGray-400 text-sm font-semibold tracking-widest uppercase">© 2026 NoKu LLC. All rights reserved.</p>
                    </div>
                </footer>
            </Layout>
        </>
    );
}

export default Home;
