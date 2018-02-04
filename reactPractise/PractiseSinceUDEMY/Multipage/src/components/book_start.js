import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


 class BookStart extends Component {
  render() {
    return (

  <div className="container">
    <div className="row">
      <div className="col-xs-6 ">
        <h1 >BOOK OF THE WEEK</h1>
        <h2 >{this.props.book.title}</h2>
        <h4>{this.props.book.author}</h4>
        <Link className="btn btn-primary" to='/aboutbook'>
            What's it about...
        </Link>
      </div>
      <div className="col-xs-6 ">
        <img src={this.props.book.img}/>
      </div>
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

export default connect(mapStateToProps)(BookStart);
