# Tesseract 3D Display

## Overview

Volumetric 3D display that creates floating holographic images using rotating LED strips arranged in a double-helix pattern. Builds on traditional POV (persistence of vision) displays by adding a third dimension, producing true 3D imagery with 320x160 pixel cylindrical resolution that can be viewed from any angle without special glasses.
## My Role

Lead firmware engineer responsible for the real-time control system across 160 synchronized ESP32-S3 microcontrollers. Key contributions:
- **Wireless command interface:** WiFi-based system to receive 3D draw commands from PC and distribute via one-way split SPI 
- **Ultra-fast LED driver:** Custom DMA driver using undocumented ESP32-S3 GDMA module, achieving 13-microsecond LED strip updates 
- **Real-time rendering:** Thread-safe draw command processing with zero-latency rendering pipeline (no mutex contention allowed) 
- **Distributed synchronization:** Coordinated 160 microcontrollers with different rotational offsets using once-per-rotation position awareness
## Key Features

- **Massive resolution:** 160 LED strips × 160 LEDs × 1131 angular positions = 28,953,600 virtual LEDs
- **High-speed rendering:** DMA driver capable of 60 FPS with 13-microsecond LED updates
- **Adaptive refresh rate:** Dynamically calculated based on real-time rotation timing
- **Distributed architecture:** 160 ESP32-S3 controllers working in perfect synchronization
- **360-degree viewing:** True volumetric display viewable from any angle
- **Wireless control:** Real-time 3D graphics streaming from PC over WiFi
- **Modified HUB75 driver:** Repurposed display library using ESP32-S3 LCD peripheral for LED strips
- **Microsecond precision:** Real-time coordination without timing drift across all controllers
## Tech Stack

**Hardware:** 
- 160× ESP32-S3 "GPU Shard" PCBs (LED strip controllers)
- 2× ESP32-S3 "Motherboard" PCBs (SPI distribution)
- 1× ESP32-C6 WiFi Bridge (PC interface)
- Custom rotating mechanical assembly with power delivered via slip ring

**Firmware:** C++ (PlatformIO)
**Communication:** UDP (WiFi), SPI (command distribution), LCD DMA (LED control)
**Tools:** PlatformIO, KiCad (PCB design)
## Status

Active development | Firmware validated, hardware prototyping next


