"use client";

export default function BackToProjectsLink() {
  return (
    <button
      type="button"
      onClick={() => {
        window.location.href = "/#projects";
      }}
      className="inline-flex cursor-pointer items-center border-0 bg-transparent text-[15px] font-semibold tracking-[-0.01em] text-[#6f6b65] transition hover:text-[#8b1e2d]"
    >
      ← Back to projects
    </button>
  );
}
