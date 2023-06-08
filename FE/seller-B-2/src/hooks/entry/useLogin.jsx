import React, { useEffect, useState} from 'react'


export default function useLogin(initialValue, request, validate) {

    const [loginInfo, setLoginInfo] = useState(initialValue)
    const [submit, setSubmit] = useState(false) // For submit
    const [errors, setErrors] = useState({}) // For validation Error / initialValue : Object Type 

    const onChange = (e) => {
        const { name, value } = e.target; 
        setLoginInfo({...loginInfo, [name]:value}); 

        validate(loginInfo)
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        setSubmit(true)
        // submit시점 : change된 loginInfo가 validate결과 적합하면 빈 객체로 남아있을 것 
        setErrors(validate(loginInfo)) 
    }

    useEffect(() => {
        const init = async() => {
            if(submit){
                if(Object.keys(errors).length === 0){
                    request(loginInfo)
                }
                setSubmit(false) 
            }
        }
        init() // 선언 후, 바로 실행 
    },[errors]) // errors값이 update될때만 실행 

    return {
        ...Object.keys(initialValue).reduce((acc,v)=> {
            acc[v] = { value: loginInfo[v], onChange}
            return acc
        }, {}), 
        onSubmit, 
        errors, 
        submit
    };
}

