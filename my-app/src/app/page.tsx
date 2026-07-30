"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";

const stars = Array.from({ length: 72 }, (_, index) => ({
  id: index,
  x: (index * 47 + 11) % 100,
  y: (index * 73 + 7) % 100,
  size: index % 13 === 0 ? 3 : index % 5 === 0 ? 2 : 1,
  duration: 2.6 + (index % 7) * 0.7,
  delay: -((index * 0.61) % 5),
  tone: index % 9 === 0 ? "navy" : index % 7 === 0 ? "blue" : "white",
}));

function CursorRocket() {
  const rocket = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = { x: window.innerWidth * 0.72, y: window.innerHeight * 0.3 };
    const current = { ...target };
    let frame = 0;
    let time = 0;

    const move = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    const animate = () => {
      time += 0.035;
      const orbitX = Math.cos(time) * 74;
      const orbitY = Math.sin(time * 1.25) * 48;
      current.x += (target.x + orbitX - current.x) * 0.055;
      current.y += (target.y + orbitY - current.y) * 0.055;

      if (rocket.current) {
        const angle = Math.atan2(
          target.y + orbitY - current.y,
          target.x + orbitX - current.x,
        );
        rocket.current.style.transform =
          `translate3d(${current.x}px, ${current.y}px, 0) rotate(${angle + Math.PI / 2}rad)`;
      }
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", move, { passive: true });
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="rocket" ref={rocket} aria-hidden="true">
      <span className="rocket-nose" />
      <span className="rocket-window" />
      <span className="rocket-body" />
      <span className="rocket-fin rocket-fin--left" />
      <span className="rocket-fin rocket-fin--right" />
      <span className="rocket-flame" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="night">
      <div className="stars" aria-hidden="true">
        {stars.map((star) => (
          <i
            className={`star star--${star.tone}`}
            key={star.id}
            style={
              {
                "--x": `${star.x}%`,
                "--y": `${star.y}%`,
                "--size": `${star.size}px`,
                "--duration": `${star.duration}s`,
                "--delay": `${star.delay}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <CursorRocket />

      <article className="portfolio">
        <header className="window-bar">
          <div className="window-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p>CHRIS.EXE</p>
          <span className="signal" aria-hidden="true">•••</span>
        </header>

        <div className="card-content">
          <h1>HI, MY NAME IS CHRISTOPHER</h1>
          <p className="intro">
            I&apos;m a Stanford student studying economics and computer science.
            I&apos;m currently building{" "}
            <a href="https://nebulab.ai" target="_blank" rel="noreferrer">
              Nebulab
            </a>
            , a neurotechnology wearable designed to actively improve sleep. I
            enjoy playing basketball and exploring new cities.
          </p>
          <p className="past-life">IN A PAST LIFE:</p>
          <ul className="experience-list">
            <li>
              Ranked the world&apos;s <strong>#1 Public Forum debater.</strong>
            </li>
            <li>
              Supported buy-side advisory at <strong>ExecCap Advisors</strong> for
              a technology and IT outsourcing roll-up through target sourcing,
              market research, financial modeling, and executive outreach.
            </li>
            <li>
              Founded{" "}
              <a href="https://debatify.app" target="_blank" rel="noreferrer">
                Debatify.app
              </a>
              , an AI debate platform serving 25,000+ users and generating
              $10,000+ ARR; built RAG and retrieval pipelines and contributed to
              NSF-, AWS-, and NAIRR-funded research.
            </li>
            <li>
              Modeled EV range perceptions at <strong>NIST</strong> using 1,443
              survey responses, Bayesian regression, and multinomial methods in
              R and Python.
            </li>
            <li>
              Analyzed 200M+ EV sales observations at{" "}
              <strong>Cornell University</strong> using discrete-choice models,
              panel econometrics, and large-scale data pipelines.
            </li>
          </ul>
          <div className="card-footer">
            <p>
              <svg
                className="pixel-tree"
                viewBox="0 0 19 23"
                aria-hidden="true"
                shapeRendering="crispEdges"
              >
                <path
                  fill="#075b28"
                  d="M8 0h3v3h2v2h2v3h-2v2h2v3h2v2h2v4h-2v2h-2v2H4v-2H2v-2H0v-4h2v-2h2v-3h2V8H4V5h2V3h2z"
                />
                <path
                  fill="#39ae48"
                  d="M9 1h1v3h2v2h2v1h-3v3h3v2h-3v2h4v2h2v2h-2v2H4v-2H2v-2h2v-2h4v-2H6v-2h3V7H6V6h2V4h1z"
                />
                <path fill="#58c75b" d="M9 2h1v4H8v1H6V6h2V4h1zM8 8h2v5H6v-2h2zM6 14h4v5H3v-2h2v-2h1z" />
                <path fill="#168337" d="M10 4h2v3h-2zM10 8h3v3h-3zM10 12h4v3h-4zM10 16h6v3h-6zM6 20h9v1H6z" />
                <path fill="#51321b" d="M8 19h4v4H8z" />
                <path fill="#a16a37" d="M8 19h2v4H8z" />
              </svg>
              STANFORD UNIVERSITY
            </p>
            <span className="footer-links">
              <a href="mailto:ctang08@stanford.edu">CONTACT</a>
              <a
                href="https://www.linkedin.com/in/christopher-y-tang"
                target="_blank"
                rel="noreferrer"
              >
                LINKEDIN
              </a>
            </span>
          </div>
        </div>
      </article>
    </main>
  );
}
