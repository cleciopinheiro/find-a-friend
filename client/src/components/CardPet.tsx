import LogoIcon from '../images/LogoIcon'
import { useContext } from 'react'
import DashBoardContext from '../context/DashBoardContext'
import EditIcon from '../images/EditIcon'
import TrashIcon from '../images/TrashIcon'
import { useNavigate } from 'react-router-dom'

export default function CardPet({pet}: {pet: any}) {
  const { cookies, deletePet } = useContext(DashBoardContext)
  const navigate = useNavigate()

  return (
    <div className='group cursor-pointer w-[280px] h-[220px] bg-white rounded-[20px] flex flex-col items-center relative  hover:bg-[#0D3B66] tall2:w-[245px] tall2:h-[200px]' onClick={() => navigate(`/pet/${pet.id}`)}>
          <img className='mt-1 rounded-[20px] relative tall2:w-[241px] h-[150px]' src={pet.images[0]} width={274} height={135}></img>
          <div className='h-[44px] w-[44px] bg-[#F15156] rounded-[10px] absolute bottom-[50px] border-2 border-white group-hover:border-[#0D3B66]'>
              <LogoIcon className='h-[24px] w-[24px] m-[8px]' />
          </div>
        {
          !cookies.isUser && (
            <span onClick={(e) => {e.stopPropagation(); navigate(`/edit/${pet.id}`)}} className='absolute bottom-4 left-4'><EditIcon className={`hover:fill-[#F4D35E] group-hover:stroke-[white] w-7 h-7 hover:scale-125`} /></span>
          )
        }
        <span className='absolute bottom-4 group-hover:text-[white]'>{pet.name}</span>
        {
          !cookies.isUser && (
            <span onClick={(e) => {e.stopPropagation(); deletePet(pet.id)}} className='absolute bottom-4 right-4'><TrashIcon className={`hover:fill-[#F15156] group-hover:stroke-[white] w-7 h-7 hover:scale-125`} /></span>
          )
        }
    </div>
  )
}
