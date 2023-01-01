import {mount} from "@vue/test-utils";
import Board from "../entities/Board";
import CardComponent from "../components/CardComponent.vue";
test("Deve testar o column component", async function () {
    const board = new Board("Project 2");
    board.addColumn("Todo", true);
    board.addColumn("Doing", true);
    board.addColumn("Done", false);
    board.addCard("Todo", "Atividade 1", 3);
    board.addCard("Todo", "Atividade 2", 2);
    board.addCard("Todo", "Atividade 3", 4);
    const [column] = board.columns;
    const [card] = column.cards;
    const warpper = mount(CardComponent, {
        props: {
            board,
            column,
            card
        },
    });

    expect(warpper.get(".card-title").text()).toBe("Atividade 1");
    expect(warpper.get(".card-estimative").text()).toBe("3");
    await warpper.get(".card-estimative-increse").trigger("click");
    await warpper.get(".card-estimative-increse").trigger("click");
    await warpper.get(".card-estimative-increse").trigger("click");
    expect(warpper.get(".card-estimative").text()).toBe("6");
    await warpper.get(".card-estimative-decrese").trigger("click");
    expect(warpper.get(".card-estimative").text()).toBe("5");
});
