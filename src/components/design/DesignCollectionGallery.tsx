"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

import type { DesignGalleryGroup } from "@/data/designCaseStudies";

type DesignCollectionGalleryProps = {
  groups: DesignGalleryGroup[];
};

export default function DesignCollectionGallery({
  groups,
}: DesignCollectionGalleryProps) {
  const items = useMemo(
    () =>
      groups.flatMap((group) =>
        group.items.map((item) => ({
          ...item,
          groupTitle: group.title,
        })),
      ),
    [groups],
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex === null ? null : items[activeIndex];

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === 0 ? items.length - 1 : current - 1;
    });
  }, [items.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === items.length - 1 ? 0 : current + 1;
    });
  }, [items.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, showNext, showPrevious]);

  return (
    <>
      <div className="design-collection-groups">
        {groups.map((group) => (
          <section className="design-gallery-group" key={group.title}>
            <div className="design-gallery-heading">
              <h2>{group.title}</h2>
              <p>{group.description}</p>
            </div>

            <div
              className={`design-thumbnail-grid${
                group.items.length === 1 ? " design-thumbnail-grid-single" : ""
              }`}
            >
              {group.items.map((item) => {
                const itemIndex = items.findIndex(
                  (galleryItem) =>
                    galleryItem.title === item.title &&
                    galleryItem.groupTitle === group.title,
                );

                const thumbnailContent = (
                  <>
                    <span
                      className="design-thumbnail-image"
                      style={
                        item.aspectRatio
                          ? { aspectRatio: item.aspectRatio }
                          : undefined
                      }
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes={
                          group.items.length === 1
                            ? "(max-width: 980px) 100vw, 720px"
                            : "(max-width: 700px) 50vw, (max-width: 1100px) 50vw, 260px"
                        }
                        className={getThumbnailImageClass(item.image)}
                      />
                    </span>
                  </>
                );

                if (item.link) {
                  return (
                    <a
                      className="design-thumbnail"
                      href={item.link}
                      key={`${group.title}-${item.title}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${item.title}`}
                    >
                      {thumbnailContent}
                    </a>
                  );
                }

                return (
                  <button
                    type="button"
                    className="design-thumbnail"
                    key={`${group.title}-${item.title}`}
                    onClick={() => setActiveIndex(itemIndex)}
                    aria-label={`Open ${item.title}`}
                  >
                    {thumbnailContent}
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {activeItem && activeIndex !== null ? (
        <div
          className="design-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeItem.title} large preview`}
        >
          <button
            type="button"
            className="design-lightbox-backdrop"
            onClick={() => setActiveIndex(null)}
            aria-label="Close preview"
          />

          <div className="design-lightbox-panel">
            <div className="design-lightbox-topbar">
              <div>
                <p>{activeItem.groupTitle}</p>
                <h2>{activeItem.title}</h2>
              </div>
              <button
                type="button"
                className="design-lightbox-close"
                onClick={() => setActiveIndex(null)}
                aria-label="Close preview"
              >
                X
              </button>
            </div>

            <div className="design-lightbox-stage">
              <button
                type="button"
                className="design-lightbox-arrow design-lightbox-prev"
                onClick={showPrevious}
                aria-label="Previous image"
              >
                ←
              </button>

              <div className="design-lightbox-image">
                <Image
                  src={activeItem.image}
                  alt={activeItem.alt}
                  fill
                  sizes="90vw"
                  priority
                  className={getLightboxImageClass(activeItem.image)}
                />
              </div>

              <button
                type="button"
                className="design-lightbox-arrow design-lightbox-next"
                onClick={showNext}
                aria-label="Next image"
              >
                →
              </button>
            </div>

            <p className="design-lightbox-count">
              {activeIndex + 1} / {items.length}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

function getThumbnailImageClass(image: string) {
  if (image.includes("logo") || image.includes("brand")) return "object-contain p-8";
  return "object-contain";
}

function getLightboxImageClass(image: string) {
  if (image.includes("logo") || image.includes("brand")) return "object-contain p-8";
  return "object-contain p-4";
}
