const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("getName", () => {
        it("Should return Intern's name", () => {
            let person = new Intern("Jeff");

            expect(person.getName()).toEqual("Jeff");
        })
    });

    describe("getId", () => {
        it("Should return Intern's ID", () => {
            let person = new Intern("Jeff", 6584);
            expect(person.getId()).toEqual(6584);
        })
    });

    describe("getEmail", () => {
        it("Should return Intern's email address", () => {
            let person = new Intern("Jeff", 6584, "jeff@smith.com");
            expect(person.getEmail()).toEqual("jeff@smith.com");
        })
    });

    describe("getSchool", () => {
        it("Should return Intern's school name", () => {
            let person = new Intern("Jeff", 6584, "jeff@smith.com", "U of M");
            expect(person.getSchool()).toEqual("U of M")
        })
    })

    describe("getRole", () => {
        it("Should return team member's role", () => {
            let person = new Intern();
            expect(person.getRole()).toEqual("Intern");
        })
    })
})