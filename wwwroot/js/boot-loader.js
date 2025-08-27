// Linux Boot Log Loader for Blake's Portfolio
// Simulates a Linux boot sequence while Blazor loads

(function() {
    const bootMessages = [
        '[    0.000000] Linux version 6.1.0-archive (blake@dev) (gcc version 12.2.0) #1 SMP',
        '[    0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz root=/dev/sda1 quiet',
        '[    0.000000] KERNEL supported cpus:',
        '[    0.000000]   Intel GenuineIntel',
        '[    0.000000]   AMD AuthenticAMD',
        '[    0.001000] x86/fpu: Supporting XSAVE feature 0x001: \'x87 floating point registers\'',
        '[    0.001000] x86/fpu: Supporting XSAVE feature 0x002: \'SSE registers\'',
        '[    0.001000] x86/fpu: Supporting XSAVE feature 0x004: \'AVX registers\'',
        '[    0.002000] BIOS-provided physical RAM map:',
        '[    0.002000] BIOS-e820: [mem 0x0000000000000000-0x000000000009fbff] usable',
        '[    0.002000] BIOS-e820: [mem 0x000000000009fc00-0x000000000009ffff] reserved',
        '[    0.003000] Memory: 16384MB available',
        '[    0.004000] CPU: Physical Processor ID: 0',
        '[    0.004000] CPU: Processor Core ID: 0',
        '[    0.005000] mce: CPU supports 7 MCE banks',
        '[    0.006000] Last level iTLB entries: 4KB 1024, 2MB 1024, 4MB 512',
        '[    0.007000] Freeing SMP alternatives memory: 32K',
        '[    0.008000] smpboot: CPU0: Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz (family: 0x6)',
        '[    0.010000] Performance Events: PEBS fmt3+, Skylake events',
        '[    0.012000] rcu: Hierarchical SRCU implementation.',
        '[    0.015000] PCI: MMCONFIG for domain 0000 [bus 00-3f]',
        '[    0.016000] PCI: Using configuration type 1 for base access',
        '[    0.020000] ACPI: Added _OSI(Module Device)',
        '[    0.022000] ACPI: Added _OSI(Processor Device)',
        '[    0.025000] ACPI: Added _OSI(3.0 _SCP Extensions)',
        '[    0.030000] ACPI: 8 ACPI AML tables successfully acquired and loaded',
        '[    0.035000] ACPI: Interpreter enabled',
        '[    0.040000] ACPI: PM: (supports S0 S3 S4 S5)',
        '[    0.045000] ACPI: Using IOAPIC for interrupt routing',
        '[    0.050000] PCI: Using host bridge windows from ACPI',
        '[    0.055000] ACPI: PCI Root Bridge [PCI0] (domain 0000 [bus 00-3f])',
        '[    0.060000] pci_root PNP0A08:00: _OSC: OS supports [ExtendedConfig Segments MSI]',
        '[    0.065000] SCSI subsystem initialized',
        '[    0.070000] libata version 3.00 loaded.',
        '[    0.075000] PCI: Discovered peer bus 40',
        '[    0.080000] ACPI: PCI Interrupt Link [LNKA] (IRQs 3 4 5 6 10 11 12 14 15) *7',
        '[    0.085000] ACPI: PCI Interrupt Link [LNKB] (IRQs 3 4 5 6 10 11 12 14 15) *11',
        '[    0.090000] iommu: Default domain type: Translated',
        '[    0.095000] SCSI subsystem initialized',
        '[    0.100000] usbcore: registered new interface driver usbfs',
        '[    0.110000] PCI: Using ACPI for IRQ routing',
        '[    0.120000] NetLabel: Initializing',
        '[    0.130000] NetLabel: domain hash size = 128',
        '[    0.140000] NetLabel: protocols = UNLABELED CIPSOv4 CALIPSO',
        '[    0.150000] clocksource: Switched to clocksource tsc',
        '[    0.160000] VFS: Disk quotas dquot_6.6.0',
        '[    0.170000] VFS: Dquot-cache hash table entries: 512 (order 0, 4096 bytes)',
        '[    0.180000] pnp: PnP ACPI init',
        '[    0.190000] pnp: PnP ACPI: found 12 devices',
        '[    0.200000] clocksource: acpi_pm: mask: 0xffffff max_cycles: 0xffffff',
        '[    0.220000] NET: Registered protocol family 2',
        '[    0.240000] tcp_listen_portaddr_hash hash table entries: 4096',
        '[    0.260000] TCP established hash table entries: 65536',
        '[    0.280000] TCP bind hash table entries: 65536',
        '[    0.300000] TCP: Hash tables configured (established 65536 bind 65536)',
        '[    0.320000] NTFS driver 2.1.32 [Flags: R/O MODULE].',
        '[    0.340000] JFS: nTxBlock = 8192, nTxLock = 65536',
        '[    0.360000] SGI XFS with ACLs, security attributes, realtime, scrub, repair',
        '[    0.380000] ocfs2: Registered cluster interface o2cb',
        '[    0.400000] OCFS2 DLMFS 1.5.0',
        '[    0.420000] OCFS2 User DLM kernel interface loaded',
        '[    0.440000] OCFS2 Node Manager 1.5.0',
        '[    0.460000] OCFS2 DLM 1.5.0',
        '[    0.480000] OCFS2 DLMFS 1.5.0',
        '[    0.500000] JFS: nTxBlock = 8192, nTxLock = 65536',
        '[    0.520000] NET: Registered protocol family 1',
        '[    0.540000] NET: Registered protocol family 44',
        '[    0.560000] pci 0000:00:02.0: Video device with shadowed ROM at [mem 0x000c0000-0x000dffff]',
        '[    0.580000] PCI: CLS 64 bytes, default 64',
        '[    0.600000] Trying to unpack rootfs image as initramfs...',
        '[    0.650000] Freeing initrd memory: 15360K',
        '[    0.700000] PCI-DMA: Using software bounce buffering for IO (SWIOTLB)',
        '[    0.750000] software IO TLB: mapped [mem 0x7b5f8000-0x7f5f8000] (64MB)',
        '[    0.800000] check: Scanning for bad blocks (read-only test): ',
        '[    0.850000] Simple Boot Flag at 0x44 set to 0x1',
        '[    0.900000] Initializing portfolio subsystem...',
        '[    0.950000] Loading Blake Archive System...',
        '[    1.000000] Mounting /dev/portfolio...',
        '[    1.050000] Starting services:',
        '[    1.100000]   * Project indexer                                   [ OK ]',
        '[    1.150000]   * Skills compiler                                  [ OK ]',
        '[    1.200000]   * Contact mailer                                   [ OK ]',
        '[    1.250000]   * Terminal interface                               [ OK ]',
        '[    1.300000]   * Email.js integration                             [ OK ]',
        '[    1.350000]   * MudBlazor components                              [ OK ]',
        '[    1.400000]   * Blue theme loader                                [ OK ]',
        '[    1.450000] Archive system ready.',
        '',
        'Blake Archive Linux 6.1.0-archive terminal',
        '',
        'blake@archive login: blake',
        'Password: ********',
        '',
        'Last login: ' + new Date().toLocaleString(),
        '',
        'blake@archive:~$ cd /var/www/portfolio',
        'blake@archive:/var/www/portfolio$ ./start-application.sh',
        'Starting Blake\'s Portfolio Application...',
        'Loading terminal interface...',
        '████████████████████████████████████████ 100%',
        '',
        'Application ready. Welcome!'
    ];

    let currentLine = 0;
    let bootLog = document.getElementById('boot-log');
    let bootCursor = document.getElementById('boot-cursor');
    let bootComplete = false;

    function addBootLine() {
        if (currentLine >= bootMessages.length) {
            // Boot complete
            bootComplete = true;
            bootCursor.style.display = 'none';
            
            // Hide boot screen when Blazor is ready
            if (window.Blazor && window.Blazor.start) {
                setTimeout(() => {
                    document.getElementById('boot-screen').style.display = 'none';
                }, 500);
            }
            return;
        }

        const line = document.createElement('div');
        line.className = 'boot-line';
        line.textContent = bootMessages[currentLine];
        bootLog.appendChild(line);

        // Scroll to bottom
        bootLog.scrollTop = bootLog.scrollHeight;

        currentLine++;

        // Variable timing for faster boot sequence
        let delay = 1;
        if (bootMessages[currentLine - 1].includes('Starting services:')) {
            delay = 2;
        } else if (bootMessages[currentLine - 1].includes('[ OK ]')) {
            delay = 2;
        } else if (bootMessages[currentLine - 1].includes('Loading')) {
            delay = 5;
        } else if (bootMessages[currentLine - 1].includes('████')) {
            delay = 300; // Pause at progress bar
        }

        setTimeout(addBootLine, delay);
    }

    // Start boot sequence
    setTimeout(addBootLine, 5);

    // Monitor Blazor loading
    const originalStart = window.Blazor?.start;
    if (window.Blazor) {
        window.Blazor.start = function() {
            if (bootComplete) {
                document.getElementById('boot-screen').style.display = 'none';
            }
            if (originalStart) {
                return originalStart.apply(this, arguments);
            }
        };
    }

    // Fallback: hide boot screen after maximum time
    setTimeout(() => {
        if (document.getElementById('boot-screen')) {
            document.getElementById('boot-screen').style.display = 'none';
        }
    }, 15000);
})();