import Lottie from "lottie-react";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import Cta from "../../assets/animations/Cta.json";

function Footer() {
  return (
    <section className="mt-16">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h3 className="text-2xl md:text-4xl font-semibold">
          Ready to stop overspending and start living on your terms? Budwallet
          makes it simple.
        </h3>
        <p className="mt-3 text-gray-500">
          Affordable plans for every money habit.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
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
        </div>
      </div>

      <div className="mt-28">
        <Lottie animationData={Cta} loop={true} autoplay={true} />
      </div>

      <footer className="bg-black py-10">
        <div className="container mx-auto max-w-7xl px-4 text-white">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-8 md:mb-0">
              <Link to="/">
                <img
                  src="/budwallet-white.png"
                  alt="budwallet-logo"
                  className="w-[130px]"
                />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <div>
                <h4 className="mb-2 text-sm text-[#A3A3A3]">Features</h4>
                <div className="flex flex-col gap-2 text-[#D6D6D6] text-sm">
                  <Link to="/">Dedicated Wallet</Link>
                  <Link to="/">Budget Creation</Link>
                  <Link to="/">Strict Discipline</Link>
                  <Link to="/">Auto Returns</Link>
                  <Link to="/">Smart Nudges</Link>
                  <Link to="/">Transparent Records</Link>
                  <Link to="/">Cross-Currency Ready</Link>
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-sm text-[#A3A3A3]">Solutions</h4>
                <div className="flex flex-col gap-2 text-[#D6D6D6] text-sm">
                  <Link to="/">eCommerce</Link>
                  <Link to="/">Finance Automation</Link>
                  <Link to="/">Crypto</Link>
                  <Link to="/">Global Business</Link>
                  <Link to="/">Marketplaces</Link>
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-sm text-[#A3A3A3]">Resources</h4>
                <div className="flex flex-col gap-2 text-[#D6D6D6] text-sm">
                  <Link to="/">Tutorials</Link>
                  <Link to="/">Blog</Link>
                  <Link to="/">Community</Link>
                  <Link to="/">Privacy Policy</Link>
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-sm text-[#A3A3A3]">About</h4>
                <div className="flex flex-col gap-2 text-[#D6D6D6] text-sm">
                  <Link to="/">Company</Link>
                  <Link to="/">Careers</Link>
                  <Link to="/">FAQ</Link>
                  <Link to="/">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Budwallet. All rights reserved.
            </p>

            <div className="flex gap-6 mt-6 md:mt-0">
              <Linkedin className="w-5 h-5" />
              <Twitter className="w-5 h-5" />
              <Facebook className="w-5 h-5" />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
