var $8zHUo$react = require("react");
var $8zHUo$xinjs = require("xinjs");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useXin", () => $293bb70d51fcc769$export$4c67395f0a5595d5);


const $293bb70d51fcc769$export$4c67395f0a5595d5 = (path, initialValue = "")=>{
    const [value, update] = (0, $8zHUo$react.useState)((0, $8zHUo$xinjs.xin)[path] !== undefined ? (0, $8zHUo$xinjs.xin)[path] : initialValue);
    (0, $8zHUo$react.useEffect)(()=>{
        const observer = ()=>{
            update((0, $8zHUo$xinjs.xin)[path]);
        };
        const listener = (0, $8zHUo$xinjs.observe)(path, observer);
        return ()=>{
            (0, $8zHUo$xinjs.unobserve)(listener);
        };
    });
    const setValue = (value)=>{
        (0, $8zHUo$xinjs.xin)[path] = value;
    };
    return [
        value,
        setValue
    ];
};




//# sourceMappingURL=index.js.map
