import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { translations } from "@/utils/translations";
import type { Language } from "@/types/Language";
import { useTheme } from "@/hooks/useTheme";

type Props = {
  language: Language
}

export const ThemeSelector = ({ language }: Props) => {
  const t = translations[language]
  const [theme, setTheme] = useTheme()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>
          <img src={`/assets/modes/${theme}_big.svg`} alt={t.theme.icon[theme]} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-sky-50 dark:bg-sky-800 rounded-lg p-2 shadow animate-appear" sideOffset={5}>
          <DropdownMenu.Item
            className="flex gap-1 p-1 hover:bg-sky-200 dark:hover:bg-sky-900 border-none rounded outline-none cursor-pointer"
            onClick={setTheme('light')}
          >
            <img src="/assets/modes/light.svg" alt={t.theme.light} />
            <span>{t.theme.light}</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="flex gap-1 p-1 hover:bg-sky-200 dark:hover:bg-sky-900 border-none rounded outline-none cursor-pointer"
            onClick={setTheme('dark')}
          >
            <img src="/assets/modes/dark.svg" alt={t.theme.dark} />
              <span>{t.theme.dark}</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="flex gap-1 p-1 hover:bg-sky-200 dark:hover:bg-sky-900 border-none rounded outline-none cursor-pointer"
            onClick={setTheme('system')}
          >
            <img src="/assets/modes/system.svg" alt={t.theme.system} />
            <span>{t.theme.system}</span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}