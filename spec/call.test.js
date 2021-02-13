function greet(name) {
    return `Hello ${name}. You are our customer n°${this.customerNumber}, congratulations !`;
}

const contexte = { 
    customerNumber: 44152
};

describe("greet()", () => {

    it("should greet Henry", () => {
        // TODO : Remplace le null par un appel à la fonction greet, en utilisant la méthode call() pour lui passer le contexte
        const message = greet.call(contexte, 'Henry');
        expect(message).toEqual('Hello Henry. You are our customer n°44152, congratulations !');
    });

});


