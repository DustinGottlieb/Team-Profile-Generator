const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("getName", () => {
        it("Should return Manager's name", () => {
            let person = new Manager("Jeff");

            expect(person.getName()).toEqual("Jeff");
        })
    });

    describe("getId", () => {
        it("Should return Manager's ID", () => {
            let person = new Manager("Jeff", 6584);
            expect(person.getId()).toEqual(6584);
        })
    });

    describe("getEmail", () => {
        it("Should return Manager's email address", () => {
            let person = new Manager("Jeff", 6584, "jeff@smith.com");
            expect(person.getEmail()).toEqual("jeff@smith.com");
        })
    });

    describe("getOfficeNumber", () => {
        it("Should return Manager's school name", () => {
            let person = new Manager("Jeff", 6584, "jeff@smith.com", "651-768-9414");
            expect(person.getOfficeNumber()).toEqual("651-768-9414")
        })
    })

    describe("getRole", () => {
        it("Should return team member's role", () => {
            let person = new Manager();
            expect(person.getRole()).toEqual("Manager");
        })
    })
})