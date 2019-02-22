import React from 'react';
import styled from 'styled-components';
import ArtPiece from './art_piece';

const PAGINATION_SIZE = 3;

const LoadButton = styled.div`
  display: ${props => (props.hasMorePieces ? 'flex' : 'none')};
  padding: 1rem;
  justify-content: center;
  font-size: 2rem;
  line-height: 1.1;
  
  
  .text-container {
    border-bottom: 1px solid;
    width: 10rem;  
    &:hover {
      cursor: pointer;
    }
  }

  p {
    margin-bottom: 0.3em;
    text-align: center;
  }
`;

class Work extends React.Component {
  state = {
    listSize: PAGINATION_SIZE
  };

  render() {
    const { art_list } = this.props;
    const { listSize } = this.state;
    const hasMorePieces = art_list.length > listSize;
    return (
      <div className="work">
        {art_list.slice(0, listSize).map(art => (
          <ArtPiece {...art} />
        ))}
        <LoadButton
          hasMorePieces={hasMorePieces}
          onClick={() => this.setState({ listSize: listSize + PAGINATION_SIZE })
          }
        >
          <div className="text-container">
            <p>Load More</p>
          </div>
        </LoadButton>
      </div>
    );
  }
}

export default Work;
