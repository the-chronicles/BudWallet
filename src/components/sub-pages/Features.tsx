import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

import SmartNudges from "../../assets/animations/Smart-Nudges-Lottie.json";
import TransparentRecords from "../../assets/animations/TRR-Illustration-Lottie.json";
import HowItWorks from "./HowItWorks";
import Features1 from "../../assets/animations/Features-1-Lottie.json";
import Features2 from "../../assets/animations/Features2.json";
import CrossCurrency from "../../assets/animations/Cross-Currency-Ready.json";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fade = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

function FeatureCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fade}
      className={`p-6 rounded-[22px] bg-[#F5F4F4] h-full ${className}`}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function LottieInView({
  data,
  className = "",
  loop = false,
  autoplay = false,
}: {
  data: object;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.25, margin: "0px 0px -10% 0px" });
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (!lottieRef.current) return;
    if (inView) lottieRef.current.play();
    else lottieRef.current.pause();
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      variants={fade}
      className={`rounded-[22px] overflow-hidden items-center justify-center h-full ${className}`}
      viewport={{ once: true, amount: 0.25 }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={data}
        loop={loop}
        autoplay={autoplay}
      />
    </motion.div>
  );
}

function Features() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-16">
      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex justify-between items-center"
      >
        <motion.div variants={fadeUp}>
          <h2 className="text-2xl font-medium">Features just for you</h2>
          <p className="text-[#858585]">
            Everything you need to stay in control, nothing that overwhelms.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-6 flex gap-4">
          <Link to="/">
            <div className="px-5 py-2 bg-[#EBEBEB] rounded-full">
              Contact Sales
            </div>
          </Link>
          <Link to="/">
            <div className="bg-black text-white px-5 py-2 rounded-full">
              Get the App
            </div>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-6 mt-16"
      >
        <div className="grid md:[grid-template-columns:1.35fr_1.35fr_0.6fr] md:[grid-auto-rows:220px] gap-6">
          <FeatureCard>
            <img src="/wallet-fill.png" alt="wallet" className="w-8" />
            <h3 className="mt-3 text-[18px] font-medium text-[#292929]">
              Dedicated Wallet
            </h3>
            <p className="text-[16px] mt-2 text-[#A3A3A3]">
              Fund your Budwallet and see your available balance in real-time.
              No hidden charges, no confusion—just a clean wallet that’s truly
              yours.
            </p>
          </FeatureCard>

          <FeatureCard>
            <img src="/refund-fill.png" alt="budget" className="w-8" />
            <h3 className="mt-3 text-[18px] font-medium text-[#292929]">
              Budget Creation
            </h3>
            <p className="text-[16px] mt-2 text-[#A3A3A3]">
              Instead of endless categories, Budwallet limits you to 3 focused
              budget items. Rent, groceries, transport—whatever matters most.
            </p>
          </FeatureCard>

          <LottieInView
            data={Features1 as any}
            className="bg-blue-500 text-white"
            autoplay={false}
          />
        </div>

        <div className="grid md:[grid-template-columns:0.6fr_1.35fr_1.35fr] md:[grid-auto-rows:220px] gap-6">
          <LottieInView
            data={Features2 as any}
            className="bg-teal-500 text-white"
            autoplay={false}
          />

          <FeatureCard>
            <img src="/folder-5-fill.png" alt="returns" className="w-8" />
            <h3 className="mt-3 text-[18px] font-medium text-[#292929]">
              Auto Returns
            </h3>
            <p className="text-[16px] mt-2 text-[#A3A3A3]">
              When a budget period ends, unspent money flows right back into
              your wallet automatically. No lost cash—it’s instantly reusable
              for your next plan.
            </p>
          </FeatureCard>

          <FeatureCard>
            <img
              src="/prohibited-2-fill-2.png"
              alt="discipline"
              className="w-8"
            />
            <h3 className="mt-3 text-[18px] font-medium text-[#292929]">
              Strict Discipline
            </h3>
            <p className="text-[16px] mt-2 text-[#A3A3A3]">
              Budwallet doesn’t just track spending; it enforces your rules. If
              you exceed your budget, the transaction will be blocked.
            </p>
          </FeatureCard>
        </div>
      </motion.div>

      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-4 gap-5 mt-20"
      >
        <LottieInView
          data={SmartNudges as any}
          className="col-span-2 bg-[#F5F4F4]"
          autoplay={false}
        />

        <motion.div variants={fade} className="grid col-span-2">
          <div className="px-10 py-14 rounded-[22px] space-y-4 bg-[#F5F4F4] h-full">
            <h3 className="mt-3 text-[28px] font-medium text-[#292929]">
              Smart Nudges
            </h3>
            <div className="h-0.5 bg-[#E6E6E6]" />
            <p className="text-[16px] mt-2 text-[#A3A3A3]">
              Budwallet keeps you aware without nagging. Expect timely,
              thoughtful reminders when you’re nearing your budget limits, along
              with gentle suggestions for better money habits.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fade} className="grid col-span-2">
          <div className="px-10 py-14 rounded-[22px] space-y-4 bg-[#F5F4F4] h-full">
            <h3 className="mt-3 text-[28px] font-medium text-[#292929]">
              Transparent Records
            </h3>
            <div className="h-0.5 bg-[#E6E6E6]" />
            <p className="text-[16px] mt-2 text-[#A3A3A3]">
              Get a simple but clear view of where your money went—by budget
              item, not overwhelming charts. You see what matters most: whether
              you stayed within your plan or not.
            </p>
          </div>
        </motion.div>

        <LottieInView
          data={TransparentRecords as any}
          className="col-span-2 bg-[#F5F4F4]"
          autoplay={false}
        />

        <LottieInView
          data={CrossCurrency as any}
          className="col-span-2 bg-[#F5F4F4]"
          autoplay={false}
        />

        <motion.div variants={fade} className="grid col-span-2">
          <div className="px-10 py-14 rounded-[22px] space-y-4 bg-[#F5F4F4] h-full">
            <h3 className="mt-3 text-[28px] font-medium text-[#292929]">
              Cross-Currency Ready
            </h3>
            <div className="h-0.5 bg-[#E6E6E6]" />
            <p className="text-[16px] mt-2 text-[#A3A3A3]">
              Naira, dollar, or both—Budwallet adapts. Fund your wallet in your
              preferred currency and spend with ease.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <HowItWorks />
    </section>
  );
}

export default Features;
