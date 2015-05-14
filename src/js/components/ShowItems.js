/** jsx React.DOM */

var React = require('react');

var ShowItems = React.createClass({
  render: function(){
    var showList = this.props.list.map(function(item){
      return <li> {item} </li>;
    })
    return (
      <div>
      <ul>
        {showList}
      </ul>
      </div>
    )
  }
});

module.exports = ShowItems;