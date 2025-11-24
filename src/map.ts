import { registerClass } from "./register";
@registerClass()
export class MyClass {
  constructor() {
    console.log("Map constructor");
  }
}

@registerClass()
export class Map {
  //         ^
  // SWC minify rename it as ident-ctxt  e.g  Map1
  constructor() {
    console.log("Map constructor");
  }
}
