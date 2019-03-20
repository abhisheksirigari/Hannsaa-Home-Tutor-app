export let MENU_ITEM = [
    {
        path: 'index',
        title: 'Dashboard',
        icon: 'dashboard'
    },
    {
        path: 'usermanagement',
        title: 'User Management',
        icon: 'user',
        children: [
            {
                path: 'users',
                title: 'Users'
            }
        ]
    },
    {
        path: 'categeories',
        title: 'Categeories',
        icon: 'table'
    },
    {
        path: 'table',
        title: 'Teachers',
        icon: 'table',
        children: [
            {
                path: 'basic-tables',
                title: 'Part Time Teachers'
            },
            {
                path: 'data-table',
                title: 'Full Time Teachers'
            }
        ]
    },
    {
        path: 'students',
        title: 'Students',
        icon: 'user',
        children: [
            {
                path: 'students',
                title: 'students'
            },
            {
                path: 'classcategories',
                title: 'Class Categories'
            },
            {
                path: 'subjectcategories',
                title: 'Subject Categories'
            }
        ]
    },
    {
        path: 'editor',
        title: 'Terms & Conditions',
        icon: 'user'
    },
    {
        path: 'aboutus',
        title: 'About Us',
        icon: 'user'
    },
    {
        path: 'editor',
        title: 'FAQs',
        icon: 'user'
    },
    {
        path: 'editor',
        title: 'Privacy Policy',
        icon: 'user'
    },
    // {
    //     path: 'classes',
    //     title: 'Classes',
    //     icon: 'dashboard'
    // },
    // {
    //     path: 'tutors',
    //     title: 'Tutors',
    //     icon: 'dashboard'
    // },
    // {
    //     path: 'editor',
    //     title: 'Pell Editor',
    //     icon: 'pencil'
    // },
    // {
    //     path: 'icon',
    //     title: 'Icon',
    //     icon: 'diamond'
    // },
    // {
    //     path: 'profile',
    //     title: 'User Profile',
    //     icon: 'user'
    // },
    // {
    //     path: 'ui',
    //     title: 'UI Element',
    //     icon: 'paint-brush',
    //     children: [
    //         {
    //             path: 'grid',
    //             title: 'Bootstrap Grid'
    //         },
    //         {
    //             path: 'buttons',
    //             title: 'Buttons'
    //         },
    //         {
    //             path: 'notification',
    //             title: 'Notification'
    //         },
    //         {
    //             path: 'tabs',
    //             title: 'Tabs'
    //         },
    //         {
    //             path: 'file-tree',
    //             title: 'File Tree'
    //         },
    //         {
    //             path: 'modals',
    //             title: 'Modals'
    //         },
    //         {
    //             path: 'progress-bar',
    //             title: 'ProgressBar'
    //         },
    //         /*  {
    //              path: 'loading',
    //              title: 'Loading'
    //          }, */
    //     ]
    // },
    // {
    //     path: 'form',
    //     title: 'Forms',
    //     icon: 'check-square-o',
    //     children: [
    //         {
    //             path: 'form-inputs',
    //             title: 'Form Inputs'
    //         },
    //         {
    //             path: 'form-layouts',
    //             title: 'Form Layouts'
    //         },
    //         {
    //             path: 'file-upload',
    //             title: 'File Upload'
    //         },
    //         {
    //             path: 'ng2-select',
    //             title: 'Ng2-Select'
    //         }
    //     ]
    // },
    // {
    //     path: 'charts',
    //     title: 'Charts',
    //     icon: 'bar-chart',
    //     children: [
    //         {
    //             path: 'echarts',
    //             title: 'Echarts'
    //         }
    //     ]
    // },
    // {
    //     path: 'menu-levels',
    //     title: 'Menu Levels',
    //     icon: 'sitemap',
    //     children: [
    //         {
    //             path: 'levels1',
    //             title: 'Menu Level1',
    //             children: [
    //                 {
    //                     path: 'levels1-1',
    //                     title: 'Menu Level1-1'
    //                 }
    //             ]
    //         },
    //         {
    //             path: 'levels2',
    //             title: 'Menu Level2'
    //         }
    //     ]
    // },
];
