'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DecisionApp = function (_React$Component) {
    _inherits(DecisionApp, _React$Component);

    /// CONSTRUCTOR
    function DecisionApp(props) {
        _classCallCheck(this, DecisionApp);

        var _this = _possibleConstructorReturn(this, (DecisionApp.__proto__ || Object.getPrototypeOf(DecisionApp)).call(this, props));

        _this.onBorrarOpciones = _this.onBorrarOpciones.bind(_this);
        _this.onElegirUna = _this.onElegirUna.bind(_this);
        _this.onAgregarOpcion = _this.onAgregarOpcion.bind(_this);
        _this.onBorrarOpcion = _this.onBorrarOpcion.bind(_this);

        _this.state = { options: [] };
        return _this;
    }
    ///////////////////// FUNCIONES


    _createClass(DecisionApp, [{
        key: 'onBorrarOpciones',
        value: function onBorrarOpciones() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'onBorrarOpcion',
        value: function onBorrarOpcion(opcion) {

            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (item) {
                        return item !== opcion;
                    })
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
                return { options: prevState.options.concat(opcion) };
            });
        }
    }, {
        key: 'onElegirUna',
        value: function onElegirUna() {
            var rand = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[rand]);
        }
        ///////////////// Metodos de LIFE CYCLE ////////////////

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {

            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                // Error al intentar parsear JSON
                // no hacer nada
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {

            //Guarda la lista de manera local, unicamente si existen cambios en el arreglo
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'componeneWillUnmount',
        value: function componeneWillUnmount() {
            console.log('Component Will Unmount');
        }
        ////////////////////////////////////////////////////////


        ////////////////////////////////////////////////////////////////////////////////
        ///////RENDER DECISION APP contiene todos los componentes//////////

    }, {
        key: 'render',
        value: function render() {
            var subtitulo = "deja que la computadora decida por ti!";

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitulo: subtitulo }),
                React.createElement(Action, { tieneOpciones: this.state.options.length > 0,
                    handleElegirUnaProp: this.onElegirUna
                }),
                React.createElement(Options, { opciones: this.state.options,
                    handleBorrarOpcionesProp: this.onBorrarOpciones,
                    handleBorrarOpcionProp: this.onBorrarOpcion
                }),
                React.createElement(AddOption, { handleAgregarOpcionProp: this.onAgregarOpcion })
            );
        } ///////////////////////////////////////////////////////////////

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
        props.subtitulo && React.createElement(
            'h2',
            null,
            props.subtitulo
        )
    );
};
Header.defaultProps = {
    titulo: 'Decisiones!'
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

var Options = function Options(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleBorrarOpcionesProp },
            'Eliminar Todas'
        ),
        props.opciones.length === 0 && React.createElement(
            'p',
            null,
            'Ingresa una opcion...'
        ),
        props.opciones.map(function (op) {
            return React.createElement(Option, { key: op,
                optionText: op,
                handleBorrarOpcionProp: props.handleBorrarOpcionProp
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            { onClick: function onClick() {
                    props.handleBorrarOpcionProp(props.optionText);
                } },
            'Eliminar'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.onSubmitAddOption = _this2.onSubmitAddOption.bind(_this2);
        // aqui se define el estatus del componenten ( al igual que el state del DecisionApp (padre))
        _this2.state = {
            error: undefined
        };
        return _this2;
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
