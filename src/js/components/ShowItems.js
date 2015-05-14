/** jsx React.DOM */


//INITIAL METHOD (STILL WORKS) MAYBE AN ANTI-PATTERN
// var React = require('react');

// var ShowItems = React.createClass({
//   handleRemove: function(e){
//     var index = e.target.className.slice(5);
//     if(e.target.nodeName === 'BUTTON' && e.target){
//       this.props.remove(index);
//     } 
//   },
//   render: function(){
//     var showList = this.props.list.map(function(item, index){
//       var entryClass = "entry" + index;
//       return <li ref={index}>{item}<button className={entryClass}>Delete</button></li>;
//     })
//     return (
//       <div>
//       <ul onClick={this.handleRemove}>
//         {showList}
//       </ul>
//       </div>
//     )
//   }
// });

// module.exports = ShowItems;


var React = require('react');

var ShowItems = React.createClass({
  render: function(){
    var showList = this.props.list.map(function(item, index){
      return (
        <li key={index}>
        <span onClick={this.props.remove.bind(null, index)}>{item}</span>
        </li>
      )
    }.bind(this));
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