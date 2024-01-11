import { useContext } from 'react';
import CancelIcon from '../images/CancelIcon';
import Button from './Button';
import SideBar from '../context/SideBarContext'

export default function LoginForm() {
  const { state, handleChange, setState, onSubmit } = useContext(SideBar)
  return (
    <>
    <div className="flex flex-col gap-3 w-full">
      {
        state.error && (
          <div className='w-full h-[52px] bg-[#FEF2F2] flex justify-center items-center gap-2'>
          <CancelIcon className="h-5 w-5 hover:fill-gray-200" />
          <p className='text-[#B91C1C] font-nunito font-semibold text-[16px] leading-5'>{state.error}</p>
        </div>
        )
      }
      <div className="w-full flex flex-col">
        <label htmlFor="email" className="mb-[8px]">Email</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          id="email"
          placeholder="findAFriend@email.com"
          className="w-full border border-[#D3E2E5] h-[54px] bg-[#F5F8FA] rounded-[10px] pl-6" />
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="password" className="mb-[8px]">Senha</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          id="password"
          placeholder="*********"
          className="w-full border border-[#D3E2E5] h-[54px] bg-[#F5F8FA] rounded-[10px] pl-6" />
      </div>
    </div>
    <div className="w-full">
      <Button
        className="mb-[26px]"
        title="Login"
        onClick={(e: any) => onSubmit(e)}
      />
       <Button
        className="mb-[26px] bg-white border border-[#0D3B66] text-cyan-950"
        onClick={() => {
          setState({...state, accountLogin: "", email: '', password: '', error: ''});
        }}
        title="Voltar"
      />
    </div>
  </>
  )
}
