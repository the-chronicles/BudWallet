import { useRef } from "react";
import Navbar from "../components/common/Navbar";
import Lottie from "lottie-react";
import type { LottieRefCurrentProps } from "lottie-react";
import HeaderIllustrationLottie from "../assets/animations/Header-Illustration-Lottie.json";
import { Link } from "react-router-dom";
import Features from "../components/sub-pages/Features";

function Hero() {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-7xl items-center justify-center px-4 py-16 ">
        <h1 className="text-4xl font-semibold leading-tight">
          Your Money. <span className="text-[#A3A3A3]">Your Budget & Bud</span>
        </h1>
        <p className="mt-4 text-[#7A7A7A]">
          Manage your spending with a straightforward <br />
          budgeting tool that ensures every naira/dollar counts.
        </p>

        <div className="mt-6 flex gap-4">
          <Link to="/">
            <div className="bg-black text-white px-5 py-2 rounded-full">
              Get the App
            </div>
          </Link>
          <Link to="/">
            <div className=" px-5 py-2 bg-[#EBEBEB] rounded-full">
              View a demo
            </div>
          </Link>
        </div>

        {/* Lottie Animation */}
        <div
          className="w-2/3 mx-auto mt-20"
          onMouseEnter={() => lottieRef.current?.play()}
          onMouseLeave={() => lottieRef.current?.stop()}
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={HeaderIllustrationLottie}
            loop={true}
            autoplay={false}
          />
        </div>
        {/* Gradient underline */}
        <div className="h-1 w-full rounded-full -mt-0.5 bg-gradient-to-r from-teal-300 via-pink-500 to-indigo-300"></div>
      </div>

      <Features />
    </>
  );
}

export default Hero;
