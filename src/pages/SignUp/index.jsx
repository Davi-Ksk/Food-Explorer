import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input';
import { InputLabel } from '../../components/InputLabel';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Logo } from '../../components/Logo';

// import { useAuth } from '../../hooks/auth';

 import { Container, Form, LoginWrapper} from './styles';

export function SignUp() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const { signIn } = useAuth();

    // function handleSignIn() {
    //     signIn({ email, password });
    // }

    return (
        <Container>
            <Logo id="logo"/>

        <LoginWrapper>  


            <h1>Crie sua conta</h1>

            <Form>

                
                <InputLabel
                  title="Seu nome"
                />

                <Input 
                    placeholder="Exemplo: Maria da Silva"
                    type="password"
                    // onChange={e => setPassword(e.target.value)}
                />

                <InputLabel
                  title="E-mail"
                />

                <Input 
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                    // onChange={e => setEmail(e.target.value)}
                    />
                <InputLabel
                  title="Senha"
                  />
                <Input 
                    placeholder="No mínimo 8 caracteres"
                    type="password"
                    // onChange={e => setPassword(e.target.value)}
                />

                <Button 
                    title="Criar conta"
                    // onClick={handleSignIn}
                />

            </Form>

            <ButtonText 
                  title="Já tenho uma conta"
                  to="/"
            />

        </LoginWrapper>

        </Container>
    )
}