'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DecisionApp = function (_React$Component) {
    _inherits(DecisionApp, _React$Component);

    function DecisionApp(props) {
        _classCallCheck(this, DecisionApp);

        var _this = _possibleConstructorReturn(this, (DecisionApp.__proto__ || Object.getPrototypeOf(DecisionApp)).call(this, props));

        _this.onBorrarOpciones = _this.onBorrarOpciones.bind(_this);
        _this.onElegirUna = _this.onElegirUna.bind(_this);
        _this.onAgregarOpcion = _this.onAgregarOpcion.bind(_this);
        _this.state = {
            options: []

        };
        return _this;
    }

    _createClass(DecisionApp, [{
        key: 'onBorrarOpciones',
        value: function onBorrarOpciones() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'onAgregarOpcion',
        value: function onAgregarOpcion(opcion) {

            if (!opcion) {
                return 'Ingresa un valor valido...';
            } else if (this.state.options.indexOf(opcion) > -1) {
                return 'Ya existe el elemento en el arreglo...';
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(opcion)
                };
            });
        }
    }, {
        key: 'onElegirUna',
        value: function onElegirUna() {
            var rand = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[rand]);
        }
    }, {
        key: 'render',
        value: function render() {
            var titulo = "Decisiones!";
            var subtitulo = "Deja que elija!";

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { titulo: titulo, subtitulo: subtitulo }),
                React.createElement(Action, { tieneOpciones: this.state.options.length > 0,
                    handleElegirUnaProp: this.onElegirUna
                }),
                React.createElement(Options, { opciones: this.state.options,
                    handleBorrarOpcionesProp: this.onBorrarOpciones
                }),
                React.createElement(AddOption, { handleAgregarOpcionProp: this.onAgregarOpcion })
            );
        }
    }]);

    return DecisionApp;
}(React.Component);

var Header = function Header(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.titulo
        ),
        React.createElement(
            'h2',
            null,
            props.subtitulo
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleElegirUnaProp, disabled: !props.tieneOpciones },
            '\xBFQue hacer?'
        )
    );
};

var Options = function (_React$Component2) {
    _inherits(Options, _React$Component2);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handleBorrarOpcionesProp },
                    'Eliminar Todas'
                ),
                this.props.opciones.map(function (op) {
                    return React.createElement(Option, { key: op, optionText: op });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText
    );
};

var AddOption = function (_React$Component3) {
    _inherits(AddOption, _React$Component3);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this3.onSubmitAddOption = _this3.onSubmitAddOption.bind(_this3);
        // aqui se define el estatus del componenten ( al igual que el state del DecisionApp (padre))
        _this3.state = {
            error: undefined
        };
        return _this3;
    }

    _createClass(AddOption, [{
        key: 'onSubmitAddOption',
        value: function onSubmitAddOption(e) {

            e.preventDefault();

            var valor = e.target.elements.descripcion.value.trim();
            var error = this.props.handleAgregarOpcionProp(valor);
            e.target.elements.descripcion.value = '';
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.onSubmitAddOption },
                    React.createElement('input', { type: 'text', name: 'descripcion', placeholder: 'Ingresa algo aqui' }),
                    React.createElement(
                        'button',
                        null,
                        'Enviar'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(DecisionApp, null), document.getElementById('app'));
