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
                {/* [1] Hero */}
                <section
                    className="xl:bg-contain bg-top bg-no-repeat -mt-24 pt-24"
                    style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}
                >
                    <div className="container px-4 mx-auto">
                        <div className="pt-12 text-center">
                            <div className="max-w-3xl mx-auto mb-8">
                                <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                                    NoKu LLC <br />
                                    <span className="text-blue-500">
                                        A Long-Term Trust Infrastructure
                                    </span>
                                </h1>

                                <div className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn d-inline text-lg">
                                    Core mechanism:{" "}
                                    <div className="typewrite d-inline text-brand font-bold">
                                        <TextEffect text1="Record Facts" text2="Verify Integrity" />
                                    </div>
                                    {" "}· Issue Proofs (Minimal Disclosure)
                                </div>

                                <p className="mt-6 text-blueGray-400 leading-loose max-w-2xl mx-auto wow animate__animated animate__fadeIn">
                                    NoKu is neither a marketplace nor a scoring system.
                                    We transform real-world fulfillment and transactions
                                    into verifiable, authorized, and reusable trust credentials —
                                    so trust no longer depends on relationships, emotions, or platform endorsements.
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="mb-10 flex flex-wrap justify-center gap-4">
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
                                        Discuss Partnership & Integration
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
                                            Conclusions Only · Minimal Disclosure · Authorized · Revocable
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* [2] Metrics */}
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap justify-center lg:justify-between gap-y-6 pt-10 pb-16">
                            <div className="hover-up-5 flex w-full lg:w-auto justify-center">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold font-heading text-blue-600">
                                            {inViewport ? <CounterUp end={100} duration={3} /> : "0"}
                                        </span>
                                        <span className="text-3xl font-bold font-heading text-blue-600">%</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-base text-blueGray-400 font-semibold uppercase">
                                        Record Integrity
                                    </p>
                                </div>
                            </div>

                            <div className="hover-up-5 flex w-full lg:w-auto justify-center">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold font-heading text-blue-600 counterUp">
                                            {inViewport ? <CounterUp end={24} duration={3} /> : "0"}
                                        </span>
                                        <span className="text-3xl font-bold font-heading text-blue-600">/7</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-base text-blueGray-400 font-semibold uppercase">
                                        Continuous Operation
                                    </p>
                                </div>
                            </div>

                            <div className="hover-up-5 flex w-full lg:w-auto justify-center">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold font-heading text-blue-600 counterUp">
                                            {inViewport ? <CounterUp end={50} duration={3} /> : "0"}
                                        </span>
                                        <span className="text-3xl font-bold font-heading text-blue-600">M+</span>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-base text-blueGray-400 font-semibold uppercase">
                                        Verifiable Connections
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* [3] Ecosystem */}
                <section className="py-20 bg-blueGray-50" id="ecosystem">
                    <div className="container px-4 mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold font-heading">
                                The Ecosystem
                            </h2>
                            <p className="text-blueGray-400 mt-2 text-lg">
                                Facts are generated at the top, proofs are settled at the foundation
                            </p>
                        </div>

                        <div className="flex flex-wrap -mx-3 text-center">
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <div className="p-12 bg-white shadow rounded h-full">
                                    <h3 className="font-bold text-2xl text-blue-600 mb-2">WeXun</h3>
                                    <p className="text-sm font-bold uppercase tracking-widest mb-4">
                                        Productivity Fulfillment
                                    </p>
                                    <p className="text-blueGray-400 text-sm text-left">
                                        Records work, collaboration, and delivery,
                                        transforming professional reliability into a verifiable long-term asset.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <div className="p-12 bg-white shadow rounded h-full">
                                    <h3 className="font-bold text-2xl text-blue-600 mb-2">YouBo</h3>
                                    <p className="text-sm font-bold uppercase tracking-widest mb-4">
                                        Everyday Transactions
                                    </p>
                                    <p className="text-blueGray-400 text-sm text-left">
                                        Records transactions and fulfillment outcomes,
                                        grounding everyday reputation in traceable facts.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/3 px-3 mb-6">
                                <div className="p-12 bg-white shadow rounded h-full border-2 border-blue-500">
                                    <h3 className="font-bold text-2xl text-blue-600 mb-2">NueKu</h3>
                                    <p className="text-sm font-bold uppercase tracking-widest mb-4">
                                        Ledger & Proof Layer
                                    </p>
                                    <p className="text-blueGray-400 text-sm text-left">
                                        No matching. No scoring.
                                        Only recording facts and issuing proofs —
                                        authorized, minimal, and reusable across platforms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Home;
