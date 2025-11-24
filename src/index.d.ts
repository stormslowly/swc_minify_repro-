declare global {
  namespace Maps {
    let globalNameToCtorMap: Map<string, any>;
    let globalRTTINameToAPJSName: Map<string, string>;
  }
}

export {};
