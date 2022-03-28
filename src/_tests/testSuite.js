export function _testRobotInfo(robotInfo) {
  console.log("Now testing RobotInfo.");
  assertFieldIsValid("designation", robotInfo);
  assertFieldIsValid("type", robotInfo);
  assertFieldIsValid("imagePath", robotInfo);
  assertFieldIsValid("imageArtist", robotInfo);
  assertFieldIsValid("height", robotInfo);
  assertFieldIsValid("weight", robotInfo);
  assertFieldIsValid("designer", robotInfo);
  assertFieldIsValid("debut", robotInfo);
  assertFieldIsValid("innerChartPath", robotInfo);
  assertFieldIsValid("blurb", robotInfo);
  assertFieldsAreValid("loreLinks", robotInfo.loreLinks.length, robotInfo);
}

export function _testMinorVariants(minorVariants) {
  console.log("Now testing minorVariants.");
  assertFieldsAreValid("names", minorVariants.names.length, minorVariants);
  assertFieldsAreValid("minorIds", minorVariants.minorIds.length, minorVariants);
}

function assertFieldIsValid(field, testData) {
  let testString = ("Testing " + field + " field");
  if ( testData[field] === testString) {
    console.log("PASS: " + field + " field matches test string.");
    return true;
  } else {
    console.log("FAIL: " + field + " field doesn't match test string.");
    return false;
  } 
}

function assertFieldsAreValid(field, arrayLength, testData) {
  let testString = "";
  let validCount = 0;

  for (let i = 0; i < arrayLength; i++) {
    testString = ("Testing " + field + " field " + i);
    if ( testData[field][i] === testString)
      validCount++;
  }
  if ( validCount === arrayLength) {
    console.log("PASS: " + field + " field matches test string.");
    return true;
  } else {
    console.log("FAIL: " + field + " field doesn't match test string.");
    return false;
  } 
}