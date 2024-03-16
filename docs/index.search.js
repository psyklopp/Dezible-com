var relearn_search_index = [
  {
    "content": "One of the common issues while learning cryptography is the extensive use of notations, abbbreviations and terms which we might not be familiar with. I will curate a list of such questions which anyone can refer to.\nThis section will focus mainly on the concepts broadly categorized into mathematics and cryptography.\n",
    "description": "",
    "tags": null,
    "title": "Basics",
    "uri": "/basics/index.html"
  },
  {
    "content": "Ques: What is the meaning of Probabilistic Polynomial Time (PPT) adversary or algorithm?\nAns: https://crypto.stackexchange.com/questions/62976/what-is-the-meaning-of-probabilistic-polynomial-time-adversary\nQues: What is the ROM (random oracle method)?\nAns: https://crypto.stackexchange.com/questions/879/what-is-the-random-oracle-model-and-why-is-it-controversial\nQues: What is the difference between ROM (Random Oracle Method) and SM (Standard Model)?\nAns: https://crypto.stackexchange.com/questions/43668/random-oracle-model-vs-standard-model-vs-selective-model\n",
    "description": "",
    "tags": null,
    "title": "Cryptography",
    "uri": "/basics/first-content/index.html"
  },
  {
    "content": "There we go!\n",
    "description": "",
    "tags": null,
    "title": "Mathematics",
    "uri": "/basics/second-content/index.html"
  },
  {
    "content": "A brief history Until the mid-1970s, all cipher systems used symmetric cryptography. In this system, a single key is used to encrypt and decrypt the data and this secret key must be known to both sender and receiver. While this fast and efficient, for n parties, this involves n(n-1) keys to be distributed. If an eavesdropper intercepts the key using transmission, they can decrypt the messages which brings us to the issue of authentication and trust between the communicating parties.\nIn 1976, Whitfield Diffie and Martin Hellman introduced the concept of public key cryptography in their landmark paper “New Directions in Cryptography,” 1. (they were influenced by Merkle’s work 2 who discussed about secure transmission of keys in insecure channel but was not practical). They proposed the idea of a private key and a corresponding public key which allows the parties to establish a shared secret-key over insecure channel; this is known as the Diffie-Hellman key exchange. Along with asymmetric key cryptography, Diffie and Hellman also first described the notion of digital signature scheme.\nLike paper-based signatures, digital signatures could provide two guarantees:\nAuthentication, that a message came from the right person\nNon-repudiation, that a signer of a message cannot deny and claim they didn’t sign it.\nDiffie and Hellman had conjectured that such schemes use one-way functions but it was still unknown whether such functions exist. It was in 1978 when Rivest, Shamir and Adleman gave the construction of first digital signature scheme which was based on the RSA public-key cryptosystem3. It’s security lies in the extreme difficulty of factoring large integers and the modular exponentiation function works as the one-way function.\nOther references Cryptography: The InfoSec Handbook : https://link.springer.com/chapter/10.1007/978-1-4302-6383-8_8 New Directions in Cryptography, Whitfield Diffie and Martin Hellman, https://www-ee.stanford.edu/~hellman/publications/24.pdf - 1976 ↩︎\nSecure Communications Over Insecure Channels, Ralph C. Merkle, https://www.ralphmerkle.com/1974/PuzzlesAsPublished.pdf - 1974 ↩︎\nA Method for Obtaining Digital Signatures and Public-Key Cryptosystems, R.L. Rivest, A. Shamir, and L. Adleman, https://web.williams.edu/Mathematics/lg5/302/RSA.pdf - 1978 ↩︎\n",
    "description": "",
    "tags": null,
    "title": "Digital Signatures",
    "uri": "/digital-signatures/index.html"
  },
  {
    "content": "Blind signatures are an extension of digital signatures, which allows a user to obtain a signature on a message without revealing the contents of the message to the signer.\nA good analogy to blind signatures is anonymous voting. A voter who wants to cast a valid vote in an envelope, wants a signature from the official election authority. The officials can verify the credentials of the voters and sign the envelope containing the vote, without learning the contents. This ensures the integrity of the vote, and authorities learn nothing about the voters’ selection.\nThe idea of blind signatures was introduced by David Chaum in his paper 1 which was based on the RSA signature scheme.\nD. L. Chaum, Blind Signatures for Untraceable Payments, Jan. 1983, doi: 10.1007/978-1-4757-0602-4_18, https://bitcoin-class.org/readings/Chaum-blind-signatures.PDF ↩︎\n",
    "description": "",
    "tags": null,
    "title": "Blind Signatures",
    "uri": "/blind-signatures/index.html"
  },
  {
    "content": "Welcome Easy to understand, High-quality articles on getting started with Cybersecurity Under construction\n",
    "description": "",
    "tags": null,
    "title": "Dezible",
    "uri": "/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
