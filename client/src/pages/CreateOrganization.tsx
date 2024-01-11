import React, { useState } from "react";
import axios from "axios";
import { InputField } from "../components/InputField";
import { NavigationButtons } from "../components/NavigationButtons";
import { FormHeader } from "../components/FormHeader";
import { NotificationPopout } from "../components/NotificationPopout";
import Logo from "../images/Logo";

export default function CreateOrganization() {
    
    type ErrorMappingType = {
        [key: string]: string
    }

    const [showPopout, setShowPopout] = useState(false);
    const [showExistsPopout, setShowExistsPopout] = useState(false);


    const [formData, setFormData] = useState({
        responsavel: "",
        email: "",
        telefone: "",
        password: "",
        password2: "",
        CEP: "",
        endereco: "",
        cidade: "",
        estado: "",
    });

    const [errors, setErrors] = useState<ErrorMappingType>({});

    const remapKeys = (formData: any) => {
        return {
            email: formData.email,
            director: formData.responsavel,
            password: formData.password,
            cep: formData.CEP,
            address: formData.endereco,
            phoneNumber: formData.telefone,
            city: formData.cidade,
            state: formData.estado,
        };
    };

    const errorMapping: ErrorMappingType = {
        "Director is required": "Nome do Reponsável é obrigatório",
        "Email is required": "Email é obrigatório",
        "Password is required": "Senha é obrigatória",
    }

    const validateFormData = (): ErrorMappingType => {
        const newErrors: ErrorMappingType = {};

        if (!formData.responsavel.trim()) {
            newErrors.responsavel = "Nome do Reponsável é obrigatório";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email é obrigatório";
        }

        if (!formData.password.trim()) {
            newErrors.password = "Senha é obrigatória";
        } else if (formData.password.length < 8) {
            newErrors.password = "Senha deve ter no mínimo 8 caracteres";
        }

        if (!formData.telefone.trim()) {
            newErrors.telefone = "Telefone é obrigatório";
        }

        if (newErrors.password2) {
            delete newErrors.password2;
        }

        if (formData.password !== formData.password2) {
            newErrors.password2 = 'As senhas estão diferentes';
        }

        if (!formData.CEP.trim()) {
            newErrors.CEP = 'CEP é obrigatório';
        } else if (formData.CEP.length < 9) {
            newErrors.CEP = 'CEP Inválido';
        }

        if (!formData.endereco.trim()) {
            newErrors.endereco = 'Endereço é obrigatório';
        }

        if (!formData.cidade.trim()) {
            newErrors.cidade = 'Cidade é obrigatório';
        }

        if (!formData.estado.trim()) {
            newErrors.estado = 'Estado é obrigatório';
        }

        return newErrors;
    }


    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validateFormData();
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            window.scrollTo(0, 0);
            return;
        }

        const remappedFormData = remapKeys(formData);

        try {
            const response = await axios.post(
                'http://localhost:3001/organization/create',
                remappedFormData
            );
            console.log(response);
            if (response.status === 201) {
                window.scrollTo(0, 0);
                setShowPopout(true);
                setTimeout(() => {
                    setShowPopout(false);
                }, 3000);
            }

            if (response.data.message === "Organization already exists") {
                console.log(response.data.message)
                window.scrollTo(0, 0);
                setShowExistsPopout(true);
                setTimeout(() => {
                    setShowExistsPopout(false);
                }, 3000);
            }
            setFormData({
                responsavel: "",
                email: "",
                telefone: "",
                password: "",
                password2: "",
                CEP: "",
                endereco: "",
                cidade: "",
                estado: "",
            })
            setErrors({})
        } catch (error: any) {
            console.log(error);
            if (error.response && error.response.data.message) {
                const translatedError = errorMapping[error.response.data.message as keyof ErrorMappingType];
                if (translatedError) {
                    setErrors(prevErrors => ({ ...prevErrors, [error.response.data.message.split(' ')[0].toLowerCase()]: translatedError }));
                    window.scrollTo(0, 0)
                } else {
                    setErrors(error.response.data.message);
                }
            }
        }

    };
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
            <NotificationPopout show={showPopout} message="Organização criado com sucesso!" backgroundColor="#4CAF50" />
            <NotificationPopout show={showExistsPopout} message="Organização já existe!" backgroundColor="red" />
            <div className="w-full h-full flex flex-col justify-start pt-8 bg-white items-center">
                <FormHeader />
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="w-full h-[1px] bg-[#E5E7EB] mt-8"></div>
                    <div className="flex flex-col w-full justify-center items-center">
                        <div className="w-full mt-6 px-14 flex flex-col items-center justify-center">
                            <InputField id="responsavel" type="text" placeholder="Antônio Bandeira" label="Nome do responsável" value={formData.responsavel} onChange={handleChange} error={errors.responsavel} />
                            <InputField id="email" type="email" placeholder="teste@gmail.com" label="Email" value={formData.email} onChange={handleChange} error={errors.email} />
                            <InputField id="telefone" type="text" placeholder="+55 (21) 99508-5055" label="Telefone" value={formData.telefone} onChange={handleChange} error={errors.telefone} />
                            <InputField id="password" type="password" placeholder="**********" label="Senha" value={formData.password} onChange={handleChange} error={errors.password} />
                            <InputField id="password2" type="password" placeholder="**********" label="Confirmar Senha" value={formData.password2} onChange={handleChange} error={errors.password2} />
                            <InputField id="CEP" type="text" placeholder="21022-175" label="CEP" value={formData.CEP} onChange={handleChange} error={errors.CEP} />
                            <InputField id="endereco" type="text" placeholder="Rua Lourival" label="Endereço" value={formData.endereco} onChange={handleChange} error={errors.endereco} />
                            <InputField id="cidade" type="text" placeholder="Nova iguaçu" label="Cidade" value={formData.cidade} onChange={handleChange} error={errors.cidade} />
                            <InputField id="estado" type="text" placeholder="Rio de Janeiro" label="Estado" value={formData.estado} onChange={handleChange} error={errors.estado} />
                        </div>
                        <div className="w-full h-[1px] bg-[#E5E7EB] mt-14"></div>
                    </div>
                    <NavigationButtons onSubmit={handleSubmit} />
                </form>
            </div>
        </main>
    );
}