# ArtNet LED Controller

## Overview

Low-cost PCB solution for driving large parallel installations of LED strips via ArtNet over Ethernet. Based on the WT32-ETH01 module and designed to run WLED firmware, providing professional lighting control at a fraction of commercial controller costs.
## My Role

Complete hardware design including schematic design, PCB layout, component selection, and prototyping. Designed to support WLED without any firmware modifications.
## Key Features

- **4-channel output:** Controls up to 4 independent LED strips
- **ArtNet protocol:** Industry-standard lighting control over Ethernet
- **Cost-effective:** ~$25 per controller vs $100+ commercial alternatives
- **WLED compatible:** Runs popular open-source LED control firmware
- **Ethernet connectivity:** Reliable wired network connection via WT32-ETH01
## Tech Stack

**Hardware:** WT32-ETH01 (ESP32 + Ethernet), custom PCB design
**Software:** WLED firmware
**Protocols:** ArtNet, sACN/E1.31
**Tools:** EasyEDA (PCB design)
**Power:** 5V LED strip support with proper level shifting
## Results

- **Cost reduction:** 75% cheaper than commercial ArtNet controllers
- **Performance:** Handles over 1000 total LEDs
- **Compatibility:** Tested with major lighting consoles (MA, Chamsys, etc.)
- **Production ready:** PCB design optimized for small-batch manufacturing
- **Community adoption:** Design shared with lighting community
## Status

Complete design | PCBs manufactured and tested
