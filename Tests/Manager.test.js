const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

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

test("getOfficeNumber", () => {
    const name = "Daniel Bradley";
    const id = 34;
    const email = "danielbvideo@gmail.com";
    const officeNumber = 24;
    const output = new Manager(name, id, email, officeNumber);
    expect(output.officeNumber).toEqual(officeNumber);
});