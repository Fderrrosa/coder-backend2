module.exports = class productos {
    constructor(title, price, photo){
        this.id = 0
        this.title = title
        this.price = price
        this.photo = photo
    }

    set prop(value) {
        this.id = value   
    }
}