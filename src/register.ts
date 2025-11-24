export function registerClass(rttiName?: string) {
  return function (targetCtor: any) {
    // register NameToCtor Map
    globalThis.Maps.globalNameToCtorMap.set(targetCtor.name, targetCtor);
    console.log(`registerClass: ${targetCtor.name}`);
    // #endif
    return targetCtor;
  };
}
