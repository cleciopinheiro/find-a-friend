import { useMemo, useState, useCallback } from 'react';
import SideBar from './SideBarContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const errors = {
  "User not found": "Usuário não encontrado",
  "Email is required": "Email é obrigatório",
  "Password is required": "Senha é obrigatória",
  "Password must be at least 8 characters long": "Senha ou Usuário incorretos",
  "Incorrect email/password combination": "Senha ou Usuário incorretos",
} as any;

function AppProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  const [state, setState] = useState({
    email: "",
    password: "",
    error: "",
    accountLogin: "",
  });

  const handleChange = useCallback((e: any ) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  }, [state]);

  const onSubmit = useCallback(async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3001/${state.accountLogin}/login`,
        state
      );
      
      setCookie('token', response.data.token, { expires: new Date(Date.now() + 1000*60*60*24*7) });
      setCookie('isUser', response.data.isUser, { expires: new Date(Date.now() + 1000*60*60*24*7) });
      navigate(`/dashboard`);
    } catch (err: any) {
      setState({...state, error: errors[err.response.data.message]});
    }
  }, [navigate, state, setCookie]);

  const values = useMemo(() => ({
    state,
    handleChange,
    setState,
    onSubmit,
    cookies,
  }), [state, handleChange, setState, onSubmit, cookies]);

  return (
    <SideBar.Provider value={ values }>
      { children }
    </SideBar.Provider>
  );
}


export default AppProvider;