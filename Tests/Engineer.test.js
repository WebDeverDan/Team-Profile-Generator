const askEngineerQ = require('/Users/DBrad/Documents/Coding/Team-Profile-Generator/index.js')


describe("askEngineerQ", () => {
    it("should ask the questions and create an engineer object with those answers", () => {
        const input = [
            { Name: "Daniel" },
            { ID: 123 },
            { Email: "danielbvideo@danielbvideo.com" },
            { GitHub: "webdeverdan" }
        ];
        
        const output = [
            { Name: "Daniel" },
            { ID: 123 },
            { Email: "danielbvideo@danielbvideo.com" },
            { GitHub: "webdeverdan" }
        ];
    

    expect(it(output)).toEqual(input)
    });
}); 
      