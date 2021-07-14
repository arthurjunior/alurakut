import styled from 'styled-components'




export default function Home() {
  return ( 
  <MainGrid>
   <div className="profileArea" style={{ gridArea: 'profileArea'}}>
     <Box>
      <img src="http://github.com/arthurjunior.png" />
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
