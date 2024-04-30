import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import AsideBar from "./components/AsideBar";
import Banner from "./components/Banner";
import bannerBackground from "./assets/banner.png";
import Gallery from "./components/Gallery";
import photos from "./photos.json";
import { useEffect, useState } from "react";
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
  const [filter, setFilter] = useState("");
  const [tag, setTag] = useState(0);
  const [zoomedPhoto, setZoomedPhoto] = useState(null);

  useEffect(() => {
    const filteredPhotos = photos.filter((photo) => {
      const filterByTag = !tag || photo.tagId === tag;
      const filterByTitle =
        !filter || photo.title.toLowerCase().includes(filter.toLowerCase());
      return filterByTag && filterByTitle;
    });
    setGalleryPhotos(filteredPhotos);
  }, [filter, tag]);

  const onFavorite = (photo) => {
    if (photo.id === zoomedPhoto?.id) {
      setZoomedPhoto({
        ...zoomedPhoto,
        favorite: !zoomedPhoto.favorite,
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
        <Header filter={filter} setFilter={setFilter} />
        <MainContainer>
          <AsideBar />
          <GalleryContent>
            <Banner
              title="The most complete photos gallery of space! "
              backgroundImage={bannerBackground}
            />
            <Gallery
              onPhotoSelected={(photo) => setZoomedPhoto(photo)}
              onFavorite={onFavorite}
              photos={galleryPhotos}
              setTag={setTag}
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <ZoomModal
        photo={zoomedPhoto}
        onClose={() => setZoomedPhoto(null)}
        onFavorite={onFavorite}
      />
    </GradientBackground>
  );
};

export default App;
