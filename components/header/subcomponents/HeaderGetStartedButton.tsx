"use client";

import React from "react";

import { ContainedButton } from "@/components/ui/buttons";

type HeaderGetStartedButtonProps = {};

/**
 * HeaderGetStartedButton
 * ----
 * Renders the primary CTA for navigating to the dashboard.
 */
export const HeaderGetStartedButton: React.FC<HeaderGetStartedButtonProps> = () => {
  return <ContainedButton href="/dashboard">Get started</ContainedButton>;
};


