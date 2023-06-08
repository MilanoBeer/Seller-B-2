import React, { useState, useRef, useEffect } from 'react';
import validate from '../../hooks/entry/validate';
import useLogin from '../../hooks/entry/useLogin';

// validate test 
const request = async (items) => {
  const result = await new Promise( (resolve, reject) => {
      setTimeout(() => {
          resolve(items)
      }, 1000)
  }) 
  alert(JSON.stringify(result))
}

function LoginForm() {
    const { email, password, onSubmit, errors, submit} = useLogin({email:'', password:''}, request, validate);
    const inputRef = useRef();

    useEffect(()=>{
      inputRef.current.focus(); 
    }, [])

  return (
    <div>
    <div className="px-6 py-5 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
    <div className="text-xl font-medium text-black">Login</div>

    <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='email'>이메일</label>
          <input ref={inputRef} type="text" name="email" {...email} />
          {errors.email && <span> {errors.email}</span>}
        </div>
        <div>
          <label htmlFor='password'>비밀번호</label>
          <input type="password" name="password" {...password} />
          {errors.email && <span>{errors.password}</span>}
        </div>
        <button className="px-3 py-3" type="submit" value='로그인' disabled={submit}>로그인</button>
      </form>
    </div>
    </div>
  )
}

export default LoginForm