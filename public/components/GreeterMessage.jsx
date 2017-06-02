var React = require('react');

// presentational component, він не підтримує state
// бере властивості і виводить щось на екран
var GreeterMessage = React.createClass({
    getDefaultProps: function () { // повернути властивості по замовчуванню
        return {
            name: 'Name',
            message: 'Message',
        }
    },
    render: function () {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h2>Hello, {name}.</h2>
                <p>{message}</p>
            </div>
        );
    }
});

module.exports = GreeterMessage; 