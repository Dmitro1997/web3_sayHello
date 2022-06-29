pragma solidity >=0.4.21 <0.6.0;

contract HelloWorld {
    string public message;

    constructor() public {
        message = "Hello";
    }

    function sayHello(string memory name) public {
        message = concatenate(message, name);
    }

    function concatenate(string memory a, string memory b)
        public
        pure
        returns (string memory)
    {
        return string(bytes.concat(bytes(a), " ", bytes(b)));
        // return string(abi.encodePacked(a, " ", b));
    }

    function getHello() public view returns (string memory) {
        return message;
    }
}
