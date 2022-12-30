import {mount} from "@vue/test-utils";
import Board from "../entities/Board";
import BoardComponent from "../components/BoardComponent.vue";
test("Deve testar o board component", async function () {
    const board = new Board("Project 1");
    board.addColumn("Todo", true);
    board.addColumn("Doing", true);
    board.addColumn("Done", false);
    board.addCard("Todo", "Atividade 1", 3);
    board.addCard("Doing", "Atividade 2", 2);
    board.addCard("Done", "Atividade 3", 4);
    const warpper = mount(BoardComponent, {
        props: {
            board
        }
    });

    expect(warpper.get("#estimative").text()).toBe("9");
});
