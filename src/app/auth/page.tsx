"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export default function AuthPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans">
      <Navbar />

      <main className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-[960px] bg-white border border-[#E2E2E2] rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row">
          <section className="w-full md:w-1/2 p-8 border-b md:border-b-0 md:border-r border-[#F0F0F0]">
            <h1 className="text-[26px] font-bold text-[#222222] mb-2">
              Welcome to <span className="text-[#00875A]">Vivara</span>
            </h1>
            <p className="text-[14px] text-[#666666] mb-6">
              Log in to continue your property search, save favorites, and manage your listings.
            </p>

            <div className="flex gap-2 mb-6 bg-[#F8F9FA] p-1 rounded-lg">
              <button className="flex-1 py-2.5 text-[14px] font-semibold rounded-md bg-white text-[#00875A] border border-[#00875A]">
                Log in
              </button>
              <button className="flex-1 py-2.5 text-[14px] font-semibold rounded-md text-[#555555] hover:text-[#00875A] transition-colors">
                Sign up
              </button>
            </div>

            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block text-[12px] font-semibold text-[#444444] mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E2E2] text-[14px] outline-none focus:border-[#00875A] focus:ring-1 focus:ring-[#00875A] bg-[#FDFDFD]"
                />
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#444444] mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E2E2] text-[14px] outline-none focus:border-[#00875A] focus:ring-1 focus:ring-[#00875A] bg-[#FDFDFD]"
                />
              </div>

              <div className="flex items-center justify-between text-[12px]">
                <label className="inline-flex items-center gap-2 text-[#555555]">
                  <input type="checkbox" className="rounded border-[#D0D0D0]" />
                  Keep me logged in
                </label>
                <button type="button" className="text-[#00875A] font-semibold hover:underline">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-[#00875A] hover:bg-[#006644] text-white font-bold text-[14px] py-2.5 rounded-lg transition-colors"
              >
                Continue
              </button>
            </form>

            <p className="mt-4 text-[12px] text-[#777777]">
              Don&apos;t have an account yet?{" "}
              <span className="text-[#00875A] font-semibold">Sign up on the right to get started.</span>
            </p>
          </section>

          <section className="w-full md:w-1/2 p-8 bg-[#F8F9FA]">
            <h2 className="text-[22px] font-bold text-[#222222] mb-2">Create a free account</h2>
            <p className="text-[14px] text-[#666666] mb-6">
              Get access to real data, real brokers, and real properties across Somalia.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-semibold text-[#444444] mb-1.5">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="Ali"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E2E2] text-[14px] outline-none focus:border-[#00875A] focus:ring-1 focus:ring-[#00875A] bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#444444] mb-1.5">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Hassan"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E2E2] text-[14px] outline-none focus:border-[#00875A] focus:ring-1 focus:ring-[#00875A] bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#444444] mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E2E2] text-[14px] outline-none focus:border-[#00875A] focus:ring-1 focus:ring-[#00875A] bg-white"
                />
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#444444] mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E2E2] text-[14px] outline-none focus:border-[#00875A] focus:ring-1 focus:ring-[#00875A] bg-white"
                />
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#444444] mb-1.5">
                  Account type
                </label>
                <select
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E2E2] text-[14px] outline-none focus:border-[#00875A] focus:ring-1 focus:ring-[#00875A] bg-white"
                  defaultValue="buyer"
                >
                  <option value="buyer">I&apos;m looking to buy or rent</option>
                  <option value="agent">I&apos;m a real estate agent</option>
                  <option value="owner">I&apos;m a property owner</option>
                </select>
              </div>

              <label className="flex items-start gap-2 text-[12px] text-[#555555]">
                <input type="checkbox" className="mt-0.5 rounded border-[#D0D0D0]" />
                <span>
                  I agree to the{" "}
                  <span className="text-[#00875A] font-semibold">Terms &amp; Conditions</span> and{" "}
                  <span className="text-[#00875A] font-semibold">Privacy Policy</span>.
                </span>
              </label>

              <button
                type="submit"
                className="w-full mt-1 bg-[#00875A] hover:bg-[#006644] text-white font-bold text-[14px] py-2.5 rounded-lg transition-colors"
              >
                Create account
              </button>
            </form>

            <p className="mt-4 text-[12px] text-[#777777]">
              Already registered?{" "}
              <span className="text-[#00875A] font-semibold">Use the login form on the left.</span>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

