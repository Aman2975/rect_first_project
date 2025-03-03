import React from 'react';
function TextForm(props){
    return(

        <>
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1" className="my-3">{props.title}</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
    <button className=" btn btn-primary my-2 ">Convert to Upercase</button>
  </div>

        </>
    );
}

export default TextForm;