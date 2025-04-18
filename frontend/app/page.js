import { Roboto } from "next/font/google";
import { Poppins } from "next/font/google";


import Image from "next/image";
import TopBar from "./components/TopBar";



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
      <TopBar />
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

