import Image from "next/image";
import nlwLogo from "../assets/nlw-logo.svg";

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="logo NLW spaceTime" />
      <h1 className="text-5xl leading-tight font-bold text-gray-50">Sua cápsula do tempo</h1>
      <p className="text-gray-100 max-w-[420px]">Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
      <a href="" className="bg-green-500 px-5 py-3 rounded-full inline-block font-alt text-sm uppercase leading-none text-black hover:bg-green-600">CADASTRAR LEMBRANçA</a>
    </div>
  )
}