+++
archetype = "default"
title = "Motivation"
linkTitle = "Motivation"
draft = false
+++

This question was asked on Reddit:

{{% notice style="accent" %}}
As a SOC analyst, how do you effectively correlate data from multiple sources? It seems like too much manual work.
{{% /notice %}}

The person goes on and explains the challenge with an example scenario of malware infection where one has to gather data such as: details about the endpoint, roles/permission of the user, Indicators of Compromise (IoCs) among other things.

You can see the [full post](https://www.reddit.com/r/cybersecurity/comments/1d09tpe/as_a_soc_analyst_how_do_you_effectively_correlate/) on the Reddit board -[ r/cybersecurity](https://www.reddit.com/r/cybersecurity/). 

While the original poster seems to mix the concept of enrichment and correlation, an observation can be made after going through the post as well as the answers: 

> If we understand the underlying data and have a common-unified model for this data, our job becomes easier.

And of course, industry tools like Splunk address this with [CIM (Common Information Model)](https://help.splunk.com/en/data-management/common-information-model/6.2/introduction/overview-of-the-splunk-common-information-model) - a schema that normalizes data from multiple vendors into consistent fields.

CIM provides a unified model for mapping fields across data sources and logs. It means that while the raw data remains untouched, the user can search-browse-query data from different vendors using consistent and common information. 

There might be other solutions like CIM that tackle the issue of standardized mapping, but I asked myself these questions:    

{{% notice style="accent" %}}
Can we truly `reason` over these logs? What kind of theory would enable that? Are there underlying concepts in these events, that are yet to be uncovered or explained?
{{% /notice %}}

This is what I explore in this project - Dezible

A unified data model tells us *how* to structure fields in the event logs but it doesn't tell us *what* these events mean or *how they fundamentally relate*?

Perhaps there is scope for building a model or framework that captures not just mappings, but the relationships between such events.

### and after that...

Once we understand our data more, we need a platform-agnostic way of using it and conducting security investigations. 

SIEM tools are bloated and require quite some overhead. They are rigid, bloated and require maintaining the infrastructure to support them.

How can we reduce this overhead?

Can we make better-reusable functionalities that analysts can share, use and learn from?

---

My name is Aditya Bhardwaj and am currently a PhD candidate at University of Twente - you can find me here [LinkedIn profile](https://www.linkedin.com/in/ab4dev/)

