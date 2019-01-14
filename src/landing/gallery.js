import React from 'react';
import $ from 'jquery';
import './gallery.css';

var pictures = 8;

class Tile extends React.Component {
	render() {
		return(
			<div class="tile-wrapper">
				<img class="tile" src={require("../resources/gallery/image" + this.props.value.toString() + ".jpg")} />
			</div>
		);
	}
}

// <div 
// 				class="tile" 
// 				image-src={"/src/resources/gallery/image" + this.props.value.toString()}
// 			></div>

class Gallery extends React.Component {
	createImage = () => {
		var tiles = [];
		for (var i = 0; i < pictures; i++) {
			tiles.push(<Tile value={i} key={i}/>);
		}
		return tiles;
	}

	render(){
		return(
			<div id="gallery">
				<div id="tiles">
					{this.createImage()}
				</div>
			</div>
		);
	}

	// componentDidMount() {
	// $('.tiles')
	//     .on('mouseover', function(){
	//       $(this).children('.tile').css({'transform': 'scale(1.1)'});
	//     })
	//     .on('mouseout', function(){
	//       $(this).children('.tile').css({'transform': 'scale(1)'});
	//     })
	// }
	componentDidMount() {
		$('#tiles')
			.children('.tile').each(function () {
				$(this).css({'background-image': 'url('+ $(this).attr('image-src') +')'});
		})
		console.log($(this));
	}
}

export default Gallery;