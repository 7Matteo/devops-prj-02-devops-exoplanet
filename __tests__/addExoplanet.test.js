const { checkUniqueName} = require("../models/Exoplanet");



  
  describe('Test method checkUniqueName', () => {

    
      it('should return false if the string contains one lowerCase letter ', () => {
        expect(checkUniqueName("TESt")).toEqual(false);
    })
    
    it('should return true if the string contains no lowerCase letter ', () => {
        expect(checkUniqueName("TEST")).toEqual(true);
    })
    
    
    

    });
    