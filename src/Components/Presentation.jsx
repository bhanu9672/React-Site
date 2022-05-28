import React from 'react';

function Presentation( props ) {
    return(
       <div id='presentaion'>
            <h1> { props.title } </h1>
            <p> { props.section_content } </p>
       </div>
    );
}

export default Presentation;