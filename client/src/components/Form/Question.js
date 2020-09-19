import React from 'react';
function Question(){
    return(
    <div className="card col-8 col-sm-6 col-lg-5 p-3">
        <h3 className="card-title">Write A Question</h3>
        <div className="card-body">
            <input type="text" className='form-control' />
        </div>
    </div>
    )
}
export default Question;