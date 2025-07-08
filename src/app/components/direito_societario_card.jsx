export default function DireitoSocietarioCard() {
    return (
        <div
            className="bg-[#675F4B] w-[370px] h-[370px] p-[21px] rounded-[10px] flex flex-col gap-[10px] box-border
                max-[860px]:scale-[0.9] max-[768px]:scale-[0.8] max-[420px]:scale-[0.7] max-[360px]:scale-[0.6]"
        >
            <div className="flex flex-row w-full h-1/2 gap-[10px]">
                <img src="/direito_societario_icon.svg" alt="Card" />
                <div className="w-[164px] h-[164px] flex justify-center items-center">
                    <h1 className="text-[#D9D5CE] font-['Josefin_Slab',serif] text-[35px]">Direito Societário</h1>
                </div>
            </div>
            <div>
                <p className="text-[21px] text-[#D9D5CE] text-center w-full h-1/2 font-['Josefin_Slab',serif] mt-[-20px]">
                    Oferecemos assessoria jurídica completa para empresas em todas as fases do seu ciclo de vida, desde a constituição até reestruturações mais complexas. Atuamos de forma estratégica para que sua empresa cresça com segurança e esteja sempre em conformidade com a legislação.
                </p>
            </div>
        </div>
    );
}