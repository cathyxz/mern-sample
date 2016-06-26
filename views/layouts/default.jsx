var React = require('react');

var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link href="/css/style.css" rel="stylesheet" type="text/css"></link>
        </head>
        
        <body>{this.props.children}</body>
      </html>
    );
  }
});

module.exports = DefaultLayout;