const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("getName", () => {
        it("Should return engineer's name", () => {
            let person = new Engineer("Jeff");

            expect(person.getName()).toEqual("Jeff");
        })
    });

    describe("getId", () => {
        it("Should return enineer's ID", () => {
            let person = new Engineer("Jeff", 6584);
            expect(person.getId()).toEqual(6584);
        })
    });

    describe("getEmail", () => {
        it("Should return engineer's email address", () => {
            let person = new Engineer("Jeff", 6584, "jeff@smith.com");
            expect(person.getEmail()).toEqual("jeff@smith.com");
        })
    });

    describe("getGithub", () => {
        it("Should return engineer's GitHub username", () => {
            let person = new Engineer("Jeff", 6584, "jeff@smith.com", "dustingottlieb");
            expect(person.getGithub()).toEqual("dustingottlieb")
        })
    })

    describe("getRole", () => {
        it("Should return team member's role", () => {
            let person = new Engineer();
            expect(person.getRole()).toEqual("Engineer");
        })
    })
})