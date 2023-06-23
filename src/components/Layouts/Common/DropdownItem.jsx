import PropTypes from 'prop-types';

function DropdownItem({ page, toggleDropdown }) {
  return (
    <li>
      <button
        type="button"
        className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-controls={`dropdown-${page.name.toLowerCase()}`}
        onClick={toggleDropdown}
      >
        {page.icon && (
          <page.icon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        )}
        <span className="flex-1 ml-3 text-left whitespace-nowrap">{page.name}</span>
        {page.dropDown.length > 0 && <dropdownIcon />}
      </button>
      {page.isOpen && (
        <ul id={`dropdown-${page.name.toLowerCase()}`} className={page.dropDown.length ? "py-2 space-y-2" : ""}>
          {page.dropDown.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

DropdownItem.propTypes = {
  page: PropTypes.shape({
    name: PropTypes.string.isRequired,
    dropDown: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
    icon: PropTypes.elementType,
    isOpen: PropTypes.bool.isRequired,
  }).isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

export default DropdownItem;
