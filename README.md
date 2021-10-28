# no-try-catch
 Yet another promise wrapper to avoid try/catch hell. Typescript supported.


# Example

```js
import get from "axios";
import wrapper from "no-try-catch";

let result = await wrapper(get, ["https://google.com", {}]);

if (result.error) return console.error(result.error);

console.log(result.data);
```