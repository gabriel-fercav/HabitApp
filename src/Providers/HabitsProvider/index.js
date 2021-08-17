import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "./../../services/api"

export const HabitsContext = createContext([])
export const HabitsProvider = ( { children } ) => {
    const token = JSON.parse(localStorage.getItem("@habit:token")) || ""
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const [habits, setHabits ] = useState([])
    const getHabits = () => {
        setHabits(api.get("/habits/personal/", config ).then((res) => res.data || [] ))
    }
    useEffect(() => {
        getHabits()
    }, [habits])
    const addHabit = (item) => {
        api.post("/habits/", item, config ).then((_) => toast.success("Habito criado com sucesso!")).catch((_) => toast.error(" Nao foi possivel criar o habito "))
        setHabits(api.get("/habits/personal/", config ).then((res) => res.data || [] ))
    }
    const removeHabit = (id) => {
        api.delete(`/habits/${id}`, config ).then((_) => toast.success("Habito deletado com sucesso!")).catch((_) => toast.error("Nao foi possivel apagar o habito "))
        setHabits(api.get("/habits/personal/", config ).then((res) => res.data || [] ))
    }
    const updateHabit = (data) => {
        const {id, att } = data
        api.patch(`habits/${id}`, att, config ).then((_) => toast.success("Habito atualizado com sucesso!")).catch((_) => toast.error("Nao foi possivel atualizar o habito "))
        setHabits(api.get("/habits/personal/", config ).then((res) => res.data || [] ))
    }
    return (
        <HabitsContext.Provider value = {{ habits, addHabit, removeHabit, updateHabit }}>
            {children}
        </HabitsContext.Provider>
    )
}