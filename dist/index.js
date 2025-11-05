var $8zHUo$react = require("react");
var $8zHUo$tosijs = require("tosijs");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useXin", () => $293bb70d51fcc769$export$4c67395f0a5595d5);


const $293bb70d51fcc769$export$5516bd16893e35e = function(observed, initialValue) {
    const path = typeof observed === "string" ? observed : (0, $8zHUo$tosijs.xinPath)(observed);
    if (typeof path !== "string") {
        console.error("useXin must either be passed a path or a XinProxy", observed);
        throw new Error("useXin must either be passed a path or a XinProxy");
    }
    const [value, update] = (0, $8zHUo$react.useState)((0, $8zHUo$tosijs.xin)[path] !== undefined ? (0, $8zHUo$tosijs.xin)[path] : initialValue);
    (0, $8zHUo$react.useEffect)(()=>{
        const observer = ()=>{
            update((0, $8zHUo$tosijs.xin)[path]);
        };
        const listener = (0, $8zHUo$tosijs.observe)(path, observer);
        return ()=>{
            (0, $8zHUo$tosijs.unobserve)(listener);
        };
    });
    const setValue = (value)=>{
        (0, $8zHUo$tosijs.xin)[path] = value;
    };
    return [
        value,
        setValue
    ];
};
const $293bb70d51fcc769$export$4c67395f0a5595d5 = $293bb70d51fcc769$export$5516bd16893e35e;




//# sourceMappingURL=index.js.map
