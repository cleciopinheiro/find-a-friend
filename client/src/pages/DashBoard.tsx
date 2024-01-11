import { useContext, useState } from 'react'
import DashBoardContext from '../context/DashBoardContext'
import Header from "../components/Header";
import CardPet from '../components/CardPet';
import FilterModal from '../components/FilterModal';
import FunnelIcon from '../images/FunnelIcon';

export default function DashBoard() {
    const { data, cookies } = useContext(DashBoardContext)
    const [modalOpen, setModalOpen] = useState(false)
    const [isAnimated, setIsAnimated] = useState(false)
    return (
        <main className="w-full flex max-sm:flex-col-reverse min-h-screen bg-[#FBE1E2]">
            <div className={`sm:w-[90px] max-sm:flex max-sm:justify-center ${modalOpen && 'max-sm:hidden'}`}>
                <Header />
            </div>
            <div className="pt-[60px] w-full max-sm:p-5 px-[55px] teste2:px-[35px]">
                <div className='flex justify-between items-center max-sm:flex-col max-sm:gap-2 lg:px-[20px] xl:px-[30px] 2xl:px-[110px]'>
                    {
                        cookies.isUser ? <span className='font-nunito text-[#0D3B66] text-[20px] font-normal leading-[34px]'>Encontre ${data.length} amigos na sua cidade</span> : <span className='font-nunito text-[#0D3B66] text-[20px] font-normal leading-[34px]'> Você possui <strong>{data.length}</strong> amigos cadastrados</span>
                    }
                    <div className='relative w-[200px] bg-[#f9d0d3] rounded-[15px] cursor-pointer hover:scale-105 hover:bg-[#f5c6c9]'>
                        <button
                            onClick={() => { setModalOpen(true); setIsAnimated(true) }}
                            className='w-[180px] h-[48px] text-[#0D3B66] relative'>
                            Filtrar e Ordenar
                        </button>
                        <FunnelIcon className='w-6 h-6 absolute top-3 right-3' />
                    </div>
                </div>
                <div className='flex flex-wrap mt-[70px] max-sm:mt-[50px] gap-[46px] min-h-[71dvh] justify-center mb-[60px]'>
                    {
                        data.map((pet: any) => (
                            <CardPet key={pet.id} pet={pet} />
                        ))
                    }
                </div>
            </div>
            <div className='w-full absolute'>
                <FilterModal modalOpen={modalOpen} setModalOpen={setModalOpen}
                    isAnimated={isAnimated} setIsAnimated={setIsAnimated}
                />
            </div>
        </main>
    )
}
