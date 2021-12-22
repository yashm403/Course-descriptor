import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div  style={{ border: '1px solid' ,width:"75%",marginLeft:"100px" ,marginTop:"20px"}} ref={ref}>
     <div style={{ border: '1px solid'}}><h5 style={{  marginRight:"100px" ,display:"inline"}}>Course Title and Code</h5> <h2 style={{ marginleft:"400px" ,display:"inline"}} >{props.title}</h2></div>
        <div  style={{  border: '1px solid'}} ><p style= {{marginRight:"50px",display:"inline",borderRight: '1px solid'}} > Credits </p> <p  style= {{marginLeft:"50px",display:"inline"}}>  {props.credit}</p></div>
        <div  style={{  border: '1px solid'}} ><p style= {{marginRight:"50px",display:"inline",borderRight: '1px solid'}} > Faculty </p> <p  style= {{marginLeft:"50px",display:"inline"}}>  {props.Name}</p></div>
        <div  style={{  border: '1px solid'}} ><p style= {{marginRight:"50px",display:"inline",borderRight: '1px solid'}} > Course Description </p> <p  style= {{marginLeft:"50px",display:"inline"}}>  {props.description}</p></div>
        <div  style={{  border: '1px solid'}} ><p style= {{marginRight:"50px",display:"inline",borderRight: '1px solid'}} > Syllabus </p> <p  style= {{marginLeft:"50px",display:"inline",overflow:"break-word",wordBreak:"break-word",wordWrap:"break-word", content:"/a"}}>  {props.syllabus}</p></div>
        <div  style={{  border: '1px solid'}} ><p style= {{marginRight:"50px",display:"inline",borderRight: '1px solid'}} > References </p> <p  style= {{marginLeft:"50px",display:"inline"}}>  {props.references}</p></div>
    
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;