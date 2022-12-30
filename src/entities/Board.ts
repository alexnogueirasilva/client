import Column from "./Column";
import Card from "./Card";

export default class Board {

    columns: Column[];
    constructor(readonly name: string) {
        this.columns = [];
        if (!name) {
            throw new Error("Nome é obrigatório");
        }
    }

    addColumn(columnName: string, hasEstimative: boolean){
        this.columns.push(new Column(columnName, hasEstimative));
    }

    addCard(columnName: string, cardTitle: string, estimative: number){
        const column = this.columns.find((column: Column) => column.name === columnName);
        if(!column) throw new Error("Coluna não encontrada");
        column.addCard(new Card(cardTitle, estimative));
    }

    getEstimative(){
        return this.columns.reduce((acc: number, column: Column) => {
            acc += column.getEstimative();
            return acc;
        }, 0);
    }

    incraseEstmative(card: Card){
        card.incraseEstmative();
    }

    decraseEstmative(card: Card){
        card.decraseEstmative();
    }
}