import { Roboto } from "next/font/google";
import MidAccountAlert from "./svgs/MidAccountAlert";
import Shopping from "./svgs/Shopping";
import SearchIcon from "./svgs/SearchIcon";
import HeartIcon from "./svgs/HeartIcon";

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
});

export default function TopBar() {
  return (
    <nav className="relative w-full h-[5rem]">
        <div className="fixed w-full h-[5rem] top-0 left-0 bg-[#f5e2a5] z-10">

          <ul className={`${roboto.className} absolute w-[431px] h-6 top-[38px] left-1/2 transform -translate-x-1/2 flex justify-between`} >
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
            
          <div className="absolute w-[247px] h-7 top-9 left-4/5">
            <ul className="absolute w-7 h-7 top-0  transform -translate-x-1.5 flex justify-between gap-[2.813rem]" >
              <li className="tracking-normal leading-normal"><a href="#Conta"><MidAccountAlert/></a></li>
              <li className="tracking-normal leading-normal"><a href="#Shopping"><Shopping/></a></li>
              <li className="tracking-normal leading-normal"><a href="#busca"><SearchIcon/></a></li>
              <li className="tracking-normal leading-normal"><a href="#Lista"><HeartIcon/></a></li>
            </ul>
          </div>
        
        </div>
      </nav>
  );
}