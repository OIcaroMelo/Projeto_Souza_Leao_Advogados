export default function Footer() {

    return (
        <div
            className="flex flex-col justify-between items-center w-screen min-h-[55vh] bg-[#675F4B] font-['Josefin_Slab',serif] box-border max-[1025px]:gap-[20px]"
        >
            <h1 className="flex flex-col justify-center h-[30%] text-[#D9D5CE] mt-[20px] text-[64px] text-center max-[1025px]:text-[40px]">Contato</h1>

            <div
                className="flex flex-row justify-center gap-[20px] w-full relative flex-wrap max-[1025px]:flex-col max-[1025px]:items-center max-[1025px]:gap-[30px]"
            >
                <div
                    className="flex flex-row gap-[10px] w-[27%] justify-center overflow-visible max-[1025px]:w-[90%] max-[1025px]:flex-col max-[1025px]:items-center max-[1025px]:text-center"
                >
                    <div>
                        <img src="/email_icon.svg" alt="" />
                    </div>
                    <div>
                        <h1 className="text-[36px] text-[#D9D5CE] max-[1025px]:text-[28px]">E-mail</h1>
                        <p className="text-[18px] text-[#D9D5CE] flex-wrap break-words whitespace-normal">administrativo@souzaleaoadvogados.com</p>
                    </div>
                </div>

                <div
                    className="flex flex-row gap-[10px] w-[27%] justify-center overflow-visible max-[1025px]:w-[90%] max-[1025px]:flex-col max-[1025px]:items-center max-[1025px]:text-center"
                >
                    <div>
                        <img src="/location_icon.svg" alt="" />
                    </div>
                    <div>
                        <h1 className="text-[36px] text-[#D9D5CE] max-[1025px]:text-[28px]">Nosso Endereço</h1>
                        <p className="text-start text-[22px] text-[#D9D5CE] max-[1025px]:text-[18px]">R. Bruno Veloso, 1280, <br /> Salas 1617, 1618 e 1619, <br /> Boa Viagem, Recife/PE <br />51021280</p>
                    </div>
                </div>

                <div
                    className="flex flex-row gap-[10px] w-[27%] justify-center overflow-visible max-[1025px]:w-[90%] max-[1025px]:flex-col max-[1025px]:items-center max-[1025px]:text-center"
                >
                    <div>
                        <img src="/phone_icon.svg" alt="" />
                    </div>
                    <div>
                        <h1 className="text-[36px] text-[#D9D5CE] max-[1025px]:text-[28px]">Telefone</h1>
                        <p className="text-[22px] text-[#D9D5CE] max-[1025px]:text-[18px]">(81) 9 9930-0207</p>
                    </div>
                </div>
            </div>

            <p className="flex flex-col justify-center h-[30%] text-[#D9D5CE] text-[22px] mb-[20px] max-[1025px]:text-[18px] max-[768px]:text-[16px] max-[480px]:text-[12px]">Copyright ® 2025 - Todos os direitos reservados</p>
        </div>
    )
}