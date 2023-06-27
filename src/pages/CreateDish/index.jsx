import React from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";

import { PiCaretLeftBold } from "react-icons/pi"

import { Container, Form } from './styles'

export function CreateDish(){

  return(
    <Container>
      <Header />

      <Form>

      <div className="back">
        <PiCaretLeftBold />
        <a href="#">Voltar</a>
      </div>

        <h1>Novo Prato</h1>

        <p>Imagem do prato</p>
        <Input
          placeholder="Imagem do prato"
          
          />

        <p>Nome</p>
        <Input
          placeholder="Nome"
        />

        <p>Categoria</p>
        <select>
          <option value="">Selecione</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <p>Ingredientes</p>
        <Input 
          placeholder="Ingredientes"
        />

        <p>Preço</p>

        <Input 
          placeholder="R$ 00,00"
        />

        <p>Descrição</p>

        <input type="textarea" />

        <button>Salvar alterações</button>

      </Form>
      <Footer />
    </Container>
  )
}