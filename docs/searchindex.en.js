var relearn_searchindex = [
  {
    "breadcrumb": "",
    "content": "Logs provide a detailed, chronological record of events which is necessary to investigate security incidents.\nWithout data flowing in, there is nothing to look at!\nSecurity analysts make use of data from different sources - network traffic logs, host-based data (think of system logs) as well as threat intelligence to triage such security incidents.\nPCAP Understanding and analyzing packet-level evidence in pcap files.\nDetails Work in progress.",
    "description": "Logs provide a detailed, chronological record of events which is necessary to investigate security incidents.\nWithout data flowing in, there is nothing to look at!\nSecurity analysts make use of data from different sources - network traffic logs, host-based data (think of system logs) as well as threat intelligence to triage such security incidents.\nPCAP Understanding and analyzing packet-level evidence in pcap files.\nDetails Work in progress.",
    "tags": [],
    "title": "Data Ingestion",
    "uri": "/data-ingestion/"
  },
  {
    "breadcrumb": "Data Ingestion",
    "content": "Packet Capture or PCAP files record the raw data packets.\nWith the network activity stored in these files, we can investigate and anaylze traffic at the packet level. This helps in troubleshooting network issues besides investigating suspicious behaviour.\nIntroduction The first question that pops up in my mind is, what the hell does a pcap file even look like? So I will generate some of my own.\nLinux has a command-line utility called tcpdump.\nGot it! Let me draft sections 1-5 with that learning-together tone. I’ll keep the early sections concise and build up to the meatier Python stuff.\nCapturing and Analyzing Network Traffic: A Hands-On Journey with PCAP Files If you’re getting into cybersecurity or incident response, you’ll inevitably hear: “Check the packet capture.” But what does that actually mean? Let me walk you through what I learned about capturing and analyzing network traffic using PCAP files.\nWhat is a PCAP file and why should I care? PCAP stands for Packet Capture - it’s basically a recording of everything that happened on a network. Think of it like a black box recorder for network traffic.\nWhen I first heard about PCAPs, I wondered why they matter. Here’s the thing: when something suspicious happens on a network - maybe at 2 AM when no one’s supposed to be working - the PCAP file is your ground truth. It shows exactly what data moved where, who talked to whom, and what protocols were used.\nFor security work, PCAPs are essential for:\nIncident response - reconstructing what an attacker actually did Threat hunting - looking for suspicious patterns in normal traffic Forensics - having evidence of what occurred Understanding attacks - seeing how exploits work at the network level What tools do I need to capture network traffic? On Linux, you need just a few tools to get started:\ntcpdump - The command-line packet capture tool. It’s probably already on your system. This is what actually grabs the packets.\nWireshark - A GUI tool for visualizing packets. Great for when you want to see what’s happening. The command-line version is called tshark.\nPython + Scapy - For programmatic analysis (we’ll get to this).\nOne important thing I learned: you need elevated permissions to capture packets. Your user needs to either run with sudo or have the proper capabilities set. This makes sense - you’re intercepting all network traffic, which is sensitive.\n# Install what you need sudo apt-get install tcpdump wireshark python3-pip pip install scapy How do I capture my own traffic? Here’s where it got real for me. Let’s actually capture some packets.\nFirst, find your network interface:\nip link show # or ifconfig You’ll see something like eth0, wlan0, or enp0s3. That’s your interface.\nNow let’s capture some traffic:\nsudo tcpdump -i eth0 -w my_capture.pcap This starts capturing everything on eth0 and writes it to my_capture.pcap.\nGenerating interesting traffic: Open another terminal and do some normal internet things:\n# Make some DNS queries nslookup google.com # Browse a website curl http://example.com # Ping something ping -c 5 google.com After 30 seconds or so, stop tcpdump with Ctrl+C. Congratulations - you just captured your first PCAP!\nPro tip I learned: Use capture filters to avoid drowning in data:\n# Only capture HTTP traffic sudo tcpdump -i eth0 -w http_only.pcap 'port 80' # Capture traffic to/from a specific IP sudo tcpdump -i eth0 -w target.pcap 'host 8.8.8.8' Dataset Tools like Wireshark and tcpdump allow us to intercept data from a network interface, which is then stored as pcap files. Since, generating real-world-like network traffic (on our own) is not trivial, there are free, publicly available capture files which I will use: Netresec 1\nDetails Work in progress.\nhttps://www.netresec.com/?page=PcapFiles ↩︎",
    "description": "Packet Capture or PCAP files record the raw data packets.\nWith the network activity stored in these files, we can investigate and anaylze traffic at the packet level. This helps in troubleshooting network issues besides investigating suspicious behaviour.\nIntroduction The first question that pops up in my mind is, what the hell does a pcap file even look like? So I will generate some of my own.\nLinux has a command-line utility called tcpdump.",
    "tags": [],
    "title": "PCAP",
    "uri": "/data-ingestion/pcap/"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/"
  },
  {
    "breadcrumb": "",
    "content": "Hello! My name is Aditya Bhardwaj.\nDezible is a project where I build a SIEM from scratch.\nWhat is a SIEM you might ask. The following is a nice definition1.\nDetails Security Information and Event Management (SIEM) is an essential tool that collects, stores, and performs log management and analyzes extensive volumes of log data from across an organization’s network, generating security alerts when needed.\nEvery SIEM does five fundamental things:\nData collection and Normalization Storage and Indexing Detection and Analysis Response and Orchestration Intelligence and Visualization With the above tools/capabilities, security teams can assess, triage and respond to security events.\nI do not want to re-invent the wheel, but rather have insights into the components that make up SIEM.\nLLMs and AI agents will be useful in extending capabilities of such a SIEM, though the first goal is to work out the basics.\nDetails Dezible is work in progress.\nFound it interesting? Connect with me here: LinkedIn and Google scholar\nhttps://www.sekoia.io/en/glossary/what-is-a-security-information-event-and-management/ ↩︎",
    "description": "Hello! My name is Aditya Bhardwaj.\nDezible is a project where I build a SIEM from scratch.\nWhat is a SIEM you might ask. The following is a nice definition1.\nDetails Security Information and Event Management (SIEM) is an essential tool that collects, stores, and performs log management and analyzes extensive volumes of log data from across an organization’s network, generating security alerts when needed.",
    "tags": [],
    "title": "Dezible",
    "uri": "/"
  },
  {
    "breadcrumb": "",
    "content": "My name is Aditya Bhardwaj and am currently a PhD candidate at University of Twente - you can find me here through LinkedIn profile\nAs the area of AI progresses, a number of people are sharing tutorials (about agents, LLMs and whatnot). Often times, these are singular projects which end up with others in project graveyard.\nI want to change that.\nMy aim is to stick to some projects and build them incrementally. This way, I get to learn and apply new concepts.\nDetails 💡 It’s like writing a simple hello world program and gradually adding helpful/advanced features.\nIn this regard, I also like to share Gall’s law. Though the following statement might not be stated verbatim by the author in his work, I fully agree with the idea that…\nA complex system that works is invariably found to have evolved from a simple system that worked. A complex system designed from scratch never works and cannot be patched up to make it work. You have to start over with a working simple system.\nTaking inspiration from these words, I plan to start simple in every project.\nAnd then improve them. Let’s go!",
    "description": "My name is Aditya Bhardwaj and am currently a PhD candidate at University of Twente - you can find me here through LinkedIn profile\nAs the area of AI progresses, a number of people are sharing tutorials (about agents, LLMs and whatnot). Often times, these are singular projects which end up with others in project graveyard.\nI want to change that.\nMy aim is to stick to some projects and build them incrementally. This way, I get to learn and apply new concepts.",
    "tags": [],
    "title": "Motivation",
    "uri": "/motivation/"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/"
  }
]
