import { GroupedTabInfo, GroupPin } from 'src/types'

export interface GroupMsg {
  index?: number
  len?: number
  windowId?: ID
  parentId?: ID
  title?: string
  tabs?: GroupedTabInfo[]
  pin?: GroupPin
  createdTab?: GroupedTabInfo
  updatedTab?: GroupedTabInfo
  removedTab?: ID
}
