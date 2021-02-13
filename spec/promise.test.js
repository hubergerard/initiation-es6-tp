// Juste un exemple

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
}) 

describe("greet()", () => {

    it("should greet Henry", () => {
        promise.then((message) => {
            expect(message).toEqual('Hello');
        });
        
    });

});