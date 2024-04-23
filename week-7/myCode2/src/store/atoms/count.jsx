import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

export const evenSelector = selector({
  key: "evenSelector",
  get: (props) => {
    const count = props.get(countAtom);
    return count % 2;
  },
});

export const filterTodos = selector({
  key: "filteredTodos",
  get: ({ get }) => {
    const todos = get(todoAtom);
    const filter = get(filterAtom);

    return todos.filter(
      (x) => x.title.includes(filter) || x.description.includes("filter")
    );
  },
});

// Todo creation application with filtering logic
// todos, filter
