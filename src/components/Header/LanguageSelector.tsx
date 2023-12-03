import { useTheme } from '@/hooks/useTheme';
import type { Language } from '@/types/Language';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

type Props = {
  language: Language
}

export const LanguageSelector = ({ language }: Props) => {

  const [theme] = useTheme()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="bg-sky-200 dark:bg-sky-800 border-none py-1 pl-2.5 pr-2 rounded-lg flex items-center" aria-label="Customise options">
          <img src={`/assets/flags/${language}.svg`} alt="English language icon" />
          <span className='ml-1 font-medium'>{language.toUpperCase()}</span>
          <img src={`/assets/arrows/arrow_down_${theme}.svg`} alt="Arrow down that indicates the open language selector button" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-white dark:bg-sky-800 rounded-lg p-2 shadow animate-appear" sideOffset={5}>
          <DropdownMenu.Item className='outline-none'>
            <a href="/" className="flex gap-1 p-1 hover:bg-sky-200 dark:hover:bg-sky-900 border-none rounded outline-none">
              <img src="/assets/flags/en.svg" alt="English language icon" />
              <span>English</span>
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="outline-none">
            <a href="/pt" className="flex gap-1 p-1 hover:bg-sky-200 dark:hover:bg-sky-900 border-none rounded outline-none">
              <img src="/assets/flags/pt.svg" alt="Portuguese language icon" />
              <span>Português</span>
            </a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}