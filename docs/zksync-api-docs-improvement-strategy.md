---
sidebar_position: 1
---

# Proposed approach to improving the current state of Zksync's technical documentation

## Sksync's Tech Docs Improvement Approach

Let's posit that there are two readership profiles for Zksync tech docs at this time:
Architects/CTOs
Developers
  What data do they need?  
Architects/CTOs need high-level explanations about the system and its users,  ideally with added diagrams (System Context,  Container, Deployment diagrams). They will, of course, inspect lower-level contents such as API references and example code. 
Developers: need all of the above plus SDKs, playgrounds, and more sample code. They also need comprehensive/updated API references to avoid guessing their way through the docs as well as 

## Assessment

### Pros
Zksync technical documentation enabled me to understand core concepts and interact with the API.
For instance: the context, the endpoints, and the expected results are clearly explained overall, often in plain English.
 
### Cons
Some of the data is outdated. e.g., the switch from rinkeby to goerli is not reflected in the documentation, as mentioned by devs in the #testnet-feedback channel.
Information can be scattered across various pages, making it sometimes hard to make sense of the content.
There is a lack of high-level explanations.
## Proposed approach
The below proposal needs to be discussed with the team and weighted against a more accurate monitoring of documentation needs (using discord #support, partners' feedback, and Google Analytics).

A high-level part similar to this "core concepts" page: https://developer.holochain.org/concepts/
An API framework (redocly, spotlight) so that the APIs can be covered extensively, with proposed code samples and Postman collections.
A full-stack, Zksync scaffolding (forked version of scaffold-eth, for instance) that serves as a reference for how-tos and enables developers to save time on configuration.
