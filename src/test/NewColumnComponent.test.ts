import {mount} from "@vue/test-utils";
import Board from "../entities/Board";
import ColumnComponent from "../components/ColumnComponent.vue";
import NewColumnComponent from "../components/NewColumnComponent.vue";
import DomainEvents from "../events/DomainEvents";
test("Deve testar o column component", async function () {
    const board = new Board(1,"Project 2");
    board.addColumn("Todo", true);
    board.addColumn("Doing", true);
    board.addColumn("Done", false);
    board.addCard("Todo", "Atividade 1", 3);
    board.addCard("Todo", "Atividade 2", 2);
    board.addCard("Todo", "Atividade 3", 4);
    const events: DomainEvents[] = [];
    board.on("addColumn", function (event: DomainEvents) {
        events.push(event);
    });
    const warpper = mount(NewColumnComponent, {
        props: {
            board
        },
    });
    await warpper.get(".new-column-input").setValue("Todo");
    await warpper.get(".new-column-add").trigger("click");
    expect(board.columns).toHaveLength(4);
    expect(events).toHaveLength(1);
    const [event] = events;
    expect(event.name).toBe("addColumn");
    expect(event.payload.name).toBe("Todo");

});
