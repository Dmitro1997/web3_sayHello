## Requirements

• Develop a dapp that takes a name in input and runs a smart contract with the provided name.

## Functionality

• Smart Contract similar to the code sample below to produce “Hello name” passed to the sayHello() function.

```
contract HelloWorld {
   string public message;
   constructor() {
      message = “Hello”;
   }

   function sayHello(string memory name) public {
      message = concatenate(message, name);
   }

  function concatenate(string memory a, string memory b) public pure returns (string memory) {
        return string(bytes.concat(bytes(a), " ", bytes(b)));
    }
}
```

• Frontend with  
 o Text field for entering the name.  
 o Button to invoke the contract passing the name.  
 o Label to display the result.
