import React from 'react';
import axios from 'axios';
import AdminTemplate from '_layout/AdminTemplate';
import Loading from './Loading';
import ProductsList from './ProductsList';
import ProductsFilter from './ProductsFilter';



export default class Products extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			Loading: true,
			items: [],
			catagories: [],
		};
	}
	componentDidMount() {
		// console.log( a )
		axios.get('/api/products').then( res =>{
			if( res.data.success ){
				/************* process product list **********/
				let items = [];
				let temp_catagory = [];
				res.data.data.map( catagory => {
					temp_catagory.push( catagory.name )
					catagory.foods.map( eachproduct =>{
						eachproduct.catagory = catagory.name;
						items.push( eachproduct )
					})
				})
				/************* change state **********/
				this.setState({
					Loading: false,
					items:	items,
					catagories: temp_catagory
				});
			}
		})
	}
	render() {
		return (
			<AdminTemplate>
				<div id="Products">
					<h1> Products </h1>
					<ProductsFilter catagories={this.state.catagories} />
					{ this.state.Loading ? <Loading /> :
						<ProductsList products={this.state.items} /> }
				</div>
			</AdminTemplate>
		)
	}
}
