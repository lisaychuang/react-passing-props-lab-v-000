import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props => (
  <div className="fruit-basket">
    <Filter handleChange={props.handleFilterChange} filters={props.filters}/>
    <FilteredFruitList fruit={props.fruit} filter={props.currentFilter}/>
  </div>
);

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
}

// class FruitBasket extends Component {
//   constructor() {
//     super();

//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }

//   handleFilterChange = event => {
//     console.log('new filter: ', event.target.value);
//     this.setState({ selectedFilter: event.target.value });
//   }

//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={props.handleFilterChange} filters={props.filters}/>
//         //     <FilteredFruitList fruits={props.fruits}/>
//       </div>
//     );
//   }
// }

export default FruitBasket;
