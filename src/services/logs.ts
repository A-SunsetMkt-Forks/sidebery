/* eslint no-console: off */
import { NOID } from 'src/defaults'
import { InstanceType } from 'src/types'
import { getInstanceName } from './info.actions'

let _type = 'unknown'
let _winId = ''
let _tabId = ''

export function setInstanceType(type: InstanceType): void {
  _type = getInstanceName(type)
}

export function setWinId(id: ID): void {
  if (id !== NOID) _winId = `:${id}`
}

export function setTabId(id: ID): void {
  if (id !== NOID) _tabId = `:${id}`
}

export function info<T extends Array<unknown>>(msg: string, ...args: T): void {
  console.log(`[${_type}${_winId}${_tabId}] ${msg}`, ...args)
}

export function warn<T extends Array<unknown>>(msg: string, ...args: T): void {
  console.warn(`[${_type}${_winId}${_tabId}] ${msg}`, ...args)
}

export function err(msg: string, err?: unknown, ...args: Array<unknown>): void {
  msg = `[${_type}${_winId}${_tabId}] ${msg}\n`

  if (args.length) args.unshift('\n')

  if (err !== undefined) console.error(msg, err, ...args)
  else console.error(msg, ...args)
}
