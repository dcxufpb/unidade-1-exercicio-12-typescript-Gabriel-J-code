import { Coordenador } from './coordenador';

export class Departamento {

	constructor(public nome: String, public sigla: String, public localizacao:String, public coordenador: Coordenador){}

	public dados_departamento(): String{
		this.validar_dados();

		let _sigla = (this.sigla)? ` (${this.sigla})`:""

		let dados = `${this.nome}${_sigla}\n`
		dados += `Localizado em ${this.localizacao}\n`
		dados += `Coordernado por ${this.coordenador.dados_coodernador()}\n`
		return dados;
	}

	private validar_dados():void{
		if (!this.nome){
			throw new Error(`O campo nome do departamento é obrigatório`)
		}		
		if (!this.localizacao){
			throw new Error(`O campo localizacao do departamento é obrigatório`)
		}
		if (!this.coordenador){
			throw new Error(`O campo coordenador do departamento é obrigatório`)
		}
	}
}