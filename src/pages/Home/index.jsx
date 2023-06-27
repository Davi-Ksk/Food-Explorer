import { Container, Banner } from "./styles";
import { Header } from "../../components/Header";
import { Content,  } from "../../components/Sidebar/styles";

export function Home() {

  
  return (
    <Container>
      <Header />

      <Banner>
        <img src="/" alt="" />
        <div>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </Banner>

      {/* <Content>

      </Content> */}
    </Container>
  );
}