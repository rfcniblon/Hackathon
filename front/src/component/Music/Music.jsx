import React from 'react';
import './ambiance.css';

class Ambiance extends React.Component {


    componentDidMount() {
        let song = document.getElementById('sound', 'iframeAudio');
        song.volume = 0.2;
        const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        {isChrome ? document.getElementById('sound').remove() : document.getElementById('iframeAudio').remove()};
         
      }

    render() {
        return (
            <div>
                <iframe title="silence" src="silence.mp3" allow="autoplay" id="audio"></iframe>
                <audio className="player" id="sound" autoPlay loop>
                    <source ref="song"
                    src="./music/20546modif.mp3"
                    type="audio/mpeg"
                    />
                </audio>
                <iframe className="iframe"  title="play" src="./music/20546modif.mp3" allow="autoPlay" autoPlay  id="iframeAudio">
                </iframe> 
            </div>

        )
    }
            
}



export default Ambiance;