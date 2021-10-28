# no-try-catch
 Yet another promise wrapper to avoid try/catch hell. Typescript supported.


# Example

```js
import wrapper from "no-try-catch";

let result = await wrapper(somePromise, [arg1, arg2, arg3]);

if (result.error) return console.error(result.error);

console.log(result.data);
```