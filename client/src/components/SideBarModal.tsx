import { useContext } from "react";
import Claw from "../images/Claw";
import Logo from "../images/Logo";
import Button from "./Button";
import CardModal from "./CardModal";
import CancelIcon from "../images/CancelIcon";
import LoginForm from "./LoginForm";
import SideBar from "../context/SideBarContext";

type ISideBarModal = {
  modalOpen: boolean;
  setModalOpen: (x: boolean) => void;
};


export default function SideBarModal({
  modalOpen,
  setModalOpen,
}: ISideBarModal) {
  const { state, setState } = useContext(SideBar)

  return (
    <div
      className={`fixed w-full h-full flex justify-end transition-colors ${
        modalOpen ? "visible bg-black bg-opacity-50" : "invisible"
      }`}
      onClick={() => {
        setModalOpen(false);
        setState({...state, accountLogin: "",});
      }}
    >
      <div
        className={`bg-white rounded-s-xl shadow p-6 max-lg:rounded-none lg:max-w-[50%] xl:max-w-[450px] 2xl:max-w-[600px] w-full relative
          flex flex-col justify-around items-center gap-5 max-sm:justify-evenly
          ${modalOpen ? "animate-teste" : "scale-125 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <Logo colors="#0D3B66" />
        </div>
        {ViewLogin(state.accountLogin, setState, state)}
      </div>
      <div
        className={`absolute top-3 right-3 cursor-pointer  ${
          modalOpen ? "animate-teste" : "scale-125 opacity-0"
        }`}
      >
        <CancelIcon className="h-10 w-10 hover:fill-gray-200" />
      </div>
    </div>
  );
}

function ViewLogin(accountLogin: string, setState: any, state: any) {
  switch (accountLogin) {
    case "user":
      return (
        <LoginForm />
      );
    case "organization":
      return (
        <LoginForm />
      );
    default:
      return (
        <>
          <div className="flex gap-3 max-sm:hidden">
            <CardModal title="Adote" icon={<Claw />} />
            <CardModal title="Cuide" icon={<Claw />} />
            <CardModal title="Ame" icon={<Claw />} />
          </div>
          <div>
            <Button
              className="mb-[26px]"
              onClick={() => {
                setState({...state, accountLogin: "user",});
              }}
              title="Acessar como usuário"
            />
            <Button
              onClick={() => {
                setState({...state, accountLogin: "organization",});
              }}
              title="Acessar como organização"
            />
          </div>
        </>
      );
  }
}
