import classNames from 'classnames';

interface Tab {
  label: string;
  disabled?: boolean;
}

export default function Tabs({ selected, onSelected, tabs, hideOnLarge = false }: { selected: string, onSelected: (selected: string) => void, tabs: Tab[], hideOnLarge?: boolean }) {
  const isActive = (tab: Tab) => selected === tab.label;
  const tabId = (label: string) => `${label}-tab`;
  const panelId = (label: string) => `${label}-panel`;

  return (
    <div className={hideOnLarge ? `block lg:hidden px-5` : 'px-5'}>
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="flex gap-2 p-1 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-secondary-100 rounded-lg"
      >
        {tabs.map((tab) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            id={tabId(tab.label)}
            aria-controls={panelId(tab.label)}
            aria-selected={isActive(tab)}
            disabled={tab.disabled}
            tabIndex={isActive(tab) ? 0 : -1}
            onClick={ () => { console.log( tab ); onSelected(tab.label) } }
            className={classNames(
              'w-full px-4 py-2 rounded-md font-light whitespace-nowrap bg-transparent text-secondary-300 hover:enabled:bg-primary-100 hover:enabled:text-primary-800 active:enabled:bg-primary-200 active:enabled:text-primary-900 disabled:text-disabled-500 focus-visible:outline focus-visible:-outline-offset-2 focus-visible:shadow-[inset_0_0_0_4px_rgb(255,255,255)]',
              { '!bg-white shadow-md !text-black': isActive(tab) },
            )}
          >
            <span className='capitalize'>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}