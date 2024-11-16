import {expect} from "chai"
const { ethers } = require("hardhat");

describe("MoffitStatus", function () {
  let MoffitStatus, moffitStatus: any;

  beforeEach(async () => {
    MoffitStatus = await ethers.getContractFactory("MoffitStatus");
    moffitStatus = await MoffitStatus.deploy();
  });


 it("should set moffit floor 1", async () => {
  await moffitStatus.setMoffitFloor1(1);
    expect(await moffitStatus.moffitFloor1()).to.equal(1);
  });

  it("should set moffit floor 3", async () => {
    await moffitStatus.setMoffitFloor3(2);
    expect(await moffitStatus.moffitFloor3()).to.equal(2);
  });       

  it("should set moffit floor 4", async () => {
    await moffitStatus.setMoffitFloor4(3);
    expect(await moffitStatus.moffitFloor4()).to.equal(3);
  });

  it("should set moffit floor 5", async () => {
    await moffitStatus.setMoffitFloor5(4);
    expect(await moffitStatus.moffitFloor5()).to.equal(4);
  });

  it("should set doe library", async () => {
    await moffitStatus.setDoeLibrary(5);
    expect(await moffitStatus.doeLibrary()).to.equal(5);
  });

  it("should set main stacks", async () => {
    await moffitStatus.setMainStacks(5);
    expect(await moffitStatus.mainStacks()).to.equal(5);
  });

  it("should set haas library", async () => {
    await moffitStatus.setHaasLibrary(5);
    expect(await moffitStatus.haasLibrary()).to.equal(5);
  });
}); 
