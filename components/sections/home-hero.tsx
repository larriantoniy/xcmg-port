"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { contactHref } from "@/data/company";
import { heroMedia } from "@/data/hero-media";

interface NavigatorWithConnection extends Navigator {
  connection?: { saveData?: boolean };
}

export function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasAttemptedPlayback = useRef(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia(heroMedia.desktopMediaQuery);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData = (navigator as NavigatorWithConnection).connection?.saveData === true;

    if (!desktop.matches || reducedMotion.matches || saveData) return;

    const timer = window.setTimeout(() => setShouldLoadVideo(true), heroMedia.videoDelayMs);
    return () => window.clearTimeout(timer);
  }, []);

  function startVideo() {
    const video = videoRef.current;
    if (!video || hasAttemptedPlayback.current) return;
    hasAttemptedPlayback.current = true;
    void video.play().catch(() => setVideoActive(false));
  }

  return (
    <section className={`home-hero${videoActive ? " home-hero-video-active" : ""}`} aria-labelledby="home-hero-title">
      <div className="home-hero-media">
        <Image
          className="home-hero-image"
          src={heroMedia.image}
          alt="Ричстакер XCMG на контейнерной площадке"
          fill
          priority
          sizes="100vw"
        />
        {shouldLoadVideo ? (
          <video
            ref={videoRef}
            className="home-hero-video"
            muted
            playsInline
            autoPlay
            preload="auto"
            aria-hidden="true"
            onCanPlay={startVideo}
            onPlaying={() => setVideoActive(true)}
            onEnded={() => setVideoActive(false)}
            onError={() => setVideoActive(false)}
          >
            <source src={heroMedia.video} type="video/mp4" />
          </video>
        ) : null}
        <div className="home-hero-overlay" aria-hidden="true" />
      </div>

      <div className="home-hero-copy">
        <div className="home-hero-message" aria-hidden={videoActive || undefined}>
          <p className="eyebrow eyebrow-light">Контейнерная техника XCMG</p>
          <h1 id="home-hero-title">Ричстакеры XCMG</h1>
          <p className="hero-lead">Техника для перемещения и штабелирования контейнеров. Поможем сопоставить модели по ключевым параметрам и подготовить коммерческое предложение.</p>
        </div>
        <div className="actions">
          <Link className="button" href={contactHref("quote")}>Получить предложение</Link>
          <Link className="button button-secondary button-on-dark" href="/richstackery">Смотреть ричстакеры</Link>
        </div>
      </div>
    </section>
  );
}
