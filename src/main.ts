import "./global";
import { MyClass, Map } from "./map";
void MyClass;

if (MyClass.name !== "MyClass") {
  throw `MyClass renamed as ${MyClass.name} in SWC minify`;
}

if (Map.name !== "Map") {
  throw `Map renamed as ${Map.name} in SWC minify`;
}
