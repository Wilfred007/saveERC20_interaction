import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x734B1987Eb1D7cDC631D890CBa456aa8c8A085Ff";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0xD410219f5C87247d3F109695275A70Da7805f1b1
