import React, { useState } from "react";
import Logo from "../images/Logo";
import ArrowLeft from "../images/ArrowLeft";
import axios from "axios";

export default function CreateUser() {
    const [formData, setFormData] = useState({
        responsavel: "",
        email: "",
        password: "",
        password2: "",
    })


    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });

        console.log(formData)
    }

    const remapKeys = (formData: any) => {
        return {
            name: formData.responsavel,
            email: formData.email,
            password: formData.password,
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.password2) {
            alert("Senhas não conferem")
            return
        }

        const remppedFormData = remapKeys(formData)

        try {
            const response = await axios.post("http://localhost:3001/user/create", remppedFormData)
            console.log(response);
            setFormData({
                responsavel: "",
                email: "",
                password: "",
                password2: "",

            })

        } catch (error: any) {
            console.log(error)
        }

    }

    return (
        <main className="w-full max-h-max flex ">
            <div className="bg-red w-full flex justify-between items-center bg-[#F15156] rounded-e-[998px] flex-col max-md:hidden">
                <div className="bg-red w-2/4 h-full flex justify-between fixed items-center bg-[#F15156] rounded-e-[28px] pt-[100px] flex-col max-md:hidden">
                    <div>
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
            </div>
            <div className="w-full h-full flex flex-col justify-start pt-8 bg-white items-center">
                <div className="mb-[167px] flex flex-col w-full">
                    <h1 className="font-semibold text-[24px] font-nunito leading-[32px] pl-14">
                        Criar usuário
                    </h1>
                    <p className="text-[16px] font-normal leading-6 text-[#6B7280] pl-14">
                        Por favor, preencha todos os campos
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="w-full h-[1px] bg-[#E5E7EB] mt-8"></div>
                        <div className="flex flex-col w-full justify-center items-center">
                            <div className="w-full mt-6 px-14 flex flex-col items-center justify-center">
                                <div className="w-full">
                                    <label
                                        className="flex items-start text-[#0D3B66] font-nunito mb-2"
                                        htmlFor="responsavel"
                                    >
                                        Nome Completo
                                    </label>
                                    <input
                                        className="w-full p-3 border-[#D3E2E5] border-[1px] rounded-[10px] bg-[#F5F8FA]"
                                        id="responsavel"
                                        type="text"
                                        placeholder="Antônio Bandeira"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="w-full mt-6">
                                    <label
                                        className="flex items-start text-[#0D3B66] font-nunito mb-2"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="w-full p-3 border-[#D3E2E5] border-[1px] rounded-[10px] bg-[#F5F8FA]"
                                        id="email"
                                        type="email"
                                        placeholder="teste@gmail.com"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="w-full mt-6">
                                    <label
                                        className="flex items-start text-[#0D3B66] font-nunito mb-2"
                                        htmlFor="password"
                                    >
                                        Senha
                                    </label>
                                    <input
                                        className="w-full p-3 border-[#D3E2E5] border-[1px] rounded-[10px] bg-[#F5F8FA]"
                                        id="password"
                                        type="password"
                                        placeholder="**********"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="w-full mt-6">
                                    <label
                                        className="flex items-start text-[#0D3B66] font-nunito mb-2"
                                        htmlFor="password2"
                                    >
                                        Confirmar Senha
                                    </label>
                                    <input
                                        className="w-full p-3 border-[#D3E2E5] border-[1px] rounded-[10px] bg-[#F5F8FA]"
                                        id="password2"
                                        type="password"
                                        placeholder="**********"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="w-full h-[1px] bg-[#E5E7EB] mt-14"></div>
                        </div>
                        <div className="flex justify-between w-full h-0 ">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.history.back();
                                }}
                                className="ml-12 mt-12 p-7 flex gap-1 justify-center items-center rounded-full border-[#D1D5DB] border-[1px] bg-[#FFF] hover:bg-[#0d3b66] hover:bg-opacity-10 hover:border-[#0d3b66]">
                                <ArrowLeft />
                                Voltar
                            </button>
                            <button className="mr-12 mt-12 p-7 flex gap-4 justify-center items-center rounded-full border-[#D1D5DB] border-[1px] bg-[#9CA3AF] hover:bg-opacity-10 hover:border-[#0d3b66]">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}