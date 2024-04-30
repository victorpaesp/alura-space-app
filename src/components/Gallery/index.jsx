import styled from "styled-components";
import Title from "../Title";
import Popular from "./Popular";
import Tags from "./Tags";
import Image from "./Image";
import ZoomModal from "../ZoomModal";

const GalleryContainer = styled.div`
  display: flex;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const ImagesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Gallery = ({ photos = [], onPhotoSelected, onFavorite }) => {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <FluidSection>
          <Title>Browse through our gallery </Title>
          <ImagesContainer>
            {photos.map((photo) => (
              <Image
                onZoom={onPhotoSelected}
                onFavorite={onFavorite}
                key={photo.id}
                photo={photo}
              />
            ))}
          </ImagesContainer>
        </FluidSection>
        <Popular />
      </GalleryContainer>
      <ZoomModal />
    </>
  );
};

export default Gallery;
