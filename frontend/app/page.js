import Image from "next/image";
import { Oxanium } from "next/font/google";
import { Roboto } from "next/font/google";


const fonttest = Oxanium({
  subsets: ['latin'],
  weight: ['200', '300', '400']
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
});

//"absolute w-[431px] h-6 top-[38px] left-1/2 transform -translate-x-1/2 flex justify-between"

export default function Home() {
  return (
    <div>
      <header className="relative w-full h-[100px]">
        <div className="fixed w-full h-[100px] top-0 left-0 bg-[#fbebb5]">
          <ul className={`${roboto.className} absolute w-[431px] h-6 top-[38px] left-1/2 transform -translate-x-1/2 flex justify-between`} >
            <li className="font-ro font-regular text-black text-base tracking-normal leading-normal px-4 py-2">
              <a href="#Home">Home</a>
            </li>
            <li className="font-poppins font-medium text-black text-base tracking-normal leading-normal px-4 py-2">
              <a href="#Produtos">Produtos</a>
            </li>
            <li className="font-poppins font-medium text-black text-base tracking-normal leading-normal px-4 py-2">
              <a href="#Sobre">Sobre</a>
            </li>
            <li className="font-Roboto font-regular text-black text-base tracking-normal leading-normal px-4 py-2">
              <a href="#Contato">Contato</a>
            </li>
          </ul>
        </div>
      </header>
      <section>
        <h1 className="text-amber-200">ola</h1>
      </section>

    </div>
    
  );
}
