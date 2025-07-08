export default function DireitoImobiliarioCard() {
    return (
        <div
            className="bg-[#675F4B] w-[370px] h-[370px] p-[21px] rounded-[10px] flex flex-col gap-[10px] box-border
                max-[860px]:scale-[0.9] max-[768px]:scale-[0.8] max-[420px]:scale-[0.7] max-[360px]:scale-[0.6]"
        >
            <div className="flex flex-row w-full h-1/2 gap-[10px]">
                <img src="/direito_imobiliario_icon.svg" alt="Card" />
                <div className="w-[164px] h-[164px] flex justify-center items-center">
                    <h1 className="text-[#D9D5CE] font-['Josefin_Slab',serif] text-[35px]">Direito Imobiliário</h1>
                </div>
            </div>
            <div>
                <p className="text-[21px] text-[#D9D5CE] text-center w-full h-1/2 font-['Josefin_Slab',serif] mt-[-10px]">
                    Com forte atuação na regularização de imóveis urbanos e rurais, atuamos de forma integrada com as demais áreas do escritório para dar suporte completo tanto a pessoas físicas quanto jurídicas em operações imobiliárias de qualquer porte. 
                </p>
            </div>
        </div>
    );
}