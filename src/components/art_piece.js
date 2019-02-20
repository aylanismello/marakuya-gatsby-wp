import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import Lightbox from 'react-images';

const COLUMN_DIVIDER = 4;

const ArtPieceStyle = styled.div`
  .piece-grid {
    display: grid;
    grid: 1fr / repeat(12, 1fr);

    .left-side {
      grid: repeat(8, 2rem) / 1fr;
      
      display: grid;
      grid-column: 1 / ${COLUMN_DIVIDER};
      .piece-line {
        grid-row: 1 / 2;
      }

      .piece-year {
        grid-row: 2 / 4;
      }

      .piece-title {
        grid-row: 4 / 6;
      }

      .piece-subtitle {
        grid-row: 6 / 8;
      }

      .piece-description {
        grid-row: 8 / 12;
      }
    }

    .right-side {
      grid: repeat(8, 2rem) / 1fr;
      display: grid;

      grid-column: ${COLUMN_DIVIDER + 2} / -1;
      .piece-image {
        grid-row: 6 / -1;
      }
    }
  }

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
        <MediaQuery minWidth={1440}>
          <div className="piece-grid">
            <div className="left-side">
              <svg
                className="piece-line"
                width="100"
                height="3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0" y1="0" x2="22" y2="0" stroke="#ebebeb" />
              </svg>
              <Year className="piece-year">{year}</Year>
              <h3
                className="piece-title"
                style={{ fontSize: '2.4rem', lineHeight: '1.25', margin: 0 }}
              >
                {title}
              </h3>
              <h4
                className="piece-subtitle"
                style={{
                  color: '#a7a7a7',
                  fontWeight: 'normal',
                  fontSize: '1.4rem',
                  margin: 0
                }}
              >
                {' '}
                {subtitle}{' '}
              </h4>
              <div
                className="piece-description"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
            <div className="right-side">
              <div className="piece-image">
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
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1439}>
          <div className="piece-writing">
            <div className="piece-writing-top">
              <svg width="100" height="3" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="0" x2="22" y2="0" stroke="#ebebeb" />
              </svg>
              <Year>{year}</Year>

              <ArtPieceHeader title={title}>
                <h3
                  className="piece-title"
                  style={{ fontSize: '2.4rem', lineHeight: '1.25' }}
                >
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
        </MediaQuery>
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
