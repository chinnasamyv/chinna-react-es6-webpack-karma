
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
	this.options = {
      defaultSortName: 'id',  // default sort column name
      defaultSortOrder: 'asc'  // default sort order
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
	  <div>
		<h1> API Results!!</h1> 
        <BootstrapTable data={ items } options={ this.options }>
          <TableHeaderColumn dataField='id' isKey dataSort class="col-xs-3">Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='title' dataSort class="col-xs-3" >Title </TableHeaderColumn>
          <TableHeaderColumn dataField='body' dataSort class="col-xs-6" >Body</TableHeaderColumn>
        </BootstrapTable>
      </div>
	  
      );
    }
  }
}

export default App;
