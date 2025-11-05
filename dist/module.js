import {useState as $hgUW1$useState, useEffect as $hgUW1$useEffect} from "react";
import {xinPath as $hgUW1$xinPath, xin as $hgUW1$xin, observe as $hgUW1$observe, unobserve as $hgUW1$unobserve} from "tosijs";



const $a69448a0ddd88aba$export$5516bd16893e35e = function(observed, initialValue) {
    const path = typeof observed === "string" ? observed : (0, $hgUW1$xinPath)(observed);
    if (typeof path !== "string") {
        console.error("useXin must either be passed a path or a XinProxy", observed);
        throw new Error("useXin must either be passed a path or a XinProxy");
    }
    const [value, update] = (0, $hgUW1$useState)((0, $hgUW1$xin)[path] !== undefined ? (0, $hgUW1$xin)[path] : initialValue);
    (0, $hgUW1$useEffect)(()=>{
        const observer = ()=>{
            update((0, $hgUW1$xin)[path]);
        };
        const listener = (0, $hgUW1$observe)(path, observer);
        return ()=>{
            (0, $hgUW1$unobserve)(listener);
        };
    });
    const setValue = (value)=>{
        (0, $hgUW1$xin)[path] = value;
    };
    return [
        value,
        setValue
    ];
};
const $a69448a0ddd88aba$export$4c67395f0a5595d5 = $a69448a0ddd88aba$export$5516bd16893e35e;




export {$a69448a0ddd88aba$export$4c67395f0a5595d5 as useXin};
//# sourceMappingURL=module.js.map
