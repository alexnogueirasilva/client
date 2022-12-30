import BoardService from "./BoardService";
import Board from "../entities/Board";
import axios from "axios";

export default class BoardServiceHttp implements BoardService {
   async getBoard(idBoard: number): Promise<Board> {
        const response = await axios({
            method: "GET",
            url: `http://localhost:3000/boards/${idBoard}`,
        });
        const boardData = response.data;
        const board = new Board(boardData.name);
        for (const columnData of boardData.columns) {
            board.addColumn(columnData.name, columnData.estimative);
            for (const cardData of columnData.cards) {
                board.addCard(columnData.name, cardData.title, cardData.estimative);
            }
        }
       return board;
    }

}
