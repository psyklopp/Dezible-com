---
title: "What is XAI"
date: 2025-02-25T19:34:24+02:00
draft: false
weight: 1
---


IBM[^1] has a nice definition:
{{% notice style="accent" %}}
Explainable artificial intelligence (XAI) is a set of processes and methods that allows human users to comprehend and trust the results and output created by machine learning algorithms.
{{% /notice %}}


[^1]: [What is Explainable AI?](https://www.ibm.com/think/topics/explainable-ai)

But why do we need it?

The sophistication of AI-powered systems have increased exponentially in the last decade. And yet, you can (almost) design and deploy whole AI models without any human intervention.

I came across the [experiment I shared on home page](/) when I was reading an article titled:

 [*Why Are We Using Black Box Models in AI When We Don’t Need To? A Lesson From an Explainable AI Competition*](https://hdsr.mitpress.mit.edu/pub/f9kuryi8/release/8)

We are employing Machine Learning (ML) in more critical areas than ever. Hence it is natural to demand transparency in the decision-making process inside such models.

The article above argues that it makes more sense to shift our focus to **creating and working on** interpretable models rather than **explaining** black-box algorithms.

{{% notice style="accent" %}}
More accurate models does not have to mean less interpretability/transparency.
{{% /notice %}}

I fully agree with the above statement but it is also true that convoluted models based on Deep Learning (DL) or Neural Networks (NN) methods have seen more success in applications which deal with higher dimensional data (think of images). 

> A mathematical folklore by the name of ['No free lunch' (NFL) theorem](https://en.wikipedia.org/wiki/No_free_lunch_theorem) says (roughly), "*No one model works best for all possible situations.*"

So while we work on developing inherently explainable models, we also focus on XAI for existing (complicated) models.

 
