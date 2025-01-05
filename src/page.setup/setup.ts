import { createApp, reactive } from 'vue'
import Root from './setup.vue'
import { InstanceType } from 'src/types'
import { Settings } from 'src/services/settings'
import { Windows } from 'src/services/windows'
import { Containers } from 'src/services/containers'
import { Keybindings } from 'src/services/keybindings'
import { Bookmarks } from 'src/services/bookmarks'
import { Store } from 'src/services/storage'
import { Permissions } from 'src/services/permissions'
import { Info } from 'src/services/info'
import { SetupPage } from 'src/services/setup-page'
import { Styles } from 'src/services/styles'
import * as Favicons from 'src/services/favicons.fg'
import * as IPC from 'src/services/ipc'
import * as Logs from 'src/services/logs'
import { initSidebarConfig, loadSidebarConfig } from 'src/services/sidebar-config'
import { setupSidebarConfigListeners } from 'src/services/sidebar-config'
import { initPopups } from 'src/services/popups'

async function main(): Promise<void> {
  Info.setInstanceType(InstanceType.setup)
  IPC.setInstanceType(InstanceType.setup)
  Logs.setInstanceType(InstanceType.setup)

  Settings.state = reactive(Settings.state)
  Containers.reactive = reactive(Containers.reactive)
  Windows.reactive = reactive(Windows.reactive)
  Favicons.initFavicons(reactive)
  Keybindings.reactive = reactive(Keybindings.reactive)
  Bookmarks.reactive = reactive(Bookmarks.reactive)
  initSidebarConfig(reactive)
  initPopups(reactive)
  Permissions.reactive = reactive(Permissions.reactive)
  SetupPage.reactive = reactive(SetupPage.reactive)
  Info.reactive = reactive(Info.reactive)
  Styles.reactive = reactive(Styles.reactive)

  IPC.registerActions({
    storageChanged: Store.storageChangeListener,
    connectTo: IPC.connectTo,
  })

  SetupPage.updateActiveView()
  SetupPage.setupListeners()

  await Promise.all([
    Windows.loadWindowInfo(),
    Settings.loadSettings().then(() => Styles.initColorScheme()),
    Containers.load(),
    Keybindings.loadKeybindings(),
    Info.loadVersionInfo(),
    Info.loadCurrentTabInfo(),
  ])

  IPC.setWinId(Windows.id)
  IPC.setTabId(Info.currentTabId)
  Logs.setWinId(Windows.id)
  Logs.setTabId(Info.currentTabId)

  const app = createApp(Root)
  app.mount('#root_container')

  Settings.setupSettingsChangeListener()

  await loadSidebarConfig()
  setupSidebarConfigListeners()
  Styles.loadCustomCSS()
  Info.loadPlatformInfo()
  Info.loadVersionInfo()
  Permissions.loadPermissions()
  Permissions.setupListeners()
  Favicons.loadFavicons()
  IPC.connectTo(InstanceType.bg)
  IPC.setupGlobalMessageListener()

  SetupPage.initialized()
}
main()
