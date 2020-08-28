import React, { Component } from 'react'
import '../style/search.css';
import axios from 'axios';


import ReactSearchBox from 'react-search-box'

export default class Search extends Component {
  // data = [
  //   {
  //     key: 'john',
  //     value: 'John Doe',
  //   },
  //   {
  //     key: 'jane',
  //     value: 'Jane Doe',
  //   },
  //   {
  //     key: 'mary',
  //     value: 'Mary Phillips',
  //   },
  //   {
  //     key: 'robert',
  //     value: 'Robert',
  //   },
  //   {
  //     key: 'karius',
  //     value: 'Karius',
  //   },
  // ]

  constructor( props ) {
		super( props );
		this.state = {
			query: '',
      results: {},
      loading: false,
      message: '',
		};
	}
handleOnInputChange = (event) => {
	const query = event.target.value;
            // this.setState({ query, loading: true, message: ''  } );
            if ( ! query ) {
              this.setState({ query, results: {}, message: '' } );
            } else {
              this.setState({ query, loading: true, message: '' }, () => {
                this.fetchSearchResults(query);
              });
            }
};
/**
 * Fetch the search results and update the state with the result.
 *
 * @param {int} updatedPageNo Updated Page No.
 * @param {String} query Search Query.
 *
 */
fetchSearchResults = ( query ) => {
	// const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
	// By default the limit of results is 20
	const searchUrl = `http://localhost:9200/products/_search?q=name:${query}*`;
	axios
    .post(searchUrl,
      //  {
			// cancelToken: this.cancel.token,
    // }
    )
		.then((res) => {
      // console.log(res.data.hits.hits,"res")
			const resultNotFoundMsg = !res.data.hits.length
				? 'There are no more search results. Please try a new search.'
				: '';
			this.setState({
				results: res.data.hits.hits,
				message: resultNotFoundMsg,
				loading: false,
			});
		})
		.catch((error) => {
			if (axios.isCancel(error) || error) {
				this.setState({
					loading: false,
					message: 'Failed to fetch results.Please check network',
				});
			}
		});
};
renderSearchResults = () => {
	const {results} = this.state;
	// console.log(results)
	if (Object.keys(results).length) {
		// console.log(results,"test")

		return (
			<div className="results-container">
							{results.map((result) => {
					console.log(result,"testa")
					return (
					// 	// <a key={result.id} href={result.previewURL} className="result-items">
							<h6 className="image-username">{result._source.brand}</h6>
					// 		// <div className="image-wrapper">
						//  <img className="image" src={result._source.image} alt={result.user}/>
					// 		// {/* </div> */}
					// 	// </a>
					);
				})}
	
			</div>
		);
	}
};
  render() {
    return (
      <div className="container">
				{/*Heading*/}
				<h2 className="heading">Live Search: React Application</h2>
				{/*Search Input*/}
				<label className="search-label" htmlFor="search-input">
         <input
						type="text"
						value={this.state.query}
						id="search-input"
            placeholder="Search..."
            onChange={this.handleOnInputChange}
					/>
					<i className="fa fa-search search-icon"/>
				</label>
        {/*Result*/}
			{ this.renderSearchResults() }
				
			</div>
      // <i className="fa fa-search search-icon"/>

      // <ReactSearchBox
      //   placeholder="Placeholder"
      //   value="Doe"
      //   data={this.data}
      //   onChange={}
      //   callback={record => console.log(record)}
      // />
    )
  }
}