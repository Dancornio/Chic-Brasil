import { Roboto } from "next/font/google";
import { Poppins } from "next/font/google";


import MidAccountAlert from "./components/svgs/MidAccountAlert"
import Shopping from "./components/svgs/Shopping";
import SearchIcon from "./components/svgs/SearchIcon";
import HeartIcon from "./components/svgs/HeartIcon";
import Image from "next/image";



const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '300', '200']
});

//"absolute w-[431px] h-6 top-[38px] left-1/2 transform -translate-x-1/2 flex justify-between"

export default function Home() {
  return (
    <div>
      <header className="relative w-full h-[5rem]">
        <div className="fixed w-full h-[5rem] top-0 left-0 bg-[#fbebb5] z-10">

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
      </header>
      <section className="">
        <div className={` ${poppins.className} w-full h-[1900px] relative`}>
          <div className="w-full h-[1900px] left-0 top-0 absolute bg-[#ffffff]" />
            <div className="w-[440px] left-[202px] top-[328px] absolute justify-start text-black text-[64px] font-medium ">Coleção de<br/>verão</div>
            <a className="left-[206px] top-[555px] absolute justify-start text-black text-2xl font-medium" href="#Colecao">Compre agora</a>
            <div className="w-[121px] h-0 left-[206px] top-[604px] absolute outline  outline-offset-[-1px] outline-black"></div>
            <Image
              className=" absolute object-cover left-3/5 top-[10.5rem]"
              src="https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="imagen"
              width={500}
              height={800}
            />
          </div>
          
      </section>
    </div>
    
  );
}

