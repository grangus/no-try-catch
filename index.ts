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
): Promise<
  | { error: Error; data: null }
  | { error: null; data: Unpack<ReturnType<F>> }
> => {
  let called = params ? func(...params) : func();
  let toCall: Promise<ReturnType<F>> = called;

  try {
    let result: any = await toCall;

    return { error: null, data: result };
  } catch (error: any) {
    return { error, data: null };
  }
};

export default wrapper;
