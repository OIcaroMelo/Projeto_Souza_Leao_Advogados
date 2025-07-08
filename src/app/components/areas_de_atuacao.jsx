import DireitoImobiliarioCard from "./direito_imobiliario_card";
import DireitoSocietarioCard from "./direito_societario_card";

export default function AreasDeAtuacao() {
    return (
        <div
            className="flex flex-col justify-evenly items-center bg-[#D9D5CE] min-h-screen w-screen text-[#675F4B] font-['Josefin_Slab',serif] p-5 box-border pt-12 md:pt-[35px] max-[768px]:pt-16 max-[480px]:pt-20"
        >
            <h1
                className="text-[80px] mt-[30px] font-['Josefin_Slab',serif] 
                max-[1024px]:text-[56px] max-[768px]:text-[44px] max-[768px]:text-center max-[768px]:mb-5 max-[480px]:text-[32px] max-[480px]:mb-3"
            >
                Áreas de Atuação
            </h1>
            <div
                className="flex flex-row flex-wrap justify-evenly w-[110vw] gap-5 md:flex-col md:items-center md:justify-evenly"
            >
                <DireitoSocietarioCard />
                <DireitoImobiliarioCard />
            </div>
            <img
                src="/atuacao_icon.svg"
                alt=""
                className="md:scale-[60%]"
            />
        </div>
    );
}