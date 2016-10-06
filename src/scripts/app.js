import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jQuery'

//https://api.spotify.com


// const Artist = React.createClass({

// 	var artistURL = 'https://api.spotify.com/vi/'

// 	var artistPromise = $.getJSON(artistURL)

// 	artistPromise.then(function(response){
// 		console.log('artistresponse', response.albums)
// 	})

// 	render: function(){
// 		return(
// 			<div>



// 			</div>
// 		)
// 	}

// })


const Search = React.createClass({

	var searchURL = 'https://api.spotify.com/v1/search?q=' + evt.target.value + '&type=album'

	var searchPromise = $.getJSON(searchURL)




	//handleSearch: function(){

	//}



	render: function(){
		return(
			<div>

				<input type="text" class="searchBar" placeholder="search"></input>

			</div>
		)
	}
})





const app = function() {

	const SpotifyView = React.createClass({




		render: () => {
			return (
				<div>
					<Search/>

				</div>
			)
		}
	})

	ReactDOM.render(<SpotifyView/>,document.querySelector('.container'))
}

app()
