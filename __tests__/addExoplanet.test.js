const { checkUniqueName} = require("../models/Exoplanet");



  
  describe('Test method checkUniqueName', () => {


      it('should return true', () => {
          expect(checkUniqueName(undefined)).toEqual(true);
      })
    
      it('should false ', () => {
        expect(checkUniqueName(undefined)).toEqual(true);
    })
    
    
    
    
    
    
    });
    