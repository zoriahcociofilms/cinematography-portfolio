import { useEffect, useRef, useState } from "react";
import { Play, Maximize2, X } from "lucide-react";
import { asset, cycleDialogFocus } from "../lib";
import type { Film, Still, StockPhoto } from "../content/site";

export function Artwork({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div
      className={`media-fallback ${className}`}
      role="img"
      aria-label="Media unavailable"
    >
      Media unavailable
    </div>
  ) : (
    <img
      className={className}
      src={asset(src)}
      alt={alt}
      width="1920"
      height="1280"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

export function AssetLabel({
  children = "Abstract light study · Temporary artwork",
}: {
  children?: string;
}) {
  return (
    <span className="asset-label">
      <span aria-hidden="true" />
      {children}
    </span>
  );
}

export function StockFigure({
  photo,
  className = "",
  priority = false,
  sizes = "100vw",
}: {
  photo: StockPhoto;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure className={`stock-figure ${className}`} data-provenance="stock">
      <img
        src={asset(photo.src)}
        srcSet={`${asset(photo.small)} 800w, ${asset(photo.src)} ${photo.width}w`}
        sizes={sizes}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
      <figcaption>
        <span>{photo.place}</span>
      </figcaption>
    </figure>
  );
}

export function FilmPlayer({ film }: { film: Film }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  if (film.kind === "file")
    return (
      <div
        className="film-player"
        style={{
          aspectRatio: `${film.width} / ${film.height}`,
          maxWidth: film.width,
        }}
      >
        {error ? (
          <p className="player-message" role="status">
            This film could not be loaded. Please try again later.
          </p>
        ) : (
          <video
            controls
            playsInline
            preload="metadata"
            poster={asset(film.poster)}
            aria-label={film.title}
            width={film.width}
            height={film.height}
            onError={() => setError(true)}
          >
            <source src={asset(film.src)} type="video/mp4" />
            {film.captions && (
              <track
                default
                kind="captions"
                src={asset(film.captions)}
                srcLang="en"
                label="English"
              />
            )}
            Your browser does not support this video.
          </video>
        )}
      </div>
    );
  const id = encodeURIComponent(film.id);
  const src =
    film.kind === "vimeo"
      ? `https://player.vimeo.com/video/${id}?dnt=1`
      : `https://www.youtube-nocookie.com/embed/${id}`;
  return (
    <div className="film-player">
      {loaded ? (
        <iframe
          src={src}
          title={film.title}
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <div className="embed-consent">
          <button className="outline-button" onClick={() => setLoaded(true)}>
            <Play size={16} aria-hidden="true" /> Load film
          </button>
          <p>
            Loads a video from {film.kind === "vimeo" ? "Vimeo" : "YouTube"}.
            The provider may receive connection information.
          </p>
        </div>
      )}
    </div>
  );
}

export function Gallery({ stills }: { stills: Still[] }) {
  const modal = useRef<HTMLDialogElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const [selected, setSelected] = useState(0);
  function open(index: number) {
    previousFocus.current = document.activeElement as HTMLElement;
    setSelected(index);
    modal.current?.showModal();
    document.body.style.overflow = "hidden";
  }
  function close() {
    modal.current?.close();
    document.body.style.overflow = "";
    previousFocus.current?.focus();
  }
  useEffect(
    () => () => {
      document.body.style.overflow = "";
    },
    [],
  );
  if (!stills.length) return null;
  const still = stills[selected];
  return (
    <>
      <div className="gallery">
        {stills.map((item, index) => (
          <figure key={item.src}>
            <button
              onClick={() => open(index)}
              aria-label={`Enlarge image: ${item.alt}`}
            >
              <Artwork src={item.src} alt={item.alt} />
              <Maximize2 size={18} aria-hidden="true" />
            </button>
            <figcaption>
              {item.caption}
              {item.temporary && " · Temporary artwork"}
            </figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={modal}
        className="gallery-modal"
        aria-label="Image gallery"
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          cycleDialogFocus(event);
          if (event.key === "ArrowRight")
            setSelected((selected + 1) % stills.length);
          if (event.key === "ArrowLeft")
            setSelected((selected + stills.length - 1) % stills.length);
        }}
      >
        <button
          className="icon-button gallery-close"
          onClick={close}
          aria-label="Close image gallery"
          autoFocus
        >
          <X aria-hidden="true" />
        </button>
        <figure>
          <Artwork src={still.src} alt={still.alt} priority />
          <figcaption>
            {still.caption}
            {still.temporary && " · Temporary artwork"}
          </figcaption>
        </figure>
        {stills.length > 1 && (
          <div className="gallery-controls">
            <button
              onClick={() =>
                setSelected((selected + stills.length - 1) % stills.length)
              }
            >
              Previous
            </button>
            <span aria-live="polite">
              {selected + 1} / {stills.length}
            </span>
            <button onClick={() => setSelected((selected + 1) % stills.length)}>
              Next
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}
