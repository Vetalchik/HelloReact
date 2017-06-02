var React = require('react');
var GreeterMessage = require('./GreeterMessage'); 
var GreeterForm = require('./GreeterForm');
// UpperCamelCase для назви компонентів react
// container component, підтимує state
// перемальовує своїх дітей, коли змінюється state
// не має в собі візуальних елементів, малює тільки дочірні компоненти
// схоже, що перемальовує себе і всі, а не конкретний дочірній компонент, який використовує певну властивіть state
var Greeter = React.createClass({
    getDefaultProps: function () { 
        return {
            name: "React",
            message: "This is from component.",
        }
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        }
    },
    handleNewData: function (updates) {
        this.setState(updates); // встановлює стан і оновлює компонент
    },
    render: function () { // єдиний обов'язковий до визначення метод
        var name = this.state.name;
        var message = this.state.message;
        return ( // ми зобов'язані повертати тільки один кореневий елемент
            <div>
                <GreeterMessage name={name} message={message} />
                <GreeterForm onNewData={this.handleNewData} />
            </div>
        ); // ref - зберегти посилання на поле вводу
        // передаємо функцію, яка змінює state батьківського компонента,
        // а викликаємо її в дочірньому компоненті
    },
    
});

module.exports = Greeter;