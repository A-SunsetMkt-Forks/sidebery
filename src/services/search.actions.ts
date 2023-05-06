import * as Utils from 'src/utils'
import { BKM_ROOT_ID, MIN_SEARCH_QUERY_LEN, SEARCH_URL } from 'src/defaults'
import { Search } from 'src/services/search'
import { Settings } from 'src/services/settings'
import { Sidebar } from 'src/services/sidebar'
import * as SearchTabs from 'src/services/search.tabs'
import * as SearchBookmarks from 'src/services/search.bookmarks'
import * as SearchHistory from 'src/services/search.history'
import { BookmarksPanel, MenuType, Panel, SubPanelType } from 'src/types'
import * as IPC from './ipc'
import * as Logs from './logs'
import { Menu } from './menu'
import { Windows } from './windows'
import { History } from './history'
import { Bookmarks } from './bookmarks'

export const INPUT_TIMEOUT = 300

export function init(): void {
  if (Settings.state.searchBarMode === 'static') Search.reactive.barIsShowed = true
}

let inputTimeout: number | undefined
export function onOutsideSearchInput(value: string): void {
  if (!Windows.focused) return
  if (!Search.reactive.barIsShowed && Search.reactive.rawValue) Search.toggleBar()

  Search.reactive.rawValue = value

  clearTimeout(inputTimeout)
  inputTimeout = setTimeout(() => {
    Search.search(Search.reactive.rawValue)
  }, INPUT_TIMEOUT)
}

export function onOutsideSearchExit(): void {
  if (!Search.reactive.barIsShowed) return

  const sidebarFocused = document.hasFocus()
  if (!sidebarFocused) Search.close()
  else if (inputEl && inputEl !== document.activeElement) Search.reactive.barIsActive = false
}

export function next(): void {
  if (!Search.reactive.barIsShowed) return
  if (Menu.isOpen) return Menu.selectOption(1)

  const actPanel = Sidebar.panelsById[Sidebar.reactive.activePanelId]
  if (!actPanel) return

  if (Utils.isTabsPanel(actPanel)) {
    if (Sidebar.subPanelActive) {
      if (Sidebar.reactive.subPanelType === SubPanelType.Bookmarks && Sidebar.subPanels.bookmarks) {
        SearchBookmarks.onBookmarksSearchNext(Sidebar.subPanels.bookmarks)
      } else if (Sidebar.reactive.subPanelType === SubPanelType.History) {
        SearchHistory.onHistorySearchNext()
      }
    } else {
      SearchTabs.onTabsSearchNext(actPanel)
    }
  } else if (Utils.isBookmarksPanel(actPanel)) SearchBookmarks.onBookmarksSearchNext(actPanel)
  else if (Utils.isHistoryPanel(actPanel)) SearchHistory.onHistorySearchNext()
}

export function prev(): void {
  if (!Search.reactive.barIsShowed) return
  if (Menu.isOpen) return Menu.selectOption(-1)

  const actPanel = Sidebar.panelsById[Sidebar.reactive.activePanelId]
  if (!actPanel) return

  if (Utils.isTabsPanel(actPanel)) {
    if (Sidebar.subPanelActive) {
      if (Sidebar.reactive.subPanelType === SubPanelType.Bookmarks && Sidebar.subPanels.bookmarks) {
        SearchBookmarks.onBookmarksSearchPrev(Sidebar.subPanels.bookmarks)
      } else if (Sidebar.reactive.subPanelType === SubPanelType.History) {
        SearchHistory.onHistorySearchPrev()
      }
    } else {
      SearchTabs.onTabsSearchPrev(actPanel)
    }
  } else if (Utils.isBookmarksPanel(actPanel)) SearchBookmarks.onBookmarksSearchPrev(actPanel)
  else if (Utils.isHistoryPanel(actPanel)) SearchHistory.onHistorySearchPrev()
}

export function enter(): void {
  if (!Search.reactive.barIsShowed) return

  if (Menu.isOpen) {
    Menu.activateOption()
    Search.close()
    return
  }

  const actPanel = Sidebar.panelsById[Sidebar.reactive.activePanelId]
  if (!actPanel) return

  if (Utils.isTabsPanel(actPanel)) {
    if (Sidebar.subPanelActive) {
      if (Sidebar.reactive.subPanelType === SubPanelType.Bookmarks && Sidebar.subPanels.bookmarks) {
        SearchBookmarks.onBookmarksSearchEnter(actPanel, Sidebar.subPanels.bookmarks)
      } else if (Sidebar.reactive.subPanelType === SubPanelType.History) {
        SearchHistory.onHistorySearchEnter()
      }
    } else {
      SearchTabs.onTabsSearchEnter(actPanel)
    }
  } else if (Utils.isBookmarksPanel(actPanel)) SearchBookmarks.onBookmarksSearchEnter(actPanel)
  else if (Utils.isHistoryPanel(actPanel)) SearchHistory.onHistorySearchEnter()
}

let searchPrevPanelId: ID | undefined

export function bookmarks() {
  if (!Search.reactive.barIsShowed) return

  const actPanel = Sidebar.panelsById[Sidebar.reactive.activePanelId]

  // Try to open bookmarks sub-panel
  if (Utils.isTabsPanel(actPanel) && Settings.state.subPanelBookmarks) {
    if (
      Sidebar.subPanelActive &&
      Sidebar.reactive.subPanelType === SubPanelType.Bookmarks &&
      Sidebar.subPanels.bookmarks
    ) {
      const panel = Sidebar.subPanels.bookmarks
      if (panel.rootId !== BKM_ROOT_ID && panel.reactive.rootOffset === 0) {
        const folder = Bookmarks.reactive.byId[panel.rootId]
        if (folder) {
          const path = Bookmarks.getPath(folder)
          panel.reactive.rootOffset = path.length + 1
          Search.reset(panel)
          SearchBookmarks.onBookmarksSearch(actPanel, Sidebar.subPanels.bookmarks)
        }
      } else {
        Sidebar.closeSubPanel()
      }
    } else {
      Sidebar.openSubPanel(SubPanelType.Bookmarks, actPanel)
    }
  }

  // Try to open bookmarks panel
  else if (Sidebar.hasBookmarks) {
    let firstPanel: BookmarksPanel | undefined
    let nextPanel: BookmarksPanel | undefined | null
    let rootPanel: BookmarksPanel | undefined
    for (const p of Sidebar.panels) {
      if (Utils.isBookmarksPanel(p)) {
        if (!firstPanel) firstPanel = p
        if (!rootPanel && p.rootId === BKM_ROOT_ID) rootPanel = p
        if (nextPanel === null) nextPanel = p
        if (p.id === actPanel.id) nextPanel = null
      }
    }
    if (!firstPanel) return

    if (!Utils.isBookmarksPanel(actPanel)) {
      searchPrevPanelId = actPanel.id
      Sidebar.activatePanel(firstPanel.id)
    } else if (nextPanel) {
      Sidebar.activatePanel(nextPanel.id)
    } else if (searchPrevPanelId !== undefined) {
      Sidebar.activatePanel(searchPrevPanelId)
      searchPrevPanelId = undefined
    }
  }
}

export function history() {
  if (!Search.reactive.barIsShowed) return

  const actPanel = Sidebar.panelsById[Sidebar.reactive.activePanelId]

  // Try to open history sub-panel
  if (Utils.isTabsPanel(actPanel) && Settings.state.subPanelHistory) {
    if (Sidebar.subPanelActive && Sidebar.reactive.subPanelType === SubPanelType.History) {
      Sidebar.closeSubPanel()
    } else {
      Sidebar.openSubPanel(SubPanelType.History, actPanel)
    }
  }

  // Try to switch to history panel
  else if (Sidebar.hasHistory) {
    if (!Utils.isHistoryPanel(actPanel)) {
      searchPrevPanelId = actPanel.id
      Sidebar.activatePanel('history')
    } else if (searchPrevPanelId !== undefined) {
      Sidebar.activatePanel(searchPrevPanelId)
      searchPrevPanelId = undefined
    }
  }
}

export function selectAll(): void {
  if (!Search.reactive.barIsShowed) return
  if (Menu.isOpen) return

  const actPanel = Sidebar.panelsById[Sidebar.reactive.activePanelId]
  if (!actPanel) return

  if (Utils.isTabsPanel(actPanel)) SearchTabs.onTabsSearchSelectAll(actPanel)
  if (Utils.isBookmarksPanel(actPanel)) SearchBookmarks.onBookmarksSearchSelectAll(actPanel)
}

export function menu(): void {
  if (!Search.reactive.barIsShowed) return
  if (Menu.isOpen) return Menu.close()

  const actPanel = Sidebar.panelsById[Sidebar.reactive.activePanelId]
  if (!actPanel) return

  const el = document.getElementById('search_bar')
  const rect = el?.getBoundingClientRect()
  const y = (rect?.bottom ?? 8) + 88

  if (Utils.isTabsPanel(actPanel)) Menu.open(MenuType.Tabs, 16, y, true)
  if (Utils.isBookmarksPanel(actPanel)) Menu.open(MenuType.Bookmarks, 16, y, true)
}

let searchTimeout: number | undefined
export function searchDebounced(delay: number, value?: string) {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => search(value), delay)
}

let query = ''
export function search(value?: string): void {
  if (value !== undefined) {
    if (value.length < MIN_SEARCH_QUERY_LEN) value = ''
    if (Search.reactive.value === value) return

    Search.prevValue = Search.reactive.value
    Search.reactive.value = value
    query = value.toLowerCase()
  }

  const actPanel = Sidebar.panelsById[Sidebar.reactive.activePanelId]
  if (!actPanel) return

  if (Utils.isTabsPanel(actPanel)) {
    if (Sidebar.subPanelActive) {
      if (Sidebar.reactive.subPanelType === SubPanelType.Bookmarks && Sidebar.subPanels.bookmarks) {
        SearchBookmarks.onBookmarksSearch(actPanel, Sidebar.subPanels.bookmarks)
      } else if (Sidebar.reactive.subPanelType === SubPanelType.History) {
        SearchHistory.onHistorySearch()
      }
    } else {
      SearchTabs.onTabsSearch(actPanel)
    }
  } else if (Utils.isBookmarksPanel(actPanel)) SearchBookmarks.onBookmarksSearch(actPanel)
  else if (Utils.isHistoryPanel(actPanel)) SearchHistory.onHistorySearch()

  if (value === '') {
    for (const id of Sidebar.reactive.nav) {
      const panel = Sidebar.panelsById[id]
      if (panel && panel.id === actPanel.id) continue
      reset(panel)
    }

    if (Sidebar.subPanels.bookmarks) reset(Sidebar.subPanels.bookmarks)
  }
}

export function reset(panel?: Panel): void {
  if (Utils.isTabsPanel(panel)) {
    panel.filteredTabs = undefined
    panel.reactive.filteredTabs = undefined
    panel.reactive.filteredLen = undefined
  } else if (Utils.isBookmarksPanel(panel)) {
    panel.reactive.filteredBookmarks = undefined
    panel.reactive.filteredLen = undefined
  } else if (Utils.isHistoryPanel(panel)) {
    panel.reactive.filteredLen = undefined
    History.reactive.filtered = undefined
  }
}

export function stop(): void {
  if (Settings.state.searchBarMode === 'dynamic') Search.hideBar()
  Search.reactive.rawValue = ''
  Search.search('')
}

export function check(str: string): boolean {
  str = str.toLowerCase()
  return str.includes(query)
}

let inputEl: HTMLInputElement | undefined
export function registerInputEl(el: HTMLInputElement): void {
  inputEl = el
}

export function focus(): void {
  if (inputEl) inputEl.focus({ preventScroll: true })
}

export function toggleBar(): void {
  if (Search.reactive.barIsShowed) hideBar()
  else showBar()
}

export function showBar(): void {
  if (Settings.state.searchBarMode === 'none') return
  Search.reactive.barIsShowed = true
  focus()
}

export function hideBar(): void {
  IPC.sendToSearchPopup(Windows.id, 'closePopup')
  if (Settings.state.searchBarMode !== 'static') Search.reactive.barIsShowed = false
  if (Menu.isOpen) return Menu.close()
}

export function start(): void {
  if (Settings.state.searchBarMode === 'none') return

  const hasFocus = document.hasFocus()
  if (!hasFocus) {
    browser.browserAction.setPopup({ popup: SEARCH_URL })
    browser.browserAction.openPopup()
    Search.reactive.barIsActive = true

    // Reset browser action
    setTimeout(() => browser.browserAction.setPopup({ popup: null }), 500)
  }

  showBar()
}

export function close(): void {
  Search.reactive.barIsActive = false
  Search.reactive.rawValue = ''
  Search.search('')
  hideBar()
}
