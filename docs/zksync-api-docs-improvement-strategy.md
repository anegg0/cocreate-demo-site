---
sidebar_position: 1
---

# Sksync's Tech Docs Improvement Approach

### Who reads Zksync's technical documentation?
Let's posit that there are currently two main readership profiles for Zksync tech docs:
- Architects/CTOs
- Developers

###  What data do they need?  
- Architects/CTOs need high-level explanations about the system and its users,  ideally with added diagrams (System Context,  Container, Deployment diagrams). They will, of course, inspect lower-level contents such as API references and example code. 
- Developers: need all of the above plus SDKs, playgrounds, and more sample code. They also need comprehensive/updated API references to avoid guessing their way through the docs as well as 

## Assessment

Here is a partial/subjective assessment Zksync's technical documentation:

### Pros

Zksync technical documentation: 
- Covers core concepts.
- Makes it possible to quickly interact with Zksync.
For instance: the context, the endpoints, and the expected results are clearly explained overall, often in plain English.
 
### Cons

- Some of the data is outdated. e.g., the switch from Rinkeby to Goerli is not reflected in the documentation, as mentioned by members of the #testnet-feedback channel.
- Information can be scattered across various pages, making it sometimes hard to make sense of the content.
- There could be more high-level explanation.

## Proposed approach

The below proposal needs to be discussed with the team and weighted against a systematic monitoring of Zksync's users' documentation needs (using discord #support, partners' feedback, and Google Analytics).

- A high-level part similar to this "core concepts" page: https://developer.holochain.org/concepts/
- An API framework (redocly, spotlight) so that the APIs can be covered extensively, with proposed code samples and Postman collections.
- A full-stack, Zksync scaffolding (forked version of scaffold-eth, for instance) that serves as a reference for how-tos and enables developers to save time on configuration.

Various documentation frameworks could be used, although [Docusaurus](https://docusaurus.io) would enable options such as live code (code blocks executed in-page).  
