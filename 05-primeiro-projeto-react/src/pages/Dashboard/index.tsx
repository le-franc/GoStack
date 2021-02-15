import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="GitHub Explorer" />
            <Title>Explore repositórios no Github</Title>
            <Form action="">
                <input placeholder="Digite o nome do Repositório"></input>
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/59741551?s=460&u=14f07116c155b1bc87e82f1f18359c4004a3753c&v=4"
                        alt="Leandro Francisco"
                    />
                    <div>
                        <strong>Leandro/GoStack</strong>
                        <p>Meu repositório</p>
                    </div>
                    <FiChevronRight />
                </a>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/59741551?s=460&u=14f07116c155b1bc87e82f1f18359c4004a3753c&v=4"
                        alt="Leandro Francisco"
                    />
                    <div>
                        <strong>Leandro/GoStack</strong>
                        <p>Meu repositório</p>
                    </div>
                    <FiChevronRight />
                </a>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/59741551?s=460&u=14f07116c155b1bc87e82f1f18359c4004a3753c&v=4"
                        alt="Leandro Francisco"
                    />
                    <div>
                        <strong>Leandro/GoStack</strong>
                        <p>Meu repositório</p>
                    </div>
                    <FiChevronRight />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
