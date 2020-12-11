import React from 'react';
import { Link } from 'react-router-dom';

import "./track.css"

const Track = props => {
  const { track } = props;

  return (
    <div className="col-md-5" style={{ marginLeft: "6%" }}>
      <div className="card1 mb-4 shadow-sm " >
        <div className="card-body">
          <h3>{track.artist_name}</h3><br/>
          <p className="card-text">
            <strong>
              <i className="fas fa-play " /> {' '}Track
            </strong>
            {' '}:{' '} {track.track_name}
            <br />
            <div class="go-corner" href="#">
              <div class="go-arrow">
                →
           </div>
            </div>
            <strong>
              <i class="fas fa-heart text-danger"></i>{' '} Favourite
            </strong>
          {' '}  :{' '} {track.num_favourite ? track.num_favourite : '***'}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-primary btn-block" style={{backgroundColor:"#00838d"}}
          >
            <i className="fas fa-chevron-right" /> View Lyrics
          </Link>
        </div>
      </div>
    </div>




  );
};

export default Track;




{/* <div class="container">
  <a class="card1" href="#">
    <h3>This is option 1</h3>
    <p class="small">Card description with lots of great facts and interesting details.</p>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
  </a>

</div> */}