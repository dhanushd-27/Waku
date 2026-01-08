/**
import designTokens from './design-token';
 * UI/UX Design Tokens
 * This file contains the single source of truth for all design decisions,
 * including color, typography, spacing, shadows, breakpoints, etc.
 * Import this everywhere you need visual consistency.
 */
const designTokens = {
  /* =====================
   * Color Palette
   * ===================== */
  logo: {
    src: "waku.png"
  },
  color: {
    /* ------ Light Theme Colors ------ */
    light: {
      primary: "#000000",
      primaryDark: "#333333",
      primaryLight: "#A7A7A7",
      secondary: "#E85002",
      secondaryDark: "#C10801",
      secondaryLight: "#D9C3AB",
      background: "#F9F9F9",
      surface: "#F9F9F9",
      onPrimary: "#F9F9F9",
      onSecondary: "#F9F9F9",
      border: "#A7A7A7",
      muted: "#646464"
    },

    /* ------ Dark Theme Colors ------ */
    dark: {
      primary: "#000000",
      primaryDark: "#333333",
      primaryLight: "#A7A7A7",
      secondary: "#E85002",
      secondaryDark: "#C10801",
      secondaryLight: "#D9C3AB",
      background: "#000000",
      surface: "#F9F9F9",
      onPrimary: "#F9F9F9",
      onSecondary: "#F9F9F9",
      border: "#A7A7A7",
      muted: "#646464"
    },

    /* ------ Brand (Trinidad) Scale ------ */
    brand: "#E85002",
    brandScale: {
      50: "#FFF7EC",
      100: "#FFEDD3",
      200: "#FFD7A6",
      300: "#FFBA6E",
      400: "#FF9033",
      500: "#FF700C",
      600: "#E85002",
      700: "#CA3D04",
      800: "#A0310C",
      900: "#812B0D",
      950: "#461204",
    },

    /* ------ Neutral Colors ------ */
    neutral: {
      50: "#F9F9F9",
      100: "#E5E5E5",
      200: "#D0D0D0",
      300: "#BCBCBC",
      400: "#A7A7A7",
      500: "#868686",
      600: "#646464",
      700: "#4C4C4C",
      800: "#333333",
      900: "#000000"
    },

    /* ------ Brand Gradient Stops ------ */
    gradient: {
      start: "#D9C3AB",
      via1: "#F16001",
      via2: "#C10801",
      end: "#000000",
    },

    /* ------ Alerts ------ */
    alerts: {
      success: "#51CC56",
      warning: "#FEB63D",
      info: "#5B93FF",
      error: "#FF5555",
    },

    /* ------ Notifications (use alert colors or extend as needed) ------ */
    notifications: {
      successBackground: "#DFF6E2",
      warningBackground: "#FFF6DD",
      infoBackground: "#E7F0FF",
      errorBackground: "#FFE7E7",
      successText: "#218838",
      warningText: "#B26A00",
      infoText: "#0353B6",
      errorText: "#C1272D"
    }
    // Extend color palette as needed
  },

  /* =====================
   * Typography
   * ===================== */
  typography: {
    fontFamily: {
      base: "'Figtree', Arial, sans-serif",
      brand: "'alro-bold', sans-serif"
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },

    /* ------ Responsive Font Sizes ------ */
    fontSize: {
      /* Mobile-first base values (≤375px) */
      h1: {
        mobile: "2.5rem",     // 40px
        tablet: "3.5rem",     // 56px
        desktop: "4.5rem",    // 72px
        clamp: "clamp(2.5rem, 5vw + 1rem, 4.5rem)"
      },
      h2: {
        mobile: "2rem",       // 32px
        tablet: "3rem",       // 48px
        desktop: "4rem",      // 64px
        clamp: "clamp(2rem, 4vw + 1rem, 4rem)"
      },
      h3: {
        mobile: "1.75rem",    // 28px
        tablet: "2.25rem",    // 36px
        desktop: "3rem",      // 48px
        clamp: "clamp(1.75rem, 3vw + 0.5rem, 3rem)"
      },
      h4: {
        mobile: "1.5rem",     // 24px
        tablet: "1.75rem",    // 28px
        desktop: "2rem",      // 32px
        clamp: "clamp(1.5rem, 2vw + 0.5rem, 2rem)"
      },
      subtitle: {
        mobile: "0.875rem",   // 14px
        tablet: "0.9375rem",  // 15px
        desktop: "1rem",      // 16px
        clamp: "clamp(0.875rem, 0.5vw + 0.5rem, 1rem)"
      },
      paragraph: {
        mobile: "0.875rem",   // 14px
        tablet: "0.875rem",   // 14px
        desktop: "1rem",      // 16px
        clamp: "clamp(0.875rem, 0.5vw + 0.75rem, 1rem)"
      },
      body: {
        mobile: "0.75rem",    // 12px
        tablet: "0.8125rem",  // 13px
        desktop: "0.875rem",  // 14px
        clamp: "clamp(0.75rem, 0.3vw + 0.6rem, 0.875rem)"
      },
      small: {
        mobile: "0.6875rem",  // 11px
        tablet: "0.6875rem",  // 11px
        desktop: "0.75rem",   // 12px
        clamp: "clamp(0.6875rem, 0.2vw + 0.6rem, 0.75rem)"
      }
    },

    /* ------ Line Heights ------ */
    lineHeight: {
      h1: { mobile: "1.2", tablet: "1.15", desktop: "1.1" },
      h2: { mobile: "1.25", tablet: "1.2", desktop: "1.15" },
      h3: { mobile: "1.3", tablet: "1.25", desktop: "1.2" },
      h4: { mobile: "1.35", tablet: "1.3", desktop: "1.25" },
      subtitle: { mobile: "1.5", tablet: "1.5", desktop: "1.5" },
      paragraph: { mobile: "1.6", tablet: "1.55", desktop: "1.5" },
      body: { mobile: "1.6", tablet: "1.55", desktop: "1.5" },
      small: { mobile: "1.5", tablet: "1.5", desktop: "1.5" }
    },

    /* ------ Letter Spacing ------ */
    letterSpacing: {
      h1: "-0.02em",
      h2: "-0.02em",
      h3: "-0.01em",
      h4: "normal",
      subtitle: "normal",
      paragraph: "normal",
      body: "normal",
      small: "0.01em"
    },

    /* ------ Max Line Width (characters) ------ */
    maxLineWidth: {
      heading: "20ch",
      paragraph: "65ch",
      wide: "80ch"
    }
  },

  /* =====================
   * Component Tokens (example: buttons)
   * ===================== */
  components: {
    button: {
      borderRadius: "16px",
      paddingY: "12px",
      paddingX: "24px",
      fontSize: "1rem",
      fontWeight: 500,
      iconSpacing: "4px",
      dimensions: {
        height: "48px",
        strokeWidth: "1.5px",
      },
      contained: {
        layout: {
          default: {
            height: "48px",
            width: "auto",
            paddingX: "30px",
            paddingY: "12px",
          },
          withIcon: {
            height: "48px",
            width: "auto",
            paddingX: "24px",
            paddingY: "12px",
            iconGap: "4px",
          },
          iconOnly: {
            height: "48px",
            width: "48px",
            paddingX: "0px",
            paddingY: "0px",
          }
        },
        states: {
          enabled: {
            background: "#E85002",
            color: "#F9F9F9",
            border: "none"
          },
          hover: {
            background: "#FF9033",
            color: "#F9F9F9",
            border: "none"
          },
          pressed: {
            background: "#F16001",
            color: "#F9F9F9",
            border: "none"
          },
          processing: {
            background: "#000000",
            color: "#F9F9F9",
            border: "none",
            cursor: "progress"
          },
          disabled: {
            background: "#A7A7A7",
            color: "#646464",
            border: "none",
            cursor: "not-allowed"
          }
        }
      },
      outline: {
        layout: {
          default: {
            height: "48px",
            width: "auto",
            paddingX: "24px",
            paddingY: "12px",
          },
          withIcon: {
            height: "48px",
            width: "auto",
            paddingX: "24px",
            paddingY: "12px",
            iconGap: "4px",
          },
          iconOnly: {
            height: "48px",
            width: "48px",
            paddingX: "0px",
            paddingY: "0px",
          }
        },
        states: {
          enabled: {
            background: "transparent",
            color: "#E85002",
            border: "1.5px solid #E85002"
          },
          hover: {
            background: "#FFEDD3",
            color: "#E85002",
            border: "1.5px solid #E85002"
          },
          pressed: {
            background: "#FFBA6E",
            color: "#E85002",
            border: "1.5px solid #E85002"
          },
          processing: {
            background: "transparent",
            color: "#F9F9F9",
            border: "1.5px solid #E85002",
            cursor: "progress"
          },
          disabled: {
            background: "transparent",
            color: "#A7A7A7",
            border: "1.5px solid #A7A7A7",
            cursor: "not-allowed"
          }
        }
      },
      text: {
        layout: {
          default: {
            height: "48px",
            width: "auto",
            paddingX: "16px",
            paddingY: "12px",
          },
          withIcon: {
            height: "48px",
            width: "auto",
            paddingX: "16px",
            paddingY: "12px",
            iconGap: "4px",
          },
          iconOnly: {
            height: "48px",
            width: "48px",
            paddingX: "0px",
            paddingY: "0px",
          }
        },
        states: {
          enabled: {
            background: "transparent",
            color: "#E85002",
            border: "none"
          },
          hover: {
            background: "#FFEDD3",
            color: "#E85002",
            border: "none"
          },
          pressed: {
            background: "#FFBA6E",
            color: "#E85002",
            border: "none"
          },
          processing: {
            background: "#000000",
            color: "#F9F9F9",
            border: "none",
            cursor: "progress"
          },
          disabled: {
            background: "transparent",
            color: "#A7A7A7",
            border: "none",
            cursor: "not-allowed"
          }
        }
      }
    }
    // Add tokens for input, cards, badges, etc., as needed
  },

  /* =====================
   * Breakpoints (for responsive design)
   * ===================== */
  breakpoints: {
    mobile: "375px",
    tablet: "960px",
    desktop: "1248px",
    values: {
      mobile: 375,
      tablet: 960,
      desktop: 1248
    },
    columns: 12,
    marginX: {
      mobile: "16px",
      tablet: "32px",
      desktop: "64px"
    },
    gap: {
      mobile: "16px",
      tablet: "24px",
      desktop: "32px"
    }
  },

  /* =====================
   * Shadows
   * ===================== */
  shadow: {
    xs: "0 1px 2px 0 rgba(16, 24, 40, 0.05)",
    sm: "0px 2px 4px 0px rgba(11, 10, 55, 0.15)",
    md: "0px 4px 10px 0px rgba(18, 16, 99, 0.09)",
    lg: "0px 8px 20px 0px rgba(18, 16, 99, 0.06)"
  },

  /* =====================
   * Spacing
   * ===================== */
  spacing: {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
    usage: {
      xxs: "Used for gaps between icon and text",
      xs: "Gap between Headline and paragraphs, small gaps",
      sm: "Small inner margins/padding",
      md: "Border margins in card/components or moderate gaps",
      lg: "Outer margins/padding for sections/components",
      xl: "Wide section paddings or content separation",
      xxl: "Major outer spacing"
    }
  },

  /* =====================
   * Radius
   * ===================== */
  radius: {
    none: "0px",
    sm: "4px",
    md: "8px",
    lg: "16px",
    pill: "999px"
  }
};

export default designTokens;