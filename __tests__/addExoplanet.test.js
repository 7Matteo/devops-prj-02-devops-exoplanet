const { checkUniqueName } = require("../models/Exoplanet");

describe("Test method checkUniqueName", () => {
    it("should return false if the string contains one lowerCase letter ", () => {
        expect(checkUniqueName("TESt")).toEqual(false);
    });

    it("should return true if the string contains no lowerCase letter ", () => {
        expect(checkUniqueName("TEST")).toEqual(true);
    });

    it("should return false if the string contains special character except . and -", () => {
        expect(checkUniqueName("TEST*")).toEqual(false);
    });

    it("should return true if the string contains . and -", () => {
        expect(checkUniqueName("TEST-12.")).toEqual(true);
    });
    
    it("should return false", () => {
        expect(checkUniqueName("Trappiste$****01****-00")).toEqual(false);
    });

});
