import React from 'react';

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

class App extends React.Component {
    constructor() {
        super();
    
        this.state = {
            fruit: [],
            filters: [],
            currentFilter: null
        };
      }

      fetchFilters = () => {
        fetch('/api/fruit_types')
          .then(response => response.json())
          .then(filters => this.setState({ filters }));
      };

      fetchFruit = () => {
        fetch('/api/fruit')
        .then(response => response.json())
        .then(items => this.setState({ fruit }));
      };

    //   filterFruitList = ()=> {
    //     (!currentFilter || currentFilter === 'all') ? 
    //     this.setState({fruit: fruits}) : 
    //     this.setState({fruit: fruits.filter(i => i.fruit_type === currentFilter)});
    //   };

    updateFilterCallback = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ currentFilter: event.target.value });
      }

      componentWillMount() {
        this.fetchFilters();
        this.fetchFruit();
      }

      render(){
          return (
            <FruitBasket 
                fruit={this.state.fruit}
                filters={this.state.filters} 
                currentFilter={this.state.currentFilter}
                handleFilterChange={this.updateFilterCallback} />
          )
      }
}

export default App;
