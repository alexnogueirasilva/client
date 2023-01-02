import BoardView from "../views/BoardView.vue";
import {mount} from "@vue/test-utils";
import BoardService from "../services/BoardService";
import Board from "../entities/Board";
import BoardServiceHttp from "../services/BoardServiceHttp";

function sleep(ms: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, ms);
    });
}

test("Deve testar o board view", async function () {
    const boardService: BoardService = {
        async getBoard(idBoard: number){
            const board = new Board(1, "Project 1");
            board.addColumn("Todo", true);
            board.addColumn("Doing", true);
            board.addColumn("Done", false);
            board.addCard("Todo", "Atividade 1", 3);
            board.addCard("Doing", "Atividade 2", 2);
            board.addCard("Done", "Atividade 3", 1);
            return board;
        }
    }
    // const boardService = new BoardServiceHttp();
    const warpper = mount(BoardView, {
        global: {
            provide: {
                boardService
            }
        },
    });
    await sleep(200);
    expect(warpper.get("#estimative").text()).toBe("9");

});
