import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashBoard from './DashBoardContext';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function DashBoardProvider({ children }: { children: React.ReactNode }) {
  const [pets, setPets] = useState([])
  const [stateFilters, setStateFilters] = useState<any>({
    city: 'Todos',
    state: 'Todos',
    age: 'Todos',
    energy: 'Todos',
    size: 'Todos',
    type: 'Todos'
  })
  const [data, setData] = useState<any>([])
  const [states, setStates] = useState<any>([])
  const [cities, setCities] = useState<any>([])
  const [cookies, setCookie, removeCookie] = useCookies();
  const location = useLocation();
  const navigate = useNavigate();


  const handleChange = useCallback((target: any) => {
    setStateFilters({ ...stateFilters, [target.name]: target.value });
  }, [stateFilters]);

  useEffect(() => {
    const fetchPets = async ({pathname}: {pathname: string}) => {
      if (pathname !== '/dashboard') return
      if (!cookies.token) navigate('/')
      let response: any;
      
      if (cookies.isUser) {
        response = await axios.get('http://localhost:3001/pet', {
          headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies.token}`
          }
        })
      } else {
        response = await axios.get('http://localhost:3001/pet/byOrganization', {
          headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies.token}`
          }
        })
      }
      setPets(response.data)
      const statesMap = response.data.map((pet: any) => pet.state);
      const statesFiltered = statesMap.filter((city: any) => city !== null)
      const states = new Set(statesFiltered)
      setStates([...states])
      const citiesMap = response.data.map((pet: any) => pet.city)
      const citiesFiltered = citiesMap.filter((city: any) => city !== null)
      const cities = new Set(citiesFiltered)
      setCities([...cities])
      setData(response.data)
    }
    fetchPets(location)
  }, [location, cookies, navigate])

  const buttonFilter = useCallback(() => {
    let filterPets = [...pets];
    const keys = Object.keys(stateFilters);

    keys?.forEach((key: any) => {
      if (stateFilters[key] === 'Todos') return;
      
      filterPets = filterPets.filter((attr: any) => {
        return attr[key].toLowerCase() === stateFilters[key].toLowerCase()
      })
    });

    setData(filterPets);
  }, [pets, stateFilters])

  const deletePet = useCallback(async (id: string) => {
      const response = await axios.delete(`http://localhost:3001/pet/${id}`, {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookies.token}`
        }
      })
      if (response.status === 204) {
        const newPets = pets.filter((pet: any) => pet.id !== id)
        setPets(newPets)
        setData(newPets)
      }
  }, [cookies, pets])

  const values = useMemo(() => ({
    data,
    cookies,
    buttonFilter,
    stateFilters,
    handleChange,
    navigate,
    states,
    cities,
    setCookie, 
    removeCookie,
    deletePet
  }), [data, cookies, navigate, buttonFilter, stateFilters, handleChange, states, cities, setCookie, removeCookie, deletePet]);

  return (
    <DashBoard.Provider value={ values }>
      { children }
    </DashBoard.Provider>
  );
}


export default DashBoardProvider;