+++
archetype = "home"
title = "Dezible"
+++

Hello! My name is Aditya Bhardwaj.

Dezible is a project where I build a ```SIEM``` from scratch.

What is a SIEM you might ask. The following is a nice definition[^1].

{{% notice style="accent" %}}
Security Information and Event Management (SIEM) is an essential tool that collects, stores, and performs log management and analyzes extensive volumes of log data from across an organization's network, generating security alerts when needed.
{{% /notice %}}

Every SIEM does five fundamental things:

- Data collection and Normalization
- Storage and Indexing
- Detection and Analysis
- Response and Orchestration
- Intelligence and Visualization

With the above tools/capabilities, security teams can assess, triage and respond to security events.

I do not want to re-invent the wheel, but rather have insights into the components that make up SIEM.

LLMs and AI agents will be useful in extending capabilities of such a SIEM, though the first goal is to work out the basics.

{{% notice style="default" %}}
Dezible is work in progress.
{{% /notice %}}

[^1]: https://www.sekoia.io/en/glossary/what-is-a-security-information-event-and-management/

#### From scratch?

Actually.. not from scratch.

The 5 fundamental components of any SIEM would remain the same (as listed above), but I will use [MSTICPy](https://msticpy.readthedocs.io/en/latest/index.html) as the starting point.

MSTIC or Microsoft Threat Intelligence Center, created this library to query log data, enrich and then anlayze the same. By using a Jupyter notebook, users can re-use functionalities in security investigation and hunting.

Hence, I will shamelessly copy the documentation structure of `MSTICPy`, follow and improve upon the same.

---

Connect with me here: [LinkedIn](https://www.linkedin.com/in/ab4dev/) and [Google scholar](https://scholar.google.com/citations?user=GnGK9eIAAAAJ&hl=en)