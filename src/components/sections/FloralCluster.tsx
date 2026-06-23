"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";

type FloralClusterProps = {
  side: "left" | "right";
};

type Flower = {
  x: number;
  y: number;
  scale: number;
  rotate: number;
  spreadX: number;
  spreadY: number;
  variant: "pink" | "yellow";
  opacity?: number;
};

const flowerSize = 180;
const clusterWidth = 790;
const clusterHeight = 740;
const renderedFlowerSize = 105;
const repelRadius = 165;
const maxRepel = 48;

type Pointer = {
  x: number;
  y: number;
};

function flowerMotion(flower: Flower, index: number, side: FloralClusterProps["side"]) {
  const direction = side === "left" ? 1 : -1;
  const wave = index % 7;
  const drift = index % 2 === 0 ? 1 : -1;
  const opacity = flower.opacity ?? 0.9;
  const floatX = direction * drift * (10 + wave * 2.1);
  const floatY = -(14 + (index % 5) * 3);
  const rotateDrift = direction * drift * (4 + wave * 0.7);

  return {
    "--delay": `${-(index * 0.72 + wave * 0.31)}s`,
    "--duration": `${10.2 + wave * 1.15}s`,
    "--float-x": `${floatX}px`,
    "--float-y": `${floatY}px`,
    "--float-x-soft": `${floatX * -0.45}px`,
    "--float-y-soft": `${floatY * 0.6}px`,
    "--float-x-return": `${floatX * 0.35}px`,
    "--float-y-return": `${floatY * -0.35}px`,
    "--rotate": `${direction * flower.rotate}deg`,
    "--rotate-drift": `${rotateDrift}deg`,
    "--rotate-drift-back": `${rotateDrift * -0.5}deg`,
    "--scale": flower.scale,
    "--scale-breathe": `${flower.scale + 0.035 + (index % 4) * 0.006}`,
    "--opacity": opacity,
    "--opacity-soft": Math.max(opacity - 0.28 - (index % 3) * 0.04, 0.36),
    "--opacity-bright": Math.min(opacity + 0.08, 1),
    "--hover-x": "0px",
    "--hover-y": "0px",
    "--hover-x-soft": "0px",
    "--hover-y-soft": "0px",
  } as CSSProperties;
}

function flowerRepel(left: number, top: number, pointer: Pointer | null) {
  if (!pointer) {
    return {
      active: false,
      x: 0,
      y: 0,
    };
  }

  const centerX = left + renderedFlowerSize / 2;
  const centerY = top + renderedFlowerSize / 2;
  const diffX = centerX - pointer.x;
  const diffY = centerY - pointer.y;
  const distance = Math.hypot(diffX, diffY);

  if (distance >= repelRadius) {
    return {
      active: false,
      x: 0,
      y: 0,
    };
  }

  const force = (1 - distance / repelRadius) ** 1.6;
  const safeDistance = Math.max(distance, 1);

  return {
    active: true,
    x: (diffX / safeDistance) * maxRepel * force,
    y: (diffY / safeDistance) * maxRepel * force,
  };
}

  const flowers: Flower[] = [
  // Bottom carpet
  { x: -100, y: 624, scale: 1.22, rotate: -12, spreadX: -10, spreadY: 10, variant: "pink" },
  { x: 42, y: 600, scale: 1.2, rotate: 8, spreadX: -8, spreadY: 6, variant: "yellow" },
  { x: 100, y: 632, scale: 1.24, rotate: -6, spreadX: -6, spreadY: 10, variant: "pink" },
  // { x: 162, y: 600, scale: 1.18, rotate: 14, spreadX: -3, spreadY: 6, variant: "yellow" },
  // { x: 224, y: 632, scale: 1.24, rotate: -16, spreadX: 4, spreadY: 10, variant: "pink" },
  // { x: 288, y: 600, scale: 1.2, rotate: 8, spreadX: 8, spreadY: 6, variant: "yellow" },
  { x: 354, y: 632, scale: 1.2, rotate: -10, spreadX: 12, spreadY: 10, variant: "pink" },
  { x: 426, y: 604, scale: 1.12, rotate: 16, spreadX: 16, spreadY: 6, variant: "yellow" },

  // Dense lower middle
  { x: 12, y: 552, scale: 1.12, rotate: 18, spreadX: -12, spreadY: 2, variant: "yellow" },
  { x: 72, y: 526, scale: 1.22, rotate: -8, spreadX: -8, spreadY: -2, variant: "pink" },
  // { x: 124, y: 554, scale: 1.16, rotate: 12, spreadX: -5, spreadY: 2, variant: "yellow" },
  { x: 188, y: 522, scale: 1.22, rotate: -18, spreadX: 0, spreadY: -3, variant: "pink" },
  { x: 252, y: 552, scale: 1.12, rotate: 6, spreadX: 5, spreadY: 2, variant: "yellow" },
  { x: 318, y: 520, scale: 1.18, rotate: -10, spreadX: 10, spreadY: -3, variant: "pink" },
  { x: 386, y: 548, scale: 1.1, rotate: 16, spreadX: 14, spreadY: 2, variant: "yellow" },
  { x: 458, y: 524, scale: 1.08, rotate: -12, spreadX: 18, spreadY: -4, variant: "pink", opacity: 0.93 },

  // Side wall
  { x: -16, y: 480, scale: 1.16, rotate: -10, spreadX: -14, spreadY: -4, variant: "pink" },
  { x: 44, y: 452, scale: 1.14, rotate: 14, spreadX: -10, spreadY: -8, variant: "yellow" },
  { x: 108, y: 480, scale: 1.2, rotate: -5, spreadX: -6, spreadY: -4, variant: "pink" },
  // { x: 172, y: 444, scale: 1.12, rotate: 18, spreadX: 0, spreadY: -10, variant: "yellow" },
  // { x: 238, y: 474, scale: 1.12, rotate: -14, spreadX: 6, spreadY: -6, variant: "pink" },
  { x: 340, y: 438, scale: 1.06, rotate: 16, spreadX: 12, spreadY: -10, variant: "yellow", opacity: 0.94 },

  { x: -22, y: 406, scale: 1.1, rotate: 12, spreadX: -14, spreadY: -12, variant: "yellow", opacity: 0.95 },
  { x: 44, y: 374, scale: 1.2, rotate: -12, spreadX: -10, spreadY: -14, variant: "pink", opacity: 0.96 },
  { x: 110, y: 404, scale: 1.12, rotate: 18, spreadX: -6, spreadY: -10, variant: "yellow", opacity: 0.95 },
  { x: 178, y: 366, scale: 1.1, rotate: -8, spreadX: 2, spreadY: -16, variant: "pink", opacity: 0.93 },
  { x: 248, y: 396, scale: 1.02, rotate: 16, spreadX: 8, spreadY: -12, variant: "yellow", opacity: 0.92 },

  { x: -18, y: 330, scale: 1.08, rotate: -12, spreadX: -12, spreadY: -16, variant: "pink", opacity: 0.9 },
  { x: 46, y: 300, scale: 1.08, rotate: 10, spreadX: -8, spreadY: -18, variant: "yellow", opacity: 0.9 },
  { x: 112, y: 328, scale: 1.08, rotate: -8, spreadX: -3, spreadY: -16, variant: "pink", opacity: 0.88 },
  { x: 182, y: 292, scale: 0.98, rotate: 18, spreadX: 4, spreadY: -20, variant: "yellow", opacity: 0.86 },

  // Upper side bloom
  { x: -10, y: 248, scale: 1.02, rotate: 12, spreadX: -10, spreadY: -20, variant: "yellow", opacity: 0.84 },
  { x: 54, y: 218, scale: 1.06, rotate: -12, spreadX: -6, spreadY: -22, variant: "pink", opacity: 0.84 },
  { x: 126, y: 246, scale: 0.96, rotate: 18, spreadX: 2, spreadY: -20, variant: "yellow", opacity: 0.82 },

  // Inward arch like the reference
  { x: 390, y: 456, scale: 1.14, rotate: 10, spreadX: 12, spreadY: -8, variant: "yellow", opacity: 0.9 },
  { x: 460, y: 432, scale: 1.16, rotate: -12, spreadX: 16, spreadY: -10, variant: "pink", opacity: 0.92 },
  // { x: 530, y: 462, scale: 1.06, rotate: 16, spreadX: 20, spreadY: -6, variant: "yellow", opacity: 0.9 },
  { x: 532, y: 526, scale: 1.1, rotate: -14, spreadX: 24, spreadY: 0, variant: "pink", opacity: 0.88 },

  // Fillers that remove the sparse "floating icon" look.
  { x: 74, y: 648, scale: 0.9, rotate: 18, spreadX: -6, spreadY: 8, variant: "yellow", opacity: 0.84 },
  { x: 144, y: 580, scale: 0.92, rotate: -14, spreadX: -4, spreadY: 4, variant: "pink", opacity: 0.84 },
  { x: 212, y: 650, scale: 0.9, rotate: 12, spreadX: 0, spreadY: 8, variant: "yellow", opacity: 0.84 },
  { x: 280, y: 576, scale: 0.9, rotate: -18, spreadX: 6, spreadY: 4, variant: "pink", opacity: 0.84 },
  // { x: 354, y: 646, scale: 0.9, rotate: 14, spreadX: 10, spreadY: 8, variant: "yellow", opacity: 0.84 },
  // { x: 92, y: 470, scale: 0.9, rotate: 10, spreadX: -6, spreadY: -4, variant: "yellow", opacity: 0.82 },
  // { x: 160, y: 508, scale: 0.92, rotate: -10, spreadX: -2, spreadY: 0, variant: "pink", opacity: 0.82 },
  { x: 226, y: 456, scale: 0.88, rotate: 16, spreadX: 4, spreadY: -6, variant: "yellow", opacity: 0.82 },
  { x: 292, y: 492, scale: 0.9, rotate: -12, spreadX: 8, spreadY: -2, variant: "pink", opacity: 0.82 },
];

export default function FloralCluster({ side }: FloralClusterProps) {
  const [pointer, setPointer] = useState<Pointer | null>(null);

  return (
    <div
      className="floral-cluster relative h-[740px] w-[750px] opacity-98"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        setPointer({
          x: ((event.clientX - rect.left) / rect.width) * clusterWidth,
          y: ((event.clientY - rect.top) / rect.height) * clusterHeight,
        });
      }}
      onPointerLeave={() => setPointer(null)}
    >
      {flowers.map((flower, index) => {
        const spacingMultiplier = 1.29;
        const motion = flowerMotion(flower, index, side);

        const left =
          side === "left"
            ? flower.x * spacingMultiplier
            : clusterWidth - flower.x * spacingMultiplier - flowerSize;
        const repel = flowerRepel(left, flower.y, pointer);

        return (
          <div
            key={index}
            className={`flower-bloom absolute ${
              repel.active ? "flower-repelled" : ""
            }`}
            style={{
              left: `${left}px`,
              top: `${flower.y}px`,
              ...motion,
              "--hover-x-soft": `${repel.x}px`,
              "--hover-y-soft": `${repel.y}px`,
            } as CSSProperties}
          >
            <div className="flower-float">
              <Image
                src={
                  flower.variant === "pink"
                    ? "/floral/flower-pink.png"
                    : "/floral/flower-yellow.png"
                }
                alt=""
                width={flowerSize}
                height={flowerSize}
                draggable={false}
                className="h-auto w-[105px] drop-shadow-[0_8px_13px_rgba(0,0,0,0.055)]"
              />
            </div>
          </div>
        );
      })}

      <Image
        src="/floral/leaf.png"
        alt=""
        width={220}
        height={340}
        draggable={false}
        className={`leaf-sway absolute bottom-[-10px] h-auto w-[120px] ${
          side === "left"
            ? "left-[120px] -rotate-20"
            : "left-[260px] rotate-20"
        }`}
      />

      <Image
        src="/floral/leaf.png"
        alt=""
        width={200}
        height={310}
        draggable={false}
        className={`leaf-sway absolute bottom-[-20px] h-auto w-[100px] opacity-75 ${
          side === "left"
            ? "left-[360px] rotate-25"
            : "left-[40px] -rotate-25"
        }`}
      />
    </div>
  );
}
