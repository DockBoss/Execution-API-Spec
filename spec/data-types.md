# -WIP
# Data Types

I will list the data types that are used and their "rules"

## String
## DATA
## Boolean
## QUANTITY
## Tag
I need to do some actual digging, but I assume that the tag is just a enumerated list of Strings with each of the block states
* `"latest"`
  * uses the most recent finalized block 
* `"earliest"`
  * uses the earliest block that the client has a state for
* `"pending"`
  * uses the current that is being filled with transactions
test