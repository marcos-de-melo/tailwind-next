import * as Tabs from '@radix-ui/react-tabs'
import { SettingsTabs } from './components/SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Setting</h1>

      <SettingsTabs />
    </>
  )
}
