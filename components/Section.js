class Section {
    constructor({items, renderer}, selector) {
        this._item = items;
        this._renderer = renderer;
        this._selector = selector;
    }

    renderer() {
        this._items.forEach(item => this.renderer(item));
    }

    addItem(element) {
        this._selector.append(element);
    }
}

export default Section;