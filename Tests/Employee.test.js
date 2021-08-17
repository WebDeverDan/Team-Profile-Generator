const Employee = require('../lib/Employee')


test("getName", () => {
        const name = "Daniel Bradley";
        const output = new Employee(name);
        expect(output.name).toEqual(name);

});

test("getId", () => {
        const name = "Daniel Bradley";
        const id = 34;
        const output = new Employee(name,id);
        expect(output.id).toEqual(id);

});

test("getEmail", () => {
        const name = "Daniel Bradley";
        const id = 34;
        const email = "danielbvideo@gmail.com";
        const output = new Employee(name, id, email);
        expect(output.email).toEqual(email);

});





