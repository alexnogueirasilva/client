import Board from "../entities/Board";

test("Deve criar um quadro", () => {
  const board = new Board(1,"Project 1");
  expect(board.name).toBe("Project 1");
  expect(board.columns).toHaveLength(0);
  expect(board.getEstimative()).toBe(0);
});

test("Deve Criar um quadro com 3 colunas", () => {
    const board = new Board(1,"Project 1");
    board.addColumn("Todo", true);
    board.addColumn("Doing", true);
    board.addColumn("Done", false);
    expect(board.columns).toHaveLength(3);
});

test("Deve Criar um quadro com 3 cartões", () => {
  const board = new Board(1,"Project 1");
  board.addColumn("Todo", true);
  board.addColumn("Doing", true);
  board.addColumn("Done", false);
  board.addCard("Todo", "Atividade 1", 3);
  board.addCard("Doing", "Atividade 2", 2);
  board.addCard("Done", "Atividade 3", 1);
  expect(board.getEstimative()).toBe(6);
});

