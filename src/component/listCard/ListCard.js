import React, { Component } from 'react'
import './ListCard.css'
import Card from'../card/Card'
import {connect} from "react-redux";
 class ListCard extends Component {

 
     render(){
       console.log(this.state)
    return (
        <div className="list">
          {this.props.List.filter(el=> el.movieName.toUpperCase().includes(this.props.nameFilter.toUpperCase()) && (el.ratingMovie >= this.props.rate))
          .map((el)=>(<Card key={el.id} index={el.id}cards={el}/>))} 
          <button className="adde" onClick={() => {this.props.modal() }} >  + </button>
         
          
        </div>
    )
}
}
const mapStateToProps= state=>({
    List:state.reducerMovie,
    nameFilter:state.reducerSearch,
    rate:state.reducerSearchRating
})

export default connect(mapStateToProps)(ListCard)