import { Conteiner, Header, Footer, Left, Right, Center, ConteinerFooter, Centralizador, NameType, BoxBottom, Description } from './Styled'
import directional from '../../assets/direcional.png'
import { HeaderAll } from '../../components/Header/Header';

function PokedexPage() {
  return (
    <Conteiner>

      <HeaderAll />
      <Centralizador>
        <Left></Left>
        <Center>
          <h1>PokedexPage</h1>
        </Center>
        <Right></Right>
      </Centralizador>

      <Footer>
        <ConteinerFooter>

          <NameType>
            <div>Pokemon Name</div>
            <div>type</div>
          </NameType>

          <BoxBottom>
            <div>
              <img alt='direcional' src={directional} width='50px' height='40px' />
            </div>
            <Description>Description</Description>
            <button>A</button>
            <button>B</button>
          </BoxBottom>

        </ConteinerFooter>
      </Footer>

    </Conteiner>
  );
}

export default PokedexPage;