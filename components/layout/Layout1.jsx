import Head from "next/head";
import React, { useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header1 from "./Header1";
import MobileMenu from "./MobileMenu";

const Layout1 = ({ children }) => {
    const [hiddenClass, setHiddenClass] = useState("hidden");

    const handleHidden = () => setHiddenClass("");

    const handleRemove = () => {
        if (hiddenClass === "") {
            setHiddenClass("hidden");
        }
    };

    return (
        <>
            <div className="main font-body text-body">
                <Header1 handleHidden={handleHidden} />
                <MobileMenu
                    hiddenClass={hiddenClass}
                    handleRemove={handleRemove}
                />
                {children}
                <Footer />
                <BackToTop />
            </div>
        </>
    );
};

export default Layout1;
