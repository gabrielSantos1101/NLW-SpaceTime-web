import { User } from "lucide-react";
import Image from "next/image";
import nlwLogo from "../assets/nlw-logo.svg";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">

      {/*Left*/}
      <div className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10 bg-[url('../assets/bg-stars.svg')] bg-cover">

        {/*Blur*/}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 blur-full -translate-y-1/2 translate-x-1/2 rounded-full"></div>

        {/*Stripes*/}
        <div className="absolute bottom-0 right-1 top-0 w-2 bg-stripes" />

        {/*Sing in*/}
        <a href="http://" target="_blank" className="flex items-center text-left gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="text-sm leading-snug max-w-[140px] hover:text-gray-50 transition-colors">
            <span className="underline">Crie sua conta</span> e salve suas memórias!
          </p>
        </a>

        {/*hero*/}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="logo NLW spaceTime" />
          <h1 className="text-5xl leading-tight font-bold text-gray-50">Sua cápsula do tempo</h1>
          <p className="text-gray-100 max-w-[420px]">Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
          <a href="" className="bg-green-500 px-5 py-3 rounded-full inline-block font-alt text-sm uppercase leading-none text-black hover:bg-green-600">CADASTRAR LEMBRANçA</a>
        </div>

        {/*copyright*/}
        <div className="text-sm text-gray-200 leading-relaxed">
        Feito com 💜 no NLW da 
        <a 
        href="http://rocketseat.com.br" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-gray-100">Rocketseat</a>
        </div>

      </div>
      {/*Rigth*/}
      <div className="flex flex-col p-16 bg-[url('../assets/bg-stars.svg')] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">Você ainda não registrou nenhuma lembrança, comece a{''}
            <a href="#" className="underline hover:text-gray-50">criar agora!</a></p>
        </div>
      </div>
    </main>
  )
}
