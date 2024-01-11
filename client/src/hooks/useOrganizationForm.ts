/* eslint-disable @typescript-eslint/ban-types */
// useOrganizationForm.ts
import { useState } from 'react';

type ErrorMappingType = {
    [key: string]: string
}

export const useOrganizationForm = (initialState: any, onSubmit: Function) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormData((prevData: any) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateFormData(formData);
        if (Object.keys(validationErrors).length === 0) {
            onSubmit(formData);
        } else {
            setErrors(validationErrors);
        }
    };

    return {
        formData,
        errors,
        handleChange,
        handleSubmit,
    };
};

const validateFormData = (formData: any) => {
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
};
