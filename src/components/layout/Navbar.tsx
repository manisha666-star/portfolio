export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
      <div className="nav-shell mx-auto max-w-[1440px]">
        <nav className="flex h-[86px] items-center justify-between gap-8 md:h-[104px]">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-4 text-[#111]"
            aria-label="Manisha Rai home"
          >
            <span
              aria-hidden="true"
              className="flex h-8 w-10 items-end gap-1"
            >
              <span className="h-8 w-[17px] rounded-t-full bg-[var(--brand-maroon)]" />
              <span className="h-8 w-[17px] rounded-t-full bg-[var(--brand-maroon)]" />
            </span>
            <span className="brand-font text-[28px] font-semibold leading-none tracking-[-0.05em] sm:text-[32px]">
              Manisha
            </span>
          </a>

          <div className="hidden items-center gap-12 text-[15px] font-semibold text-[#515151] md:flex">
            <a
              href="#about"
              className="transition hover:text-black"
            >
              About
            </a>

            <a
              href="#projects"
              className="transition hover:text-black"
            >
              Projects
            </a>

            <a
              href="#design"
              className="transition hover:text-black"
            >
              Design
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="#contact"
              className="hidden text-[15px] font-semibold text-[#515151] transition hover:text-black sm:inline"
            >
              Contact
            </a>

            <a
              href="#resume"
              className="
                flex
                h-[48px]
                min-w-[132px]
                items-center
                justify-center
                rounded-full
                border
                border-[#dfdcd8]
                bg-white
                px-6
                text-[14px]
                font-semibold
                text-[#222]
                shadow-[0_1px_10px_rgba(0,0,0,0.035)]
                transition
                hover:-translate-y-0.5
                hover:border-[#cfc8be]
                hover:bg-[#fbfaf8]
              "
            >
              Resume
            </a>
          </div>

        </nav>
      </div>
    </header>
  );
}
