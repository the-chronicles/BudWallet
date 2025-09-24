import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);
  const toggle = () => setOpen((v) => !v);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  // Prevent body scroll when menu is open (mobile)
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div>
        <nav className="flex mx-auto container max-w-7xl justify-between items-center p-4 md:p-4">
          {/* Logo */}
          <div>
            <Link to="/" onClick={close}>
              <img
                src="/budwallet.png"
                alt="budwallet-logo"
                className="w-[130px]"
              />
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <ul className="flex gap-8 items-center text-lg">
              <Link to="/personal"><li className="hover:opacity-70 transition">Personal</li></Link>
              <Link to="/business"><li className="hover:opacity-70 transition">Business</li></Link>
              <Link to="/company"><li className="hover:opacity-70 transition">Company</li></Link>
              <Link to="/login">
                <li className="rounded-full bg-black text-white px-5 py-1.5 hover:opacity-90 transition">
                  Sign up
                </li>
              </Link>
            </ul>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 "
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={toggle}
          >
            {/* Simple inline icons to avoid extra deps */}
            {!open ? (
              // Hamburger
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h10M4 12h16M4 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              // X
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </nav>
      </div>
      <div className="border-b border-[#F5F5F5]" />

      {/* Mobile menu (portal-like overlay) */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.button
              aria-hidden
              className="fixed inset-0 bg-black/20 md:hidden"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sheet */}
            <motion.div
              className="fixed md:hidden left-0 right-0 top-0 z-50"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mx-auto container max-w-7xl px-4 pt-4">
                <div className="rounded-2xl bg-white shadow-lg border border-black/5 overflow-hidden">
                  {/* Top row with logo & close */}
                  <div className="flex items-center justify-between p-4">
                    <Link to="/" onClick={close}>
                      <img
                        src="/budwallet.png"
                        alt="budwallet-logo"
                        className="w-[120px]"
                      />
                    </Link>
                    <button
                      className="p-2"
                      aria-label="Close menu"
                      onClick={close}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>

                  {/* Links */}
                  <nav className="px-4 pb-4">
                    <ul className="flex flex-col text-base">
                      <li>
                        <Link
                          to="/personal"
                          onClick={close}
                          className="block px-3 py-3 rounded-lg hover:bg-black/5 active:bg-black/10"
                        >
                          Personal
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/business"
                          onClick={close}
                          className="block px-3 py-3 rounded-lg hover:bg-black/5 active:bg-black/10"
                        >
                          Business
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/company"
                          onClick={close}
                          className="block px-3 py-3 rounded-lg hover:bg-black/5 active:bg-black/10"
                        >
                          Company
                        </Link>
                      </li>
                      <li className="pt-2">
                        <Link
                          to="/login"
                          onClick={close}
                          className="block text-center px-4 py-2 rounded-full bg-black text-white"
                        >
                          Sign up
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
