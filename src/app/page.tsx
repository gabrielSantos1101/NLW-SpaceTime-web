import { Copyright } from "../components/Copyright";
import { Hero } from "../components/Hero";
import { SingIn } from "../components/SingIn";
import { EmptyMemories } from "@/components/EmptyMemories";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">

      {/*Left*/}
      <div className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10 bg-[url('../assets/bg-stars.svg')] bg-cover">

        {/*Blur*/}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 blur-full -translate-y-1/2 translate-x-1/2 rounded-full"></div>

        {/*Stripes*/}
        <div className="absolute bottom-0 right-1 top-0 w-2 bg-stripes" />
        <SingIn />
        <Hero />
        <Copyright />
      </div>
      {/*Rigth*/}
      <div className="flex flex-col p-16 bg-[url('../assets/bg-stars.svg')] bg-cover">
        <EmptyMemories />
      </div>
    </main>
  )
}
