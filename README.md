# no-try-catch
 Yet another promise wrapper to avoid try/catch hell. Typescript supported.


# Example

```js
import wrapper from "no-try-catch";

let result = await wrapper(somePromise, [arg1, arg2, arg3]);

if (result.error) return console.error(result.error);

console.log(result.data);
```

# Side note

To anyone that downloaded a version previous to 1.1.0, sorry because I accidentally published an outdated version which returned a tuple instead of an object. You can use it now. :)