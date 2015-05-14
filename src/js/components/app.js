/** @jsx React.DOM */

var React = require('react');
var AddItem = require('./AddItem');
var List = require('./ShowItems');
var todoStore = require('../stores/todoStore');
var todoActions = require('../actions/todoActions');

var APP = React.createClass({
  getInitialState: function(){
    return {
      items: todoStore.getList()
    }
  },
  componentDidMount: function(){
    todoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    todoStore.removeChangeListener(this._onChange);
  },
  addTodoItem: function(item){
    todoActions.addItem(item);
  },
  handleRemoveItem: function(index){
    todoActions.removeItem(index);
  },
  _onChange: function(){
    this.setState({
      list: todoStore.getList()
    })
  },
  render: function(){
    return (
      <div>
        <div> To Do List </div>
        <AddItem addNew={this.addTodoItem}/>
        <List list={this.state.items} remove={this.handleRemoveItem}/>
      </div>
    )
  }
});

module.exports = APP;