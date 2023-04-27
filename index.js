const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }; 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  console.log(selectingDrivers);

const createFareMultiplier = function(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  };

  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  
  function selectDifferentDrivers(drivers, selectFunction) {
    return selectFunction(drivers);
  }
  
