import React, { useEffect } from 'react';
import { gsap } from "gsap";
import './preloader.scss';
import { ReactComponent as Loader } from '../../images/preloader/preloader.svg';


function Preloader() {


	useEffect(() => {

    let tl = new gsap.timeline({
      defaults: {
        duration:0.3,
        ease:'power1.in',
      },
      onComplete: function(){
        var elem = document.querySelector('#preloader');
        elem.parentNode.removeChild(elem);
      }
    })
    tl.to('#preloader svg', {scale:0});
    tl.to('#preloader', {opacity:0},"+=0.05");
		
	});
	
	return (
		<div id="preloader">
      <Loader />
    </div>
	)
}

export default Preloader;