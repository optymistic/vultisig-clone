import {
  Users,
  Wallet,
  ComputerIcon as Windows,
  Apple,
  Chrome,
  LaptopIcon as Linux,
  GithubIcon,
  KeyRound,
  ShieldCheck,
  Fingerprint,
  Laptop2,
  BrainCircuit,
  ChevronDown,
} from "lucide-react"
import { useState } from "react";
import xLogo from "/x-logo.svg"
import { ThemeToggle } from "./components/ThemeToggle"

const faqs = [
  {
    question: "What is MPC technology and how does it work?",
    answer:
      "Multi-Party Computation (MPC) is a cryptographic technology that allows multiple parties to jointly compute a function over their inputs while keeping those inputs private. In Vultisig, MPC eliminates the need for a single private key by distributing cryptographic calculations across multiple devices or parties, ensuring no single point of failure exists.",
  },
  {
    question: "How is Vultisig different from traditional hardware wallets?",
    answer:
      "Unlike hardware wallets that store private keys on physical devices, Vultisig uses MPC technology to eliminate seed phrases and private keys entirely. This means you don't need to carry special hardware, worry about device damage, or manage complex recovery processes. Vultisig works on your existing devices with a user-friendly interface.",
  },
  {
    question: "What happens if I lose access to one of my devices?",
    answer:
      "Vultisig's Vault Shares system allows you to recover access even if you lose a device. During setup, you create multiple shares that can be stored across different locations (devices, cloud storage, trusted contacts). You only need a threshold number of these shares to recover full access to your wallet, providing both security and peace of mind.",
  },
  {
    question: "Which blockchains does Vultisig support?",
    answer:
      "Vultisig is designed as a multi-chain wallet supporting major blockchains including Ethereum, Bitcoin, Solana, Polkadot, and many others. Our architecture allows us to quickly add support for new chains as they gain adoption, providing you with a unified interface for all your digital assets.",
  },
  {
    question: "Is Vultisig open source?",
    answer:
      "Yes, Vultisig is committed to transparency and security. Our core components are open source, allowing the community to review and verify our security implementations. You can find our repositories on GitHub where we welcome contributions and security audits from the community.",
  },
];

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors relative">
      {/* Navigation */}
      <nav className="border dark:border-none fixed w-[95%] mx-auto top-4 left-0 right-0 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm z-50 p-2 rounded-2xl shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="logo.png" alt="Vultisig Logo" className="w-8 h-8 rounded-lg" />
              <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">Vultisig</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="https://airdrop.vultisig.com"
                target="_blank"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                rel="noreferrer"
              >
                Airdrop
              </a>
              <a
                href="#features"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#FAQ"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                FAQ
              </a>
              <a
                href="https://docs.vultisig.com"
                target="_blank"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                rel="noreferrer"
              >
                Docs
              </a>
              <a href="#Download" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
                Download Now
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="max-w-3xl">
              {/* Main Headline */}
              <h1 className="font-display text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-primary-light bg-clip-text text-transparent leading-tight mt-6">
                <span className="underline decoration-primary decoration-4 underline-offset-8">TAKE CONTROL</span> WITH
                THE SEEDLESS, MULTI-CHAIN CRYPTO WALLET
              </h1>

              <div className="pt-4 pb-10 px-8">
                <span className="font-display text-3xl text-black dark:text-white">
                  No seed phrases, No private keys
                </span>
              </div>

              {/* Introducing Vultisig */}
              <h2 className="py-10 font-italic md:text-6xl text-gray-900 dark:text-gray-100">
                <span className="align-middle text-8xl text-primary font-bold font-heading md:text-8xl tracking-wider">
                  VULTISIG
                </span>
              </h2>

              {/* Subheadline */}
              <h2 className="py-4 font-display text-3xl md:text-4xl text-gray-900 dark:text-gray-100">
                The Future of Onchain Asset Security
              </h2>

              <button className="bg-primary text-white px-10 py-4 text-lg md:text-xl rounded-full hover:bg-primary-dark transition-colors mb-16 mt-8">
              <a href="#Download" className="btn-primary">
                  Get Started
                </a>
              </button>

              {/* Shortened Description */}
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Experience next-generation wallet security powered by advanced{" "}
                <span className="text-primary font-semibold">MPC technology</span>. Built for individuals and teams who
                demand the highest level of protection.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <img
              src="https://cdn.prod.website-files.com/623ad174ca1da302c912e9e4/62a30ead6817be04825d2fad_MPC%20multi-party%20computation%20crypto.png"
              alt="Digital Security Visualization"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-surface-light dark:bg-surface-dark">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">
            WHY CHOOSE VULTISIG?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center border border-gray-300 dark:border-gray-700 rounded-2xl p-6">
              <div className="border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-transparent p-6 rounded-2xl mb-6 inline-block">
                <BrainCircuit className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                MPC Security
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Advanced Multi-Party Computation technology eliminates the need for seed phrases while maintaining the
                highest security standards.
              </p>
            </div>
            <div className="text-center border border-gray-300 dark:border-gray-700 rounded-2xl p-6">
              <div className="border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-transparent p-6 rounded-2xl mb-6 inline-block">
                <Laptop2 className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Consumer Hardware
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Use your phone, laptop, or tablet—fast, secure, and hassle-free. No special devices needed.
              </p>
            </div>
            <div className="text-center border border-gray-300 dark:border-gray-700 rounded-2xl p-6">
              <div className="border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-transparent p-6 rounded-2xl mb-6 inline-block">
                <ShieldCheck className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Vault Shares
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                No need to write down seed phrases. Store your Vault Shares online safely and respawn anywhere!
              </p>
            </div>
            <div className="text-center border border-gray-300 dark:border-gray-700 rounded-2xl p-6">
              <div className="border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-transparent p-6 rounded-2xl mb-6 inline-block">
                <Fingerprint className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Rich & Easy UI
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Have all information displayed on big screens in easy to understand words.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="feature-updates" className="py-20 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">
            LATEST FEATURE UPDATES
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Feature 1 */}
            <div className="text-center border border-gray-300 dark:border-gray-700 rounded-2xl p-6">
              <h3 className="font-display text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                🔐 Multi-Device Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Seamlessly access your wallet across multiple devices with secure syncing.
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">Released: March 2025</span>
            </div>

            {/* Feature 2 */}
            <div className="text-center border border-gray-300 dark:border-gray-700 rounded-2xl p-6">
              <h3 className="font-display text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                ⚡ Instant Transactions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enjoy lightning-fast transactions with our optimized blockchain integration.
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">Released: February 2025</span>
            </div>

            {/* Feature 3 */}
            <div className="text-center border border-gray-300 dark:border-gray-700 rounded-2xl p-6">
              <h3 className="font-display text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                📈 Advanced Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get detailed insights into your transactions, holdings, and security status.
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">Released: January 2025</span>
            </div>

            {/* Feature 4 */}
            <div className="text-center border border-gray-300 dark:border-gray-700 rounded-2xl p-6">
              <h3 className="font-display text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                🛡️ Enhanced MPC Security
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Improved multi-party computation algorithms for even stronger wallet security.
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">Released: December 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">
            PROBLEMS WITH EXISTING SOLUTIONS
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6">
              <div className="flex items-center mb-6">
                <KeyRound className="w-8 h-8 text-primary mr-3" />
                <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Hardware Wallets
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Hardware wallets are clunky, difficult to use, and require physical presence. They create barriers
                rather than solutions for users.
              </p>
            </div>
            <div className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-primary mr-3" />
                <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-gray-100">Multi-Signature</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Current multi-signature solutions are chain-specific and overly complex, requiring advanced technical
                knowledge to set up and manage effectively.
              </p>
            </div>
            <div className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6">
              <div className="flex items-center mb-6">
                <Wallet className="w-8 h-8 text-primary mr-3" />
                <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Traditional Wallets
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Traditional wallets rely on single private keys or seed phrases. One mistake means your assets are gone
                forever with no recovery option.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">
            TRUSTED BY THE BEST
          </h2>
          <div className="border dark:border-none mx-auto top-4 left-0 right-0 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm z-50 p-12 rounded-xl shadow-md grid grid-cols-2 md:grid-cols-5 gap-12 items-center">
            {[
              { name1: "THORChain", name2: "Treasury", img: "thorchain.svg" },
              { name1: "Vultisig", name2: "Treasury", img: "vultisig.svg" },
              { name1: "WEWE", name2: "Treasury", img: "wewe.svg" },
              { name1: "DeFi Suisse", name2: "Treasury", img: "DeFi-suisse-treasury.svg" },
              { name1: "ZKFinance", name2: "Treasury", img: "zkfinance.svg" },
              { name1: "Ruji", name2: "Treasury", img: "ruji.svg" },
            ].map((company, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={company.img || "/placeholder.svg"}
                  alt={`${company.name1} ${company.name2}`}
                  className="h-20 w-20 rounded-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <span className="text-gray-600 dark:text-gray-400 mt-2 text-lg leading-tight">
                  {company.name1} <br /> {company.name2}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* FAQ Section */}
       <section id="FAQ" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="w-full mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border border-gray-300 dark:border-gray-700 rounded-xl">
                <button
                  className="w-full rounded-xl flex justify-between items-center bg-surface-light dark:bg-surface-dark p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-gray-600 dark:text-gray-400">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-gray-300 mb-8">
            READY TO SECURE ASSETS ONCHAIN?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of users who trust Vultisig for their digital asset security needs.
          </p>
          <section id="Download">
          <button className="bg-primary text-black dark:text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors mb-8">
            Download
          </button>
          </section>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-8">
              <a href="https://github.com/vultisig/vultisig-windows/releases/download/v1.0.18/Vultisig-amd64-installer-v1.0.18.exe" target="_blank" rel="noopener noreferrer">
              <img src="/windows-svgrepo-com.svg" alt="WINDOWS Logo" className="w-10 h-10 rounded-lg" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.vultisig.wallet" target="_blank" rel="noopener noreferrer">
              <img src="/play-1003-svgrepo-com.svg" alt="GOOGLE PLAY Logo" className="w-10 h-10 rounded-lg" />
              </a>
              <a href="https://github.com/vultisig/vultisig-windows/releases/download/v1.0.18/vultisig_1.0.18_amd64.deb" target="_blank" rel="noopener noreferrer">
              <img src="/linux-svgrepo-com.svg" alt="LINUX Logo" className="w-10 h-10 rounded-lg" />
              </a>
              <a href="https://github.com/vultisig/vultisig-ios/releases/download/v1.14.0/VultisigApp.v1.14.0.signed.pkg" target="_blank" rel="noopener noreferrer">
              <img src="/mac-screen-svgrepo-com.svg" alt="MACOS Logo" className="w-10 h-10 rounded-lg" />
              </a>
              <a href="https://apps.apple.com/app/vultisig/id6503023896" target="_blank" rel="noopener noreferrer">
              <img src="/apple-173-svgrepo-com.svg" alt="APP STORE Logo" className="w-10 h-10 rounded-lg" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="Vultisig Logo" className="w-8 h-8" />
                <span className="text-2xl font-bold">Vultisig</span>
              </div>
              <p className="text-gray-400 mb-4">Securing digital assets with next-generation MPC technology.</p>

              {/* Social Icons (Side by Side) */}
              <div className="flex space-x-4">
                <a href="https://github.com/vultisig" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="w-6 h-6 text-white hover:text-primary transition-colors" />
                </a>
                <a href="https://x.com/vultisig" target="_blank" rel="noopener noreferrer">
                  <img
                    src={xLogo || "/placeholder.svg"}
                    alt="X Logo"
                    className="w-6 h-6 brightness-0 invert hover:brightness-75 transition"
                  />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright (Compact) */}
          <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-400 text-sm">
            &copy; 2025 Vultisig. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

