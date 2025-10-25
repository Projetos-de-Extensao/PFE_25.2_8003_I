import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./mainLayout.css";


function MainLayout({ children, centerContent = false, isDashboardPage = false }) {
  const mainClassName = centerContent
    ? "layout-main-content-centered"
    : "layout-main-content";

  return (
    <div className="layout-container">
      <Header showLogout={isDashboardPage} />
      <main className={mainClassName}>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;