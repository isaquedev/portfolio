import type { Theme } from "@/types/Theme";
import { persistentAtom } from "@nanostores/persistent";

export const $theme = persistentAtom<Theme>("theme", "light");

export const setTheme = (theme: Theme) => {
  $theme.set(theme);
}
