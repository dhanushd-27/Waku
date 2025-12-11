import { useSelector, type TypedUseSelectorHook } from "react-redux";
import type { AppState } from "@/state/store";

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
