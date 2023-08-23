// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.9;

interface IHopRouter {
    function sendToL2(
        uint256 chainId,
        address recipient,
        uint256 amount,
        uint256 amountOutMin,
        uint256 deadline,
        address relayer,
        uint256 relayerFee
    ) external payable;
}

contract Bridge {
    IHopRouter public hopRouter;

    constructor(address _hopRouter) {
        hopRouter = IHopRouter(_hopRouter);
    }

    receive() external payable {
        uint256 chainId = 420;
        address recipient = msg.sender;
        uint256 amount = msg.value;
        uint256 amountOutMin = 0;
        uint256 deadline = block.timestamp + 3600;
        address relayer = address(0);
        uint256 relayerFee = 0;

        hopRouter.sendToL2{value: amount}(
            chainId,
            recipient,
            amount,
            amountOutMin,
            deadline,
            relayer,
            relayerFee
        );
    }
}
