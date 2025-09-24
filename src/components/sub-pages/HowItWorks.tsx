import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import type { LottieRefCurrentProps } from "lottie-react";
import { motion, useInView } from "framer-motion";
import type { Variants, Easing } from "framer-motion";

import CreateWallet from "../../assets/animations/Create-Wallet.json";
import SetBudget from "../../assets/animations/Set-Budget.json";
import SpendWithControl from "../../assets/animations/Spend-With-Control.json";
import CloseReset from "../../assets/animations/Close-&-Reset.json";
import Consistent from "../../assets/animations/Consistent.json";

type Step = {
  artBg: string;
  title: string;
  body: string;
  animationData: object;
};

const STEPS: Step[] = [
  {
    artBg: "bg-[#B9B2FF]",
    title: "Create Your Wallet",
    body: "Sign up quickly. Complete KYC verification and get your secure Budwallet—ready for funding via transfer or card.",
    animationData: CreateWallet,
  },
  {
    artBg: "bg-[#FF007A]",
    title: "Set a Budget",
    body: "Define up to 3 budget categories at a time (like “Food,” “Transport,” and “Bills”). Assign exact amounts so every naira or dollar is accounted for.",
    animationData: SetBudget,
  },
  {
    artBg: "bg-[#7AE8E0]",
    title: "Spend with Control",
    body: "Each transaction deducts directly from your set budgets. Once a budget limit is reached, spending stops automatically.",
    animationData: SpendWithControl,
  },
  {
    artBg: "bg-[#FFD9C3]",
    title: "Close & Reset",
    body: "Each transaction deducts directly from your set budgets. Once a budget limit is reached, it’s financial discipline built right into your payments.",
    animationData: CloseReset,
  },
  {
    artBg: "bg-[#1FA0FF]",
    title: "Stay Consistent",
    body: "Budwallet helps you form a financial habit. The more you use it, the easier it gets to plan ahead and keep your money working for you.",
    animationData: Consistent,
  },
];

const EASE_OUT: Easing = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
};

const containerStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

function LottieInView({
  data,
  bg,
  loop = false,
  autoplay = false,
  className = "",
}: {
  data: object;
  bg: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}) {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(boxRef, { amount: 0.3, margin: "0px 0px -10% 0px" });
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    if (!lottieRef.current) return;
    if (inView) lottieRef.current.play();
    else lottieRef.current.pause();
  }, [inView]);

  return (
    <motion.div
      ref={boxRef}
      variants={fadeUp}
      viewport={{ once: true, amount: 0.25 }}
      className={`rounded-[18px] md:rounded-[20px] overflow-hidden ${bg} ${className}`}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={data}
        loop={loop}
        autoplay={autoplay}
        className="h-full w-full"
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
      />
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="mt-28">
      <div className="grid gap-8 md:gap-10 md:[grid-template-columns:1.5fr_1.5fr]">
        <div className="max-w-sm md:max-w-md md:sticky md:self-start md:top-20 lg:top-28">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="text-2xl md:text-[28px] font-semibold text-[#151515]"
          >
            How It Works
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-2 text-sm md:text-base text-[#9BA0A6]"
          >
            Simple steps, endless financial clarity.
          </motion.p>
        </div>

        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col gap-6"
        >
          {STEPS.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="grid gap-3">
              <LottieInView
                data={s.animationData}
                bg={s.artBg}
                autoplay={false}
              />

              <motion.div
                variants={fadeUp}
                viewport={{ once: true, amount: 0.25 }}
                className="rounded-[18px] md:rounded-[20px] bg-[#F5F4F4]"
              >
                <div className="p-4 md:p-5">
                  <h3 className="text-[16px] md:text-[20px] font-semibold text-[#292929]">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] md:text-[16px] leading-relaxed text-[#A3A3A3]">
                    {s.body}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
