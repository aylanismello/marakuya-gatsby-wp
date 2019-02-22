import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import Lightbox from 'react-images';

const ArtPieceStyle = styled.div`
  .piece-grid {
    display: grid;
    grid-template-columns: 4fr 1fr 6fr;
    grid-template-rows: 1rem 2rem auto 2rem auto;
    /* grid-template-rows: 1rem auto; */

    grid-template-areas:
      "p-line . ."
      "year . ."
      "title . ."
      "subtitle . p-image"
      "description . p-image";
/*       
    grid-template-areas:
      "p-line . ."
      "description . p-image"; */
    
    .piece-line {
      grid-area: p-line;
    }

    .piece-year {
      grid-area: year;
    }

    .piece-title {
      grid-area: title;
    }

    .piece-subtitle {
      grid-area: subtitle;
      align-self: self-end;
    }

    .piece-description {
      grid-area: description;
    }

    .piece-image {
      grid-area: p-image;
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
            {/* <div className="left-side"> */}
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
            {/* </div> */}
            {/* <div className="right-side"> */}
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
            {/* </div> */}
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
