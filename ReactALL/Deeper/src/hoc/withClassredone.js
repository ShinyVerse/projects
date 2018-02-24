import React, { Component } from 'react';
//
// const withClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent {...props}/>
//     </div>
//   )
// }



const withClass = (WrappedComponent, className) => {
  //no name, class on demands. Name doesn't matter. Like anon func
  return class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props}/>
        </div>
      );
    }
  }
}
export default withClass;
