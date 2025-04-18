import { Roboto } from "next/font/google";
import MidAccountAlert from "../svgs/MidAccountAlert";
import Shopping from "../svgs/Shopping";
import SearchIcon from "../svgs/SearchIcon";
import HeartIcon from "../svgs/HeartIcon";
import { Prompt } from "next/font/google";

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
});

const prompt = Prompt({
  subsets: ['latin'],
  weight: '400' 
})

export default function TopBar() {
  return (
    <nav className="relative w-full h-[5rem]">
        <div className="fixed w-full h-[5rem] top-0 left-0 bg-[#FBEBB5] z-10">

          <div className="w-36 h-9 absolute left-1/16 top-1/2 transform  -translate-y-1/2">
            <div className="w-[98px] h-0 left-[2px] top-[32px] absolute  outline-1 outline-offset-[-0.50px] outline-black"></div>
            <a className= {`${prompt.className} left-0 top-0 absolute justify-start text-black text-2xl font-normal  motion-preset-bounce `}>CHIC BRASIL</a>
          </div>

          <ul className={`${roboto.className} absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[431px] h-6`} >
            <li className="font-poppins font-semibold text-black text-base tracking-normal leading-normal px-4 ">
              <a href="#Home">Home</a>
            </li>
            <li className="font-poppins font-semibold text-black text-base tracking-normal leading-normal px-4 ">
              <a href="#Produtos">Produtos</a>
            </li>
            <li className="font-poppins font-semibold text-black text-base tracking-normal leading-normal px-4 ">
              <a href="#Sobre">Sobre</a>
            </li>
            <li className="font-Roboto font-semibold text-black text-base tracking-normal leading-normal px-4 ">
              <a href="#Contato">Contato</a>
            </li>
          </ul>
            
          <div className="absolute w-[11.125rem] h-7 top-1/2 left-4/5 transform -translate-y-1/2">
            <ul className="flex justify-between gap-[1.375rem] items-center w-full h-full">
              <li className="tracking-normal leading-normal motion-safe:hover:motion-preset-seesaw"><a href="#Conta"><MidAccountAlert/></a></li>
              <li className="tracking-normal leading-normal motion-safe:hover:motion-preset-seesaw"><a href="#Shopping"><Shopping/></a></li>
              <li className="tracking-normal leading-normal motion-safe:hover:motion-preset-seesaw"><a href="#busca"><SearchIcon/></a></li>
              <li className="tracking-normal leading-normal motion-safe:hover:motion-preset-seesaw"><a href="#Lista"><HeartIcon/></a></li>
            </ul>
          </div>
        </div>
      </nav>
  );
}