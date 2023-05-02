const { Triangle, Circle, Square } = require("./shapes")

// Triangle
describe('Triangle', () => {
    test('rendered successfully', () => {
        const shape = new Triangle();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="0,200 300,200 150,0" height="100%" "width="100%" fill="${this.color}" />`)
    });
});

// Circle
describe('Circle', () => {
    test('rendered successfully', () => {
        const shape = new Circle();
        var color = ('yellow')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" r="100"  height="100%" width="100%" fill="${this.color}" />`)
    });
});

// Square
describe('Square', () => {
    test('rendered successfully', () => {
        const shape = new Square();
        var color = ('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect height="200" width="200" x="50" fill="${this.color}" />`)
    });
});
