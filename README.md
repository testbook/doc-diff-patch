# Doc Diff Patch 

Finding the complete diff between two JSONs and recreation of the original JSON from the current version of the JSON and previously calculated diff for version management. 

# Installation

npm install doc-diff-patch

# Usage

Initializing

```
  var vm = require('doc-diff-patch')
  const previousJson = {
      a: "How are you?",
      b: [1,2,3,4]
  };
  const updatedJson = {
      a: "Where are you?",
      b: [1,2,3,4,5]
  };
```

Finding diff

```
  const diff = vm.structDiff(previousJson, updatedJson);
  console.log(JSON.stringify(diff))
  /*
    Output: 
    {
      "a": [
        {"action": "ins", "pos": 0, "val": "Where"},
        {"action": "del", "pos": 0, "val": "How"}
      ],
      "b": [
        {"action": "ins", "pos": 4, "val": [5]}
      ]
    }
   */
```

Finding diff with filter

```
  const filter = {b: 1};
  const diff = vm.structDiff(previousJson, updatedJson);
  console.log(JSON.stringify(diff))
  /*
    Output: 
    {
      "b": [
        {"action": "ins", "pos": 4, "val": [5]}
      ]
    }
   */
```

Finding original json from updated json and full diff

```
  console.log(JSON.stringify(vm.patchDiff(updatedJson, diff)))
  /*
    Output: 
    {
      "val": {
        "a": "How are you?",
        "b": [1,2,3,4]
      },
      "err": ""
    }
   */
```
