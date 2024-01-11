import { useState } from "react";
import Logo from "../images/Logo";
import PetsLogo from "../images/PetsLogo";
import SideBarModal from "../components/SideBarModal";
import Button from "../components/Button";

export default function Login() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="w-full h-[100dvh] flex">
      <div className="bg-red w-full h-full flex justify-between items-center bg-[#F15156] rounded-e-[20px] flex-col max-md:hidden">
        <div className="mt-[100px]">
          <Logo colors="white" />
        </div>
        <div className="w-full ">
                        <img
                            src="https://i.imgur.com/pNUhyum.png"
                            alt="Pets Logo"
                            className="w-full"
                        />
        </div>
      </div>
      <div className="bg-white w-full h-full flex flex-col justify-center items-center gap-5">
        <div className="flex flex-row justify-start">
          <h1 className="font-semibold text-[64px] text-[#0D3B66] font-nunito not-italic leading-[90%] sp tracking-[-1.08px max-lg:text-[54px]">
            Boas-Vindas!
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center my-[90px]">
          <p className="font-semibold text-[20px] text-[#0D3B66] font-nunito text-center leading-[34px] w-[80%]">
            Entre para se conectar, adotar e fazer a diferença hoje!
          </p>
        </div>
        <div className="flex flex-col items-center gap-[60px] justify-center w-[75%] max-md:w-[85%]">
          <Button onClick={() => setModalOpen(true)} title="Login"/>
          <a
            href="/create"
            className="font-semibold text-[20px] text-[#0D3B66] font-nunito not-italic"
          >
            Não tem conta? Se inscreva-se
          </a>
        </div>
      </div>
      <SideBarModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </main>
  );
}
