import React, { Component } from 'react'
import './Description.css'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

class Description extends Component {
    state={
    id: this.props.match.params.id,
}

    render() { 
    
        const myTab = this.props.movies.filter(e => e.id === Number(this.state.id));
        if (myTab.length === 0) {
            return <Redirect to='/' />;
        } else {
            const { movieName, movieDate, img, ratingMovie, movieDescription } = myTab[0];
        return (

            <div className="affiche-description">
                 <img  className="des-image"src={img} alt="image-description"/> 
                   <div className="detail">
                        <h3>Title:<span className="des-title">{movieName}</span></h3>
                        <h3>Date:<span className="des-date">{movieDate}</span></h3>
                        <h3 className="star"><StarRatingComponent name="rate1"  starCount={5} value={ratingMovie}   emptyStarColor={'black'}  starColor={'#728F82'}/></h3> 
                        <h3>Description:</h3>
                            <p className="des-descrp">{movieDescription}</p>
                   </div>
            </div>
        )
    }
}
}
const mapState = state => ({
    movies: state.reducerMovie,
  });
export default connect(mapState)(Description);
