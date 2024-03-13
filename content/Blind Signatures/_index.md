+++
archetype = "chapter"
title = "Blind Signatures"
weight = 3
+++

Blind signatures are an extension of digital signatures, which allows a user to obtain a signature on a message without revealing the contents of the message to the signer.

A good analogy to blind signatures is anonymous voting. A voter who wants to cast a valid vote in an envelope, wants a signature from the official election authority. The officials can verify the credentials of the voters and sign the envelope containing the vote, without learning the contents. This ensures the integrity of the vote, and authorities learn nothing about the voters' selection. 

The idea of blind signatures was introduced by David Chaum in his paper [^1] which was based on the RSA signature scheme.

[^1]: D. L. Chaum, Blind Signatures for Untraceable Payments, Jan. 1983, doi: 10.1007/978-1-4757-0602-4_18, https://bitcoin-class.org/readings/Chaum-blind-signatures.PDF

