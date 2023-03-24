import {useState as $hgUW1$useState, useEffect as $hgUW1$useEffect} from "react";
import {xin as $hgUW1$xin, observe as $hgUW1$observe, unobserve as $hgUW1$unobserve} from "xinjs";



const $a69448a0ddd88aba$export$4c67395f0a5595d5 = (path, initialValue = "")=>{
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




export {$a69448a0ddd88aba$export$4c67395f0a5595d5 as useXin};
//# sourceMappingURL=module.js.map
