import React, {Component} from 'react';
import	{Text, View} from 'react-native';



class Hello extends Component {

	//variavel de estado -> dentro do state e criado as variaveis de estado
	state = {
		nome:'teste',
		contato:{
			email:'ixc@ixc',
			telefones:{
			tel1:'4002-8922',
			tel1:'4002-8923',
			}
		},
	}


	// primeiro metodo a ser chamado qando a classe é executada/instancia
	constructor(props){
		//props propriedades da aplicação
		//super dispoe as propriedade para a tela toda usar 
		super(props);
	}
	//metodo que é executado quando a clase/componete termina de ser carregado
	componentDidMount(){
		//altera o valor da variavel de estado (state) e reflete no layout
		//[] -> representa um array
		//{} -> representa um objeto
		
		//get parametros do array
		let nomes = ['Tales','Renato'];
		console.log(nomes[0]);
		console.log(nomes[1]);

		//get parametros do objeto {chave:valor}
		let pessoa = {nome:'renato', sobrenome:'hanauer'};
		console.log(pessoa.nome);
		console.log(pessoa.sobrenome);


		//get parametros do objeto qe esta dentro de um array
		let contatos = [  
			{nome:'tales', sobrenome:'born'},
			{nome:'renato', sobrenome:'hanauer'}
		]
		console.log(contatos[0].nome);
		console.log(contatos[1].sobrenome);


		//this.setState({nome:'Renato Hanauer'});
	}
	//função que retorna email
	retornaemail = () => {
		//get email que esta dentro do this.state.contato.email
		let {contato:{email}} = this.state;
		//retorna email
		return email;
	}

	render(){
		let {contato:{email}} = this.state;
		return(
			//metodo de renderização BIND, deve ser usado com chaves{}
			//{email}
			//{contato.email}
			//{this.state.contato.email}
			//<Text>{email}</Text>
			//executa conta
			//<Text>{(((100*30)/2)+40)*0.30}</Text>
			<Text>{this.retornaemail()}</Text>


	  );
	}
}

export	default Hello;