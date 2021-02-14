// Juste un exemple
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
}) 

describe("#promise", () => {

    it("should say hello", () => {
        promise.then((message) => {
            expect(message).toEqual('Hello');
        });
        
    });

});