import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import SmartNudges from "../../assets/animations/Smart-Nudges-Lottie.json";
import TransparentRecords from "../../assets/animations/TRR-Illustration-Lottie.json";

function Features() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-16">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-medium">Features just for you</h2>
          <p className=" text-[#858585]">
            Everything you need to stay in control, nothing that overwhelms.
          </p>
        </div>

        <div className="mt-6 flex gap-4">
          <Link to="/">
            <div className=" px-5 py-2 bg-[#EBEBEB] rounded-full">
              Contact Sales
            </div>
          </Link>
          <Link to="/">
            <div className="bg-black text-white px-5 py-2 rounded-full">
              Get the App
            </div>
          </Link>
        </div>
      </div>

      {/* <!-- Feature Grid --> */}
      <div className="grid gap-6 mt-16">
        {/* Row 1 */}
        <div className="grid md:[grid-template-columns:1.35fr_1.35fr_0.6fr] md:[grid-auto-rows:220px] gap-6">
          <div className="p-6 rounded-[22px] bg-[#F5F4F4] h-full">
            <img src="/wallet-fill.png" alt="wallet" className="w-8" />
            <h3 className="mt-3 text-[18px] font-medium text-[#292929]">
              Dedicated Wallet
            </h3>
            <p className="text-[16px] mt-2 text-[#A3A3A3]">
              Fund your Budwallet and see your available balance in real-time.
              No hidden charges, no confusion—just a clean wallet that’s truly
              yours.
            </p>
          </div>

          <div className="p-6 rounded-[22px] bg-[#F5F4F4] h-full">
            <img src="/refund-fill.png" alt="budget" className="w-8" />
            <h3 className="mt-3 text-[18px] font-medium text-[#292929]">
              Budget Creation
            </h3>
            <p className="text-[16px] mt-2 text-[#A3A3A3]">
              Instead of endless categories, Budwallet limits you to 3 focused
              budget items. Rent, groceries, transport—whatever matters most.
            </p>
          </div>

          {/* <div className="rounded-[22px] bg-blue-500 flex items-center justify-center text-white h-full"> */}
          <span className="text-xl font-bold">
            <img src="/Image-2.png" alt="img" />
          </span>
          {/* </div> */}
        </div>

        {/* Row 2 */}
        <div className="grid md:[grid-template-columns:0.6fr_1.35fr_1.35fr] md:[grid-auto-rows:220px] gap-6">
          {/* <div className="rounded-[22px] bg-teal-500 flex items-center justify-center text-white h-full"> */}
          <span className="">
            <img src="/Image.png" alt="img" />
          </span>
          {/* </div> */}

          <div className="p-6 rounded-[22px] bg-[#F5F4F4] h-full">
            <img src="/folder-5-fill.png" alt="returns" className="w-8" />
            <h3 className="mt-3 text-[18px] font-medium text-[#292929]">
              Auto Returns
            </h3>
            <p className="text-[16px] mt-2 text-[#A3A3A3]">
              When a budget period ends, unspent money flows right back into
              your wallet automatically. No lost cash—it’s instantly reusable
              for your next plan.
            </p>
          </div>

          <div className="p-6 rounded-[22px] bg-[#F5F4F4] h-full">
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
          </div>
        </div>
      </div>

      {/* Feature Grid 2 */}
      <div className="grid grid-cols-4 gap-5 mt-20">
        <div className="grid col-span-2">
          <div className="rounded-[22px] bg-[#F5F4F4] overflow-hidden items-center justify-center h-full">
            <Lottie animationData={SmartNudges} loop={false} autoplay={true} />
          </div>
        </div>
        <div className="grid col-span-2">
          <div className="px-10 py-14  rounded-[22px] space-y-4 bg-[#F5F4F4] h-full">
            <h3 className="mt-3 text-[28px] font-medium text-[#292929]">
              Smart Nudges
            </h3>
            <div className="h-0.5 bg-[#E6E6E6] "></div>
            <p className="text-[16px] mt-2 text-[#A3A3A3]">
              Budwallet keeps you aware without nagging. Expect timely,
              thoughtful reminders when you’re nearing your budget limits, along
              with gentle suggestions for better money habits.
            </p>
          </div>
        </div>
        <div className="grid col-span-2">
          <div className="px-10 py-14  rounded-[22px] space-y-4 bg-[#F5F4F4] h-full">
            <h3 className="mt-3 text-[28px] font-medium text-[#292929]">
              Transparent Records
            </h3>
            <div className="h-0.5 bg-[#E6E6E6]"></div>
            <p className="text-[16px] mt-2 text-[#A3A3A3]">
              Get a simple but clear view of where your money went—by budget
              item, not overwhelming charts. You see what matters most: whether
              you stayed within your plan or not.
            </p>
          </div>
        </div>
        <div className="grid col-span-2">
          <div className="rounded-[22px] bg-[#F5F4F4] overflow-hidden items-center justify-center h-full">
            <Lottie animationData={TransparentRecords} loop={false} />
          </div>
        </div>
        <div className="grid col-span-2">
          <div className="rounded-[22px] bg-[#F5F4F4] overflow-hidden items-center justify-center h-full">
            <Lottie animationData={SmartNudges} loop={false} />
          </div>
        </div>
        <div className="grid col-span-2">
          <div className="px-10 py-14 rounded-[22px] space-y-4 bg-[#F5F4F4] h-full">
            <h3 className="mt-3 text-[28px] font-medium text-[#292929]">
              Cross-Currency Ready
            </h3>
            <div className="h-0.5 bg-[#E6E6E6]"></div>
            <p className="text-[16px] mt-2 text-[#A3A3A3]">
              Naira, dollar, or both—Budwallet adapts. Fund your wallet in your
              preferred currency and spend with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
