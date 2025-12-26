import { useSelector, type TypedUseSelectorHook } from "react-redux";
import type { AppState } from "@/state/store";

/**
 * useAppSelector
 * ----------------
 * Typed wrapper around react-redux useSelector hook.
 * Provides type-safe selector function for accessing Redux state.
 */
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
