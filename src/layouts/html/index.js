import s from "./styles.module.scss";
import React from "react";
import FullWidthTopAd from "../../components/AdSlots/FullWidthTopAd";

const HtmlLayout = ({ children }) => {
    return (
        <div className={s.app}>
            <div className={s.fakeTopAd}>
                <FullWidthTopAd />
            </div>
            <div className={s.fakeHeader} />
            { children }
            <div className={s.fakeFooter} />
        </div>
    );
};

export default HtmlLayout;