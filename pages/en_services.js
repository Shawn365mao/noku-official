import React from "react";
import Layout from "../components/layout/Layout";

const styles = {
  pillRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "32px",
    marginTop: "60px",
  },
  pill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "18px 48px",
    borderRadius: "9999px",
    background: "#FFFFFF",
    border: "2px solid rgba(148,163,184,0.3)",
    boxShadow: "0 10px 25px rgba(2,6,23,0.05)",
    fontSize: "18px",
    fontWeight: 700,
    color: "#0f172a",
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
  listIndent: { paddingLeft: "1.25rem" },
};

const ServiceCard = ({
  title,
  icon,
  name,
  description,
  features,
  accentColor,
  bgGradient,
}) => {
  const href =
    icon === "WeXun"
      ? "https://wexun.com"
      : icon === "YouBo"
      ? "https://youbo.com"
      : "https://promisebook.net";

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
      <h3
        className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-center px-4 leading-tight"
        style={{ color: accentColor }}
      >
        {title}
      </h3>

      <div
        className="p-8 bg-white rounded-3xl border-2 h-full text-center transition-all duration-300 hover:-translate-y-2 shadow-sm"
        style={{ borderColor: `${accentColor}40`, background: bgGradient }}
      >
        <div className="mb-8 flex justify-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-105"
          >
            <div
              style={{
                width: "144px",
                height: "144px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={`/assets/imgs/icons/${icon}.png`}
                alt={icon}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </a>
        </div>

        <h4 className="text-2xl font-bold mb-3">{name}</h4>

        <p className="text-blueGray-600 text-sm leading-relaxed mb-6">
          <strong className="text-blueGray-800">
            {description.bold}
          </strong>
          <br />
          {description.normal}
        </p>

        <ul className="text-sm text-blueGray-600 space-y-3 text-left border-t border-blueGray-100 pt-6 px-5">
          {features.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <Layout>
      {/* [1] Hero Section */}
      <section className="bg-white -mt-24 pt-20">
        <div className="container px-4 mx-auto pt-8 text-center">
          <div className="max-w-6xl mx-auto mb-6">
            <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-8 font-bold font-heading text-blueGray-900">
              NoKu LLC <br />
              <span className="text-blue-500">
                Building Verifiable Trust Across Real-World Scenarios
              </span>
            </h1>

            {/* Refined Hero Statement */}
            <div className="mt-10 max-w-5xl mx-auto px-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blueGray-200 bg-white text-xs font-semibold tracking-widest text-blueGray-500">
                CLOSED-LOOP TRUST ECOSYSTEM
              </div>

              <div className="mt-6 text-blueGray-700 text-xl lg:text-3xl font-medium leading-relaxed">
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="text-blueGray-900 font-extrabold">
                      WeXun
                    </span>{" "}
                    and{" "}
                    <span className="text-blueGray-900 font-extrabold">
                      YouBo
                    </span>
                    <span className="mx-2 text-blueGray-400">·</span>
                    capture real professional fulfillment and everyday
                    transactions
                  </div>

                  <div className="h-px w-16 bg-blueGray-200 mx-auto lg:mx-0" />

                  <div>
                    <span className="text-blueGray-900 font-extrabold">
                      PromiseBook
                    </span>
                    <span className="mx-2 text-blueGray-400">·</span>
                    settles facts into{" "}
                    <span className="text-blueGray-900 font-extrabold mx-1">
                      verifiable / permissioned / reusable
                    </span>{" "}
                    digital proofs
                  </div>

                  <div className="h-px w-16 bg-blueGray-200 mx-auto lg:mx-0" />

                  <div>
                    turning{" "}
                    <span className="text-blueGray-900 font-extrabold mx-1">
                      integrity
                    </span>
                    into trust credentials that move across platforms
                  </div>
                </div>
              </div>

              <p className="mt-5 text-blueGray-500 text-sm lg:text-base leading-relaxed">
                No subjective scoring. Only facts and proof — designed for
                long-term trust portability.
              </p>
            </div>
          </div>

          <div style={styles.pillRow}>
            {[
              "Evidence Before Opinion",
              "Minimal Disclosure",
              "Behavior Made Visible",
            ].map((text) => (
              <span
                key={text}
                style={styles.pill}
                className="hover:border-blue-500 hover:text-blue-600 hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* [2] Service Cards */}
      <section className="py-24 bg-white relative z-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <ServiceCard
              title="Professional Fulfillment & Productivity Hub"
              icon="WeXun"
              name="WeXun"
              accentColor="#3b82f6"
              bgGradient="linear-gradient(180deg, rgba(59,130,246,0.04) 0%, #ffffff 50%)"
              description={{
                bold: "Fulfill commitments. Prove professional value.",
                normal:
                  "Every delivery and collaboration becomes a verifiable record of execution.",
              }}
              features={[
                "Traceable collaboration and verifiable outcomes",
                "Precise matching between skills and demand",
                "Compounding long-term professional trust",
              ]}
            />

            <ServiceCard
              title="Everyday Transactions & Reputation Network"
              icon="YouBo"
              name="YouBo"
              accentColor="#FF9500"
              bgGradient="linear-gradient(180deg, rgba(255,149,0,0.05) 0%, #ffffff 50%)"
              description={{
                bold: "Trade honestly. Build everyday reputation.",
                normal:
                  "Reputation is grounded in what actually happened — not subjective impressions.",
              }}
              features={[
                "Real identity and transaction trails",
                "Traceable disputes with clear accountability",
                "Reusable everyday trust records",
              ]}
            />

            <ServiceCard
              title="Trust Ledger & Proof Infrastructure"
              icon="PromiseBook"
              name="PromiseBook"
              accentColor="#B8860B"
              bgGradient="linear-gradient(180deg, rgba(184,134,11,0.06) 0%, #ffffff 50%)"
              description={{
                bold: "Behavior becomes assets. Integrity becomes value.",
                normal:
                  "No judging, no endorsement — only standardized recording, issuance, and verification.",
              }}
              features={[
                "Verifiable behavioral proofs",
                "Cross-platform trust mapping",
                "Institution-grade permissioned interfaces",
              ]}
            />
          </div>

          <div className="max-w-6xl mx-auto text-center mt-20 px-6 py-12 rounded-3xl border border-blueGray-100 bg-blueGray-50/50">
            <div className="text-blueGray-800 leading-loose font-medium text-lg md:text-xl">
              <span className="block">
                NoKu is not merely a technology stack — it is a redesign of how
                society coordinates trust.
              </span>

              <span className="block mt-2">
                By converting real fulfillment into accumulative digital assets,
                we build an ecosystem where integrity compounds over time.
              </span>

              <span className="block mt-2">
                Here, trust is no longer an abstract slogan, but real value that
                travels across scenarios.
              </span>

              <span className="block mt-4 font-bold text-blueGray-900">
                <span className="block">
                  We are building more than a tool — we are building a compounding
                  trust system:
                </span>

                <span className="block mt-2 font-normal text-blueGray-800">
                  rewarding promise-keepers through every interaction with
                  long-term reputation;
                </span>

                <span className="block mt-2 font-normal text-blueGray-800">
                  exposing deception through transparent fact trails, making
                  trust the strongest passport of the digital era.
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
