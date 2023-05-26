/** @jsxImportSource @emotion/react */
import React, {useState} from 'react';

import useLogin from './hooks/useLogin';

function LoginForm() {
    const { form, onChange, onSubmit } = useLogin();
    const { email, password } = form;

  return (
    <div>
    <h1 className="">Hello world!</h1>
      <h1 className=''>로그인</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>이메일</label>
          <input type="text" value={email} onChange={onChange} name="email" />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={onChange}
            name="password"
          />
        </div>
        <button type="submit">로그인</button>
        <button className="" type="button" >
                    count+
                </button>
      </form>
    </div>
  )
}

export default LoginForm