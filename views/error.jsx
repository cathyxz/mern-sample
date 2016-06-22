var React = require('react');
var DefaultLayout = require('./layouts/default');

var ErrorMessage = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>We got an error</div>
      </DefaultLayout>
    );
  }
});

module.exports = ErrorMessage;