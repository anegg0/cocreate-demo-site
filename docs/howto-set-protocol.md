---
sidebar_position: 1
---

# Setting protocol minting for an NFT project

deployCreateInstance 
deployCreateInstance is the function for launching a Co:Create Instance. The function has the following parameters:

name - The name of the Create Instance
instanceAdmin - The admin address of the Create Instance

```js lineNumbers
function deployCreateInstance(
    string name,
    address instanceAdmin
) external returns (ICreateInstance);
```
Each Create Instance will set the parameters for the following items prior to launching its own Instance Token: 

### Max Supply
The total number of tokens that will ever be available (assuming a non-inflationary token). E.g. 1B Tokens

### Initial Allocations
Recipients of the initial token allocation (may be subject to vesting). E.g. 30% to the core team, 20% to NFT collectors and contributors, 50% to the DAO treasury
(Token allocations should ensure that no single entity has unilateral control of the token for legal / regulatory reasons.)

### Vesting 
For each initial token allocation recipient, the time over which their allocation will “vest” or become available to them to stake, sell, or otherwise use.

### Fixed or Inflationary Supply
Whether the token will have a fixed supply or will have an increasing supply over time. 
If inflationary, the following parameters must be set: 
Inflation rate start date (e.g. at the start of year 5) 
Annual inflation rate (e.g. 2%) 
Recipient of inflationary token emissions (e.g. the DAO Treasury)

### NFT Royalty Splits and Swaps
How future NFT royalty payments from existing collections will be swapped for the token and then split across pre-defined royalty participants. Able to be set on a per-collection basis.
E.g. NFT Collection #1 will have royalties split among the creator, NFT collectors and the DAO Treasury. The splits will be as follows:
Creator: 80% 
NFT collectors: 10% 
The Create Instance DAO: 10%

### Transfer Restrictions
Determine from the outset whether control needs to be retained over which addresses the token can be transferred. 
