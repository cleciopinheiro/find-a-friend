import React from 'react';
import ArrowLeft from "../images/ArrowLeft";

type NavButtonProps = {
    onSubmit: (e: React.FormEvent) => void
};

export const NavigationButtons: React.FC<NavButtonProps> = ({ onSubmit }) => (
    <div className="flex justify-between w-full h-0 mb-24 ">
        <button
            onClick={(e) => {
                e.preventDefault();
                window.history.back();
            }}
            className="ml-12 mt-5 p-7 flex gap-1 justify-center items-center rounded-full border-[#D1D5DB] border-[1px] bg-[#FFF] hover:bg-[#0d3b66] hover:bg-opacity-10 hover:border-[#0d3b66]">
            <ArrowLeft />
            Voltar
        </button>
        <button type="submit" onClick={onSubmit} className="mr-12 mt-5 p-7 flex gap-4 justify-center items-center rounded-full border-[#D1D5DB] border-[1px] bg-[#9CA3AF] hover:bg-opacity-10 hover:border-[#0d3b66]">
            Cadastrar
        </button>
    </div>
);
