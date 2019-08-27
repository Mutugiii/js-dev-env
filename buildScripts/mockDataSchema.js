//schema that  declares shape of fake data
export const schema = {
  "type": "object",                 //declare data structure is an object
  "properties": {                   //The object has a set of properties
    "users": {                      //First property is users
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {                    //shape of items that should fit inside the users array
        "type": "object",           //find an object
        "properties": {             //propertes of object
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"           //using faker lib
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"            //using faker lib
          },
          "email": {
            "type": "string",
            "faker": "internet.email"           //using faker lib
          }
        },
        "required": ["id", "firstName", "lastName", "email"]          //declaring that the 4 properties are required, will always be populated, if you don't fill it out, it will occasionally leave it out it will simulate an API
      }
    }
  },
  "required": ["users"]                   //specify that the top level property is required
};
