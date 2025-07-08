export default function Profissionais() {

    return (
        <div
            className="flex flex-col justify-evenly items-center bg-[#D9D5CE] font-['Josefin_Slab',serif] text-[#675F4B] min-h-screen max-[768px]:pt-[35px]"
        >
            <h1 className="text-[64px] max-[768px]:text-[40px]">Profissionais</h1>
            <div
                className="flex flex-row flex-wrap justify-evenly w-[110vw] max-[768px]:flex-col"
            >
                <div className="flex flex-col justify-center items-center gap-[5px] scale-[0.8]">
                    <img className="scale-[0.9]" src="/ana_julia_argentino.svg" alt="" />
                    <h2 className="text-[32px]">Ana Julia Argentino</h2>
                    <div className="flex flex-col items-center">
                        <p className="text-[24px] text-start text-[#675F4B]">Bacharelado em Direito pela<br/>Universidade Católica de<br/>Pernambuco - Advogada<br/> Inscrita na OAB/PE<br/> sob o nº 60.414;</p>
                        <p className="text-[24px] text-start text-[#675F4B]">Pós-graduanda em Direito<br/>Societário pelo Instituto Luiz<br/>Maio Moutinho;</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-[5px] scale-[0.8]">
                    <img className="scale-[0.9]" src="/ana_julia_argentino.svg" alt="" />
                    <h2 className="text-[32px]">Ana Julia Argentino</h2>
                    <div className="flex flex-col items-center">
                        <p className="text-[24px] text-start text-[#675F4B]">Bacharelado em Direito pela<br/>Universidade Católica de<br/>Pernambuco - Advogada<br/> Inscrita na OAB/PE<br/> sob o nº 60.414;</p>
                        <p className="text-[24px] text-start text-[#675F4B]">Pós-graduanda em Direito<br/>Societário pelo Instituto Luiz<br/>Maio Moutinho;</p>
                    </div>
                </div>
            </div>
            <div className="h-[64px]"></div>
        </div>
    );
}