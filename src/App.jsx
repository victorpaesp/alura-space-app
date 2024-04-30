import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import AsideBar from "./components/AsideBar";
import Banner from "./components/Banner";
import bannerBackground from "./assets/banner.png";

const GradientBackground = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
  margin: 0;
`;

function App() {
  return (
    <GradientBackground>
      <GlobalStyles />
      <Header />
      <AsideBar />
      <Banner
        texto="A galeria mais completa de fotos do espaço!"
        backgroundImage={bannerBackground}
      />
    </GradientBackground>
  );
}

export default App;
