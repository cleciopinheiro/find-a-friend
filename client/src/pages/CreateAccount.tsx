import Logo from "../images/Logo";
import RadioInput from "../components/RadioInput";

export default function CreateAccount() {

    return (
        <main className="w-full h-[100dvh] flex">
            <div className="bg-red w-full h-full flex justify-between items-center bg-[#F15156] rounded-e-[28px] pt-[100px] flex-col max-md:hidden">
                <div>
                    <Logo colors="white" />
                </div>
                <div className="w-full ">
                    <img src="https://i.imgur.com/pNUhyum.png" alt="Pets Logo" className="w-full" />
                </div>
            </div>
            
            <div className="w-full h-full flex flex-col justify-center bg-white items-center">
                <div className="mb-[142px] flex flex-col items-start w-3/4">
                    <h1 className="font-bold text-[32px] font-nunito leading-[40px]">Escolha como se cadastrar!</h1>
                    <p className="text-base font-normal leading-6 text-[#6B7280]">Para abrir uma conta, escolha uma das opções abaixo:</p>
                </div>

                <div className="space-y-4 w-3/4">
                    <RadioInput
                        title="Organização"
                        description="Selecione está opção para criar uma organização"
                    />
                </div>

                <div className="space-y-4 w-3/4">
                    <RadioInput
                        title="Usuário"
                        description="Selecione está opção para criar um usuário"
                    />
                </div>

                <p className="text-lg font-normal leading-5 font-nunito mt-32">
                    Já possui uma conta? <a href="/" className="font-bold ml-1 text-[#2563EB]">Iniciar sessão</a>
                </p>
            </div>
        </main>
    )
}
