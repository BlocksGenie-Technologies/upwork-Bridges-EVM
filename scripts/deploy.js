const hre = require("hardhat");

async function main() {
  const bridgeAddress = "0xb8901acB165ed027E32754E0FFe830802919727f";

  const ArbitrumBridge = await hre.ethers.getContractFactory("BridgeETHToArbitrumETH");
  const BaseBridge = await hre.ethers.getContractFactory("BridgeETHToBaseETH");
  const OptimismBridge = await hre.ethers.getContractFactory("BridgeETHToOptimismETH");
  const PolygonBridge = await hre.ethers.getContractFactory("BridgeETHToPolygonETH");

  const arbitrumBridge = await ArbitrumBridge.deploy(bridgeAddress);
  const baseBridge = await BaseBridge.deploy(bridgeAddress);
  const optimismBridge = await OptimismBridge.deploy(bridgeAddress);
  const polygonBridge = await PolygonBridge.deploy(bridgeAddress);


  console.log(`ArbitrumBridge Contract deployed to:", ${arbitrumBridge.address},
              BaseBridge Contract deployed to:", ${baseBridge.address},
              OptimismBridge Contract deployed to:", ${optimismBridge.address},
              PolygonBridge Contract deployed to:", ${polygonBridge.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
