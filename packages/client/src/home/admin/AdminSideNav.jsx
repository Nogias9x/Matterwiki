import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Stack } from '@chakra-ui/core'

import { Icons, NavItem } from '@/common/ui'

function AdminSideNavItem(props) {
    return (
        <NavItem
            {...props}
            highlightActive
            borderBottom="1px"
            borderColor="border"
            borderRadius="4px"
            padding={3}
        />
    )
}

export default function AdminSideNav() {
    const { url } = useRouteMatch()

    return (
        <Stack spacing={0}>
            <AdminSideNavItem
                to={`${url}/users`}
                icon={Icons.FaUserFriends}
                name="Users"
                desc="Create, edit, and delete users"
            />

            <AdminSideNavItem
                to={`${url}/topics`}
                icon={Icons.FaFolder}
                name="Topics"
                desc="Create, edit, and delete topics"
            />

            <AdminSideNavItem
                to={`${url}/customize`}
                icon={Icons.FaCog}
                name="Customize"
                desc="Change the color scheme, and logo"
            />
        </Stack>
    )
}