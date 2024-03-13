+++
archetype = "chapter"
title = "Digital Signatures"
weight = 2
+++

## A brief history

Until the mid-1970s, all cipher systems used symmetric cryptography. In this system, a single key is used to encrypt and decrypt the data and this secret key must be known to both sender and receiver. While this fast and efficient, for n parties, this involves n(n-1) keys to be distributed. If an eavesdropper intercepts the key using transmission, they can decrypt the messages which brings us to the issue of authentication and trust between the communicating parties. 

In 1976, Whitfield Diffie and Martin Hellman introduced the concept of public key cryptography in their landmark paper "New Directions in Cryptography," [^1]. (they were influenced by Merkle's work [^2] who discussed about secure transmission of keys in insecure channel but was not practical). They proposed the idea of a private key and a corresponding public key which allows the parties to establish a shared secret-key over insecure channel; this is known as the Diffie-Hellman key exchange. Along with asymmetric key cryptography, Diffie and Hellman also first described the notion of digital signature scheme.

Like paper-based signatures, digital signatures could provide two guarantees: 

1) Authentication, that a message came from the right person 

2) Non-repudiation, that a signer of a message cannot deny and claim they didn't sign it. 

Diffie and Hellman had conjectured that such schemes use one-way functions but it was still unknown whether such functions exist. It was in 1978 when Rivest, Shamir and Adleman gave the construction of first digital signature scheme which was based on the RSA public-key cryptosystem[^3]. It's security lies in the extreme difficulty of factoring large integers and the modular exponentiation function works as the one-way function. 

[^1]: New Directions in Cryptography, Whitfield Diffie and Martin Hellman, https://www-ee.stanford.edu/~hellman/publications/24.pdf - 1976
[^2]: Secure Communications Over Insecure Channels, Ralph C. Merkle, https://www.ralphmerkle.com/1974/PuzzlesAsPublished.pdf - 1974
[^3]: A Method for Obtaining Digital Signatures and Public-Key Cryptosystems, R.L. Rivest, A. Shamir, and L. Adleman, https://web.williams.edu/Mathematics/lg5/302/RSA.pdf - 1978

### Other references

- Cryptography: The InfoSec Handbook : https://link.springer.com/chapter/10.1007/978-1-4302-6383-8_8