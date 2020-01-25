import React, { Component } from 'react'
import './AddCard.css'
import {connect} from "react-redux";
import {addCard} from '../../action/Action'
class AddCard extends Component {
    state={
        movieName:"",
        movieDate:"", 
        img:"",
        ratingMovie:"",
        movieDescription:""
    }
    changEvent=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render() {if(this.props.show)  {
        return (
            <div className="affiche-modal">
            <div className="add">
                <h2 className="title">Add Movie:</h2>
              <form className="inputadd">
                  <input className="champs" name="img" type="text" onChange={this.changEvent} value={this.state.img}/> 
                  <input className="champs" name="movieName" type="text" onChange={this.changEvent} value={this.state.movieName}/>
                  <input className="champs" name="movieDate" type="text" onChange={this.changEvent} value={this.state.movieDate}/>
                  <input className="champs" name="ratingMovie" type="text" onChange={this.changEvent} value={this.state.rating} />
                  <input className="champs" name="movieDescription" type="text" onChange={this.changEvent} value={this.state.movieDescription}/>
               </form>
              <button className="valide" onClick={()=>{
                  
                    this.props.addCard(this.state.movieName,this.state.movieDate,this.state.img,Number(this.state.ratingMovie),this.state.movieDescription);this.props.hide()}} >Validate</button>
            </div>
            </div>
        )}
        else return null
    }
}
const mapDispatchToProps=dispatch=>(
    {
        addCard:(movieName,movieDate, img,ratingMovie,movieDescription)=> dispatch(addCard(movieName,movieDate, img,ratingMovie,movieDescription))
        
})

export default connect(null,mapDispatchToProps)(AddCard);