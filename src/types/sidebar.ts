import { BookmarksPanelComponent, MediaState, ScrollBoxComponent } from '../types'
import { Tab } from './tabs'
import { Bookmark } from './bookmarks'

export interface NavBtn {
  id: ID
  class: NavItemClass
  type: ButtonType
  name?: string
  iconSVG?: string
  iconIMG?: string
  color?: string
  len?: number
  tooltip?: string
  sel?: boolean
  active?: boolean
}

export interface NavSpace {
  id: ID
  class: NavItemClass
  type: SpaceType
}

export type NavItem = Panel | NavBtn | NavSpace

export interface SidebarConfig {
  panels: Record<ID, PanelConfig>
  nav: ID[]
}

export const enum PanelType {
  bookmarks = 1,
  tabs = 2,
  history = 4,
  sync = 5,
}

export const enum ButtonType {
  settings = 100,
  add_tp = 101,
  search = 103,
  hidden = 104,
  create_snapshot = 105,
  remute_audio_tabs = 106,
  collapse = 107,
}

export const enum SpaceType {
  dynamic = 200,
  static = 201,
}

export type NavItemType = PanelType | ButtonType | SpaceType
export const NavItemTypeNames = {
  [PanelType.bookmarks]: 'bookmarks',
  [PanelType.tabs]: 'tabs',
  [PanelType.history]: 'history',
  [PanelType.sync]: 'sync',
  [ButtonType.settings]: 'settings',
  [ButtonType.add_tp]: 'add_tp',
  [ButtonType.search]: 'search',
  [ButtonType.hidden]: 'hidden',
  [ButtonType.create_snapshot]: 'create_snapshot',
  [ButtonType.remute_audio_tabs]: 'remute_audio_tabs',
  [ButtonType.collapse]: 'collapse',
  [SpaceType.dynamic]: 'dynamic',
  [SpaceType.static]: 'static',
}

export const enum NavItemClass {
  panel = 1,
  btn = 2,
  space = 3,
}
export const NavItemClassNames = {
  [NavItemClass.panel]: 'panel',
  [NavItemClass.btn]: 'btn',
  [NavItemClass.space]: 'space',
}

export const ButtonTypes: Record<string, ButtonType> = {
  settings: ButtonType.settings,
  search: ButtonType.search,
  add_tp: ButtonType.add_tp,
  hidden: ButtonType.hidden,
  collapse: ButtonType.collapse,
  create_snapshot: ButtonType.create_snapshot,
  remute_audio_tabs: ButtonType.remute_audio_tabs,
}
export const ButtonTypeNames = {
  [ButtonType.settings]: 'settings',
  [ButtonType.search]: 'search',
  [ButtonType.add_tp]: 'add_tp',
  [ButtonType.hidden]: 'hidden',
  [ButtonType.create_snapshot]: 'create_snapshot',
}

export const enum ItemBoundsType {
  Tab = 1,
  Bookmarks = 2,
  Header = 3,
}

export interface ItemBounds {
  type: ItemBoundsType
  id: ID
  index: number
  in: boolean
  lvl: number
  folded: boolean
  parent: ID
  start: number
  top: number
  center: number
  bottom: number
  end: number
}

export interface PanelBounds {
  scrollEl: HTMLElement
  topOffset: number
  leftOffset: number
  rightOffset: number
  bottomOffset: number
  items: ItemBounds[]
}

export interface SrcBookmarksPanelConfig {
  id: ID
  viewMode: string
  tempMode: boolean
  autoConvert: boolean
}

export interface SrcTabsPanelConfig {
  id: ID
  noEmpty: boolean
  newTabCtx: string
  dropTabCtx: string
  moveRules: TabToPanelMoveRuleConfig[]
  newTabBtns: string[]
}

interface PanelConfigCommonProps {
  id: ID
  name: string
  iconSVG: string
  iconIMG?: string
  iconIMGSrc?: string
  color: browser.ColorName
  skipOnSwitching: boolean
  lockedPanel: boolean
}

interface PanelCommonProps {
  class: NavItemClass.panel
  index: number
  topOffset: number
  leftOffset: number
  rightOffset: number
  bottomOffset: number
  scrollEl: HTMLElement | null
  scrollComponent: ScrollBoxComponent | null
  bounds: ItemBounds[]
  hidden: boolean
  ready: boolean
}

interface PanelCommonReactiveProps {
  name: string
  color: browser.ColorName
  iconSVG: string
  iconIMG?: string
  hidden: boolean
  tooltip: string
  sel: boolean
  len: number
  filteredLen?: number
  ready: boolean
}

///
/// Tabs panel
///
export interface TabsPanelConfig extends PanelConfigCommonProps {
  type: PanelType.tabs
  noEmpty: boolean
  newTabCtx: string
  dropTabCtx: string
  moveRules: TabToPanelMoveRuleConfig[]
  moveExcludedTo: ID
  bookmarksFolderId: ID
  newTabBtns: string[]
  srcPanelConfig: SrcBookmarksPanelConfig | null
}

export interface TabsPanel extends PanelCommonProps, TabsPanelConfig {
  type: PanelType.tabs
  tabs: Tab[]
  pinnedTabs: Tab[]
  filteredTabs?: Tab[]
  updatedTabs: ID[]
  selNewTab: boolean
  startTabIndex: number
  endTabIndex: number
  nextTabIndex: number
  scrollRetainer: number
  allDiscarded: boolean

  reactive: TabsPanelReactiveProps

  updateNewTabBtns?: (btns: string[]) => void
}

export interface TabsPanelReactiveProps extends PanelCommonReactiveProps {
  visibleTabIds: ID[]
  pinnedTabIds: ID[]

  updated: boolean
  selNewTab: boolean
  scrollRetainerHeight: number
  empty: boolean
  allDiscarded: boolean
  newTabCtx: string
  newTabBtns: string[]
  mediaState: MediaState
}

///
/// Bookmarks panel
///
export interface BookmarksPanelConfig extends PanelConfigCommonProps {
  type: PanelType.bookmarks
  rootId: ID
  viewMode: string
  tempMode: boolean
  autoConvert: boolean
  srcPanelConfig: SrcTabsPanelConfig | null
}

export interface BookmarksPanel extends PanelCommonProps, BookmarksPanelConfig {
  type: PanelType.bookmarks
  component?: BookmarksPanelComponent

  reactive: BookmarksPanelReactiveProps

  pathUp?: () => boolean
  pathDown?: () => boolean
}

export interface BookmarksPanelReactiveProps extends PanelCommonReactiveProps {
  bookmarks: Bookmark[]
  filteredBookmarks?: Bookmark[]
  viewMode: string
  rootOffset: number
}

///
/// History panel
///
export interface HistoryPanelConfig extends PanelConfigCommonProps {
  type: PanelType.history
  viewMode: string
  tempMode: boolean
}

export interface HistoryPanel extends PanelCommonProps, HistoryPanelConfig {
  type: PanelType.history

  reactive: PanelCommonReactiveProps
}

///
/// Sync panel
///
export interface SyncPanelConfig extends PanelConfigCommonProps {
  type: PanelType.sync
  viewMode: string
  tempMode: boolean
}

export interface SyncPanel extends PanelCommonProps, SyncPanelConfig {
  type: PanelType.sync

  reactive: PanelCommonReactiveProps
}

///
///
///

export interface ViewModeBtn {
  id: string
  icon: string
}

export type PanelConfig =
  | BookmarksPanelConfig
  | TabsPanelConfig
  | HistoryPanelConfig
  | SyncPanelConfig
export type Panel = BookmarksPanel | TabsPanel | HistoryPanel | SyncPanel

export interface TabToPanelMoveRuleConfig {
  id: ID
  active: boolean
  name?: string
  url?: string
  containerId?: string
  topLvlOnly?: boolean
}

export interface TabToPanelMoveRule {
  panelId: ID
  urlRE?: RegExp
  urlStr?: string
  containerId?: string
  topLvlOnly?: boolean
}

export const enum TabReopenRuleType {
  Include = 1,
  Exclude = 2,
}

export interface TabReopenRuleConfig {
  id: ID
  type: TabReopenRuleType
  active: boolean
  url: string
  name?: string
}

export interface TabReopenRule {
  containerId: string
  urlRE?: RegExp
  urlStr?: string
}
