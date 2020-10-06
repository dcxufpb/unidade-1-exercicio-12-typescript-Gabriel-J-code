export class Coordenador {

	constructor(public nome:string, public cpf: string, public idade: number){}

	public dados_coodernador(): String{
		this.validar_dados();		
				
		return `${this.nome} (${this.idade} anos), CPF: ${this.cpf}`;
	}

	private validar_dados():void{
		if (!this.nome){
			throw new Error(`O campo nome do coordenador é obrigatório`)
		}		
		if (!this.cpf){
			throw new Error(`O campo CPF do coordenador é obrigatório`)
		}
		if (!this.idade){
			throw new Error(`O campo idade do coordenador é obrigatório`)
		}		
	}
}