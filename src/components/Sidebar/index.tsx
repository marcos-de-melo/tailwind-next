'use client'
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './Navitem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Collapsible from '@radix-ui/react-collapsible'
import * as Input from '../Input'
import { Button } from '../Button'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-r border-x-zinc-200 bg-white p-4 data-[state=open]:bottom-0  lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>
        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Tasks" icon={SquareStack} />
          <NavItem title="Projects" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>
        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Suport" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>

          <UsedSpaceWidget />
          <div className="h-px bg-zinc-200" />
          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
