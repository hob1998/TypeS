type Draggable = {
    drag: () => void;
};

type Resizable = {
    resize: () => void;
};

type UIWidget = Draggable & Resizable;

let prop: UIWidget = {
    drag: () => {},
    resize: () => {}
};

console.log('prop');