// Create the Maps namespace if it doesn't exist
globalThis.Maps = globalThis.Maps || {};

// Now assign the properties
globalThis.Maps.globalNameToCtorMap = new Map<string, any>();
globalThis.Maps.globalRTTINameToAPJSName = new Map<string, string>();
export {};
