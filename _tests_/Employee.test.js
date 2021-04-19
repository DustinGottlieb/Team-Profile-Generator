const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("getName", () => {
        it("Should return Employee's name", () => {
            let person = new Employee("Jeff");

            expect(person.getName()).toEqual("Jeff");
        })
    });

    describe("getId", () => {
        it("Should return Employee's ID", () => {
            let person = new Employee("Jeff", 6584);
            expect(person.getId()).toEqual(6584);
        })
    });

    describe("getEmail", () => {
        it("Should return Employee's email address", () => {
            let person = new Employee("Jeff", 6584, "jeff@smith.com");
            expect(person.getEmail()).toEqual("jeff@smith.com");
        })
    });

    describe("getRole", () => {
        it("Should return Employee's role", () => {
            let person = new Employee();
            expect(person.getRole()).toEqual("Employee");
        })
    })
})