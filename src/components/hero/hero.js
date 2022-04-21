import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./hero.scss";
import { ReactComponent as Logo } from "../../images/icons/logo.svg";
import { ReactComponent as Insta } from "../../images/icons/instagram.svg";
import { ReactComponent as Twitter } from "../../images/icons/twitter.svg";
import {
    igLogo,
    twLogo,
    diLogo,
    discordIcon,
    tagIcon,
    pinIcon,
    doorIcon,
    pinCollection,
} from '../../images';
import heroVideo from '../../videos/reppinmass-opt.mp4'

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    // wait until DOM has been rendered
    useEffect(() => {
             
        gsap.set([
                '.headerAnimate', 
                '.bodyAnimate', 
                '.single-hero-highlight', 
                '.single-social-logo',
                '.heroButton',
            ], { 
                y: 0, 
                rotationY:-45,
                rotationX:15,
                opacity: 0,
                scale:1.2,
            }
        );

        gsap.set([
                '.hero-video',
                '.nothingImage'
            ], {
                opacity:0
            }
        )
        
        let heroTL = gsap.timeline({
            delay:1,
            defaults: {
                duration:.3,
                ease: "back.out(1)",
            },
        });
        
        heroTL.to(".heroHeader", {y: 0, rotationY:0, rotationX:0, scale:1, opacity: 1},"heroIn");
        heroTL.to(".heroBody", {y: 0, rotationY:0, rotationX:0, scale:1, opacity:1},"heroIn+=0.1");
        heroTL.to(".single-hero-highlight", {y: 0, rotationY:0, rotationX:0, scale:1, opacity: 1, stagger: 0.05 },"heroIn+=0.2");
        heroTL.to(".heroButton", {y: 0, rotationY:0, rotationX:0, scale:1, opacity: 1, stagger: 0.05 },"heroIn+=0.4");
        heroTL.to(".hero-video", {duration:1, ease:'none',opacity: 1},"heroIn+=.3");

        let nothingTL = gsap.timeline({
			scrollTrigger: {
				trigger: ".nothing-section",
				start: "top center", 
				toggleActions: "play none none reverse"
			},
            defaults: {
                duration:.3,
                ease: "back.out(1)",
            },
		});

        nothingTL.to('.nothingHeader', {y: 0, rotationY:0, rotationX:0, scale:1, opacity: 1},"nothingIn");
        nothingTL.to('.nothingBody', {y: 0, rotationY:0, rotationX:0, scale:1, opacity: 1},"nothingIn+=0.1");
        nothingTL.to('.nothingSpan', {y: 0, rotationY:0, rotationX:0, scale:1, opacity: 1},"nothingIn+=0.2");
        nothingTL.to('.nothingImage', {duration:1, ease:'none',opacity: 1},"nothingIn+=.3");

        let repTL = gsap.timeline({
			scrollTrigger: {
				trigger: ".rep-section",
				start: "center bottom", 
				toggleActions: "play none none reverse"
			},
            defaults: {
                duration:.3,
                ease: "back.out(1)",
            },
		});

        repTL.to(".repHeader", {y: 0, rotationY:0, rotationX:0, scale:1, opacity: 1},"heroIn");
        repTL.to(".repBody", {y: 0, rotationY:0, rotationX:0, scale:1, opacity:1},"heroIn+=0.1");
        repTL.to(".single-social-logo", {y: 0, rotationY:0, rotationX:0, scale:1, opacity: 1, stagger: 0.05 },"heroIn+=0.2");
    });

    return (
        <>
            <header className="header" role="banner">
                <div className="content">
                    <Logo />
                </div>
            </header>

            <section className="hero-section">
                <div className="content perspectiveBox">
                    
                    <div className="hero-video heroVideo c-width-50">
                        <video playsInline autoPlay muted loop poster="polina.jpg" id="bgvid">
                            
                            <source src={heroVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="hero-text c-width-50">
                        <h1 className="headerAnimate heroHeader">
                            Introducing the Reppin NFT Pass
                        </h1>
                        <p className="bodyAnimate heroBody">
                            Reppin NFT Passes grant access to the NFT Pin Collection 
                            on ReppinPins.com. There are 4 types of the passes: GM, 
                            HODL, WAGMI, and Probably nothing. Each pass also carries 
                            these utilities:
                        </p>
                        <div className="hero-highlights">
                            <div className="single-hero-highlight c-width-50">
                                <img src={tagIcon} alt="Tag Icon"/>
                                <span>
                                    Discounts on ReppinPins.com
                                </span>
                            </div>
                            <div className="single-hero-highlight c-width-50">
                                <img src={pinIcon} alt="Pin Icon"/>
                                <span>
                                    Collaborate on custom pins
                                </span>
                            </div>
                            <div className="single-hero-highlight c-width-50">
                                <img src={discordIcon} alt="Discord Icon"/>
                                <span>
                                    Access to Reppin&apos;s Discord
                                </span>
                            </div>
                            <div className="single-hero-highlight c-width-50">
                                <img src={doorIcon} alt="Door Icon"/>
                                <span>
                                    Early access to pin releases
                                </span>
                            </div>
                        
                            
                        </div>
                        <a className="seemax-button heroButton" href="https://www.premint.xyz/filipinoadz-site-list-2/">
                            <span>Buy On Open Sea</span>
                        </a>
                    </div>
                </div>
            </section>
            <section className="nothing-section">
                <div className="nothing-image nothingImage c-width-50">
                    <img src={pinCollection} alt="Reppin Pin Collection"/>
                </div>
                <div className="nothingText c-width-50">
                    <div className="content">
                        <h2 className="nothingHeader headerAnimate">
                            All Reppin NFT Pass holders get a pin. Probably nothing.
                        </h2>
                        <p className="nothingBody bodyAnimate">
                            All the owners of the Reppin NFT Pass gets 1 of 4 collectible 
                            pins for free*: <i>GM, HODL, WAGMI,</i> or <i>Probably Nothing</i>. 
                            These exclusive pins will carry utility at Reppin events and shows. 
                        </p>
                        <span className="nothingSpan bodyAnimate">
                            <i>*Shipping not included.</i>
                        </span>
                    </div>
                </div>
            </section>
            <section className="rep-section">
                <div className="content">
                    <h2 className="repHeader headerAnimate">Rep what you love</h2>

                    <p className="repBody repText bodyAnimate">
                        Since 2016, Reppin Pins has been making enamel pins that 
                        <i>rep what you love</i>. Reppin Pins will be taking the lead in 
                        creating collectible pins that rep the Web3 & NFT culture. 
                        Your NFT collection represents who you are and the 
                        communities you&apos;re a part of, rep them proudly.<br />
                        #repwhatyoulove #wagmi
                    </p>
                    <div className="social-logos">
                        <a className="single-social-logo" href="/">
                            <img src={twLogo} alt="twitter logo"/>
                        </a>
                        <a className="single-social-logo" href="/">
                            <img src={igLogo} alt="Insta logo"/>
                        </a>
                        <a className="single-social-logo" href="/">
                            <img src={diLogo} alt="Discord logo"/>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
