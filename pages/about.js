import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const About = () => {
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
                    关于 NoKu
                    <br />
                    <span className="text-blue-600">一个面向长期的信任基础设施</span>
                  </h1>

                  <p className="text-blueGray-500 leading-relaxed text-lg wow animate__animated animate__fadeIn">
                    NoKu 不是“撮合平台”，也不是“评分系统”。我们构建的是一套可运行的机制：
                    把真实发生过的履约与交易转化为可验证、可授权、可复用的信用凭证，
                    让信任不再依赖关系、情绪或平台背书。
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/services" legacyBehavior>
                      <a className="py-3 px-6 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded transition">
                        查看服务体系
                      </a>
                    </Link>
                    <Link href="/contact" legacyBehavior>
                      <a className="py-3 px-6 text-sm font-semibold text-blue-600 bg-white border border-blueGray-200 hover:border-blueGray-300 rounded transition">
                        联系我们
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
                    记录事实 → 验证完整性 → 出具证明（最小披露）。这是 NoKu 的核心流程。
                  </p>
                  <img
                    className="rounded-xl w-full"
                    src="/assets/imgs/illustrations/space.svg"
                    alt="NoKu Infrastructure"
                    onError={(e) => {
                      // 如果你没有这张图，不影响页面：直接隐藏
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
                我们在解决什么问题？
              </h2>
              <p className="text-blueGray-500 leading-relaxed">
                在跨城市、跨国家、跨平台的生活里，信任经常被迫“从零开始”。不是因为你不可靠，
                而是因为缺少一个能长期工作、可验证、可复用的事实记录体系。
              </p>
            </div>

            <div className="flex flex-wrap -mx-3 -mb-6">
              {[
                {
                  title: "信任的成本太高",
                  desc:
                    "陌生协作、陌生交易、陌生社区中，每一次建立信任都需要重新证明自己。",
                },
                {
                  title: "信用无法跨场景迁移",
                  desc:
                    "在 A 平台积累的记录无法在 B 场景使用，信誉被平台割裂，个人被迫重复投入。",
                },
                {
                  title: "评价系统不等于事实",
                  desc:
                    "评分容易失真：情绪化、刷单、报复、偏见。长期来看，只有“可核验的事实”更可靠。",
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
                  NoKu 是什么？
                </h2>
                <p className="text-blueGray-500 leading-relaxed mb-6">
                  NoKu 是一套“信任数据机制”，用来把真实行为转化为可验证的信用凭证。
                  它强调长期有效、可迁移、可授权，而不是一次性评价或平台内自嗨。
                </p>

                <div className="space-y-4">
                  <div className="p-5 bg-white rounded-xl border border-blueGray-100">
                    <div className="font-bold mb-1">Record（记录）</div>
                    <div className="text-blueGray-500">
                      记录真实发生的履约与交易结果，形成结构化轨迹。
                    </div>
                  </div>
                  <div className="p-5 bg-white rounded-xl border border-blueGray-100">
                    <div className="font-bold mb-1">Verify（验证）</div>
                    <div className="text-blueGray-500">
                      校验记录的完整性与一致性，确保可追溯、可核验。
                    </div>
                  </div>
                  <div className="p-5 bg-white rounded-xl border border-blueGray-100">
                    <div className="font-bold mb-1">Attest（证明）</div>
                    <div className="text-blueGray-500">
                      以最小披露方式出具“可信结论”，不公开不必要的细节。
                    </div>
                  </div>
                </div>
              </div>

              {/* Boundaries */}
              <div className="w-full lg:w-1/2 px-3">
                <div className="p-8 bg-white rounded-2xl shadow border border-blueGray-100">
                  <h3 className="text-2xl font-bold mb-4">我们不做什么？</h3>

                  <ul className="space-y-4 text-blueGray-500 leading-relaxed">
                    <li>
                      <span className="font-bold text-blueGray-800">不做主观评分：</span>
                      我们不把复杂现实压缩成单一分数；我们更重视可核验的事实。
                    </li>
                    <li>
                      <span className="font-bold text-blueGray-800">不做交易撮合：</span>
                      我们不成为利益相关方；保持中立才能长期可信。
                    </li>
                    <li>
                      <span className="font-bold text-blueGray-800">不当仲裁者：</span>
                      我们不代替用户判断，也不替任何一方站队；我们只提供可追溯记录与证明。
                    </li>
                    <li>
                      <span className="font-bold text-blueGray-800">不占有你的信用：</span>
                      信用属于行为发生者；你拥有授权权利与使用边界。
                    </li>
                  </ul>

                  <div className="mt-6 p-5 rounded-xl bg-blueGray-50 border border-blueGray-100">
                    <div className="font-bold mb-1">一句话总结</div>
                    <div className="text-blueGray-500">
                      我们不提供“信任结论”，我们提供“信任可以被验证的依据”。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Connects */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
                这套系统如何工作？
              </h2>
              <p className="text-blueGray-500 leading-relaxed">
                上层场景产生事实，底层机制沉淀证明。你可以授权给雇主、合作方、交易对象或机构，
                在需要时验证“结论”，而不是暴露全部过程与隐私。
              </p>
            </div>

            <div className="flex flex-wrap -mx-3 -mb-6">
              {[
                {
                  title: "事实输入",
                  desc: "来自协作履约、交易履约、服务履约等真实行为场景。",
                },
                {
                  title: "结构化记录",
                  desc: "对关键节点进行标准化记录：时间、角色、结果、证据指纹等。",
                },
                {
                  title: "验证与存证",
                  desc: "完整性校验、可追溯链路、必要时可出具一致性证明。",
                },
                {
                  title: "授权与证明",
                  desc: "由你授权，按最小披露原则输出：只证明结论，不泄露细节。",
                },
                {
                  title: "跨场景复用",
                  desc: "用于求职合作、租住交易、长期合作关系等多种真实需求。",
                },
                {
                  title: "长期沉淀",
                  desc: "时间越久、履约越多，可信度越强，形成真正可持续的信用资产。",
                },
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
  style={{ color: "#B8860B" }}   // 深金色
>
  我们坚持的原则
</h2>
<p className="text-blueGray-200 leading-relaxed">
  只有清晰的边界与长期原则，才能构建真正可信的基础设施
</p>

            </div>

            <div className="flex flex-wrap -mx-3 -mb-6">
              {[
                {
                  title: "隐私优先",
                  desc: "最小披露、可撤回授权、只验证结论不暴露细节。",
                },
                {
                  title: "中立可信",
                  desc: "不成为交易利益相关方，避免系统性偏见与权力中心。",
                },
                {
                  title: "长期主义",
                  desc: "记录越久越可信，让时间成为最公平的验证者。",
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
                  讨论合作与接入
                </a>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
