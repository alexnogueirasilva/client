import {mount} from "@vue/test-utils";
import Board from "../entities/Board";
import ColumnComponent from "../components/ColumnComponent.vue";
test("Deve testar o column component", async function () {
    const board = new Board(1,"Project 2");
    board.addColumn("Todo", true);
    board.addColumn("Doing", true);
    board.addColumn("Done", false);
    board.addCard("Todo", "Atividade 1", 3);
    board.addCard("Todo", "Atividade 2", 2);
    board.addCard("Todo", "Atividade 3", 4);
    const [column] = board.columns;
    const warpper = mount(ColumnComponent, {
        props: {
            board,
            column
        },
    });

    expect(warpper.get(".estimative").text()).toBe("9");
});
