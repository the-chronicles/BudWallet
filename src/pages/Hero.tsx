import { useRef } from "react";
import Navbar from "../components/common/Navbar";
import Lottie from "lottie-react";
import type { LottieRefCurrentProps } from "lottie-react";
import HeaderIllustrationLottie from "../assets/animations/Header-Illustration-Lottie.json";
import { Link } from "react-router-dom";
import Features from "../components/sub-pages/Features";
import Plan from "../components/sub-pages/Plan";
import Footer from "../components/common/Footer";
import { motion } from "framer-motion";


const headingContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const word = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function splitTokens(text: string) {
  return text.match(/\S+|\s+/g) ?? []; 
}

function Space({ n = 1 }: { n?: number }) {
  return <span aria-hidden="true">{Array(n).fill("\u00A0").join("")}</span>;
}

function HeadingReveal({
  left,
  right,
  rightClass = "",
}: {
  left: string;
  right: string;
  rightClass?: string;
}) {
  const leftTokens = splitTokens(left);
  const rightTokens = splitTokens(right);

  return (
    <motion.h1
      className="text-4xl font-semibold leading-tight tracking-tight"
      variants={headingContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      aria-label={`${left} ${right}`}
    >
      <span>
        {leftTokens.map((t, i) =>
          /\s+/.test(t) ? (
            <Space key={`ls-${i}`} n={t.length} />
          ) : (
            <motion.span
              key={`lw-${i}`}
              variants={word}
              style={{
                display: "inline-block",
                position: "relative",
                willChange: "transform",
              }}
            >
              {t}
            </motion.span>
          )
        )}
      </span>
      <Space /> 
      <span className={rightClass}>
        {rightTokens.map((t, i) =>
          /\s+/.test(t) ? (
            <Space key={`rs-${i}`} n={t.length} />
          ) : (
            <motion.span
              key={`rw-${i}`}
              variants={word}
              style={{
                display: "inline-block",
                position: "relative",
                willChange: "transform",
              }}
            >
              {t}
            </motion.span>
          )
        )}
      </span>
    </motion.h1>
  );
}

function Hero() {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-7xl items-center justify-center px-4 py-8 md:py-16">
        <HeadingReveal
          left="Your Money."
          right="Your Budget & Bud"
          rightClass="text-[#A3A3A3]"
        />

        <motion.p
          className="mt-4 text-[#7A7A7A]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Manage your spending with a straightforward <br />
          budgeting tool that ensures every naira/dollar counts.
        </motion.p>

        <motion.div
          className="mt-6 flex gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to="/">
            <div className="bg-black text-white px-5 py-2 rounded-full">
              Get the App
            </div>
          </Link>
          <Link to="/">
            <div className="px-5 py-2 bg-[#EBEBEB] rounded-full">
              View a demo
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="w-2/3 mx-auto mt-20"
          initial={{ opacity: 0, y: 60 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          onMouseEnter={() => lottieRef.current?.play()}
          onMouseLeave={() => lottieRef.current?.stop()}
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={HeaderIllustrationLottie}
            loop
            autoplay={false}
          />
        </motion.div>

        <motion.div
          className="h-1 w-full rounded-full -mt-0.5 bg-gradient-to-r from-teal-300 via-pink-500 to-indigo-300"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      <Features />
      <Plan />
      <Footer />
    </>
  );
}

export default Hero;
