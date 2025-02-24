import { NUM_1_RE, NUM_234_RE } from './dict.common'

export const sidebarTranslations: Translations = {
  // ---
  // -- Search
  // -
  'bar.search.placeholder': {
    en: 'Search...',
    de: 'Suche...',
    hu: 'Keresés…',
    pl: 'Szukaj...',
    ru: 'Поиск...',
    zh_CN: '搜索...',
    zh_TW: '搜尋...',
    ja: '検索...',
  },

  // ---
  // -- Confirm dialogs
  // -
  'confirm.warn_title': {
    en: 'Warning',
    de: 'Warnung',
    hu: 'Figyelmeztetés',
    pl: 'Ostrzeżenie',
    ru: 'Внимание',
    zh: '警告',
    ja: '警告',
  },
  'confirm.tabs_close_pre': {
    en: 'Are you sure you want to close ',
    de: 'Möchten Sie diese ',
    hu: 'Biztosan bezárható a lap: „',
    pl: 'jesteś pewnien, że chcesz zamknąć karty ',
    ru: 'Вы действительно хотите закрыть ',
    zh_CN: '您确定要关闭 ',
    zh_TW: '您確定要關閉 ',
    ja: '本当に閉じますか',
  },
  'confirm.tabs_close_post': {
    en: ' tabs?',
    de: ' Tabs wirklich schließen?',
    hu: '”?',
    pl: '?',
    ru: (n = 0) => (NUM_234_RE.test(n.toString()) ? ' вкладки?' : ' вкладок?'),
    zh_CN: ' 标签页吗？',
    zh_TW: ' 分頁嗎？',
    ja: 'のタブを閉じますか？',
  },
  'confirm.bookmarks_delete': {
    en: 'Are you sure you want to delete selected bookmarks?',
    de: 'Möchten Sie die gewählten Lesezeichen wirklich löschen?',
    hu: 'Biztosan törölhetők a kijelölt könyvjelzők?',
    pl: 'Jesteś pewien, że chcesz usunąć zaznaczone zakładki?',
    ru: 'Вы действительно хотите удалить выбранные закладки?',
    zh_CN: '您确定要删除选定的书签吗？',
    zh_TW: '您確定要刪除選定的書籤嗎？',
    ja: '選択したブックマークを削除してもよろしいですか？',
  },

  // ---
  // -- Panel
  // -
  'panel.nothing_found': {
    en: 'Nothing found',
    de: 'Nichts gefunden',
    hu: 'Nincs találat',
    pl: 'Nic nie znaleziono',
    ru: 'Ничего не найдено',
    zh: '未找到',
    ja: '何も見つかりません',
  },
  'panel.nothing': {
    en: 'Nothing...',
    de: 'Nichts...',
    hu: 'Nincs…',
    pl: 'Nic...',
    ru: 'Ничего...',
    zh_CN: '无...',
    zh_TW: '無...',
    ja: '何も...',
  },

  // ---
  // -- History panel
  // -
  'panel.history.fav_tooltip': {
    en: 'Show history of this site',
    de: 'Zeige Chronik dieser Seite',
    hu: 'Ennek az oldalnak az előzményei',
    pl: 'Pokaż historię tej strony',
    ru: 'Показать историю этого сайта',
    zh_CN: '显示该站点的历史记录',
    zh_TW: '顯示此網站的歷史紀錄',
    ja: 'このサイトの履歴を表示',
  },
  'panel.history.show_more': {
    en: '...hidden visits:',
    de: '...ausgeblendete Besuche:',
    hu: '…rejtett látogatások:',
    pl: '...ukryte wizyty:',
    ru: '...скрытых записей:',
    zh_CN: '...隐藏的访问：',
    zh_TW: '...隱藏的紀錄：',
    ja: '...非表示の訪問:',
  },

  // ---
  // -- New tab bar
  // -
  'newTabBar.new_tab': {
    en: 'Open a new tab',
    de: 'Öffne einen neuen Tab',
    hu: 'Új lap',
    pl: 'Otwórz nową kartę',
    ru: 'Открыть новую вкладку',
    zh_CN: '打开一个新标签页',
    zh_TW: '開啟一個新分頁',
    ja: '新しいタブを開く',
  },
  'newTabBar.in_default_container': {
    en: ' in default container',
    de: ' in der Standardumgebung',
    hu: ' az alapértelmezett konténerben',
    pl: ' w domyślnym kontenerze',
    ru: ' в стандартном контейнере',
    zh_CN: ' 在默认容器中',
    zh_TW: ' 在預設容器中',
    ja: 'デフォルトのコンテナで',
  },
  'newTabBar.in_container_prefix': {
    en: ' in "',
    de: ' in der Umgebung "',
    hu: ' ebben a konténerben: „',
    pl: ' w kontenerze "',
    ru: ' в контейнере "',
    zh_CN: ' 在 "',
    zh_TW: ' 在「',
    ja: '「',
  },
  'newTabBar.in_container_postfix': {
    en: '" container',
    de: '"',
    hu: '”',
    pl: '"',
    ru: '"',
    zh_CN: '" 容器中',
    zh_TW: '」容器中',
    ja: '」コンテナ',
  },
  'newTabBar.mid_child': {
    en: 'Middle click: Open a child tab',
    de: 'Mittelklick: Öffne einen untergeordneten Tab',
    hu: 'Középső kattintás: új utódlap',
    pl: 'Środkowy przycisk myszy: Otwórz potomną kartę',
    ru: 'Средняя кнопка мыши: Открыть новую дочернюю вкладку',
    zh_CN: '中键单击：打开子标签页',
    zh_TW: '中鍵點選：開啟子分頁',
    ja: '中クリック：子タブを開く',
  },
  'newTabBar.mid_reopen': {
    en: 'Middle click: Reopen active tab',
    de: 'Mittelklick: Aktiven Tab erneut öffnen',
    hu: 'Középső kattintás: az aktív lap újranyitása',
    pl: 'Środkowy przycisk myszy: Przeładuj aktywną kartę',
    ru: 'Средняя кнопка мыши: Переоткрыть активную вкладку',
    zh_CN: '中键点击：重新打开活动标签页',
    zh_TW: '中鍵點選：重新開啟當前分頁',
    ja: '中クリック：アクティブタブを再度開く',
  },

  // ---
  // -- Popups
  // -
  // - Tabs panel removing
  'popup.tabs_panel_removing.title': {
    en: 'Removing panel',
    de: 'Entferne Panel',
    hu: 'Panel törlése',
    pl: 'Usuwanie panelu',
    ru: 'Удаление панели',
    zh: '移除面板',
    ja: 'パネルの削除',
  },
  'popup.tabs_panel_removing.attach': {
    en: 'Attach tabs to neighbour panel',
    de: 'Tabs an benachbartes Panel anheften',
    hu: 'Lapok hozzáfűzése a szomszédos panelhoz',
    pl: 'Załącz karty do sąsiednego panelu',
    ru: 'Присоединить вкладки к соседней панели',
    zh_CN: '将标签页附加到相邻面板',
    zh_TW: '將分頁附加到相鄰面板',
    ja: 'タブを隣接するパネルにアタッチする',
  },
  'popup.tabs_panel_removing.leave': {
    en: 'Leave tabs untouched',
    de: 'Tabs behalten',
    hu: 'A lapok ne változzanak',
    pl: 'Zostaw karty nienaruszone',
    ru: 'Оставить вкладки',
    zh_CN: '保持标签页不变',
    zh_TW: '保持分頁不變',
    ja: 'タブをそのままにする',
  },
  'popup.tabs_panel_removing.save': {
    en: 'Save panel to bookmarks and close tabs',
    de: 'Panel in Lesezeichen speichern und Tabs schließen',
    hu: 'A panel könyvjelzőzése és a lapok bezárása',
    pl: 'Zapisz panel do zakładek i zamknij karty',
    ru: 'Сохранить панель в закладки и закрыть вкладки',
    zh_CN: '将面板保存到书签并关闭标签页',
    zh_TW: '將面板儲存到書籤並關閉分頁',
    ja: 'パネルをブックマークに保存してタブを閉じる',
  },
  'popup.tabs_panel_removing.close': {
    en: 'Close tabs',
    de: 'Tabs schließen',
    hu: 'Lapok bezárása',
    pl: 'Zamknij karty',
    ru: 'Закрыть вкладки',
    zh_CN: '关闭标签页',
    zh_TW: '關閉分頁',
    ja: 'タブを閉じる',
  },
  'popup.tabs_panel_removing.other_win_note': {
    en: 'Note: Tabs of this panel in other windows will be moved to the neighbour panel',
    de: 'Tabs dieses Panels in anderen Fenstern werden zum benachbarten Panel oder nach links verschoben',
    hu: 'Megjegyzés: A panel más ablakban lévő lapjai át lesznek helyezve a szomszédos panelra',
    pl: 'Info: Karty tego panelu w innych oknach zostaną przeniesione do sąsiednich paneli',
    ru: 'Вкладки этой панели в других окнах будут перемещены на соседнюю панель',
    zh_CN: '注意：此面板在其他窗口中的标签页将移动到相邻面板或左侧',
    zh_TW: '注意：其他視窗中屬於此面板的分頁將附加到相鄰面板',
    ja: '注意：他のウィンドウのこのパネルのタブは隣接するパネルに移動されます',
  },
  // - What to do with old unused bookmarks on saving tabs panel
  'popup.wtdwOldBookmarks.title': {
    en: folderName => `Tabs have been saved in "${folderName}" folder`,
    de: folderName => `Tabs wurden im Ordner "${folderName}" gespeichert`,
    hu: folderName => `A lapok ebbe a mappába lesznek mentve: „${folderName}”`,
    pl: folderName => `Karty zostaną zapisane w folderze "${folderName}"`,
    ru: folderName => `Вкладки были сохранены в папке "${folderName}"`,
    zh_CN: folderName => `标签页已保存在 "${folderName}" 文件夹中`,
    zh_TW: folderName => `分頁已儲存在「${folderName}」資料夾中`,
    ja: folderName => `タブは「${folderName}」フォルダに保存されました`,
  },
  'popup.wtdwOldBookmarks.note': {
    en: 'Delete old bookmarks in that folder?',
    de: 'Alte Lesezeichen in diesem Ordner löschen?',
    hu: 'Törölhetők a régi könyvjelzők ebből a mappából?',
    pl: 'Usunąć stare zakładki w tym folderze?',
    ru: 'Удалить старые закладки в этой папке?',
    zh_CN: '删除该文件夹中的旧书签？',
    zh_TW: '刪除該資料夾中的舊書籤？',
    ja: 'そのフォルダ内の古いブックマークを削除しますか？',
  },
  'popup.wtdwOldBookmarks.checkbox_label': {
    en: "Remember and don't ask again",
    de: 'Merken und nicht erneut fragen',
    hu: 'A válasz megjegyzése, ne kérdezze többször',
    pl: 'Zapamiętaj i nie pytaj ponownie',
    ru: 'Запомнить и больше не спрашивать',
    zh_CN: '记住，不要再问',
    zh_TW: '記住，不再詢問',
    ja: '覚えておいて、もう一度尋ねない',
  },
  'popup.wtdwOldBookmarks.delete': {
    en: 'Delete',
    de: 'Löschen',
    hu: 'Törlés',
    pl: 'Usuń',
    ru: 'Удалить',
    zh_CN: '删除',
    zh_TW: '刪除',
    ja: '削除',
  },
  'popup.wtdwOldBookmarks.keep': {
    en: 'Keep',
    de: 'Behalten',
    hu: 'Megtartás',
    pl: 'Zostaw',
    ru: 'Оставить',
    zh: '保留',
    ja: '保持',
  },
  // - Container config popup
  'popup.container.title': {
    en: 'Container',
    de: 'Umgebung',
    hu: 'Konténer',
    pl: 'Kontener',
    ru: 'Контейнер',
    zh: '容器',
    ja: 'コンテナ',
  },
  'popup.container.name_placeholder': {
    en: 'Container name',
    de: 'Umgebungsname',
    hu: 'Konténernév',
    pl: 'Nazwa kontenera',
    ru: 'Название контейнера',
    zh_CN: '容器名称',
    zh_TW: '容器名稱',
    ja: 'コンテナ名',
  },
  // - Panel config popup
  'popup.tabs_panel.title': {
    en: 'Tabs panel',
    de: 'Tab-Panel',
    hu: 'Lappanel',
    pl: 'Panel kart',
    ru: 'Панель вкладок',
    zh_CN: '标签页面板',
    zh_TW: '分頁面板',
    ja: 'タブパネル',
  },
  'popup.bookmarks_panel.title': {
    en: 'Bookmarks panel',
    de: 'Lesezeichen-Panel',
    hu: 'Könyvjelzőpanel',
    pl: 'Panel zakładek',
    ru: 'Панель закладок',
    zh_CN: '书签面板',
    zh_TW: '書籤面板',
    ja: 'ブックマークパネル',
  },
  'popup.common.name_label': {
    en: 'Name',
    de: 'Name',
    hu: 'Név',
    pl: 'Nazwa',
    ru: 'Имя',
    zh_CN: '名称',
    zh_TW: '名稱',
    ja: '名前',
  },
  'popup.common.icon_label': {
    en: 'Icon',
    de: 'Symbol',
    hu: 'Ikon',
    pl: 'Symbol',
    ru: 'Иконка',
    zh_CN: '图标',
    zh_TW: '圖示',
    ja: 'アイコン',
  },
  'popup.common.color_label': {
    en: 'Color',
    de: 'Farbe',
    hu: 'Szín',
    pl: 'Kolor',
    ru: 'Цвет',
    zh_CN: '颜色',
    zh_TW: '顏色',
    ja: '色',
  },
  'popup.common.btn_more': {
    en: 'More options...',
    de: 'Weitere Optionen...',
    hu: 'További beállítások…',
    pl: 'Więcej opcji...',
    ru: 'Больше опций...',
    zh_CN: '更多选项...',
    zh_TW: '更多選項...',
    ja: 'その他のオプション...',
  },
  // - Group config popup
  'popup.group_config.popup_title': {
    en: 'Group',
    de: 'Gruppe',
    hu: 'Csoportosítás',
    pl: 'Grupa',
    ru: 'Группа',
    zh_CN: '组',
    zh_TW: '群組',
    ja: 'グループ',
  },
  'popup.group_config.title': {
    en: 'Title',
    de: 'Name',
    hu: 'Név',
    pl: 'Tytuł',
    ru: 'Название',
    zh_CN: '标题',
    zh_TW: '標題',
    ja: 'タイトル',
  },
  'popup.group_config.title_placeholder': {
    en: 'Group title',
    de: 'Gruppenname',
    hu: 'Csoportnév',
    pl: 'Tytuł grupy',
    ru: 'Название группы',
    zh_CN: '组标题',
    zh_TW: '群組標題',
    ja: 'グループタイトル',
  },
  'popup.group_config.do_not_show_again': {
    en: "Don't show again",
    de: 'Nicht mehr anzeigen',
    hu: 'Ne mutassa újra',
    pl: 'Nie pokazuj ponownie',
    ru: 'Больше не показывать',
    zh_CN: '不再显示',
    zh_TW: '不再顯示',
    ja: '再表示しない',
  },

  // ---
  // -- Sub-panels
  // -
  'sub_panel.bookmarks_panel.title': {
    en: 'Bookmarks',
    de: 'Lesezeichen',
    hu: 'Könyvjelzők',
    pl: 'Zakładki',
    ru: 'Закладки',
    zh_CN: '书签',
    zh_TW: '書籤',
    ja: 'ブックマーク',
  },
  'sub_panel.bookmarks_panel.root_title': {
    en: 'All Bookmarks',
    de: 'Alle Lesezeichen',
    hu: 'Minden könyvjelző',
    pl: 'Wszystkie zakładki',
    ru: 'Все закладки',
    zh_CN: '全部书签',
    zh_TW: '全部書籤',
    ja: 'すべてのブックマーク',
  },
  'sub_panel.rct_panel.title': {
    en: 'Recently closed tabs',
    de: 'Zuletzt geschlossene Tabs',
    hu: 'Legutóbb bezárt lapok',
    pl: 'Ostatnio zamknięte karty',
    ru: 'Недавно закрытые вкладки',
    zh_CN: '最近关闭的标签页',
    zh_TW: '最近關閉的分頁',
    ja: '最近閉じたタブ',
  },
  'sub_panel.history_panel.title': {
    en: 'History',
    de: 'Chronik',
    hu: 'Előzmények',
    pl: 'Historia',
    ru: 'История',
    zh_CN: '历史',
    zh_TW: '歷史',
    ja: '履歴',
  },

  // ---
  // -- Drag and Drop tooltips
  // -
  'dnd.tooltip.bookmarks_panel': {
    en: 'Bookmarks panel',
    de: 'Lesezeichen-Panel',
    hu: 'Könyvjelzőpanel',
    pl: 'Panel zakładek',
    ru: 'Панель закладок',
    zh_CN: '书签面板',
    zh_TW: '書籤面板',
    ja: 'ブックマークパネル',
  },
  'dnd.tooltip.tabs_panel': {
    en: 'panel',
    de: 'Panel',
    ru: 'панель',
    zh: '面板',
    ja: 'パネル',
  },
  'dnd.tooltip.tabs': {
    en: 'tabs',
    de: 'Tabs',
    hu: 'lap',
    pl: (n = 0) => {
      if (NUM_1_RE.test(n.toString())) return 'karta'
      if (NUM_234_RE.test(n.toString())) return 'karty'
      return 'kart'
    },
    ru: (n = 0) => {
      if (NUM_1_RE.test(n.toString())) return 'вкладка'
      if (NUM_234_RE.test(n.toString())) return 'вкладки'
      return 'вкладок'
    },
    zh_CN: '标签页',
    zh_TW: '分頁',
    ja: 'タブ',
  },
  'dnd.tooltip.bookmarks': {
    en: 'bookmarks',
    de: 'Lesezeichen',
    hu: 'könyvjelző',
    pl: (n = 0) => {
      if (NUM_1_RE.test(n.toString())) return 'zakładka'
      if (NUM_234_RE.test(n.toString())) return 'zakładki'
      return 'zakładek'
    },
    ru: (n = 0) => {
      if (NUM_1_RE.test(n.toString())) return 'закладка'
      if (NUM_234_RE.test(n.toString())) return 'закладки'
      return 'закладок'
    },
    zh_CN: '书签',
    zh_TW: '書籤',
    ja: 'ブックマーク',
  },
  'dnd.tooltip.nav_item': {
    en: 'Navigation element',
    de: 'Navigationselement',
    hu: 'Vezérlőelem',
    pl: 'Element nawigacyjny',
    ru: 'Элемент навигации',
    zh_CN: '导航元素',
    zh_TW: '導覽元件',
    ja: 'ナビゲーション要素',
  },
  'dnd.tooltip.new_tab': {
    en: 'New tab',
    de: 'Neuer Tab',
    hu: 'Új lap',
    pl: 'Nowa karta',
    ru: 'Новая вкладка',
    zh_CN: '新标签页',
    zh_TW: '新分頁',
    ja: '新しいタブ',
  },

  // ---
  // -- Navigation bar
  // -
  'nav.show_hidden_tooltip': {
    en: 'Show hidden panels',
    de: 'Versteckte Panels anzeigen',
    hu: 'Rejtett panelok megjelenítése',
    pl: 'Pokaż ukryte panele',
    ru: 'Показать скрытые панели',
    zh_CN: '显示隐藏的面板',
    zh_TW: '顯示隱藏的面板',
    ja: '非表示パネルを表示',
  },
  'nav.btn_settings': {
    en: 'Settings',
    de: 'Einstellungen',
    hu: 'Beállítások',
    pl: 'Ustawienia',
    ru: 'Настройки',
    zh_CN: '设置',
    zh_TW: '設定',
    ja: '設定',
  },
  'nav.btn_add_tp': {
    en: 'Create tabs panel',
    de: 'Tab-Panel erstellen',
    hu: 'Új lappanel',
    pl: 'Stwórz panel kart',
    ru: 'Создать панель вкладок',
    zh_CN: '创建标签页面板',
    zh_TW: '建立分頁面板',
    ja: 'タブパネルを作成',
  },
  'nav.btn_search': {
    en: 'Search',
    de: 'Suchen',
    hu: 'Keresés',
    pl: 'Szukaj',
    ru: 'Поиск',
    zh_CN: '搜索',
    zh_TW: '搜尋',
    ja: '検索',
  },
  'nav.btn_create_snapshot': {
    en: 'Create snapshot',
    de: 'Schnappschuss erstellen',
    hu: 'Pillanatkép készítése',
    pl: 'Stwórz migawkę',
    ru: 'Создать снепшот',
    zh_CN: '创建快照',
    zh_TW: '建立快照',
    ja: 'スナップショットを作成',
  },
  'nav.btn_remute_audio_tabs': {
    en: 'Mute/Unmute audible tabs',
    de: 'Stummschalten hörbarer Tabs an/aus',
    hu: 'Lapok némítása/visszahangosítása',
    pl: 'Wycisz/Odcisz karty z dźwiękiem',
    ru: 'Приглушить/Включить вкладки со звуком',
    zh_CN: '静音/取消静音有声标签页',
    zh_TW: '靜音/取消靜音有聲分頁',
    ja: 'ミュート/ミュート解除可能なタブ',
  },
  'nav.btn_collapse': {
    en: 'Collapse all',
    de: 'Alle einklappen',
    hu: 'Minden ág becsukása',
    pl: 'Zwiń wszystko',
    ru: 'Свернуть все',
    zh_CN: '全部折叠',
    zh_TW: '全部折疊',
    ja: 'すべて折りたたむ',
  },
  'nav.tabs_panel_tooltip_mid_rm_all': {
    en: 'Middle click: Close tabs',
    de: 'Mittelklick: Schließe Tabs',
    hu: 'Középső kattintás: lapok bezárása',
    pl: 'Środkowy przycisk myszy: Zamknij karty',
    ru: 'Средняя кнопка мыши: Закрыть влкадки',
    zh_CN: '中键点击：关闭全部标签页',
    zh_TW: '中鍵點選：關閉全部分頁',
    ja: '中クリック：タブを閉じる',
  },
  'nav.tabs_panel_tooltip_mid_rm_rmp': {
    en: 'Middle click: Close tabs and remove panel',
    de: 'Mittelklick: Schließe Tabs und entferne Panel',
    hu: 'Középső kattintás: lapok bezárása és a panel törlése',
    pl: 'Środkowy przycisk myszy: Zamknij karty i usuń panel',
    ru: 'Средняя кнопка мыши: Закрыть вкладки и удалить панель',
    zh_CN: '中键点击：关闭标签页并移除面板',
    zh_TW: '中鍵點選：關閉分頁並移除面板',
    ja: '中クリック：タブを閉じてパネルを削除',
  },
  'nav.tabs_panel_tooltip_mid_rm_act_tab': {
    en: 'Middle click: Close active tab',
    de: 'Mittelklick: Schließe aktiven Tab',
    hu: 'Középső kattintás: az aktív lap bezárása',
    pl: 'Środkowy przycisk myszy: Zamknij aktywną kartę',
    ru: 'Средняя кнопка мыши: Закрыть активную вкладку',
    zh_CN: '中键单击：关闭活动标签页',
    zh_TW: '中鍵點選：關閉當前分頁',
    ja: '中クリック：アクティブなタブを閉じる',
  },
  'nav.tabs_panel_tooltip_mid_discard': {
    en: 'Middle click: Unload tabs',
    de: 'Mittelklick: Entlade Tabs',
    hu: 'Középső kattintás: lapok kisöprése',
    pl: 'Środkowy przycisk myszy: Uśpij karty',
    ru: 'Средняя кнопка мыши: Выгрузить вкладки',
    zh_CN: '中键单击：卸载标签页',
    zh_TW: '中鍵點選：卸載分頁',
    ja: '中クリック：タブをアンロード',
  },
  'nav.tabs_panel_tooltip_mid_hide': {
    en: 'Middle click: Hide panel',
    de: 'Mittelklick: Verberge Panel',
    hu: 'Középső kattintás: panel elrejtése',
    pl: 'Środkowy przycisk myszy: Ukryj panel',
    ru: 'Средняя кнопка мыши: Скрыть панель',
    zh_CN: '中键单击：隐藏面板',
    zh_TW: '中鍵點選：隱藏面板',
    ja: '中クリック：パネルを非表示',
  },
  'nav.tabs_panel_tooltip_mid_bookmark': {
    en: 'Middle click: Save to bookmarks',
    de: 'Mittelklick: Als Lesezeichen speichern',
    hu: 'Középső kattintás: könyvjelzőzés',
    pl: 'Środkowy przycisk myszy: Zapisz do zakładek',
    ru: 'Средняя кнопка мыши: Сохранить в закладки',
    zh_CN: '中键点击：保存到书签',
    zh_TW: '中鍵點選：儲存到書籤',
    ja: '中クリック：ブックマークに保存',
  },
  'nav.tabs_panel_tooltip_mid_bkm_rmp': {
    en: 'Middle click: Save to bookmarks and remove panel',
    de: 'Mittelklick: Als Lesezeichen speichern und Panel entfernen',
    hu: 'Középső kattintás: könyvjelzőzés és a panel törlése',
    pl: 'Środkowy przycisk myszy: Zapisz do zakładek i usuń panel',
    ru: 'Средняя кнопка мыши: Сохранить в закладки и удалить панель',
    zh_CN: '中键点击：保存到书签并移除面板',
    zh_TW: '中鍵點選：儲存到書籤並移除面板',
    ja: '中クリック：ブックマークに保存してパネルを削除',
  },
  'nav.tabs_panel_tooltip_mid_convert': {
    en: 'Middle click: Convert to bookmarks panel',
    de: 'Mittelklick: In Lesezeichen-Panel umwandeln',
    hu: 'Középső kattintás: átalakítás könyvjelzőpanellá',
    pl: 'Środkowy przycisk myszy: Konwertuj do panelu zakładek',
    ru: 'Средняя кнопка мыши: Конвертировать в панель закладок',
    zh_CN: '中键单击：转换到书签面板',
    zh_TW: '中鍵點選：轉換到書籤面板',
    ja: '中クリック：ブックマークパネルに変換',
  },
  'nav.tabs_panel_tooltip_mid_conv_hide': {
    en: 'Middle click: Convert to bookmarks and hide panel',
    de: 'Mittelklick: In Lesezeichen umwandeln und Panel verbergen',
    hu: 'Középső kattintás: könyvjelzőzés és a panel elrejtése',
    pl: 'Środkowy przycisk myszy: Konwertuj do panelu zakładek i ukryj panel',
    ru: 'Средняя кнопка мыши: Конвертировать в панель закладок и скрыть',
    zh_CN: '中键单击：转换为书签并隐藏面板',
    zh_TW: '中鍵點選：轉換為書籤並隱藏面板',
    ja: '中クリック：ブックマークに変換してパネルを非表示',
  },
  'nav.bookmarks_panel_tooltip_mid_convert': {
    en: 'Middle click: Convert to tabs panel',
    de: 'Mittelklick: In Tab-Panel umwandeln',
    hu: 'Középső kattintás: átalakítás lappanellá',
    pl: 'Środkowy przycisk myszy: Konwertuj do panelu kart',
    ru: 'Средняя кнопка мыши: Конвертировать в панель вкладок',
    zh_CN: '中键单击：转换为标签页面板',
    zh_TW: '中鍵點選：轉換為分頁面板',
    ja: '中クリック：タブパネルに変換',
  },

  // ---
  // -- Notifications
  // -
  'notif.hide_tooltip': {
    en: 'Hide notification',
    de: 'Benachrichtigung verbergen',
    hu: 'Értesítés elrejtése',
    pl: 'Ukryj powiadomienie',
    ru: 'Скрыть уведомление',
    zh_CN: '隐藏通知',
    zh_TW: '隱藏通知',
    ja: '通知を非表示',
  },
  'notif.undo_ctrl': {
    en: 'Undo',
    de: 'Rückgängig',
    hu: 'Visszavonás',
    pl: 'Cofnij',
    ru: 'Восстановить',
    zh_CN: '撤消',
    zh_TW: '復原',
    ja: '元に戻す',
  },
  'notif.tabs_rm_post': {
    en: ' tabs closed',
    de: 'Tabs geschlossen',
    hu: ' lap be lett zárva',
    pl: (n = 0): string => {
      if (NUM_1_RE.test(n.toString())) return ' karta zamknięta'
      if (NUM_234_RE.test(n.toString())) return ' karty zamknięte'
      return ' kart zamknięte'
    },
    ru: (n = 0): string => {
      if (NUM_1_RE.test(n.toString())) return ' вкладка закрыта'
      if (NUM_234_RE.test(n.toString())) return ' вкладки закрыты'
      return ' вкладок закрыто'
    },
    zh_CN: ' 标签页已关闭',
    zh_TW: ' 分頁已關閉',
    ja: ' タブが閉じられました',
  },
  'notif.bookmarks_create_err': {
    en: 'Cannot create bookmark',
    de: 'Lesezeichen konnte nicht erstellt werden',
    hu: 'Nem sikerült könyvjelzőzni',
    pl: 'Nie można stworzyć zakładki',
    ru: 'Невозможно создать закладку',
    zh_CN: ' 无法创建书签',
    zh_TW: ' 無法建立書籤',
    ja: ' ブックマークを作成できません',
  },
  'notif.bookmarks_rm_post': {
    en: n => (n === 1 ? ' bookmark removed' : ' bookmarks removed'),
    de: 'Lesezeichen entfernt',
    hu: ' könyvjelző törölve lett',
    pl: (n = 0): string => {
      if (NUM_1_RE.test(n.toString())) return ' zakładka usunięta'
      if (NUM_234_RE.test(n.toString())) return ' zakładki usunięte'
      return ' zakładek usuniętych'
    },
    ru: (n = 0): string => {
      if (NUM_1_RE.test(n.toString())) return ' закладка удалена'
      if (NUM_234_RE.test(n.toString())) return ' закладки удалены'
      return ' закладок удалено'
    },
    zh_CN: ' 书签已删除',
    zh_TW: ' 書籤已刪除',
    ja: ' ブックマークが削除されました',
  },
  'notif.bookmarks_sort': {
    en: 'Sorting bookmarks...',
    de: 'Sortiere Lesezeichen...',
    hu: 'Könyvjelzők rendezése…',
    pl: 'Sortowanie zakładek...',
    ru: 'Сортировка закладок...',
    zh_CN: '书签排序',
    zh_TW: '書籤排序',
    ja: 'ブックマークをソートしています...',
  },
  'notif.tabs_sort': {
    en: 'Sorting tabs...',
    de: 'Sortiere Tabs...',
    hu: 'Lapok rendezése…',
    pl: 'Sortowanie kart...',
    ru: 'Сортировка вкладок...',
    zh_CN: '排序标签页...',
    zh_TW: '排序分頁...',
    ja: 'タブをソートしています...',
  },
  'notif.snapshot_created': {
    en: 'Snapshot created',
    de: 'Schnappschuss erstellt',
    hu: 'Pillanatkép készült',
    pl: 'Migawka utworzona',
    ru: 'Снепшот создан',
    zh_CN: '快照已创建',
    zh_TW: '快照已建立',
    ja: 'スナップショットが作成されました',
  },
  'notif.view_snapshot': {
    en: 'View',
    de: 'Ansehen',
    hu: 'Megtekintés',
    pl: 'Widok',
    ru: 'Посмотреть',
    zh_CN: '查看',
    zh_TW: '檢視',
    ja: '表示',
  },
  'notif.tabs_err': {
    en: 'Wrong tabs position detected',
    de: 'Falsche Tab-Position erkannt',
    hu: 'A program a lapok helytelen állapotát észlelte',
    pl: 'Wykryto niepoprawne położenie karty',
    ru: 'Обнаружено неправильное положение вкладок',
    zh_CN: '检测到错误的标签页位置',
    zh_TW: '偵測到錯誤的分頁位置',
    ja: '不正なタブの位置が検出されました',
  },
  'notif.tabs_err_fix': {
    en: 'Update tabs',
    de: 'Tabs aktualisieren',
    hu: 'Lapok frissítése',
    pl: 'Zaaktualizuj karty',
    ru: 'Обновить вкладки',
    zh_CN: '更新标签页',
    zh_TW: '更新分頁',
    ja: 'タブを更新',
  },
  'notif.tabs_reloading': {
    en: 'Reloading tabs',
    de: 'Tabs neu laden',
    hu: 'Lapok újratöltése',
    pl: 'Przeładowywanie kart',
    ru: 'Перезагрузка вкладок',
    zh_CN: '重新加载标签页',
    zh_TW: '重新載入分頁',
    ja: 'タブを再読み込みしています...',
  },
  'notif.tabs_reloading_stop': {
    en: 'Stop',
    de: 'Stopp',
    hu: 'Állj',
    pl: 'Zatrzymaj',
    ru: 'Остановить',
    zh: '停止',
    ja: '停止',
  },
  'notif.tabs_panel_saving_bookmarks': {
    en: 'Saving to bookmarks...',
    de: 'Speichere in Lesezeichen...',
    hu: 'Mentés könyvjelzőbe…',
    pl: 'Zapisywanie do zakładek...',
    ru: 'Сохранение в закладки...',
    zh_CN: '保存到书签...',
    zh_TW: '儲存到書籤...',
    ja: 'ブックマークに保存しています...',
  },
  'notif.tabs_panel_saved_bookmarks': {
    en: 'Panel saved',
    de: 'Panel gespeichert',
    hu: 'A panel mentése kész',
    pl: 'Panel zapisany',
    ru: 'панель сохранена в',
    zh_CN: '面板已保存',
    zh_TW: '面板已儲存',
    ja: 'パネルが保存されました',
  },
  'notif.tabs_panel_updated_bookmarks': {
    en: 'Bookmarks updated',
    de: 'Lesezeichen aktualisiert',
    hu: 'A könyvjelzők frissítése kész',
    pl: 'Zakładki zaktualizowane',
    ru: 'закладки обновлены в',
    zh_CN: '书签已更新',
    zh_TW: '書籤已更新',
    ja: 'ブックマークが更新されました',
  },
  'notif.converting': {
    en: 'Converting...',
    de: 'Konvertiere...',
    hu: 'Átalakítás…',
    pl: 'Konwertowanie...',
    ru: 'Конвертация...',
    zh_CN: '转换中...',
    zh_TW: '轉換中...',
    ja: '変換中...',
  },
  'notif.tabs_panel_to_bookmarks_err': {
    en: 'Cannot save tabs panel to bookmarks',
    de: 'Tab-Panel konnte nicht in Lesezeichen gespeichert werden',
    hu: 'Nem sikerült könyvjelzőzni a lappanelt',
    pl: 'Nie można zapisać panelu kart do zakładek',
    ru: 'Невозможно сохранить панель вкладок в закладки',
    zh_CN: '无法将标签页面板保存到书签',
    zh_TW: '無法將分頁面板儲存到書籤',
    ja: 'タブパネルをブックマークに保存できません',
  },
  'notif.tabs_panel_to_bookmarks_err.folder': {
    en: 'Cannot create destination folder',
    de: 'Zielordner konnte nicht erstellt werden',
    hu: 'Nem sikerült létrehozni a célmappát',
    pl: 'Nie można stworzyć docelowego folderu',
    ru: 'Невозможно создать папку для панели',
    zh_CN: '无法创建目标文件夹',
    zh_TW: '無法建立目標資料夾',
    ja: '宛先フォルダを作成できません',
  },
  'notif.tabs_panel_to_bookmarks_err.folder_upd': {
    en: 'Cannot update destination folder',
    de: 'Zielordner konnte nicht aktualisiert werden',
    hu: 'Nem sikerült frissíteni a célmappát',
    pl: 'Nie można zaktualizować docelowego folderu',
    ru: 'Невозможно обновить папку для панели',
    zh_CN: '无法更新目标文件夹',
    zh_TW: '無法更新目標資料夾',
    ja: '宛先フォルダを更新できません',
  },
  'notif.tabs_panel_to_bookmarks_err.bookmarks': {
    en: 'Cannot create bookmarks',
    de: 'Lesezeichen konnten nicht erstellt werden',
    hu: 'Nem sikerült létrehozni a könyvjelzőket',
    pl: 'Nie można stworzyć zakładki',
    ru: 'Невозможно создать закладки',
    zh_CN: '无法创建书签',
    zh_TW: '無法建立書籤',
    ja: 'ブックマークを作成できません',
  },
  'notif.restore_from_bookmarks_err': {
    en: 'Cannot restore panel from bookmarks',
    de: 'Panel konnte nicht aus Lesezeichen wiederherstellt werden',
    hu: 'Nem sikerült a könyvjelzőkből helyreállítani a lapokat',
    pl: 'Nie można przywrócić panelu z zakładek',
    ru: 'Невозможно восстановить панель из закладок',
    zh_CN: '无法从书签恢复面板',
    zh_TW: '無法從書籤復原面板',
    ja: 'ブックマークからパネルを復元できません',
  },
  'notif.restore_from_bookmarks_err.root': {
    en: 'Root folder not found',
    de: 'Quellordner nicht gefunden',
    hu: 'A kezdőmappa nem található',
    pl: 'Nie znaleziono nadrzędnego folderu',
    ru: 'Корневая папка не найдена',
    zh_CN: '未找到根文件夹',
    zh_TW: '未找到根資料夾',
    ja: 'ルートフォルダが見つかりません',
  },
  'notif.restore_from_bookmarks_ok': {
    en: 'The tab panel has been successfully restored',
    de: 'Tab-Panel erfolgreich wiederhergestellt',
    hu: 'A lappanel helyreállítása kész',
    pl: 'Panel kart został pomyślnie przywrócony',
    ru: 'Панель вкладок успешно восстановлена',
    zh_CN: '标签页面板已恢复',
    zh_TW: '分頁面板已復原',
    ja: 'タブパネルが正常に復元されました',
  },
  'notif.panel_conv': {
    en: 'The panel has been successfully converted',
    de: 'Panel erfolgreich umgewandelt',
    hu: 'A panel átalakítása kész',
    pl: 'Panel został pomyślnie przekonwertowany',
    ru: 'Панель успешно преобразована',
    zh_TW: '面板已成功被轉換',
    ja: 'パネルが正常に変換されました',
  },
  'notif.panel_bkmrkd': {
    en: 'The panel has been successfully bookmarked',
    de: 'Panel erfolgreich als Lesezeichen gespeichert',
    hu: 'A panel könyvjelzőzése kész',
    pl: 'Panel został pomyślnie zapisany do zakładek',
    ru: 'Панель успешно добавлена в закладки',
    zh_TW: '面板已成功加入書籤',
    ja: 'パネルが正常にブックマークされました',
  },
  'notif.done': {
    en: 'Done',
    de: 'Fertig',
    hu: 'Rendben',
    pl: 'Gotowe',
    ru: 'Готово',
    zh: '已完成',
    ja: '完了',
  },
  'notif.new_bookmark': {
    en: 'New bookmark added',
    de: 'Neues Lesezeichen hinzugefügt',
    hu: 'Új könyvjelző készült',
    pl: 'Dodano nową zakładkę',
    ru: 'Новая закладка добавлена',
    zh_CN: '书签已添加',
    zh_TW: '書籤已加入',
    ja: '新しいブックマークが追加されました',
  },
  'notif.bookmarks_sub_panel.no_root.title': {
    en: 'Cannot find root folder',
    de: 'Quellordner konnte nicht gefunden werden',
    hu: 'A kezdőmappa nem található',
    pl: 'Nie można znaleźć nadrzędnego folderu',
    ru: 'Невозможно найти корневую папку',
    zh_CN: '找不到根文件夹',
    zh_TW: '找不到根資料夾',
    ja: 'ルートフォルダが見つかりません',
  },
  'notif.bookmarks_sub_panel.no_root.details': {
    en: 'Try to re-save tabs panel',
    de: 'Versuche Tab-Panel neu zu speichern',
    hu: 'Meg kell próbálni újramenteni a lappanelt',
    pl: 'Spróbuj zapisać ponowanie panel kart',
    ru: 'Попробуйте пересохранить панель вкладок',
    zh_CN: '尝试重新保存标签页面板',
    zh_TW: '嘗試重新儲存分頁面板',
    ja: 'タブパネルを再保存してみてください',
  },
  'notif.bookmarks_sub_panel.no_root.save': {
    en: 'Save',
    de: 'Speichern',
    hu: 'Mentés',
    pl: 'Zapisz',
    ru: 'Сохранить',
    zh_CN: '保存',
    zh_TW: '儲存',
    ja: '保存',
  },
  'notif.proxy_auth_err': {
    en: 'Proxy authentication error',
    de: 'Proxy-Authentifizierungsfehler',
    hu: 'Proxy-hitelesítési hiba',
    pl: 'Błąd autoryzacji proxy',
    ru: 'Ошибка аутентификации прокси',
    zh_CN: '代理认证错误',
    zh_TW: '代理認證錯誤',
    ja: 'プロキシの認証エラー',
  },
  'notif.proxy_auth_err_details': {
    en: 'Check the proxy settings to make sure that they are correct.',
    de: 'Überprüfen Sie die Proxy-Einstellungen, um sicherzustellen, dass sie korrekt sind.',
    hu: 'Ellenőrizni kell, hogy a proxy beállításai biztosan helyesek-e.',
    pl: 'Sprawdź ustawienia proxy i upewnij się, że są poprawne.',
    ru: 'Проверьте настройки прокси, чтобы убедиться, что они верны.',
    zh_CN: '检查代理设置以确保它们是正确的',
    zh_TW: '檢查代理設定以確保它們是正確的',
    ja: 'プロキシ設定を確認して正しいことを確認してください。',
  },
  'notif.proxy_auth_err_ctrl': {
    en: 'Open settings',
    de: 'Einstellungen öffnen',
    hu: 'Beállítások',
    pl: 'Otwórz ustawienia',
    ru: 'Открыть настройки',
    zh_CN: '打开设置',
    zh_TW: '開啟設定',
    ja: '設定を開く',
  },
  'notif.history_del_sites': {
    en: 'Clearing history',
    de: 'Verlauf löschen',
    hu: 'Az előzmények törlése',
    pl: 'Czyszczenie historii',
    ru: 'Очистка истории',
    zh_CN: '清除历史记录',
    zh_TW: '清除歷史紀錄',
    ja: '履歴をクリアしています...',
  },
  'notif.history_del_sites_nothing': {
    en: 'Nothing to clear',
    de: 'Nichts zu löschen',
    hu: 'Semmi nem lett törölve',
    pl: 'Nic do wyczyszczenia',
    ru: 'Нечего очищать',
    zh_CN: '没有内容可清除',
    zh_TW: '沒有內容可清除',
    ja: 'クリアするものはありません',
  },
  'notif.cc.err': {
    en: 'Unable to clear cookies',
    de: 'Cookies konnten nicht gelöscht werden',
    hu: 'A sütik nem törölhetők',
    pl: 'Nie można wyczyścić ciasteczek',
    ru: 'Не удалось очистить куки',
    zh_CN: '无法清除 Cookie',
    zh_TW: '無法清除 Cookie',
    ja: 'Cookie をクリアできません',
  },
  'notif.cc.err_url': {
    en: 'Incorrect URL: ',
    de: 'Falsche URL: ',
    hu: 'Hibás URL: ',
    pl: 'Niepoprawny URL: ',
    ru: 'Неверный URL: ',
    zh_CN: '不正确的网址：',
    zh_TW: '不正確的網址：',
    ja: '不正な URL: ',
  },
  'notif.cc.ok': {
    en: 'Cookies were cleared',
    de: 'Cookies wurden gelöscht',
    hu: 'A sütik törlése kész',
    pl: 'Ciasteczka zostały wyczyszczone',
    ru: 'Cookies были очищены',
    zh: 'Cookie 已清除',
    ja: 'Cookie がクリアされました',
  },

  // ---
  // -- Colors
  // -
  'colors.toolbar': {
    en: 'Default',
    de: 'Standard',
    hu: 'alapértelmezett',
    pl: 'Domyślny',
    ru: 'Стандартный',
    zh_CN: '默认',
    zh_TW: '預設',
    ja: 'デフォルト',
  },
  'colors.blue': {
    en: 'Blue',
    de: 'Blau',
    hu: 'kék',
    pl: 'Niebieski',
    ru: 'Синий',
    zh_CN: '蓝色',
    zh_TW: '藍色',
    ja: '青色',
  },
  'colors.turquoise': {
    en: 'Turquoise',
    de: 'Türkis',
    hu: 'türkiz',
    pl: 'Turkusowy',
    ru: 'Бирюзовый',
    zh_CN: '青绿色',
    zh_TW: '青綠色',
    ja: 'ターコイズ',
  },
  'colors.green': {
    en: 'Green',
    de: 'Grün',
    hu: 'zöld',
    pl: 'Zielony',
    ru: 'Зеленый',
    zh_CN: '绿色',
    zh_TW: '綠色',
    ja: '緑色',
  },
  'colors.yellow': {
    en: 'Yellow',
    de: 'Gelb',
    hu: 'sárga',
    pl: 'Żółty',
    ru: 'Желтый',
    zh_CN: '黄色',
    zh_TW: '黃色',
    ja: '黄色',
  },
  'colors.orange': {
    en: 'Orange',
    hu: 'narancssárga',
    pl: 'Pomarańczowy',
    ru: 'Оранжевый',
    zh: '橙色',
    ja: 'オレンジ',
  },
  'colors.red': {
    en: 'Red',
    de: 'Rot',
    hu: 'vörös',
    pl: 'Czerwony',
    ru: 'Красный',
    zh_CN: '红色',
    zh_TW: '紅色',
    ja: '赤色',
  },
  'colors.pink': {
    en: 'Pink',
    hu: 'rózsaszín',
    pl: 'Różowy',
    ru: 'Розовый',
    zh: '粉色',
    ja: 'ピンク',
  },
  'colors.purple': {
    en: 'Purple',
    de: 'Lila',
    hu: 'lila',
    pl: 'Fioletowy',
    ru: 'Фиолетовый',
    zh: '紫色',
    ja: '紫色',
  },
}

if (!window.translations) window.translations = sidebarTranslations
else Object.assign(window.translations, sidebarTranslations)
