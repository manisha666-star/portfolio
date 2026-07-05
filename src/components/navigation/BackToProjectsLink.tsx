"use client";

type BackToProjectsLinkProps = {
  href?: string;
  label?: string;
};

export default function BackToProjectsLink({
  href = "/#projects",
  label = "Back to projects",
}: BackToProjectsLinkProps) {
  return (
    <button
      type="button"
      onClick={() => {
        window.location.href = href;
      }}
      className="inline-flex cursor-pointer items-center border-0 bg-transparent text-[15px] font-semibold tracking-[-0.01em] text-[#6f6b65] transition hover:text-[#8b1e2d]"
    >
      &larr; {label}
    </button>
  );
}
