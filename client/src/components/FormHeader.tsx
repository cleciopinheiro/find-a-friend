import React from 'react';

export const FormHeader: React.FC = () => (
    <div className="flex flex-col w-full">
        <h1 className="font-semibold text-[24px] font-nunito leading-[32px] pl-14">
            Cadastrar Organização
        </h1>
        <p className="text-[16px] font-normal leading-6 text-[#6B7280] pl-14">
            Por favor, preencha todos os campos
        </p>
    </div>
);
