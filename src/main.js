const React = require('react');
const ReactDOM = require('react-dom');

const Show = React.createClass({
  render: () => {
    return (
      <span>here is the show</span>
    );
  }
});

ReactDOM.render(<Show/>, document.getElementById('show'));
