import { EDITING_POPUP_URL, NOID } from 'src/defaults'
import { Settings } from './settings'
import { Tabs } from './tabs.fg'
import * as Utils from 'src/utils'
import { Windows } from './windows'
import { IPC } from './_services'

let inputEl: HTMLInputElement | null = null

export async function editTabTitle(tabIds: ID[]) {
  Tabs.sortTabIds(tabIds)

  const firstTabId = tabIds[0]
  const tab = Tabs.byId[firstTabId]
  if (!tab) return

  if (tab.pinned) {
    const ptp = Settings.state.pinnedTabsPosition
    if (!Settings.state.pinnedTabsList) return
    if (ptp === 'left' || ptp === 'right') return
  }

  const hasFocus = document.hasFocus()
  if (!hasFocus) openEditingPopup(tab.customTitle ?? tab.title, tab.title)

  Tabs.editableTabId = tab.id
  tab.reactive.customTitleEdit = true
  tab.reactive.customTitle = tab.customTitle ?? tab.title

  await Utils.sleep(1)

  const selector = `#tab${tab.id}` + ' .custom-title-input'
  inputEl = document.querySelector(selector) as HTMLInputElement | null
  if (!inputEl) return

  await Utils.sleep(1)

  inputEl.focus()
  inputEl.select()
}

export function saveCustomTitle(tabId: ID) {
  inputEl = null

  const tab = Tabs.byId[tabId]
  if (!tab) return

  let value = tab.reactive.customTitle
  if (value) value = value.trim()
  if (value === tab.title) value = ''

  const isGroup = Utils.isGroupUrl(tab.url)
  if (isGroup && value) {
    Tabs.setGroupName(tab.id, value)
    return
  } else {
    if (value) {
      tab.customTitle = value
      tab.reactive.customTitle = value
    } else {
      tab.customTitle = undefined
      tab.reactive.customTitle = null
    }
  }

  Tabs.saveTabData(tab.id)
  Tabs.cacheTabsData()
}

export function onOutsideEditingInput(value: string) {
  if (!Windows.focused) return

  const tab = Tabs.byId[Tabs.editableTabId]
  if (!tab) return

  if (!inputEl) {
    const selector = `#tab${Tabs.editableTabId}` + ' .custom-title-input'
    inputEl = document.querySelector(selector) as HTMLInputElement | null
  }
  if (!inputEl) return

  inputEl.value = value
  tab.reactive.customTitle = value
}

export function onOutsideEditingEnter() {
  IPC.sendToEditingPopup(Windows.id, 'closePopup')

  const tab = Tabs.byId[Tabs.editableTabId]
  if (!tab) return

  saveCustomTitle(Tabs.editableTabId)

  Tabs.editableTabId = NOID
  tab.reactive.customTitleEdit = false
}

export function onOutsideEditingExit() {
  IPC.sendToEditingPopup(Windows.id, 'closePopup')

  const tab = Tabs.byId[Tabs.editableTabId]
  if (!tab) return

  if (!inputEl) {
    const selector = `#tab${Tabs.editableTabId}` + ' .custom-title-input'
    inputEl = document.querySelector(selector) as HTMLInputElement | null
  }
  if (!inputEl) return

  inputEl.value = tab.title

  saveCustomTitle(Tabs.editableTabId)

  Tabs.editableTabId = NOID
  tab.reactive.customTitleEdit = false
}

function openEditingPopup(value: string, placeholder?: string) {
  const url = new URL(EDITING_POPUP_URL)
  url.searchParams.set('winId', Windows.id.toString())
  url.searchParams.set('value', value)
  if (placeholder) url.searchParams.set('placeholder', placeholder)
  browser.browserAction.setPopup({ popup: url.toString() })
  browser.browserAction.openPopup()

  // Reset browser action
  setTimeout(() => browser.browserAction.setPopup({ popup: null }), 500)
}

export function getEditingValue() {
  const tab = Tabs.byId[Tabs.editableTabId]
  if (!tab) return ''

  return tab.customTitle ?? tab.title
}
