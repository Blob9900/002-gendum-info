import { _testRobotInfo, _testMinorVariants } from '../_tests/testSuite';

const JSON_DATABASE_PATH = 'http://localhost:8000/';

export function fetchFromRobotInfoDb(id, setFetchedData) {
  let dbPath = (JSON_DATABASE_PATH + 'robotInfo/' + id); 
  fetch(dbPath)
  .then( response => {
    if (response.status === 404) {
      throw new Error ("404 error while fetching from RobotInfo.")
    }
    return response.json();
  })
  .then( json => {
    setFetchedData(json);
  })
  .catch( err => {
    console.log (err);
    fetchFromRobotInfoDb("default", setFetchedData);
  });
}

export function fetchFromMinorVariantsDb(id, setFetchedData) {
  let dbPath = (JSON_DATABASE_PATH + 'minorVariants/' + id); 
  fetch(dbPath)
  .then( response => {
    if (response.status === 404) {
      throw new Error ("404 error while fetching from minorVariants.")
    }
    return response.json();
  })
  .then( json => {
    setFetchedData(json);
  })
  .catch( err => {
    console.log (err);
    fetchFromRobotInfoDb("default", setFetchedData);
  });
}

export function testFetchFrom() {
  let dbPath = (JSON_DATABASE_PATH + 'robotInfo/test'); 
  fetch(dbPath)
  .then( response => {
    return response.json();
  })
  .then( (json) => {
    _testRobotInfo(json);
  });

  dbPath = (JSON_DATABASE_PATH + 'minorVariants/test'); 
  fetch(dbPath)
  .then( response => {
    return response.json();
  })
  .then( (json) => {
    _testMinorVariants(json);
  });
}