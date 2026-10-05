import { useCallback, useEffect, useState } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";

import { CursorRing } from "./components/CursorRing";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";
import { MobileActionBar } from "./components/MobileActionBar";
import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";

import About from "./pages/About";
import Contact from "./pages/Contact";
import CouplesTherapy from "./pages/CouplesTherapy";
import Faq from "./pages/Faq";
import Fees from "./pages/Fees";
import Home from "./pages/Home";
import IndividualTherapy from "./pages/IndividualTherapy";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Reflections from "./pages/Reflections";
import Singles from "./pages/Singles";
import Terms from "./pages/Terms";
import Workshops from "./pages/Workshops";

const INTRO_KEY = "carol-anderson-intro-seen";

/** True when the visitor has already seen the intro in this session. */
function introAlreadySeen(): boolean {
  try {
    return window.sessionStorage.getItem(INTRO_KEY) === "1";
  } catch {
    return false;
  }
}

export default function App() {
  const [introSeen, setIntroSeen] = useState(introAlreadySeen);

  const finishIntro = useCallback(() => {
    try {
      window.sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      /* storage unavailable — the intro will simply play again next time */
    }
    setIntroSeen(true);
  }, []);

  return (
    // Hash routing keeps every deep link working identically on Vercel,
    // GitHub Pages and any static host, with no server rewrites needed.
    <HashRouter>
      <ScrollProgress />
      <CursorRing />

      {!introSeen && <Loader onFinish={finishIntro} />}

      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main id="main" className="flex-1">
          <RoutedPages />
        </main>

        <Footer />
      </div>

      <MobileActionBar />
      {/* Room for the mobile action bar so the footer is never covered */}
      <div aria-hidden="true" className="h-[4.75rem] lg:hidden" />
    </HashRouter>
  );
}

/**
 * All routes. The wrapper is keyed on the pathname so each navigation plays a
 * soft cross-fade, and the window returns to the top of the new page.
 */
function RoutedPages() {
  const location = useLocation();

  useEffect(() => {
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "auto" });
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/couples-therapy" element={<CouplesTherapy />} />
        <Route path="/singles" element={<Singles />} />
        <Route path="/individual-therapy" element={<IndividualTherapy />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reflections" element={<Reflections />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
