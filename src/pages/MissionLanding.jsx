import React from "react";
import {
  RiSearch2Line,
  RiHeartLine,
  RiUserLine,
  RiShoppingBagLine,
  RiArrowRightUpLine,
} from "react-icons/ri";
import SectionImg from '../assets/images/LaurenWakeman.webp'

import "./MissionLanding.css";
import LogoText from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
function MissionLanding() {
  return (
    <div className="mission-landing">

      <header className="pl-header">
        <div className="pl-header-inner">
          <div className="pl-header-logo">
            <Link to="/">
              <img src={LogoText} alt="Riwaq" />
            </Link>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="mission-hero">
        <div className="mission-hero-inner">
          <h1>
            A Journey of Craft, Culture <br /> & Conscious Fashion
          </h1>
          <p>
            Riwaq is a student-led project exploring how upcycling can honor
            Moroccan identity and elevate handmade fashion with purpose,
            storytelling, and cultural roots.
          </p>
          <button className="join-btn">
            Join Us <RiArrowRightUpLine />
          </button>
        </div>
      </section>

      {/* ================= SECTION 1 ================= */}
      <section className="mission-section">
        <h2>Why We Started</h2>
        <p>
          As students,  we are building
          understanding. Riwaq began with a simple belief: that fabrics,
          garments, and materials have histories we should not throw away.
        </p>
        <img
          src={SectionImg}
          alt="artisan"
          className="section-image"
        />
      </section>

      {/* ================= CARDS ================= */}
      <section className="mission-blocks">
        <div className="mission-card">
          <div className="mission-card-icon">
            <RiHeartLine />
          </div>
          <h3>A Culture Worth Preserving</h3>
          <p>
            Moroccan craftsmanship has always been a language of memory.
            Upcycling lets us protect that heritage while keeping it alive in
            modern fashion.
          </p>
        </div>

        <div className="mission-card">
          <div className="mission-card-icon">
            <RiShoppingBagLine />
          </div>
          <h3>Upcycling as Respect</h3>
          <p>
            Upcycling is not just sustainable; it is a way to honor the people,
            stories, hands, and environments behind every material.
          </p>
        </div>

        <div className="mission-card">
          <div className="mission-card-icon">
            <RiUserLine />
          </div>
          <h3>Learning With You</h3>
          <p>
            We are here to learn from artisans, understand real challenges,
            exchange knowledge, and contribute to meaningful fashion together.
          </p>
        </div>
      </section>

      {/* ================= INVITE ================= */}
      <section className="mission-invite">
        <h2>A Space to Connect</h2>
        <p>
          Riwaq is a gateway — a riwaq — for creators who want to explore
          thoughtful fashion, upcycling, and cultural expression.
        </p>
        <p>
          If this journey speaks to you, we invite you to walk with us.
        </p>

        <button className="join-btn dark">
          Join Us <RiArrowRightUpLine />
        </button>
      </section>

      {/* ================= CUSTOM FOOTER ================= */}
      <footer className="pl-footer">
        <div className="pl-footer-inner">

          {/* Newsletter */}
          <div className="pl-footer-column newsletter">
            <h3>Stay Connected</h3>
            <p>Get project updates, stories, and research progress.</p>
            <div className="newsletter-input">
              <input type="text" placeholder="Enter your email" />
              <button>
                <RiArrowRightUpLine />
              </button>
            </div>
          </div>

          {/* Links 
          <div className="pl-footer-links">
            <div className="col">
              <a href="#">Our Mission</a>
              <a href="#">Journal</a>
              <a href="#">Artisans</a>
            </div>
            <div className="col">
              <a href="#">Culture</a>
              <a href="#">Sustainability</a>
              <a href="#">Contact</a>
            </div>
          </div>*/}
        </div>

        {/* Brand */}
        <div className="pl-footer-brand">

          <img src={LogoText} alt="Riwaq" />

        </div>
        <p className="pl-footer-copy">
          © 2025 Riwaq – Student Research Initiative
        </p>
      </footer>
    </div>
  );
}

export default MissionLanding;
