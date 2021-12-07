import React from 'react'
import {FormControl, FormLabel, Input, Text, Button} from '@chakra-ui/react'
import PropTypes from "prop-types"


export function LoginForm({...props}) {

    const [userName, setUserName] = React.useState('')
    const [password, setPassWord] = React.useState('')
    
    const onClick = (e) => {
        e.preventDefault()
        console.log(e)
        const userData = []
        userData.push(userName, password)
        setUserName('')
        setPassWord('')
        console.log(userData)
    }

    return (
        <FormControl w="400px" {...props} >
            <FormLabel color="brand.100">UserName</FormLabel>
            <Input color="brand.100" onChange={ (e) => setUserName(e.target.value)} value={userName} type="text" placeholder='UserName'/>
            <Text color="brand.100" fontSize='sm'>Enter your UK D8 username.</Text>
            <FormLabel color="brand.100" >Password</FormLabel>
            <Input color="brand.100" onChange={ (e) => setPassWord(e.target.value)} value={password} type="password" placeholder='password'/>
            <Text color="brand.100" fontSize='sm'>Enter the password that accompanies your username.</Text>
            <Button type="submit" onClick={onClick} bg='brand.900'>Log In</Button>
        </FormControl>
    )
}

LoginForm.propTypes = {
    userName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onClick: PropTypes.func
}



export default LoginForm

