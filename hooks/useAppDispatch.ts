import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/state/store";

/**
 * useAppDispatch
 * ----------------
 * Typed wrapper around react-redux useDispatch hook.
 * Provides type-safe dispatch function for Redux actions.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
