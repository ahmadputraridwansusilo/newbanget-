import Image from "next/image"
import Link from "next/link"
import { ArrowRight} from "lucide-react"
import { SiGitbook } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import Spline from '@splinetool/react-spline/next';


export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
    <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex flex-wrap justify-between items-center px-4 py-3 md:px-12 md:py-5">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-[#daff80] w-6 h-6">
              <img src="/gila.png" alt="ray" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-white tracking-wide text-lg md:text-xl">BUFAI</span>
          </Link>

          <div className="flex items-center gap-3 md:gap-4 flex-wrap">
            <Link href="https://buf-ai.gitbook.io/buf.ai-docs" className="text-white opacity-70 hover:opacity-100">
              <SiGitbook size={20} />
            </Link>
            <Link href="https://t.me/+lFcscbju84JhOTY1" className="text-white opacity-70 hover:opacity-100">
              <FaTelegram size={20} />
            </Link>
            <Link href="https://x.com/BUF_Ai" className="text-white opacity-70 hover:opacity-100">
              <FaXTwitter size={20} />
            </Link>
            <Link
              href="https://app.getdefitools.com/home"
              className="ml-2 md:ml-4 bg-transparent text-[#daff80] border border-[#daff80] rounded-full px-3 py-1 text-xs md:px-5 md:py-2 text-sm font-medium hover:bg-[white]/30 transition-colors hover:text-black"
            >
              ENTER APP
            </Link>
          </div>
        </header>

        {/* Main content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight">
            AI Engine for
            <br />
            Storytelling
          </h1>
          <p className="mt-6 text-white/80 text-lg">
            Built for a new generation of <span className="text-white font-medium">creators and brands</span>
          </p>

          <Link
            href="/app"
            className="mt-12 bg-[#daff80] text-black rounded-full px-8 py-3 font-medium flex items-center gap-2 hover:bg-[#e6ff9c] transition-colors"
          >
            ENTER APP <ArrowRight size={18} />
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center px-4 md:px-10">
        <Spline
            scene="https://prod.spline.design/7KeF8ornnvG5hTlh/scene.splinecode"
            className="w-full max-w-md md:max-w-2xl "
          />
        </div>
      </div>
    </main>
  )
}

function DotPattern() {
  return (
    <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] gap-8">
      {Array.from({ length: 400 }).map((_, i) => (
        <div key={i} className="w-1 h-1 rounded-full bg-white/10" />
      ))}
    </div>
  )
}

