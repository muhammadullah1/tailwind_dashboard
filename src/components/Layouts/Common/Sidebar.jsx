import { useState } from 'react';
import DropdownItem from './DropdownItem';
import { ReactComponent as overviewIcon } from './../../../assets/svgs/overview.svg';
import { ReactComponent as pageIcon } from './../../../assets/svgs/pages.svg';
import { ReactComponent as saleIcon } from './../../../assets/svgs/sales.svg';
import { ReactComponent as messageIcon } from './../../../assets/svgs/message.svg';
import { ReactComponent as authenticationIcon } from './../../../assets/svgs/authentication.svg';
import { ReactComponent as docsIcon } from './../../../assets/svgs/docs.svg';
import { ReactComponent as componentsIcon } from './../../../assets/svgs/components.svg';
import { ReactComponent as helpIcon } from './../../../assets/svgs/help.svg';

function Sidebar() {
  const pages = [
    {
      name: 'Overview',
      url: '/',
      icon: overviewIcon,
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: pageIcon,
      dropDown: [
        {
          name: 'Settings',
          url: '/settings',
        },
        {
          name: 'Kanban',
          url: '/kanban',
        },
        {
          name: 'Calendar',
          url: '/calendar',
        },
      ],
    },
    {
      name: 'Sales',
      url: '/Sales',
      icon: saleIcon,
      dropDown: [
        {
          name: 'Products',
          url: '/products',
        },
        {
          name: 'Billing',
          url: '/billing',
        },
        {
          name: 'Invoice',
          url: '/invoice',
        },
      ],
    },
    {
      name: 'Messages',
      url: '/messages',
      icon: messageIcon,
    },
    {
      name: 'Authentication',
      url: '/authentication',
      icon: authenticationIcon,
      dropDown: [
        {
          name: 'Settings',
          url: '/settings',
        },
        {
          name: 'Kanban',
          url: '/kanban',
        },
        {
          name: 'Calendar',
          url: '/calendar',
        },
      ],
    },
    {
      name: 'Docs',
      url: '/docs',
      icon: docsIcon,
    },
    {
      name: 'Components',
      url: '/components',
      icon: componentsIcon,
    },
    {
      name: 'Help',
      url: '/help',
      icon: helpIcon,
    },
  ];

  const [transformedPages, setTransformedPages] = useState(
    pages.map(page => ({
      name: page.name,
      dropDown: page.dropDown || [],
      icon: page.icon,
      isOpen: false,
    }))
  );

  const toggleDropdown = index => {
    const updatedPages = [...transformedPages];
    updatedPages[index].isOpen = !updatedPages[index].isOpen;
    setTransformedPages(updatedPages);
  };

  return (
    <ul className="space-y-2">
      {transformedPages.map((page, index) => (
        <DropdownItem
          key={index}
          page={page}
          toggleDropdown={() => toggleDropdown(index)}
        />
      ))}
    </ul>
  );
}

export default Sidebar;
