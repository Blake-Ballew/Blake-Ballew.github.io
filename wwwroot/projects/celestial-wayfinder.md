# Celestial Wayfinder

## Overview

ESP32-based mesh communication device for areas with poor/no cellular coverage. Combines LoRa radio, GPS, and compass functionality for location-aware messaging.
## My Role

Wrote all firmware for device along with desktop companion application. See *esp32 utilities* for more information on the software that powers this device.
## Key Features

- Send location-tagged messages to your friends.
- Devices form a mesh network with a none-to-node range of ~1000m.
- A ring of LEDs acts as the compass display.
- An SOS button for continuously broadcasting location.
- A flashlight.
- A desktop application allows you to configure:
	- User information
	- Preset messages
	- Saved locations
## Tech Stack

**Firmware:** C++ (ESP32, PlatformIO) 
**Desktop App:** .NET Core (AvaloniaUI) 
**Hardware:** Custom ESP32 PCB 
**Communication:** LoRa mesh networking
## Results

- **Deployed:** 40+ devices in field testing
- **Range:** 2km+ via mesh networking (1km node-to-node) 
- **Accuracy:** GPS positioning within 3 meters 
- **Battery:** 24+ hour operation  
## Status

Software and hardware development ongoing.