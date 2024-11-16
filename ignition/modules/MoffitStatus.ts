import {buildModule} from "@nomicfoundation/hardhat-ignition/modules"

export const MoffitStatus = buildModule("MoffitStatus", (m) => {
  const moffitstatus = m.contract("MoffitStatus", [])
  return {moffitstatus}
});

export default MoffitStatus;