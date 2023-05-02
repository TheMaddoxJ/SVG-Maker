class Shape{
    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = (color);
    }
}

class Triangle extends Shape {
    render(){
        return `<svg polygon points="0,200 300,200 150,0" height="100%" "width="100%" fill="${this.color}"> </svg>`
    }
}

class Circle extends Shape {
    render(){
        return `<svg circle cx="50%" r="100"  height="100%" width="100%" fill="${this.color}"> </svg>`
    }
}

class Square extends Shape {
    render(){
        return `<svg rect height="200" width="200" x="50" fill="${this.color}"> </svg>`
    }
};

module.exports = {Triangle, Circle, Square};