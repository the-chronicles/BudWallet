import { motion } from "framer-motion";
import type { Variants, Easing } from "framer-motion";

const EASE_OUT: Easing = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

function Plan() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-16">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <h2 className="text-2xl font-medium">Choose your plan</h2>
        <p className="text-[#858585]">
          Affordable plans for every money habit.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
      >
        <div className="p-6 rounded-[22px] bg-[#F5F4F4] h-full">
          <h3 className="text-[16px] md:text-[20px] font-medium text-[#292929]">
            Free Plan
          </h3>
          <p className="mt-1.5 text-[12.5px] md:text-[16px] leading-relaxed text-[#A3A3A3]">
            Simple control, no cost
          </p>

          <ul className="list-disc mt-4 ml-5 text-[12.5px] md:text-[14px] text-[#A3A3A3]">
            <li>1 personal wallet</li>
            <li>Up to 3 budget items per month</li>
            <li>Real-time spending discipline</li>
            <li>Smart nudges & auto-returns</li>
            <li>Perfect for beginners</li>
          </ul>
        </div>

        <div className="p-6 rounded-[22px] bg-[#F5F4F4] h-full">
          <h3 className="text-[16px] md:text-[20px] font-medium text-[#292929]">
            Pro Plan
          </h3>
          <p className="mt-1.5 text-[12.5px] md:text-[16px] leading-relaxed text-[#A3A3A3]">
            $3/month – Go beyond basics
          </p>
          <ul className="list-disc mt-4 ml-5 text-[12.5px] md:text-[14px] text-[#A3A3A3]">
            <li>Unlimited budgets</li>
            <li>Gain insights into spending patterns</li>
            <li>Priority customer support for assistance.</li>
            <li>
              Flexible budgeting while maintaining discipline. Perfect for
              students, freelancers, and anyone serious about managing money.
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-[22px] bg-[#F5F4F4] h-full">
          <h3 className="text-[16px] md:text-[20px] font-medium text-[#292929]">
            Premium Plan{" "}
            <span className="text-[#A3A3A3] text-[16px]">(Coming Soon)</span>
          </h3>
          <p className="mt-1.5 text-[12.5px] md:text-[16px] leading-relaxed text-[#A3A3A3]">
            For future financial goals
          </p>
          <ul className="list-disc mt-4 ml-5 text-[12.5px] md:text-[14px] text-[#A3A3A3]">
            <li>Goal-oriented savings</li>
            <li>In-depth spending insights and trend reports</li>
            <li>Personalized reminders and budgeting cycles</li>
            <li>
              Tailored for users seeking a comprehensive financial companion.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default Plan;
