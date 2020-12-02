export default [
    {
    _tag: 'CSidebarNavTitle',
    _children: ['User']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Profile',
    to: '/profile',
    icon: 'cil-user',
    },
    {
    _tag: 'CSidebarNavItem',
    name: 'Change Password',
    to: '/change-password',
    icon: 'cil-settings',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

