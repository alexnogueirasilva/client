import Board from "../entities/Board";

export default interface BoardService {
    getBoard(idBoard: number): Promise<Board>;
    saveColumn(column: SaveColumnInpunt): Promise<number>;
}

export type SaveColumnInpunt = {
    idBoard: number,
    name: string,
    hasEstimative: boolean
}
