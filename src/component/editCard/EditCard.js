import React, { Component } from 'react'
import './EditCard.css'
import {connect} from "react-redux";
import{editCard} from'../../action/Action'
class EditCard extends Component {
    state={
        id:this.props.myMovie.id,
        movieName:this.props.myMovie.movieName,
        movieDate:this.props.myMovie.movieDate, 
        img:this.props.myMovie.img,
        ratingMovie:this.props.myMovie.ratingMovie,
        movieDescription:this.props.myMovie.movieDescription,
      
    }
    onChangEdit=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
   
    render() {if(this.props.edits){
      console.log(this.props.myMovie)
        return (
          
            <div className="modal-edit">
            <div className="poster">
                <h2 className="title-edit">Edit Movie:</h2>
              <form className="edit-value">
                  <input className="value" name="img" type="text" onChange={this.onChangEdit} value={this.state.img}/> 
                  <input className="value" name="movieName" type="text"onChange={this.onChangEdit} value={this.state.movieName} />
                  <input className="value" name="movieDate" type="text"onChange={this.onChangEdit} value={this.state.movieDate}/>
                  <input className="value" name="ratingMovie" type="text"onChange={this.onChangEdit}value={this.state.ratingMovie} />
                  <textarea className="textarea" name="movieDescription" type="text"onChange={this.onChangEdit}value={this.state.movieDescription} />
               </form>
               
              <button className="save" onClick={()=>{this.props.editCard(this.state.id,this.state.movieName,this.state.movieDate,this.state.img,this.state.ratingMovie,this.state.movieDescription);this.props.hide()}}>Save</button>
                    </div>
            </div>
           
        )
    }
     else return null
    }
}
const mapDispatchToProps=dispatch=>(
    {
        editCard:(id,movieName,movieDate,img,ratingMovie,movieDescription)=> dispatch(editCard(id,movieName,movieDate,img,ratingMovie,movieDescription))
    })

export default connect(null,mapDispatchToProps)(EditCard);