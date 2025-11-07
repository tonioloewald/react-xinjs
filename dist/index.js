// src/use-tosi.ts
import {
  useState,
  useEffect,
  createElement
} from "react";
import { xin, observe, unobserve, xinPath } from "tosijs";
var useTosi = function(observed, initialValue) {
  const path = typeof observed === "string" ? observed : xinPath(observed);
  if (typeof path !== "string") {
    console.error("useXin must either be passed a path or a XinProxy", observed);
    throw new Error("useXin must either be passed a path or a XinProxy");
  }
  const [value, update] = useState(xin[path] !== undefined ? xin[path] : initialValue);
  useEffect(() => {
    const observer = () => {
      update(xin[path]);
    };
    const listener = observe(path, observer);
    return () => {
      unobserve(listener);
    };
  });
  const setValue = (value2) => {
    xin[path] = value2;
  };
  return [value, setValue];
};
var useXin = useTosi;
var reactWebComponents = new Proxy({}, {
  get(target, key) {
    if (typeof key !== "string") {
      return target[key];
    }
    const tagName = key.replace(/([a-z])([A-Z])/g, (_, first, last) => {
      return first + "-" + last.toLocaleLowerCase();
    });
    if (!target[tagName]) {
      target[tagName] = (props) => createElement(tagName, props);
    }
    return target[tagName];
  }
});
// src/version.ts
var version = "1.0.3";
export {
  version,
  useXin,
  useTosi,
  reactWebComponents
};

//# debugId=9794CB9F6B63057264756E2164756E21
//# sourceMappingURL=index.js.map
