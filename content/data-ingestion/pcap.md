+++
archetype = "default"
title = "PCAP"
linkTitle = "PCAP - Packet Capture"
weight = 1
draft = false

+++

If you're getting into cybersecurity or incident response, you'll inevitably hear: "Check the packet capture." But what does that actually mean? 

Packet Capture or **PCAP** files record the raw data packets.

With the network activity stored in these files, we can investigate and anaylze traffic at the packet level. This helps in troubleshooting network issues besides investigating suspicious behaviour.

## What is a PCAP file?
    
Packet Capture or simply `PCAP` is basically a recording of everything that happened on a network. Think of it like a black box recorder for network traffic.

It acts like your ground truth. It shows exactly what data moved where, who talked to whom, and what protocols were used.

For security work, PCAPs are essential for:
- **Incident response** - reconstructing what an attacker actually did
- **Threat hunting** - looking for suspicious patterns in normal traffic
- **Forensics** - having evidence of what occurred
- **Understanding attacks** - seeing how exploits work at the network level

## How to capture network traffic?

On Linux, you will need just a few tools to get started:

**tcpdump** - The command-line packet capture tool. It's probably already on your system. This is what actually grabs the packets.

**Wireshark** - A GUI tool for visualizing packets, because `tcpdump` doesn't have any GUI. There is also command-line version which is called `tshark`.

**Python + Scapy** - For programmatic analysis (we'll get to this).

We need elevated permissions to capture packets, which is understandable. Intercepting network traffic is sensitive, hence you need to either run with `sudo` or have the proper capabilities set.

```bash
# Install what you need
# sudo apt-get install tcpdump wireshark python3-pip

pip install scapy
```

## How do I capture my own traffic?

First, let's find our network interface:
```bash
ip link show
# or
ifconfig
```

We will see something like `eth0`, `wlan0`, or `enp0s3`. That's the interface.

Now let's capture some traffic:
```bash
sudo tcpdump -i enp0s3 -w my_capture.pcap

# -i specifies the interface
# -w specifies the file to write (pcap data) to
```

This starts capturing everything on `enp0s3` and writes it to `my_capture.pcap`. 

**Generating interesting traffic:**
Open another terminal and do some normal internet things:
```bash
# Make some DNS queries
nslookup google.com

# Browse a website
curl http://google.com

# Ping something
ping -c 5 google.com
```

After 30 seconds or so, stop tcpdump with `Ctrl+C`. And just like this, we captured our first PCAP!

**Tip** We can make use of filters to avoid capturing everything:
```bash
# Only capture HTTP traffic
sudo tcpdump -i enp0s3 -w http_only.pcap 'port 80'

# Capture traffic to/from a specific IP
sudo tcpdump -i enp0s3 -w target.pcap 'host 8.8.8.8'
```

{{% notice style="default" %}}
Work in progress. Will continue generating and analyzing more PCAP data!
{{% /notice %}}

## Dataset

Tools like Wireshark and tcpdump allow us to intercept data from a network interface, which is then stored as `pcap` files. Since, generating real-world-like network traffic (on our own) is not trivial, there are free, publicly available capture files which I will use: [Netresec](https://www.netresec.com/?page=PcapFiles) [^1]

[^1]: https://www.netresec.com/?page=PcapFiles

