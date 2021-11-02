type Unpack<T> = T extends Promise<infer U>
  ? U
  : T extends (...args: any) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : T;
/**
 * @param {Function} func The function to wrap.
 * @param {Array} [params] An array of parameters to pass to the function.
 */
const wrapper = async <F extends (...arg: any) => any>(
  func: F,
  params?: any[]
): Promise<{error: Error} | {error: null, result: ReturnType<typeof func>}> => {
  let called = params ? func(...params) : func();
  let toCall: Promise<ReturnType<typeof func>> = called;

  try {
    let result = await toCall;

    return {error: null, result};
  } catch (error: any) {
    return {error};
  }
};

export default wrapper;
