import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Web3CXIModule = buildModule("Web3CXIModule", (m) => {

    const erc20 = m.contract("Web3CXI");

    return { erc20 };
});

export default Web3CXIModule;
//0x734B1987Eb1D7cDC631D890CBa456aa8c8A085Ff