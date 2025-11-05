import { XinTouchableType } from "tosijs";
type HookType<T = any> = [value: T, setValue: (newValue: T) => void];
export const useXin: <T = any>(observed: XinTouchableType, initialValue: T) => HookType<T>;

//# sourceMappingURL=types.d.ts.map
