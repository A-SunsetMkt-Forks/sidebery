import * as Utils from 'src/utils'
import { DEFAULT_SETTINGS } from 'src/defaults'
import * as SettingsActions from 'src/services/settings.actions'

export const Settings = {
  state: Utils.cloneObject(DEFAULT_SETTINGS),

  updateWinPrefaceOnPanelSwitch: false,

  rmChildTabsFolded: false,
  rmChildTabsAll: false,
  rmChildTabsNone: false,

  activateAfterClosingNone: false,
  activateAfterClosingNext: false,
  activateAfterClosingPrev: false,
  activateAfterClosingPrevAct: false,

  ...SettingsActions,
}
