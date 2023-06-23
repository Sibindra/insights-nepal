"use client";

export default function Navbar() {
  return (
    <div>
      <header className="bg-white border-2">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          {/* LOGO HERE */}
          <div></div>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-md">
                <li>
                  <a className="text-black transition" href="/">
                    Home
                  </a>
                </li>

                <li>
                  <a className="text-black transition" href="/">
                    About
                  </a>
                </li>

                <li>
                  <a className="text-black transition" href="/">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <button className="hover:bg-[#cfc3fb]  hover:text-black text-black  px-3 py-1 border border-black rounded-none m-2 ">
                  Log In 
                </button>
              </div>

              <button className="hover:bg-[#cfc3fb]  hover:text-black text-black  px-1 py-1 border border-black rounded-none m-2  md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}