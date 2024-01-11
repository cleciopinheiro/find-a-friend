import { useContext, useState } from "react";
import axios from "axios";
import CancelIcon from "../images/CancelIcon";
import FileUpload from "../images/FileIcon";
import { useDropzone } from "react-dropzone";
import Upload from "../images/Upload";
import Add from "../images/Add";
import Button from "./Button";
import DashBoardContext from "../context/DashBoardContext";
import Resizer from "react-image-file-resizer";

const errors: { [key: string]: string } = {
    "Name is required": "O campo nome é obrigatório",
    "Description is required": "O campo descrição é obrigatório",
    "Invalid token": "Token inválido",
    "Pet already exists": "Pet já cadastrado",
    "Images are required": "O campo imagens é obrigatório",
    "Requirements are required": "O campo requisitos é obrigatório",
};

export default function CreatePetForm() {
    const { cookies, navigate } = useContext(DashBoardContext);
    const [inputFiles, setInputFiles] = useState<number[]>([1]);
    const [erros, setErros] = useState<string>('');
    const [formData, setFormData] = useState({
        name: '',
        age: 'Filhote',
        size: 'Pequeno',
        description: '',
        energy: 'Baixa',
        type: 'Baixo(precisa de companhia sempre)',
        environment: 'Ambiente amplo',
        images: [],
    });
    const [requirements, setRequirements] = useState<string[]>([]);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const images = formData.images.map((image: any) => {
            if (image) {
                return image.url
            }
        });

        const newData = { ...formData, images, requirements };
        try {
            const response = await axios.post('http://localhost:3001/pet/create', newData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookies.token}`
                }
            })
            if (response.status === 201) {
                navigate('/dashboard');
            }
        } catch (err: any) {
            console.log(err);

            const error = err.response.data.message;
            setErros(errors[error])
        }
    };

    const validateForm = (name: string) => {
        return erros.includes(name);
    }

    const handleChange = (event: any) => {
        const { id, value } = event.target;

        if (id.includes('requirements')) {
            const index = parseInt(id.replace('requirements', ''));
            const newRequirements = [...requirements];
            newRequirements[index - 1] = value;
            setRequirements(newRequirements);
        } else {
            setFormData({ ...formData, [id]: value });
        }
    };

    const handleAddInputFile = () => {
        setInputFiles([...inputFiles, inputFiles.length + 1]);
    };

    const onDrop = async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];

        const resizeFile = (file: any) =>
            new Promise((resolve) => {
                Resizer.imageFileResizer(
                    file,
                    500,
                    500,
                    "JPEG",
                    100,
                    0,
                    (uri) => {
                        resolve(uri);
                    },
                    "base64"
                );
            });

        const fileCrypted = await resizeFile(file);

        setTimeout(() => {
            setFormData({
                ...formData,
                images: [...formData.images, {
                    url: fileCrypted,
                    name: acceptedFiles[0].name,
                }] as any
            });
        }, 500);
    };

    const dropzone = useDropzone({
        onDrop,
    });

    const removeFile = (index: number) => {
        const newFiles = [...formData.images];
        newFiles.splice(index, 1);
        setFormData({
            ...formData,
            images: newFiles,
        });
    };

    return (
        <form className="flex flex-col p-4 pl-10 pr-10 gap-6 w-full justify-center items-center rounded-lg 
    border-[#D3E2E5] border-[1px] bg-[white] max-sm:w-full max-sm:px-4 max-sm:py-6 max-sm:border-none">
            <div className="flex flex-col w-[100%] items-start">
                <h1 className="font-semibold text-[24px] font-nunito leading-[32px]">Cadastrar um Pet</h1>
                <p className="text-[16px] font-normal leading-6 text-[#6B7280]">Por favor, preencha todos os campos</p>
            </div>
            <div className="flex w-[100%] justify-between max-sm:flex-col">
                <label htmlFor="name" className="flex flex-col w-[40%] gap-1 text-[#0D3B66] font-nunito mb-2 max-sm:w-full">
                    Nome
                    <input onChange={handleChange} type="text" id="name" className="w-[100%] p-2 border-[#D3E2E5] border-[1px] rounded-[6px] bg-[#F5F8FA]" />
                    {validateForm('nome') && <p className="text-red-500 mt-1 text-sm flex justify-end">{erros}</p>}
                </label>

                <label htmlFor="age" className="flex flex-col w-[25%] gap-1 text-[#0D3B66] font-nunito mb-2 max-sm:w-full">
                    Idade
                    <select onChange={handleChange} name="" id="age" className="w-[100%] p-2 border-[#D3E2E5] border-[1px] rounded-[6px] bg-[#F5F8FA]">
                        <option value="Filhote">Filhote</option>
                        <option value="Adulto">Adulto</option>
                        <option value="Idoso">Idoso</option>
                    </select>
                    {validateForm('idade') && <p className="text-red-500 mt-1 text-sm flex justify-end">{erros}</p>}
                </label>

                <label htmlFor="size" className="flex flex-col w-[25%] gap-1 text-[#0D3B66] font-nunito mb-2 max-sm:w-full">
                    Porte
                    <select onChange={handleChange} name="" id='size' className="w-[100%] p-2 border-[#D3E2E5] border-[1px] rounded-[6px] bg-[#F5F8FA]">
                        <option value="Pequeno">Pequeno</option>
                        <option value="Médio">Médio</option>
                        <option value="Grande">Grande</option>
                    </select>
                    {validateForm('tamanho') && <p className="text-red-500 mt-1 text-sm flex justify-end">{erros}</p>}
                </label>
            </div>

            <svg height="1" width="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="#D3E2E5" strokeWidth="2" />
            </svg>

            <div className="flex flex-col w-[100%] items-start">
                <label htmlFor="description" id="description" className="flex flex-col w-[100%] gap-1 text-[#0D3B66] font-nunito mb-2">
                    Sobre
                    <textarea
                        onChange={handleChange}
                        name="description"
                        id="description"
                        rows={4}
                        className="block p-2.5 border-[#D3E2E5] border-[1px] rounded-[6px] bg-[#F5F8FA]"
                        style={{ resize: "none" }}
                    />
                    {validateForm('descrição') && <p className="text-red-500 mt-1 text-sm flex justify-end">{erros}</p>}
                </label>
            </div>

            <svg height="1" width="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="#D3E2E5" strokeWidth="2" />
            </svg>

            <div className="flex w-[100%] justify-between max-sm:flex-col">
                <label htmlFor="energy" className="flex flex-col w-[25%] gap-1 text-[#0D3B66] font-nunito mb-2 max-sm:w-full">
                    Nível de energia
                    <select onChange={handleChange} name="" id="energy" className="w-[100%] p-2 border-[#D3E2E5] border-[1px] rounded-[6px] bg-[#F5F8FA]">
                        <option value="Baixa">Baixa</option>
                        <option value="Média">Média</option>
                        <option value="Alta">Alta</option>
                    </select>
                    {validateForm('energia') && <p className="text-red-500 mt-1 text-sm flex justify-end">{erros}</p>}
                </label>

                <label htmlFor="type" className="flex flex-col w-[40%] gap-1 text-[#0D3B66] font-nunito mb-2 max-sm:w-full">
                    Nível de indepedência
                    <select onChange={handleChange} name="" id="type" className="w-[100%] p-2 border-[#D3E2E5] border-[1px] rounded-[6px] bg-[#F5F8FA]">
                        <option value="Baixo(precisa de companhia sempre)">Baixo(precisa de companhia sempre)</option>
                        <option value="Médio(precisa de companhia às vezes)">Médio(precisa de companhia às vezes)</option>
                        <option value="Alto(não precisa de companhia)">Alto(não precisa de companhia)</option>
                    </select>
                    {validateForm('indepedência') && <p className="text-red-500 mt-1 text-sm flex justify-end">{erros}</p>}
                </label>

                <label htmlFor="environment" className="flex flex-col w-[25%] gap-1 text-[#0D3B66] font-nunito mb-2 max-sm:w-full">
                    Ambiente
                    <select onChange={handleChange} name="" id='environment' className="w-[100%] p-2 border-[#D3E2E5] border-[1px] rounded-[6px] bg-[#F5F8FA]">
                        <option value="Ambiente amplo">Ambiente amplo</option>
                        <option value="Apartamento">Apartamento</option>
                        <option value="Casa">Casa</option>
                    </select>
                    {validateForm('ambiente') && <p className="text-red-500 mt-1 text-sm flex justify-end">{erros}</p>}
                </label>
            </div>

            <svg height="1" width="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="#D3E2E5" strokeWidth="2" />
            </svg>

            <div className="flex w-full justify-between max-sm:flex-col max-sm:gap-6">
                <div className="flex flex-col gap-4 w-[48%] max-sm:w-full">
                    <p className="font-nunito mb-2 mt-2">Fotos</p>
                    <div {...dropzone.getRootProps()} className="border-[#D3E2E5] border-[1px] rounded-[6px] bg-[#F5F8FA] h-[120px] w-full">
                        <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
                            <div className="w-full h-full flex flex-col justify-center items-center">
                                <Upload className="h-8 w-8 mb-2" />
                                <span className="font-bold font-nunito mb-2">Arraste e solte o arquivo</span>
                            </div>
                        </label>
                        <input {...dropzone.getInputProps()} className="hidden" />
                    </div>
                    {formData.images && formData.images.map((file: any, index: number) => (
                        <div key={index} className="flex w-full border-[#D3E2E5] border-[1px] rounded-[6px] pl-3 pr-3 justify-between items-center">
                            <div className="flex items-center">
                                <FileUpload className="h-4 w-4 mr-2" />
                                <p className="font-nunito mb-2 text-center mt-2">{file.name}</p>
                            </div>

                            <button type="button" value={file} onClick={() => removeFile(index)}>
                                <CancelIcon className="h-5 w-5" />
                            </button>
                        </div>
                    ))}
                    {validateForm('imagens') && <p className="text-red-500 mt-1 text-sm flex justify-end">{erros}</p>}
                    <div {...dropzone.getRootProps()} className="flex w-full bg-[#FFE8E8] border-dashed border-[#E44449] border-[1px] p-2 rounded-[6px] justify-center items-center cursor-pointer">
                        <Add className="h-5 w-5" />
                        <input {...dropzone.getInputProps()} className="hidden" />
                    </div>
                </div>


                <div className="flex flex-col gap-4 w-[48%] max-sm:w-full">
                    <p className="font-nunito mb-2 mt-2">Requisitos</p>
                    {
                        inputFiles.map((index: number) => <input onChange={handleChange} id={`requirements${index}`} key={index} type="text" className="w-[100%] p-2 border-[#D3E2E5] border-[1px] rounded-[6px] bg-[#F5F8FA]" />)
                    }
                    {validateForm('requisitos') && <p className="text-red-500 mt-1 text-sm flex justify-end">{erros}</p>}
                    <div onClick={handleAddInputFile} className="flex w-full bg-[#FFE8E8] border-dashed border-[#E44449] border-[1px] p-2 rounded-[6px] justify-center items-center cursor-pointer">
                        <Add className="h-5 w-5" />
                    </div>
                </div>
            </div>

            <svg height="1" width="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="#D3E2E5" strokeWidth="2" />
            </svg>

            <div className="flex gap-4 self-end max-sm:self-stretch">
                <Button title="Cancelar" className="flex bg-white justify-center items-center text-[14px] text-cyan-950 p-[14px] px-[24px] rounded-[360px] h-[48px] border-[#D3E2E5] border-[1px]" />
                <Button onClick={handleSubmit} title="Cadastrar" className="flex justify-center items-center text-[14px] p-[14px] px-[24px] rounded-[360px] h-[48px]" />
            </div>
        </form>
    )
}