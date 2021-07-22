const initialState = {
    nav_list: {
        CSS: ['Color', 'Grid', 'Helpers', 'Media', 'Pulse', 'Sass', 'Shadow', 'Table', 'Transitions', 'Typography'],
        Components: ['Badges', 'Breadcrumbs', 'Buttons', 'Cards', 'Collections', 'Floating Action Button', 'Footer', 'Icons', 'Navbar', 'Pagination', 'Preloader', 'Searchbar', 'Sidebar'],
        JavaScript: ['Auto Init', 'Carousal', 'Collapsible', 'Dropdown', 'Feature Discovery', 'Media', 'Modals', 'Parallax', 'Pushpin', 'Scrollspy', 'Sidenav', 'Tabs', 'Toasts', 'Tooltips', 'Waves'],
        Form: ['Autocomplete', 'Checkboxs', 'Chips', 'Pickers', 'Radio Buttons', 'Range', 'Select', 'Switches', 'Text Inputs']
    },
    selectedTitle: 'CSS',
    selectedValue: 0
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SELECTEDVALUE':
            return {
                ...state,
                selectedValue: action.item
            }
        case 'SELECTEDTITLE':
            return {
                ...state,
                selectedTitle: action.item
            }
        default:
            return state
    }
}

export default rootReducer