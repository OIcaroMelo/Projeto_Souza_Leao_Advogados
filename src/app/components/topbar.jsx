'use client';

import { useEffect, useState } from 'react';

export default function TopBar() {
    const [menuAberto, setMenuAberto] = useState(false);

    useEffect(() => {
        const topicos = document.querySelectorAll('.topico');

        topicos.forEach(topico => {
            topico.addEventListener('click', () => {
                document.querySelector('.topico.ativo')?.classList.remove('ativo', 'bg-[#675F4B]', 'text-[#ffffff]');
                document.querySelector('.traco.actived')?.classList.remove('actived', 'bg-[#675F4B]');

                topico.classList.add('ativo', 'bg-[#675F4B]', 'text-[#ffffff]');
                topico.querySelector('.traco')?.classList.add('actived', 'bg-[#675F4B]');

                setMenuAberto(false);
            });
        });
    }, []);

    return (
        <div className='bg-[#D9D5CE] w-screen h-[20vh] flex flex-row justify-around items-center px-[40px] fixed top-0 z-[1000] box-border max-[900px]:flex max-[900px]:flex-row max-[900px]:justify-between max-[900px]:items-center max-[900px]:h-[10vh] max-[900px]:p-[20px]'>
            <img
                src="/souza_leao_icon.svg"
                alt="Logo"
                className="h-[75px] max-[900px]:h-[50px]"
            />

            <div
                onClick={() => setMenuAberto(!menuAberto)}
                className="hidden max-[900px]:block text-[30px] text-[#675F4B] cursor-pointer"
            >
                ☰
            </div>

            <div className={`${menuAberto ? 'max-[900px]:flex' : 'max-[900px]:hidden'} flex flex-col gap-[15px] scale-[0.8] w-[1000px] max-[900px]:flex-col max-[900px]:bg-[#D9D5CE] max-[900px]:absolute max-[900px]:top-full max-[900px]:left-0 max-[900px]:w-full max-[900px]:p-5 max-[900px]:shadow-lg`}>
                <div
                    className="flex flex-row justify-end w-full border-b-2 border-[#675F4B] gap-[10px] max-[900px]:justify-center max-[900px]:border-b-0"
                >
                    <a href=""><img src="/linkedin.svg" alt="LinkedIn" /></a>
                    <a href=""><img src="/instagram.svg" alt="Instagram" /></a>
                </div>

                <div
                    className="flex flex-row justify-between gap-[20px] font-['Josefin_Slab',serif] text-[#675F4B] max-[900px]:flex-col max-[900px]:items-center"
                >
                    <div className="topico ativo bg-[#675F4B] text-[#ffffff] flex flex-col justify-center items-center gap-[10px] cursor-pointer px-[10px] pt-[8px] pb-[5px] transition-colors duration-300 rounded-[5px] relative">
                        <a href="#section-inicio"><h2 className='font-normal'>Início</h2></a>
                        <div className="traco actived bg-[#675F4B] w-[90%] h-[5px] absolute top-[45px] transition-colors duration-300"></div>
                    </div>

                    <div className="topico flex flex-col justify-center items-center gap-[10px] cursor-pointer px-[10px] pt-[8px] pb-[5px] transition-colors duration-300 rounded-[5px] relative">
                        <a href="#section-atuacao"><h2 className='font-normal'>Áreas de Atuação</h2></a>
                        <div className="traco w-[90%] h-[5px] absolute top-[45px] transition-colors duration-300"></div>
                    </div>

                    <div className="topico flex flex-col justify-center items-center gap-[10px] cursor-pointer px-[10px] pt-[8px] pb-[5px] transition-colors duration-300 rounded-[5px] relative">
                        <a href="#section-profissionais"><h2 className='font-normal'>Profissionais</h2></a>
                        <div className="traco w-[90%] h-[5px] absolute top-[45px] transition-colors duration-300"></div>
                    </div>

                    <div className="topico flex flex-col justify-center items-center gap-[10px] cursor-pointer px-[10px] pt-[8px] pb-[5px] transition-colors duration-300 rounded-[5px] relative">
                        <a href="#section-footer"><h2 className='font-normal'>Contato</h2></a>
                        <div className="traco w-[90%] h-[5px] absolute top-[45px] transition-colors duration-300"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
