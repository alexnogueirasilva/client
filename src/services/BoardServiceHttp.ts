import BoardService, {SaveColumnInpunt} from "./BoardService";
import Board from "../entities/Board";
import HttpClient from "../infra/HttpClient";

export default class BoardServiceHttp implements BoardService {

    constructor(
        readonly httpClient: HttpClient,
        readonly baseUrl: string
    ) {
    }
   async getBoard(idBoard: number): Promise<Board> {

        const boardData = await this.httpClient.get(`${this.baseUrl}/boards/${idBoard}`);
        const board = new Board(boardData.idBoard, boardData.name);
        for (const columnData of boardData.columns) {
            board.addColumn(columnData.name, columnData.estimative);
            for (const cardData of columnData.cards) {
                board.addCard(columnData.name, cardData.title, cardData.estimative);
            }
        }
       return board;
    }

    async saveColumn(column: SaveColumnInpunt): Promise<number> {
        const idColumn = await this.httpClient.post(`${this.baseUrl}/boards/${column.idBoard}/columns`, column);
        return idColumn;

    }

}
