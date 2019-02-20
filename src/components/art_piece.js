import React from 'react';
import styled from 'styled-components';
import Lightbox from 'react-images';

const ArtPieceStyle = styled.div`
  @media(min-width: 1000px) {
    /* display: grid;
    grid-template: 1fr / 1fr 2fr; */
    /* grid-template-columns: 2fr auto;
    grid-template-rows: 1fr; */
    .piece-writing {
      /* display: grid; */
      /* grid-template-columns: 1fr; */
      /* grid-template-rows: 1fr 2fr; */
      /* display: grid; */
      /* grid-template: 20rem 2fr / 1fr; */
    }

    .piece-image {
      /* display: grid; */
      /* grid-template-columns: 1fr; */
      /* grid-template-rows: 1fr 2fr; */
    }
    
  }
  /* display: grid; */
  /* grid-template-columns: repeat(12, 1fr);

  .piece-writing {
    grid-column: 1 / 5;
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    .piece-writing-top {
      grid-row: 1 / 2;
    }
    .piece-writing-bottom {
      grid-row: 2 / -1;
    }
  }

  .piece-image {
    grid-column: 7 / -1;
  } */
  .piece-image {
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Year = styled.h5`
  display: ${props => (props.children ? 'block' : 'none')};
  padding: 0px;
  margin: 0px;
  line-height: 1.71;
  font-size: 1.4rem;
  font-weight: normal;
`;

const ArtPieceHeader = styled.div`
  display: ${props => (props.title ? 'block' : 'none')};
`;

// ? USE GRID!
// https://medium.freecodecamp.org/learn-css-grid-in-5-minutes-f582e87b1228

class ArtPiece extends React.Component {
  state = {
    photoIdx: 0,
    isOpen: false
  };

  render() {
    const { isOpen, photoIdx } = this.state;
    const { year, title, subtitle, description, images } = this.props;

    const lightboxImages = images.map(image => ({
      src: image.image.sizes.large,
      caption: image.description,
      thumbnail: image.image.sizes.thumbnail
    }));
    return (
      <ArtPieceStyle>
        <div className="piece-writing">
          <div className="piece-writing-top">
            <svg width="100" height="3" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="0" x2="22" y2="0" stroke="#ebebeb" />
            </svg>
            <Year>{year}</Year>

            <ArtPieceHeader title={title}>
              <h3 className="piece-title" style={{ fontSize: '2.4rem', lineHeight: '1.25' }}>
                {title}
              </h3>
              <h4
                className="piece-subtitle"
                style={{
                  color: '#a7a7a7',
                  fontWeight: 'normal',
                  fontSize: '1.4rem'
                }}
              >
                {subtitle}
              </h4>
            </ArtPieceHeader>
          </div>
          <div className="piece-writing-bottom">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
        <div className="piece-image">
          <div></div> 
          <img
            style={{
              width: '100%',
              height: 'auto'
            }}
            className="piece-image-src"
            src={images[0].image.sizes.large}
            onClick={() => this.setState({ isOpen: true })}
          />
        </div>
        <Lightbox
          currentImage={photoIdx}
          backdropClosesModal
          showThumbnails
          caption="fkdsjfadsklfjdlsa"
          images={lightboxImages}
          isOpen={isOpen}
          theme={{ footer: { fontSize: '1.4rem' } }}
          onClickPrev={() => this.setState({
              photoIdx:
                (photoIdx + lightboxImages.length - 1) % lightboxImages.length
            })
          }
          onClickNext={() => this.setState({
              photoIdx: (photoIdx + 1) % lightboxImages.length
            })
          }
          onClose={() => this.setState({ isOpen: false })}
          onClickThumbnail={thumbnailIdx => this.setState({ photoIdx: thumbnailIdx })
          }
        />
      </ArtPieceStyle>
    );
  }
}

export default ArtPiece;
