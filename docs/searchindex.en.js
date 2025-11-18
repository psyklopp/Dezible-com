var relearn_searchindex = [
  {
    "breadcrumb": "",
    "content": "msticpy is a set of Python tools intended to be used for security investigations and hunting.\nI aim to extend it and use with other open-source software (OSS) and data sources.\nInstallation Details Work in progress.",
    "description": "msticpy is a set of Python tools intended to be used for security investigations and hunting.\nI aim to extend it and use with other open-source software (OSS) and data sources.\nInstallation Details Work in progress.",
    "tags": [],
    "title": "Getting started",
    "uri": "/getting-started/"
  },
  {
    "breadcrumb": "Getting started",
    "content": "According to the documentation, we need Python 3.8",
    "description": "According to the documentation, we need Python 3.8",
    "tags": [],
    "title": "Installation",
    "uri": "/getting-started/installation/"
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
    "content": "Hello! My name is Aditya Bhardwaj.\nDezible is a project where I build a SIEM from scratch.\nWhat is a SIEM you might ask. The following is a nice definition1.\nDetails Security Information and Event Management (SIEM) is an essential tool that collects, stores, and performs log management and analyzes extensive volumes of log data from across an organization’s network, generating security alerts when needed.\nEvery SIEM does five fundamental things:\nData collection and Normalization Storage and Indexing Detection and Analysis Response and Orchestration Intelligence and Visualization With the above tools/capabilities, security teams can assess, triage and respond to security events.\nI do not want to re-invent the wheel, but rather have insights into the components that make up SIEM.\nLLMs and AI agents will be useful in extending capabilities of such a SIEM, though the first goal is to work out the basics.\nDetails Dezible is work in progress.\nFrom scratch? Actually.. not from scratch.\nThe 5 fundamental components of any SIEM would remain the same (as listed above), but I will use MSTICPy as the starting point.\nMSTIC or Microsoft Threat Intelligence Center, created this library to query log data, enrich and then anlayze the same. By using a Jupyter notebook, users can re-use functionalities in security investigation and hunting.\nHence, I will shamelessly copy the documentation structure of MSTICPy, follow and improve upon the same.\nConnect with me here: LinkedIn and Google scholar\nhttps://www.sekoia.io/en/glossary/what-is-a-security-information-event-and-management/ ↩︎",
    "description": "Hello! My name is Aditya Bhardwaj.\nDezible is a project where I build a SIEM from scratch.\nWhat is a SIEM you might ask. The following is a nice definition1.\nDetails Security Information and Event Management (SIEM) is an essential tool that collects, stores, and performs log management and analyzes extensive volumes of log data from across an organization’s network, generating security alerts when needed.",
    "tags": [],
    "title": "Dezible",
    "uri": "/"
  },
  {
    "breadcrumb": "",
    "content": "This question was asked on Reddit:\nDetails As a SOC analyst, how do you effectively correlate data from multiple sources? It seems like too much manual work.\nThe person goes on and explains the challenge with an example scenario of malware infection where one has to gather data such as: details about the endpoint, roles/permission of the user, Indicators of Compromise (IoCs) among other things.\nYou can see the full post on the Reddit board - r/cybersecurity.\nWhile the original poster seems to mix the concept of enrichment and correlation, an observation can be made after going through the post as well as the answers:\nIf we understand the underlying data and have a common-unified model for this data, our job becomes easier.\nAnd of course, industry tools like Splunk address this with CIM (Common Information Model) - a schema that normalizes data from multiple vendors into consistent fields.\nCIM provides a unified model for mapping fields across data sources and logs. It means that while the raw data remains untouched, the user can search-browse-query data from different vendors using consistent and common information.\nThere might be other solutions like CIM that tackle the issue of standardized mapping, but I asked myself these questions:\nDetails Can we truly reason over these logs? What kind of theory would enable that? Are there underlying concepts in these events, that are yet to be uncovered or explained?\nThis is what I explore in this project - Dezible\nA unified data model tells us how to structure fields in the event logs but it doesn’t tell us what these events mean or how they fundamentally relate?\nPerhaps there is scope for building a model or framework that captures not just mappings, but the relationships between such events.\nand after that… Once we understand our data more, we need a platform-agnostic way of using it and conducting security investigations.\nSIEM tools are bloated and require quite some overhead. They are rigid, bloated and require maintaining the infrastructure to support them.\nHow can we reduce this overhead?\nCan we make better-reusable functionalities that analysts can share, use and learn from?\nMy name is Aditya Bhardwaj and am currently a PhD candidate at University of Twente - you can find me here LinkedIn profile",
    "description": "This question was asked on Reddit:\nDetails As a SOC analyst, how do you effectively correlate data from multiple sources? It seems like too much manual work.\nThe person goes on and explains the challenge with an example scenario of malware infection where one has to gather data such as: details about the endpoint, roles/permission of the user, Indicators of Compromise (IoCs) among other things.",
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
