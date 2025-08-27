# ESP32 Utilities

## Overview

C++ library that simplifies ESP32 development by providing high-level components for common embedded tasks. Eliminates boilerplate code so developers can focus on application logic rather than low-level hardware details.
## My Role 

Sole developer and architect. Designed the modular architecture, implemented all modules, and created the MessagePack-based communication protocol used throughout the system.
## Tech Stack

**Language:** C++ (ESP32)
**Platform:** PlatformIO, FreeRTOS
**Protocols:** MessagePack, LoRa, WiFi, UART, TCP/IP
**Hardware:** ESP32, SSD1306 displays, LoRa radios, GPS modules
## Modules

### System Module

Provides registration of FreeRTOS primitives (queues, semaphores, tasks, and timers) to allow other modules to utilize them in a structured way.
### RpcModule

Provides MessagePack-based RPC system for device communication over TCP/IP, UART, or HTTP.
### Display Module

Provides interactive UI framework for SSD1306 OLED displays.
### Filesystem Module

Provides MessagePack-based file I/O interface for the SPIFFS filesystem.
### LED Module

Allows registration and execution of static and dynamic LED patterns.
### LoRa Module

Provides LoRa radio interface with custom mesh networking protocol using MessagePack encoding.
### Navigation Module

Provides utilities for navigation with a GPS and compass module.
### ConnectivityModule

Provides unified network interface and WiFi radio management.