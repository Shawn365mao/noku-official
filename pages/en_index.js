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
                {/* 仅修改了这里的 -mt-24 以去除顶部白条 */}
                <section
                   className="xl:bg-contain bg-top bg-no-repeat -mt-24 pt-20"
                    style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}
                >
                    <div className="container px-4 mx-auto">
                        <div className="pt-8 text-center">
                            <div className="max-w-3xl mx-auto mb-6">
                                <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-3 font-bold font-heading wow animate__animated animate__fadeIn">
                                    NoKu LLC <br />
                                    <span className="text-blue-500">A Long-Term Trust Infrastructure</span>
                                </h1>

                                <div className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn d-inline text-lg">
                                    Core Mechanism: {" "}
                                    <div className="typewrite d-inline text-brand font-bold">
                                        <TextEffect text1="Record Facts" text2="Verify Integrity" />
                                    </div>
                                    {" "}· Issue Attestations (Minimal Disclosure)
                                </div>

                                <p className="mt-4 text-blueGray-400 leading-loose max-w-2xl mx-auto wow animate__animated animate__fadeIn">
                                    NoKu is neither a matchmaking platform nor a rating system.
                                    We turn real-world fulfillment and transactions into verifiable, permissioned, reusable proofs of trust —
                                    so trust no longer depends on relationships, emotions, or platform endorsements.
                                </p>
                            </div>

                            {/* CTA（稍微收紧底部间距） */}
                            <div className="mb-8 flex flex-wrap justify-center gap-10">
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
                                    Explore the Ecosystem
                                </a>

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
                                        Discuss Integration
                                    </a>
                                </Link>
                            </div>

                            {/* Snapshot（保持，但上面已经收紧） */}
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
                                            Conclusion-Only Verification · Minimal Disclosure · Permissioned · Revocable
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* [2] 动态数字看板（往上抬 + 中文完整显示） */}
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap justify-center lg:justify-between gap-y-6 pt-6 pb-8">
                            <div className="hover-up-5 flex w-full lg:w-auto justify-center wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold font-heading text-blue-600">
                                            {inViewport ? <CounterUp end={100} duration={3} /> : "0"}
                                        </span>
                                        <span className="text-3xl font-bold font-heading text-blue-600">%</span>
                                    </div>
                                    <p className="mt-2 pb-1 text-xs sm:text-base text-blueGray-400 font-semibold uppercase leading-tight">
                                        Record Integrity
                                    </p>
                                </div>
                            </div>

                            <div className="hover-up-5 flex w-full lg:w-auto justify-center wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold font-heading text-blue-600 count counterUp">
                                            {inViewport ? <CounterUp end={24} duration={3} /> : "0"}
                                        </span>
                                        <span className="text-3xl font-bold font-heading text-blue-600">/7</span>
                                    </div>
                                    <p className="mt-2 pb-1 text-xs sm:text-base text-blueGray-400 font-semibold uppercase leading-tight">
                                        Always On
                                    </p>
                                </div>
                            </div>

                            <div className="hover-up-5 flex w-full lg:w-auto justify-center wow animate__animated animate__fadeIn" data-wow-delay=".6s">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold font-heading text-blue-600 count counterUp">
                                            {inViewport ? <CounterUp end={50} duration={3} /> : "0"}
                                        </span>
                                        <span className="text-3xl font-bold font-heading text-blue-600">M+</span>
                                    </div>
                                    <p className="mt-2 pb-1 text-xs sm:text-base text-blueGray-400 font-semibold uppercase leading-tight">
                                        Verifiable Links
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* [3] 生态矩阵｜The Ecosystem */}
                <section className="py-20 bg-blueGray-50" id="ecosystem">
                    <div className="container px-4 mx-auto">
                        <div className="text-center mt-6 mb-16">
                            <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                                Ecosystem Matrix | The Ecosystem
                            </h2>
                            <p className="text-blueGray-400 mt-2 text-lg leading-relaxed">
                                Scenarios Generate Facts; the Protocol Settles Proofs
                            </p>
                        </div>

                        <div className="flex flex-wrap -mx-3 text-center">
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <a href="https://wexun.com" target="_blank" rel="noopener noreferrer"
                                   className="block p-12 bg-white shadow rounded hover-up-5 transition duration-500 h-full">
                                    <img className="h-20 mx-auto mb-4" src="/assets/imgs/icons/WeXun.png" alt="WeXun" />
                                    <h3 className="mb-2 font-bold font-heading text-2xl text-blue-600">WeXun</h3>
                                    <p className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">
                                        Work Fulfillment Facts
                                    </p>
                                    <div className="text-sm text-blueGray-400 leading-relaxed text-left">
                                        <p className="mb-2"><strong>Domains:</strong> Jobs ｜ Hiring ｜ Collaboration</p>
                                        <p>Record tasks, collaboration, and delivery—so professional reliability becomes a verifiable long-term asset.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <a href="https://youbo.com" target="_blank" rel="noopener noreferrer"
                                   className="block p-12 bg-white shadow rounded hover-up-5 transition duration-500 h-full">
                                    <img className="h-20 mx-auto mb-4" src="/assets/imgs/icons/YouBo.png" alt="YouBo" />
                                    <h3 className="mb-2 font-bold font-heading text-2xl text-blue-600">YouBo</h3>
                                    <p className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">
                                        Everyday Transaction Facts
                                    </p>
                                    <div className="text-sm text-blueGray-400 leading-relaxed text-left">
                                        <p className="mb-2"><strong>Domains:</strong> Resale ｜ Housing ｜ Local Life</p>
                                        <p>Record transactions and outcomes—so reputation is built on traceable facts.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="w-full lg:w-1/3 px-3 mb-6">
  <a
    href="https://www.PromiseBook.net"
    target="_blank"
    rel="noopener noreferrer"
    className="block p-12 bg-white shadow rounded hover-up-5 border-2 border-brand transition duration-500 h-full text-center"
  >
    <img
      className="h-20 mx-auto mb-4"
      src="/assets/imgs/icons/PromiseBook.png"
      alt="PromiseBook"
    />
    <h3 className="mb-2 font-bold font-heading text-2xl text-blue-600">
      PromiseBook
    </h3>
    <p className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">
      Commitment & Proof System
    </p>
    <div className="text-sm text-blueGray-400 leading-relaxed text-left">
      <p className="mb-2">
        <strong>Core Positioning:</strong> Commitment Trust Infrastructure
      </p>
      <p>
        Turn real commitments into verifiable, permissioned, reusable digital proofs,
        so integrity becomes a long-term trust asset that moves across platforms.
      </p>
    </div>
  </a>
</div>


                        </div>
                    </div>
                </section>

                {/* [4] 三句话秒懂 */}
                <section className="py-20 overflow-x-hidden bg-white">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap lg:flex-nowrap items-center lg:gap-16">
                            <div className="w-full lg:w-1/2">
                                <div className="lg:py-6 wow animate__animated animate__fadeIn">
                                    <h2 className="text-3xl font-bold font-heading mb-8">NoKu in Three Lines</h2>
                                    <div className="space-y-6">
                                        <div className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                                            <div className="flex-shrink-0 w-8 text-blue-500 font-bold">01</div>
                                            <p className="text-blueGray-700 font-semibold ml-2">
                                                <strong>On WeXun:</strong>{" "}
  Turn work fulfillment into proof of value —
  build your professional worth through verified execution.
</p>
                                        </div>
                                        <div className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                                            <div className="flex-shrink-0 w-8 text-blue-500 font-bold">02</div>
                                            <p className="text-blueGray-700 font-semibold ml-2">
                                                <strong>On YouBo:</strong>{" "}
  Turn honest transactions into reputation —
  grow your real-world credibility through trustable exchange.
</p>
                                        </div>
                                        <div className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                                            <div className="flex-shrink-0 w-8 text-blue-500 font-bold">03</div>
                                            <p className="text-blueGray-700 font-semibold ml-2">
                                                <strong>On PromiseBook:</strong> Turn behavior into assets—your portable trust record.
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-8 text-blueGray-400 italic">
                                        Flow: Facts → Proofs → Portable Trust
                                    </p>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-end">
                                <div className="w-full max-w-[980px]">
                                    <Slider1 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* [5] 企业价值 */}
                <section className="py-20 bg-blueGray-50" id="values">
                    <div className="container px-4 mx-auto text-center">
                        <h2 className="text-4xl mb-6 font-bold font-heading text-blueGray-900 wow animate__animated animate__fadeInDown">
                            Behavior Becomes Assets · Records Become Trust
                        </h2>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-lg mb-8 leading-loose text-blueGray-600 wow animate__animated animate__fadeIn">
                                We don’t do subjective scoring or short-term labels. Trust comes from long-term, stable, verifiable records.
                            </p>
                            <p className="text-blueGray-500 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                Through WeXun’s collaborative fulfillment and YouBo’s transactional fulfillment, PromiseBook settles fragmented behaviors into verifiable, permissioned, reusable proofs of trust,
                                providing long-term trust infrastructure for individuals, merchants, and organizations.
                            </p>
                        </div>
                        <div className="mt-10 w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Home;
                