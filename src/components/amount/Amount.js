import React from 'react';
import { connect } from 'react-redux';

const Amount = () => {
  return(
    <h1 className="initial-balance">
      
    </h1>
  );
}

export default connect(null, { getStartingAmount })(Amount);