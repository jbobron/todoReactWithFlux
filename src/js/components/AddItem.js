/** jsx React.DOM */

var React = require('react');

var AddItem = React.createClass({
  getInitialState: function(){
    return {
      item: ''
    }
  },
  handleAdd: function(){      //setState({}), this.props:  e.target.value
    this.props.addNew(this.state.item);
    this.setState({
      item: ''
    })
  },
  updateList: function(e){
    this.setState({
      item: e.target.value
    })
  },
  
  render: function(){
    return (
      <div>
        <input type='text' value={this.state.item} onChange={this.updateList}/>
        <button onClick={this.handleAdd}> Submit </button>
      </div>
    )
  }

});

module.exports = AddItem;