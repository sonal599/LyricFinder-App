import React, { Component } from 'react'
import axios from 'axios'
import Spinner from '../layout/Spinner'
import {Link} from "react-router-dom"
import Moment from 'react-moment'

import Footer from '../../components/Footer'

import './Lyrics.css'
 class Lyrics extends Component {
   
  state={
    track:{},
    lyrics:{}
  }
  componentDidMount(){
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
    .then(res=>{
      
      this.setState({lyrics:res.data.message.body.lyrics});

      return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
    }
      )
      .then(res=>{
        this.setState({track:res.data.message.body.track});
        console.log(res)
      })
    .catch(err=>console.log(err));
   }
  render() {
    const {track,lyrics}=this.state;
    
    
    // {track===undefined || lyrics===undefined|| Object.keys(track).length===0 || Object.keys(lyrics).length===0 ? <Spinner/> :  <h1>Data returned</h1>})
    
    if(track===undefined || lyrics===undefined|| Object.keys(track).length===0 || Object.keys(lyrics).length===0){
      return <Spinner/>;
    }else{
        return (
            <React.Fragment >
                <Link to='/' className="btn btn-sm mb-4 mt-3 go_back btn-outline-info" >Go Back</Link>
                <div style={{margin:"0 20% 0", backgroundColor:'#120f1d', border:'1px solid grey ', color:'white'}} className="card " >
                    <h5 className="card-body" >
                    <i className="fas fa-compact-disc"></i> {' '}
                      <span style={{color:'#f46034'}}>{track.track_name}</span>
                        {' '}by{' '}
                        <span className="text-secondary" >{track.artist_name}</span>
                    </h5>
                     <div className="card-body ">
                         <h6 className="card-text "style={{color:'white'}}>{lyrics.lyrics_body}</h6>
                         <a className="btn btn-info btn-lg ml-auto mt-3"style={{backgroundColor:"#00838d" , color:'white',float:"right"}} href="https://developer.musixmatch.com/plans">Get Full Lyrics</a>
                     </div>
                </div>

                <div className="row  album">
                  <div className="col-5 "style={{paddingLeft:'15%'}}>
                  <div className=" track_detail mt-2">
                        <strong>Album ID</strong>{' '}: {' '}{track.album_id}
                    </div>

                    <div className=" track_detail mt-2">
                        <strong>Song Genre</strong>{' '}:{' '} K-Pop
                        {/* {
                          
                          track.primary_genres.music_genre_list[0].music_genre.music_genre_name
                        } */}
                    </div>
                  </div>
                  <div className="col-5 "style={{paddingLeft:'15%'}} >
                  <div className=" track_detail mt-2">
                        <strong>Exiplict</strong>{' '}:{' '}
                        {TextTrackCue.explicit === 0 ? 'No' : 'Yes'}
                    </div>
                    <div className=" track_detail mt-2">
                        <strong>Release Date</strong>{' '}:{' '}
                        <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
                    </div>
                  </div>
                </div>
                {/* <ul className="list-group mt-3 row">
                  <div className="col">
                    <li className="list-group-item track_detail ">
                        <strong>Album ID</strong>: {track.album_id}
                    </li>

                    <li className="list-group-item track_detail ">
                        <strong>Song Genre</strong>:{' '}
                        {
                          track.primary_genres.music_genre_list[0].music_genre.music_genre_name
                        }
                    </li>
                  </div>

                  <div className="col ">
                    <li className="list-group-item track_detail">
                        <strong>Exiplict</strong>:
                        {TextTrackCue.explicit === 0 ? 'No' : 'Yes'}
                    </li>
                    <li className="list-group-item track_detail">
                        <strong>Release Date</strong>:
                        <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
                    </li>
                  </div>

                </ul> */}
                
            </React.Fragment>

        );
    }
    
  }
}
export default Lyrics


