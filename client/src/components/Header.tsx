import LogoIcon from '../images/LogoIcon'
import ArrowBack from '../images/ArrowBack';
import { useContext, useState } from 'react';
import DashBoardContext from '../context/DashBoardContext';
import PlusIcon from '../images/PlusIcon';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [selected, setSelected] = useState('home')
    const { cookies, removeCookie } = useContext(DashBoardContext)
    const navigate = useNavigate()

    return (
        <div className='fixed bg-[#F15156] h-full flex flex-col justify-between p-[20px] max-sm:flex-row max-sm:h-[68px] max-sm:bottom-0 max-sm:z-40 max-sm:p-[10px] max-sm:rounded-[20px] max-sm:w-1/2  max-sm:mb-[10px]'>
            <div className='flex flex-col gap-4 max-sm:flex-row'>
                <div className='cursor-pointer max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-1' onClick={() => {setSelected('home'); 
                if (selected !== 'home'){
                    navigate('/dashboard')
                }}
                }>
                    <LogoIcon className={`hover:fill-white max-sm:h-[38px] max-sm:w-[38px] ${selected === 'home' && 'fill-white'}`} />
                    {
                        selected === 'home' && <div className='max-sm:bg-white max-sm:h-[5px] max-sm:w-[5px] max-sm:rounded' />
                    }
                </div>
                {
                    !cookies.isUser && (
                        <div className='cursor-pointer max-sm:flex-col max-sm:items-center max-sm:gap-1  max-sm:hidden' onClick={() => {setSelected('create'); navigate('/create/pet')}}>
                        <div className={`hover:bg-white h-[48px] w-[48px] bg-[#F4D35E] rounded-[15px] flex justify-center items-center cursor-pointer  ${selected === 'create' && 'bg-white'}`}>
                            <PlusIcon className={`h-[28px] w-[28px]`}/>
                        </div>
                            {
                                selected === 'create' && <div className='max-sm:bg-white max-sm:h-[5px] max-sm:w-[5px] max-sm:rounded' />
                            }
                        </div>
                    )
                }
            </div>
            {
                !cookies.isUser && (
                    <div className='cursor-pointer hidden max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-1' onClick={() => {setSelected('create'); navigate('/create/pet')}}>
                    <div className={`h-[48px] w-[48px] hover:bg-white bg-[#F4D35E] rounded-[15px] flex justify-center items-center cursor-pointer max-sm:h-[38px] max-sm:w-[38px] ${selected === 'create' && 'bg-white'}`}>
                    <PlusIcon className={`max-sm:h-[28px] max-sm:w-[28px]`} />
                    </div>
                        {
                            selected === 'create' && <div className='max-sm:bg-white max-sm:h-[5px] max-sm:w-[5px] max-sm:rounded' />
                        }
                    </div>
                )
            }
            <div className='max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-1' onClick={() => {setSelected('back'); removeCookie('token'); removeCookie('isUser'); navigate('/')}}>
                <div
                 className={`h-[48px] w-[48px] hover:bg-white bg-[#F4D35E] rounded-[15px] flex justify-center items-center cursor-pointer max-sm:h-[38px] max-sm:w-[38px] ${selected === 'back' && 'bg-white'}`}>
                    <ArrowBack />
                </div>
                {
                    selected === 'back' && <div className='max-sm:bg-white max-sm:h-[5px] max-sm:w-[5px] max-sm:rounded' />
                }
            </div>
        </div>
    )
}
