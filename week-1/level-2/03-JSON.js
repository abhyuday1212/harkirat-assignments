function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  // string -> object : parse
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);


  // Stringifying JavaScript object to JSON string
  // object -> json string : stringify
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);
