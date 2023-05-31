import React, { useState } from 'react'

export default function useLogin() {
    const [form, setForm] = useState({
        email: "defaut", 
        password: "default", 
    }); 


    const onChange = (e) => {
        const { name, value } = e.target; 

        setForm({
            ...form, 
            [name]:value, 
        }); 
    };

    const onSubmit = (e) =>{
        e.preventDefault(); 
    }

    return {
        form, 
        onChange, 
        onSubmit, 
    };

}