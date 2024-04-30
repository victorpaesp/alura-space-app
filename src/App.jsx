import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import AsideBar from "./components/AsideBar";
import Banner from "./components/Banner";
import bannerBackground from "./assets/banner.png";
import Gallery from "./components/Gallery";
import photos from "./photos.json";
import { useState } from "react";
import ZoomModal from "./components/ZoomModal";

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

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const onFavorite = (photo) => {
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite,
      });
    }
    setGalleryPhotos(
      galleryPhotos.map((galleryPhoto) => {
        return {
          ...galleryPhoto,
          favorite:
            galleryPhoto.id === photo.id
              ? !photo.favorite
              : galleryPhoto.favorite,
        };
      })
    );
  };
  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <AsideBar />
          <GalleryContent>
            <Banner
              title="The most complete photos gallery of space! "
              backgroundImage={bannerBackground}
            />
            <Gallery
              onPhotoSelected={(photo) => setSelectedPhoto(photo)}
              onFavorite={onFavorite}
              photos={galleryPhotos}
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <ZoomModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onFavorite={onFavorite}
      />
    </GradientBackground>
  );
};

export default App;
