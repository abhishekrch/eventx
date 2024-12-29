// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "forge-std/Script.sol";
import "../src/Eventx.sol"; 

contract DeployEventX is Script {
    function run() external {
        
        address deployer = vm.addr(vm.envUint("PRIVATE_KEY"));
        string memory NAME = "EventX";
        string memory SYMBOL = "EX";

        vm.startBroadcast(deployer);
        EventX eventX = new EventX(NAME, SYMBOL);
        vm.stopBroadcast();

        console.log("Deployed EventX Contract at:", address(eventX));

        // Events
        EventX.Occasion[] memory occasions = new EventX.Occasion[](5);
        occasions[0] = EventX.Occasion({
            id: 1, 
            name: "UFC Miami",
            cost: 3 ether,
            tickets: 0,
            maxTickets: 1000, 
            date: "May 31",
            time: "6:00PM EST",
            location: "Miami-Dade Arena - Miami, FL"
        });
        occasions[1] = EventX.Occasion({
            id: 2, 
            name: "ETH Tokyo",
            cost: 1 ether,
            tickets: 125,
            maxTickets: 500,
            date: "Jun 2",
            time: "1:00PM JST",
            location: "Tokyo, Japan"
        });
        occasions[2] = EventX.Occasion({
            id: 3, 
            name: "ETH Privacy Hackathon",
            cost: 0.25 ether,
            tickets: 200,
            maxTickets: 300, 
            date: "Jun 9",
            time: "10:00AM TRT",
            location: "Turkey, Istanbul"
        });
        occasions[3] = EventX.Occasion({
            id: 4, 
            name: "Dallas Mavericks vs. San Antonio Spurs",
            cost: 5 ether,
            tickets: 0,
            maxTickets: 1500, 
            date: "Jun 11",
            time: "2:30PM CST",
            location: "American Airlines Center - Dallas, TX"
        });
        occasions[4] = EventX.Occasion({
            id: 5, 
            name: "ETH Global Toronto",
            cost: 1.5 ether,
            tickets: 125,
            maxTickets: 1000, 
            date: "Jun 23",
            time: "11:00AM EST",
            location: "Toronto, Canada"
        });

        for (uint i = 0; i < occasions.length; i++) {
            vm.startBroadcast(deployer);
            eventX.list(
                occasions[i].name,
                occasions[i].cost,
                occasions[i].tickets,
                occasions[i].date,
                occasions[i].time,
                occasions[i].location
            );
            vm.stopBroadcast();

            console.log("Listed Event %s: %s", i + 1, occasions[i].name);
        }
    }
}