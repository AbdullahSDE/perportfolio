import React, { useEffect } from "react"
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const SCREEN_CONSTSANTS = {
        description:
            "I am a versatile individual with an enthusiastic, proactive and highly adaptable mind to learn any technological skills required for contributing to the project and getting the job done. I am very passionate about web development & strive to better myself as a developer everyday. A strong engineering professional with a Bachelor of Science - B.Sc (Hons) focused in Information & Communication Technology from De Montfort University, Leicester, United Kingdom.",
        highlights: {
            bullets: [
                "Full Stack web and mobile development",
                "Interactive Front End as per the design",
                "React and React Native",
                "Redux for State Mnanagement",
                "Building REST API",
                "Managing database",
            ],
            heading: "Here are a Few Highlights:",
        }
    }

    const renderHighlight = () => {
        return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
            <div className="highlight" key={i}>
                <div className="highlight-blob"></div>
                <span>{value}</span>
            </div>
        ));
    };

    return (
        <div
            className="about-me-container screen-container fade-in" id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <span className="about-me-description">
                            {SCREEN_CONSTSANTS.description}
                        </span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className="about-me-options">
                            <button className="btn primary-btn"
                            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                {""}
                                Hire Me{" "}
                            </button>
                            <a href="CVofZuhaer.pdf" download="Abdullah CVofZuhaer.pdf">
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}