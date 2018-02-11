    import React from 'react';
{/* <li>Create a new component (=> ValidationComponent)
   which receives the text length as a prop</li>
    */}
    // <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough"
    //    depending on the text length (e.g. take 5 as a minimum length)</li>


    const Validation = (props) => {
      let length = props.userInput.length;
      let message = '';

      if (length <= 5 ){
        message = 'Text too short!';
      }
      else {
        message = 'Text is fine.';
      }
      return (
        <div>
          {message}
        </div>
      );
    }

    export default Validation;
