import React, {Component} from 'react';

class Titulo extends Component {
    constructor(props) {
        super(props);
        //this.elementoH1 = React.createRef();
        /*this.state = {
            texto: "Meu texto padrão"
        }*/
        this.state = {
            texto: "Clique Aqui"
        }
        this.funcao = this.funcao.bind(this);
    }
    //componentDidMount() {
        //this.elementoH1.current.innerHTML = "Outro Texto";
    //}
    funcao() {
        this.setState({texto: "Você clicou no titulo"})
    }

    render() { 
        return (<h1 onClick={this.funcao}>{this.state.texto}</h1>)
    }
}

export default Titulo;