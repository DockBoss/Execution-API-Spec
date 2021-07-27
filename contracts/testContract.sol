// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract TestContract {

    uint testData;
  

    function setData(uint x) public {
        testData = x;
    }
    
    function getData() public view returns (uint){
        return testData;
    }

}