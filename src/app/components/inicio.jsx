export default function Inicio() {

    return (
        <div
            className="flex flex-row w-screen min-h-[80vh] bg-[#675F4B] overflow-visible font-['Josefin_Slab',serif] pt-[20vh] max-[1024px]:pt-[15vh] max-[1024px]:pb-[5vh]"
        >
            <div>
                <div
                    className="flex flex-col justify-center items-start w-[50vw] h-full gap-[15px] pl-[30%] text-[#ffffff]"
                >
                    <h2
                        className="flex flex-wrap w-full text-[32px] max-[1180px]:text-[28px] max-[1024px]:text-[28px] max-[940px]:text-[26px] max-[820px]:text-[24px] max-[750px]:text-[22px] max-[520px]:text-[24px] max-[430px]:text-[24px]"
                    >
                        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.<br />Etiam eget ligula eu lectus<br />lobortis condimentum.
                    </h2>

                    <h3
                        className="flex flex-wrap w-full text-[24px] max-[1180px]:text-[20px] max-[1024px]:text-[20px] max-[940px]:text-[18px] max-[820px]:text-[16px] max-[750px]:text-[14px] max-[520px]:text-[16px] max-[430px]:text-[16px]"
                    >
                        Aliquam nonummy auctor massa.<br />Pellentesque habitant morbi tristique<br />senectus et netus et malesuada fames ac<br />turpis egestas. Nulla at risus. 
                    </h3>
                </div>
            </div>

            <div
                className="flex flex-row justify-end w-[50vw] h-[80vh] relative"
            >
                <img
                    src="/shapes.svg"
                    alt=""
                    className="absolute h-full right-0 max-[1550px]:right-[-300px] max-[1370px]:right-[-300px] max-[1140px]:right-[-100px] max-[1140px]:right-[-500px] max-[940px]:right-[-500px] max-[932px]:right-[-500px] max-[912px]:right-[-500px] max-[900px]:right-[-500px] max-[860px]:right-[-500px] max-[844px]:right-[-600px] max-[820px]:right-[-600px] max-[800px]:right-[-600px] max-[750px]:right-[-600px] max-[700px]:right-[-700px] max-[650px]:right-[-700px] max-[600px]:right-[-700px] max-[500px]:right-[-800px] max-[430px]:right-[-510px] max-[380px]:right-[-450px] max-[360px]:right-[-500px]"
                />
            </div>
        </div>
    );
}