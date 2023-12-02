import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const LanguageSelector = () => {

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="bg-sky-200 border-none py-1 pl-2.5 pr-2 rounded-lg flex items-center" aria-label="Customise options">
          <img src="/assets/flags/en.svg" alt="English language icon" />
          <span className='ml-1 font-medium'>EN</span>
          <img src="/assets/arrows/arrow_down_light.svg" alt="Arrow down that indicates the open language selector button" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem">
            New Tab <div className="RightSlot">⌘+T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            New Window <div className="RightSlot">⌘+N</div>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}