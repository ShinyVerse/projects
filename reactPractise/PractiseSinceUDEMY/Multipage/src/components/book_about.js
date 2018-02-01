import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class BookDescription extends Component {
  constructor(props){
    super(props);

    this.takeToBook=this.takeToBook.bind(this);
  }

  takeToBook(){
    window.open("https://www.amazon.co.uk/Ready-Player-One-Ernest-Cline/dp/0099560437/ref=sr_1_1?ie=UTF8&qid=1517479699&sr=8-1&keywords=ready+player+one+book");
  }


  render(){
    return(
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h2 className="display-4">What's is all about?</h2>
          <p className="lead"  >{this.props.book.description}</p>
          <h3>Rating:</h3>
          <p>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
          <h3 className="alert alert-info" role="alert">
            To get your paws on it <button onClick={this.takeToBook}>Click here!</button>
          </h3>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    book: state.book[0]
  };
}

export default connect(mapStateToProps)(BookDescription);
