import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';
import LoguinBtn from "../components/Login";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    #d3f7db,
    #f7dbd3
    ),
    url("https://lavozdemotul.com/wp-content/uploads/2016/08/registration-page-background-504-1.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #dbd3f7;
  color: #4d4442;
  cursor: pointer;
  margin-bottom: 10px;
&:disabled {
    background-color: gray;
    color: black;
    opacity: 0.7;
    cursor: default;
`;



const Anchor = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const linkStyle = {
    color: 'inherit',
}

const Login = () => {

    const dispatch = useDispatch()

    const [input, setInput] = useState({
        userName: '',
        password: '',
    });

    const handleInputChange = function (e) {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    console.log(!input.password || !input.userName)

    return (
        <Container>
            <Wrapper>
                <Title>INICIO DE SESION</Title>
                <Form onSubmit={(e)=> handleSubmit(e)}>
                    <Input
                        onChange={(e) => handleInputChange(e)}
                        name='userName'
                        value={input.userName}
                        type='text'
                        placeholder='Usuario'
                        required
                    />
                    <Input
                        onChange={(e) => handleInputChange(e)}
                        name='password'
                        value={input.password}
                        type='password'  
                        placeholder="Contraseña"
                    />
                    <Link to='/' style={linkStyle}>
                        <Button
                            disabled={!input.password || !input.userName}
                        >
                            Iniciar Tesion
                        </Button>
                        
                    </Link>
                    
                    <Link to='/recoverpassword' style={linkStyle}>
                        <Anchor>No recuerdas la contraseña?</Anchor>
                    </Link>
                    <Link to='/register' style={linkStyle}>
                        <Anchor to='/register'>Registrarse</Anchor>
                    </Link>
                </Form>
                <LoguinBtn />
            </Wrapper>
        </Container>
    );
};

export default Login;
