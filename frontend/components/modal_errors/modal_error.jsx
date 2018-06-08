import React from 'react';


const errorModals = ({errorMsg}) => (
  <div>
    <div className="modal-error">{errorMsg}</div>
    <div className="modal-error-triangle"></div>
  </div>
);


export default errorModals;
