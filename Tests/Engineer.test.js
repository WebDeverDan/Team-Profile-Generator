const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')

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

test("getGitHub", () => {
    const name = "Daniel Bradley";
    const id = 34;
    const email = "danielbvideo@gmail.com";
    const gitHub = "WebDeverDan";
    const output = new Engineer(name, id, email, gitHub)
    expect(output.gitHub).toEqual(gitHub);
});