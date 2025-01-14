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
            name: "Papa Yaar by Zakir Khan",
            cost: 3 ether,
            tickets: 150,
            maxTickets: 1000, 
            date: "Jan 2",
            time: "6:00PM IST",
            location: "RUDRAKSH - International Cooperation - Varanasi, India"
        });
        occasions[1] = EventX.Occasion({
            id: 2, 
            name: "Kal Ki Chinta Nahi Karta ft. Ravi Gupta",
            cost: 1 ether,
            tickets: 200,
            maxTickets: 500,
            date: "July 2",
            time: "1:00PM IST",
            location: "Gomti Nagar Stadium - Lucknow, India"
        });
        occasions[2] = EventX.Occasion({
            id: 3, 
            name: "Samay Raina Unfiltered - India Tour",
            cost: 0.25 ether,
            tickets: 0,
            maxTickets: 300, 
            date: "Aug 9",
            time: "10:00AM IST",
            location: "Sardar Vallabhbhai Patel Stadium - Ahmedabad, India"
        });
        occasions[3] = EventX.Occasion({
            id: 4, 
            name: "Dil-Luminati Tour",
            cost: 5 ether,
            tickets: 0,
            maxTickets: 1500, 
            date: "Jun 11",
            time: "2:30PM IST",
            location: "Indira Gandhi Arena - New Delhi, India"
        });
        occasions[4] = EventX.Occasion({
            id: 5, 
            name: "Millionaire India Tour",
            cost: 1.5 ether,
            tickets: 180,
            maxTickets: 1000, 
            date: "Jun 23",
            time: "11:00AM IST",
            location: "NSCI Dome - Mumbai, India"
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