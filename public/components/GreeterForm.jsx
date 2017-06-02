var React = require('react');

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        var updates = {};
        if (name.length > 0) {
            updates.name = name;
            this.refs.name.value = ''; // refs можна використовувати як state?
        }
        if (message.length > 0) {
            updates.message = message;
            this.refs.message.value = '';
        }
        this.props.onNewData(updates);
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" placeholder="name" ref="name" />
                <br />
                <textarea 
                    placeholder="message"
                    ref="message"
                ></textarea>
                <br />
                <button>Submit</button>
            </form>
        );
    }
});

module.exports = GreeterForm;