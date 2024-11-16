// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;
contract MoffitStatus {
    address public owner;
    constructor() {
        owner = msg.sender;
    }       
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

   uint256 public moffitFloor1;
   uint256 public moffitFloor3; 
   uint256 public moffitFloor4;
   uint256 public moffitFloor5;
   uint256 public doeLibrary;
   uint256 public mainStacks;
   uint256 public haasLibrary;

   function setMoffitFloor1(uint256 _moffitFloor1) external {
    require(_moffitFloor1 <= 5, "Scale should be 1-5");
    moffitFloor1 = _moffitFloor1;
   }

   function setMoffitFloor3(uint256 _moffitFloor3) external {
    require(_moffitFloor3 <= 5, "Scale should be 1-5");
    moffitFloor3 = _moffitFloor3;
   }        

   function setMoffitFloor4(uint256 _moffitFloor4) external {
    require(_moffitFloor4 <= 5, "Scale should be 1-5");
    moffitFloor4 = _moffitFloor4;
   }    

   function setMoffitFloor5(uint256 _moffitFloor5) external {
    require(_moffitFloor5 <= 5, "Scale should be 1-5");
    moffitFloor5 = _moffitFloor5;
   }    

   function setDoeLibrary(uint256 _doeLibrary) external {
    require(_doeLibrary <= 5, "Scale should be 1-5");
    doeLibrary = _doeLibrary;
   }    

   function setMainStacks(uint256 _mainStacks) external {
    require(_mainStacks <= 5, "Scale should be 1-5");
    mainStacks = _mainStacks;
   }    

   function setHaasLibrary(uint256 _haasLibrary) external {
    require(_haasLibrary <= 5, "Scale should be 1-5");
    haasLibrary = _haasLibrary;
   }        
}

