import { useContext } from 'react';
import CancelIcon from '../images/CancelIcon';
import DashBoardContext from '../context/DashBoardContext';
import Button from './Button';

type IFilterModal = {
    modalOpen: boolean;
    setModalOpen: (x: boolean) => void;
    isAnimated: boolean;
    setIsAnimated: (x: boolean) => void;
};


export default function FilterModal({
    modalOpen,
    setModalOpen,
    isAnimated,
    setIsAnimated,
}: IFilterModal) {
    const { buttonFilter, stateFilters, handleChange, states, cities } = useContext(DashBoardContext)

    return (
        <div
            className={`fixed w-full right-0 top-0 h-full flex justify-end transition-colors ${modalOpen ? "visible bg-black bg-opacity-50" : "invisible"
                }`}
            onClick={() => {
                setIsAnimated(false);
                setTimeout(() => {
                    setModalOpen(false);
                }, 400);
            }}
        >
            <div className={`bg-[rgb(228,68,73)] lg:w-1/3 w-1/2 md:w-[44%] max-sm:w-full  px-[20px] pt-[40px] flex flex-col gap-6 overflow-y-auto pb-3
            ${isAnimated ? "animate-teste" : "animate-teste3"}
            `}
                onClick={(e) => e.stopPropagation()}>
                <div>
                    <h2 className='font-nunito text-[20px] font-extrabold leading-[34px] text-white'>Filtrar Por</h2>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-6 '>
                        <div>
                            <label htmlFor='state' className='font-nunito text-[13px] font-medium leading-[0px] text-white'>Estado
                                <div className="relative w-full mt-3">
                                    <select name='state' value={stateFilters.state} onChange={({ target }) => handleChange(target)} id='state' className="appearance-none w-full h-[55px] bg-transparent border text-white px-3 rounded-[15px] shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option selected>Todos</option>
                                        {
                                            states.map((state: any) => (
                                                <option>{state}</option>
                                            ))
                                        }
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor='city' className='font-nunito text-[13px] font-medium leading-[0px] text-white'>Cidade
                                <div className="relative w-full mt-3">
                                    <select name='city' value={stateFilters.city} onChange={({ target }) => handleChange(target)} id='city' className="appearance-none w-full h-[55px] bg-transparent border text-white px-3 rounded-[15px] shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option selected>Todos</option>
                                        {
                                            cities.map((state: any) => (
                                                <option>{state}</option>
                                            ))
                                        }
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor='idade' className='font-nunito text-[13px] font-medium leading-[0px] text-white'>Idade
                                <div className="relative w-full mt-3">
                                    <select name='age' value={stateFilters.age} onChange={({ target }) => handleChange(target)} id='idade' className="appearance-none w-full h-[55px] bg-transparent border text-white px-3 rounded-[15px] shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option selected>Todos</option>
                                        <option>Filhote</option>
                                        <option>Adulto</option>
                                        <option>Idoso</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor='idade' className='font-nunito text-[13px] font-medium leading-[0px] text-white'>Nível de energia
                                <div className="relative w-full mt-3 ">
                                    <select name='energy' value={stateFilters.energy} onChange={({ target }) => handleChange(target)} id='idade' className="appearance-none w-full h-[55px] bg-transparent border text-white px-3 rounded-[15px] shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option selected>Todos</option>
                                        <option>Baixa</option>
                                        <option>Média</option>
                                        <option>Alta</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor='idade' className='font-nunito text-[13px] font-medium leading-[0px] text-white'>Porte do animal
                                <div className="relative w-full mt-3 ">
                                    <select name='size' value={stateFilters.size} onChange={({ target }) => handleChange(target)} id='idade' className="appearance-none w-full h-[55px] bg-transparent border text-white px-3 rounded-[15px] shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option selected>Todos</option>
                                        <option>Pequeno</option>
                                        <option>Médio</option>
                                        <option>Grande</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label htmlFor='idade' className='font-nunito text-[13px] font-medium leading-[0px] text-white'>Nível de independência
                                <div className="relative w-full mt-3 ">
                                    <select name='type' value={stateFilters.type} onChange={({ target }) => handleChange(target)} id='idade' className="appearance-none w-full h-[55px] bg-transparent border text-white px-3 rounded-[15px] shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option selected>Todos</option>
                                        <option>Baixo(precisa de companhia sempre)</option>
                                        <option>Médio(precisa de companhia às vezes)</option>
                                        <option>Alto(não precisa de companhia)</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='font-nunito text-[20px] font-extrabold leading-[34px] text-white'>Ordenar Por</h2>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-6 '>
                        <div className="relative w-full mt-3">
                            <select name='order' id='order' className="appearance-none w-full h-[55px] bg-transparent border text-white px-3 rounded-[15px] shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option selected>Nome</option>
                                <option>Idade</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <Button title='Filtrar' onClick={() => {
                    buttonFilter(),
                    setIsAnimated(false);
                    setTimeout(() => {
                        setModalOpen(false);
                    }, 400);
                }} className='py-[8px] bg-[#F4D35E] text-black' />
                <div
                    onClick={() => {
                        setIsAnimated(false);
                        setTimeout(() => {
                            setModalOpen(false);
                        }, 400);
                    }}
                    className={`absolute top-3 right-3 cursor-pointer ${isAnimated ? "animate-teste" : "animate-cancelModal"
                        }`}
                >
                    <CancelIcon className="h-10 w-10 hover:fill-gray-200" color='white' />
                </div>
            </div>
        </div>
    )
}
