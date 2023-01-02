import styled from '@emotion/styled';

const PageContainer = styled.div`
  min-height: 100vh; 
  margin:0;
  display:flex; 
  flex-direction:column;
`

const BodyContainer = styled.div`
  flex:1;
`

const RoundedBorderContainer = styled.div`
border-radius: 25px;
border: 2px solid #73AD21;
`

const H1 = styled.h1`
  font-size: clamp(1.5em, 9.5vw, 6.5em);
  letter-spacing: 0.04em;
  margin: 0;
`;

const H2 = styled.h2`
  font-size: clamp(1.5em, 8.2vw, 3.1em);
  margin: 0;
`;

const H3 = styled.h3`
  font-size: clamp(1.3em, 6.6vw, 2.1em);
  margin: 0;
`;

const H4 = styled.h4`
  margin: 0;
  font-size: 1.3em;
  letter-spacing: 0.1em;
`;

const P = styled.p`
  margin: 0;
  font-size: 1.1em;
  line-height: 1.4em;
`;



export { PageContainer, BodyContainer, RoundedBorderContainer,
   H1, H2, H3, H4, P };


