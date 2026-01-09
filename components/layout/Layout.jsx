import Head from "next/head";
import React, { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

const Layout = ({ children }) => {
  const [hiddenClass, setHiddenClass] = useState("hidden");

  const handleHidden = () => setHiddenClass("");
  const handleRemove = () => {
    if (hiddenClass === "") setHiddenClass("hidden");
  };

  // ✅ 关键：移动端菜单打开时锁定页面滚动，避免“点不到/穿透/乱跳”
  useEffect(() => {
    const isMenuOpen = hiddenClass === "";

    if (isMenuOpen) {
      // 锁滚动
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      // 恢复
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    // 组件卸载时兜底恢复
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [hiddenClass]);

  return (
    <>
      <div className="main font-body text-body min-h-screen overflow-x-hidden">
        <Header handleHidden={handleHidden} />
        <MobileMenu hiddenClass={hiddenClass} handleRemove={handleRemove} />
        {children}
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Layout;
