import React from 'react';
import { css } from '@emotion/core';
// First way to import
// import { ClipLoader } from 'react-spinners';
// Another way to import. This is recommended to reduce bundle size
import BeatLoader from 'react-spinners/BeatLoader';

import PropTypes from 'prop-types';
 
// Can be a string as well. Need to ensure each key-value pair ends with ;

 
function Spinner(props) {
  let override;
    if(props.graph === 'bar'){
      override = css`
        position: absolute;
        bottom: 51%;
        right: 38%;
    `;
    } else if (props.graph === 'line'){
      override = css`
        position: absolute;
        bottom: 15%;
        right: 57%;
    `;
    }
    return (
      <div className="sweet-loading" style={{display: 'flex'}}>
        <BeatLoader
          css={override}
          sizeUnit={"px"}
          size={15}
          color={'#15232d'}
          loading={props.loading}
        />
      </div> 
    );
}

Spinner.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Spinner;