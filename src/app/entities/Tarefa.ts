export class Tarefa {
    
    Titulo : string;
    Descricao : string;
    Conteudo : string;
    Id : number;

    constructor(titulo: string,conteudo : string,descricao : string) {
        this.Conteudo = conteudo;
        this.Titulo = titulo;
        this.Descricao = descricao;
    }
}