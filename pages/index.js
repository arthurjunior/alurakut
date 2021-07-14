import styled from 'styled-components'

//const Title = styled.h1`
// font-size: 50px;
//color: ${({ theme }) => theme.colors.primary};
//`

const Box = styled.div`
background: #ffffff;
border-radius: 8px;
`;

const MainGrid = styled.main`
width: 100%;
margin-left: auto;
margin-rigth: auto;
display: grid;
max-width: 500px;
grid-gap: 10px;
padding: 16px;
  .profileArea{
    display: none;
    @media(min-width: 860px){
      display: block;
    }
  }

@media(min-width: 860px){
  grid-template-areas: 
  "profileArea welcomeArea profileRelationsArea";
  grid-template-columns: 160px 1fr  312px ;
}


`;

export default function Home() {
  return ( 
  <MainGrid>
   <div className="profileArea" style={{ gridArea: 'profileArea'}}>
     <Box>
      Imagem
     </Box>
   </div>
   
  <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
    <Box> 
      Bem-Vindo
    </Box>
  </div>

  <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
    <Box>
      Pessoas da comunidade
    </Box>
  </div>
  </MainGrid>
  )
}
