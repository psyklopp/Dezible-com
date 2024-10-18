---
title: "Security Concepts"
date: 2024-06-13T19:34:24+02:00
draft: false
weight: 1
---

## Definition and Terms

{{% notice color="green" title="**1.  What is cybersecurity ?**" expanded="false" %}}

Cybersecurity refers to any technologies, practices and policies for preventing cyberattacks or mitigating their impact. The aim is to protect computer systems, applications, devices, data, financial assets and people against cyberthreats. [^ibm]

[^ibm]: IBM Topics in cybersecurity - [https://www.ibm.com/topics/cybersecurity](https://www.ibm.com/topics/cybersecurity) 

{{% /notice %}}

{{% notice color="blue" title="**2.  Cybersecurity is very broad indeed. Are there any frameworks or standard guidelines ?**" %}}

NIST is the National Institute of Standards and Technology at the U.S. Department of Commerce. NIST Cybersecurity Framework (CSF) offers a taxonomy of highlevel cybersecurity outcomes that can be used by any organization — regardless of its size, sector, or maturity — to better understand, assess, prioritize, and communicate its cybersecurity efforts. [^csf]. 

Note: CSF is a recommendation and the framework is voluntary.

[^csf]: NIST Cybersecurity Framework (CSF) - [https://www.nist.gov/cyberframework](https://www.nist.gov/cyberframework)

{{% expand title="Resources" %}}

You can put the NIST Cybersecurity Framework to work in your business in these five areas: **Identify, Protect, Detect, Respond, and Recover**.

- See [how would you implement this](https://csrc.nist.gov/projects/cybersecurity-framework/filters#/csf/filters) for your company.
- [Other publications](https://csrc.nist.gov/publications/) by NIST.

:black_nib: Mention other frameworks for eg. ISO/IEC 27000. 

{{% /expand %}}

{{% /notice %}}

{{% notice color="green" title="**3.  What is a Threat ?**" expanded="false" %}}

Threat refers to the **danger** to an asset. Assets being anything and everything of value to you. For eg. private data, servers, application, app. Examples of threat - data breach, malware infection, targeted cyber attacks, DDoS attacks.

:crystal_ball: Natural disasters also counts. Imagine if a tornado flew away your house along with the USB drive containing your BTC.


{{% /notice %}}

{{% notice color="green" title="**4.  What is a Vulnerability ?**" expanded="false" %}}

Vulnerability refers to the **weakness** in an asset. For eg. a weak password on your laptop presents a vulnerability which can potentially be exploited by a threat.

:black_nib: How do you track and identify vulnerabilities in cybersecurity?

{{% /notice %}}

{{% notice color="green" title="**5.  What is a Risk ?**" expanded="false" %}}

Risk is the **chance/possibility/potential** for a loss when a threat occurs. It is often described by the equation[^splunk]:  

`Vulnerability x Threat = Risk` 

:black_nib: Use scenarios to explain risks in cybersecurity.

[^splunk]: Splunk - [Vulnerabilities, Threats & Risk Explained](https://www.splunk.com/en_us/blog/learn/vulnerability-vs-threat-vs-risk.html)

{{% /notice %}}


{{% notice color="green" title="**6.  What is an Exploit ?**" expanded="false" %}}

'To exploit' means to take advantage. Given a vulnerability, an attacker will use a method (code,technique,steps) to take advantage of such weakness. Such malicious methods are called exploits.

Once the security flaw is *exploited*, the attacker might gain access to your data, system or server. At this point, maintaining access and installing other bad stuff (think of malwares, key-loggers) becomes a priority.

Recommended read: [Sentinel One - What is an exploit in cybersecurity?](https://www.sentinelone.com/cybersecurity-101/threat-intelligence/what-is-an-exploit/)

:black_nib: Examples of exploit. What is a zero-day (0day) exploit?

{{% /notice %}}
