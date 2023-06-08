import React from 'react'

/**
 * check validation of email, password
 * @param {string} email
 * @param {string} password
 * @returns 
 */

const validate = ({email, password}) => {
    // errors객체를 통해 email, password에 대한 유효성 검증 결과를 property, value로 할당 
    const errors = {}

    // validate email 
    if(!email) {
        errors.email = '이메일을 입력해주세요'
    }else if ( !/^[a-zA-Z0-9.%+-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        errors.email = '입력하신 이메일 형식이 유효하지 않습니다.'
    }

    // validate password
    if(!password) {
        errors.password = '비밀번호를 입력해주세요'
    }else if (password.length < 8) {
        errors.password = '비밀번호는 8자 이상 입력해주세요'
    }
  return errors
}

export default validate