import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const AboutEn = () => {
  return (
    <>
      <Layout>
        {/* Hero */}
        <section className="py-20 bg-blueGray-50 -mt-24 pt-40">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center -mx-3">
              <div className="w-full lg:w-1/2 px-3 mb-10 lg:mb-0">
                <div className="max-w-2xl">
                  <h1 className="text-3xl lg:text-5xl font-bold font-heading leading-tight mb-6 wow animate__animated animate__fadeIn">
                    About NoKu
                    <br />
                    <span className="text-blue-600">
                      A Trust Infrastructure Built for the Long Term
                    </span>
                  </h1>

                  <p className="text-blueGray-500 leading-relaxed text-lg wow animate__animated animate__fadeIn">
                    NoKu is not a marketplace, nor a scoring system. We build an operational mechanism
                    that converts real-world delivery and completed transactions into verifiable,
                    permissioned, reusable trust credentials—so trust no longer depends on relationships,
                    emotions, or platform endorsements.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/en_services" legacyBehavior>
                      <a className="py-3 px-6 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded transition">
                        View Services
                      </a>
                    </Link>
                    <Link href="/contact" legacyBehavior>
                      <a className="py-3 px-6 text-sm font-semibold text-blue-600 bg-white border border-blueGray-200 hover:border-blueGray-300 rounded transition">
                        Contact Us
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right visual (optional) */}
              <div className="w-full lg:w-1/2 px-3">
                <div className="bg-white rounded-2xl shadow-xl border border-blueGray-100 p-6">
                  <div className="text-sm font-semibold text-blueGray-400 uppercase tracking-widest mb-3">
                    Infrastructure Snapshot
                  </div>
                  <div className="text-xl font-bold mb-2">Record · Verify · Attest</div>
                  <p className="text-blueGray-500 leading-relaxed mb-5">
                    Capture facts → verify integrity → issue attestations with minimal disclosure. This is NoKu’s core workflow.
                  </p>
                  <img
                    className="rounded-xl w-full"
                    src="/assets/imgs/illustrations/space.svg"
                    alt="NoKu Infrastructure"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Definition */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
                What Problem Are We Solving?
              </h2>
              <p className="text-blueGray-500 leading-relaxed">
                In cross-city, cross-country, and cross-platform life, trust is often forced to restart from zero.
                Not because people are unreliable, but because there is no long-term system for verifiable and reusable fact records.
              </p>
            </div>

            <div className="flex flex-wrap -mx-3 -mb-6">
              {[
                {
                  title: "Trust Is Too Expensive",
                  desc: "In unfamiliar collaboration, transactions, and communities, trust must be rebuilt every time.",
                },
                {
                  title: "Reputation Cannot Travel",
                  desc: "Records from one platform can’t be reused elsewhere. Trust becomes fragmented and repeatedly lost.",
                },
                {
                  title: "Ratings Are Not Facts",
                  desc: "Scores are vulnerable to bias, emotion, and manipulation. Verifiable facts remain reliable over time.",
                },
              ].map((item, idx) => (
                <div key={idx} className="w-full md:w-1/3 px-3 mb-6">
                  <div className="h-full p-8 bg-white rounded-2xl shadow border border-blueGray-100">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
                      {idx + 1}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-blueGray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What NoKu Is */}
        <section className="py-20 bg-blueGray-50">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-start -mx-3">
              <div className="w-full lg:w-1/2 px-3 mb-10 lg:mb-0">
                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
                  What Is NoKu?
                </h2>
                <p className="text-blueGray-500 leading-relaxed mb-6">
                  NoKu is a trust data mechanism designed to convert real actions into verifiable trust credentials.
                  It emphasizes longevity, portability, and permissioned access—rather than one-time evaluations or platform-bound reputation.
                </p>

                <div className="space-y-4">
                  <div className="p-5 bg-white rounded-xl border border-blueGray-100">
                    <div className="font-bold mb-1">Record</div>
                    <div className="text-blueGray-500">
                      Capture completed delivery and transaction outcomes as structured records.
                    </div>
                  </div>
                  <div className="p-5 bg-white rounded-xl border border-blueGray-100">
                    <div className="font-bold mb-1">Verify</div>
                    <div className="text-blueGray-500">
                      Validate integrity and consistency to ensure auditability.
                    </div>
                  </div>
                  <div className="p-5 bg-white rounded-xl border border-blueGray-100">
                    <div className="font-bold mb-1">Attest</div>
                    <div className="text-blueGray-500">
                      Issue attestations with minimal disclosure—prove conclusions without exposing raw details.
                    </div>
                  </div>
                </div>
              </div>

              {/* Boundaries */}
              <div className="w-full lg:w-1/2 px-3">
                <div className="p-8 bg-white rounded-2xl shadow border border-blueGray-100">
                  <h3 className="text-2xl font-bold mb-4">What We Do Not Do</h3>

                  <ul className="space-y-4 text-blueGray-500 leading-relaxed">
                    <li>
                      <span className="font-bold text-blueGray-800">We do not score people:</span>{" "}
                      Complex reality can’t be reduced to a single number. Facts matter more.
                    </li>
                    <li>
                      <span className="font-bold text-blueGray-800">We do not broker transactions:</span>{" "}
                      Neutrality is essential for long-term trust.
                    </li>
                    <li>
                      <span className="font-bold text-blueGray-800">We do not arbitrate disputes:</span>{" "}
                      We provide traceable records, not judgments.
                    </li>
                    <li>
                      <span className="font-bold text-blueGray-800">We do not own your trust:</span>{" "}
                      Trust belongs to the individual who generated the actions.
                    </li>
                  </ul>

                  <div className="mt-6 p-5 rounded-xl bg-blueGray-50 border border-blueGray-100">
                    <div className="font-bold mb-1">In One Sentence</div>
                    <div className="text-blueGray-500">
                      We do not issue trust conclusions — we provide verifiable evidence for trust
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
                How the System Works
              </h2>
              <p className="text-blueGray-500 leading-relaxed">
                Real-world scenarios generate facts. The mechanism converts them into proofs.
                You authorize who can verify conclusions—without exposing unnecessary details.
              </p>
            </div>

            <div className="flex flex-wrap -mx-3 -mb-6">
              {[
                { title: "Fact generation", desc: "Facts are produced by real delivery and completed transactions." },
                { title: "Structured recording", desc: "Key events are standardized into consistent records." },
                { title: "Verification & attestation", desc: "Integrity checks enable auditability and proof." },
                { title: "Permissioned disclosure", desc: "You control access. Minimal disclosure by default." },
                { title: "Cross-scenario reuse", desc: "Reusable across work, life, and future collaborations." },
                { title: "Long-term accumulation", desc: "Trust compounds with time and consistent fulfillment." },
              ].map((item, idx) => (
                <div key={idx} className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                  <div className="h-full p-8 bg-white rounded-2xl shadow border border-blueGray-100">
                    <div className="text-xs font-bold uppercase tracking-widest text-blueGray-400 mb-2">
                      Step {String(idx + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-blueGray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-20 bg-blueGray-900 text-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2
                className="text-3xl lg:text-4xl font-bold font-heading mb-4"
                style={{ color: "#B8860B" }}
              >
                Our Principles
              </h2>
              <p className="text-blueGray-200 leading-relaxed">
                Only clear boundaries and long-term principles can sustain truly trustworthy infrastructure
              </p>
            </div>

            <div className="flex flex-wrap -mx-3 -mb-6">
              {[
                {
                  title: "Privacy First",
                  desc: "Minimal disclosure, revocable authorization, proof without unnecessary exposure.",
                },
                {
                  title: "Neutral by Design",
                  desc: "No transactional interest and no centralized power over trust.",
                },
                {
                  title: "Long-Term Orientation",
                  desc: "Trust compounds over time. Duration is the fairest validator.",
                },
              ].map((item, idx) => (
                <div key={idx} className="w-full md:w-1/3 px-3 mb-6">
                  <div className="h-full p-8 rounded-2xl bg-blueGray-800 border border-blueGray-700">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-blueGray-200 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/contact" legacyBehavior>
                <a className="inline-block py-4 px-10 text-sm font-semibold rounded bg-white text-blueGray-900 hover:opacity-90 transition">
                  Discuss Integration & Collaboration
                </a>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AboutEn;
