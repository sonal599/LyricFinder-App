import React, { Component } from 'react'
import axios from 'axios'
import {Consumer} from '../../Context'
 import "./Lyrics.css"

 class Search extends Component {
   state={
     trackTitle:'',
     searchLoad:0
   }

   findTrack=(dispatch,e)=>{
    e.preventDefault();

    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
    .then(res=>{
      dispatch({
        type:'SEARCH_TRACKS',
        payload:res.data.message.body.track_list
      })
      
      this.setState({trackTitle:''})
      
    }
      )
    .catch(err=>console.log(err));
   }
   onChange=e=>{
     this.setState({[e.target.name]:e.target.value})
   }
  render() {
    return(
      <Consumer>
          {
            value=>{
              const {dispatch}=value;
  
              return (
                <div className="card card-body mb-3 mt-2 p-3 "style={{margin:"0 15% 0", border:'none'}}>
                  
                  <h1 className="display-5 text-center">
                      <i className="fas fa-music">{' '}
                        Search For A Song
                      </i>
                  </h1>
                  <p className="lead text-center"><b>Get the lyrics for any song</b></p>
                  <form onSubmit={this.findTrack.bind(this,dispatch)}>
                    <div className="form__group field ">
                      <input 
                      type="text"
                      className=" form__field"
                      id='name'
                       placeholder="Song title..."
                      name="trackTitle"
                      value={this.state.trackTitle}
                      onChange={this.onChange}></input>
                        <label for="name" className="form__label">Song Title Goes here...</label>
                    </div>
                    <button className="btn btn-outline-info btn-md mb-3 btn-lg "  type="submit" style={{marginLeft:'40%',backgroundColor:"", color:""}}>Get Track Lyrics
  
                    </button>
                  </form>
                </div>
              )
            }
          }
        </Consumer>)
    
        
    
  }
}
export default Search


{/* <div class="form__group field">
  <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
  <label for="name" class="form__label">Name</label>
</div> */}