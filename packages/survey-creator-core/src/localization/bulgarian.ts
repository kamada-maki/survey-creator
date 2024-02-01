import { editorLocalization } from "survey-creator-core";

export var bgStrings = {
  // survey templates
  survey: {
    edit: "Редактиране",
    externalHelpLink: "Гледай и научи как се създават анкети.",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Моля, изтегли въпрос от кутията с инструменти.",
    addLogicItem: "Създай правило, за да персонализираш анкетата.",
    copy: "Копиране",
    duplicate: "Дубликат",
    addToToolbox: "Добавяне към кутията с инструменти",
    deletePanel: "Изтриване на панел",
    deleteQuestion: "Изтриване на въпрос",
    convertTo: "Преобразуване",
    drag: "Изтегляне на елемент",
  },
  // Question types
  qt: {
    default: "По подразбиране",
    checkbox: "Квадратчета за отметка",
    comment: "Дълъг текст",
    imagepicker: "Избор на изображение",
    ranking: "Класиране",
    image: "Изображение",
    dropdown: "Падащо меню",
    tagbox: "Падащо меню за множествен избор",
    file: "Качване на файл",
    html: "HTML",
    matrix: "Матрица с единичен избор",
    matrixdropdown: "Матрица с множествен избор",
    matrixdynamic: "Динамична матрица",
    multipletext: "Множество от текстови полета",
    panel: "Панел",
    paneldynamic: "Динамичен панел",
    radiogroup: "Група радиобутони",
    rating: "Рейтингова скала",
    text: "Едноредов вход",
    boolean: "Да/Не (булеви стойности)",
    expression: "Израз (само за четене)",
    signaturepad: "Подпис",
    buttongroup: "Група бутони"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "По подразбиране ({0})",
    survey: "Анкета",
    settings: "Настройки",
    settingsTooltip: "Отваряне на настройките",
    surveySettings: "Настройки на анкетата",
    surveySettingsTooltip: "Отваряне настройките на анкетата",
    themeSettings: "Настройки на тема",
    themeSettingsTooltip: "Отваряне на настройките на тема",
    showPanel: "Показване на панела",
    hidePanel: "Скриване на панела",
    prevSelected: "Избиране на предишен",
    nextSelected: "Избиране на следващ",
    prevFocus: "Фокус предишен",
    nextFocus: "Фокусирай се върху следващия",
    surveyTypeName: "Анкета",
    pageTypeName: "Страница",
    panelTypeName: "Паниел",
    questionTypeName: "Въпрос",
    columnTypeName: "Колона",
    addNewPage: "Добавяне на нова страница",
    moveRight: "Превърти надясно",
    moveLeft: "Превърти наляво",
    deletePage: "Изтриване на страница",
    editPage: "Редактиране на страница",
    edit: "Редактиране",
    newPageName: "страница",
    newQuestionName: "въпрос",
    newPanelName: "панел",
    newTextItemName: "текст",
    testSurvey: "Преглед",
    themeSurvey: "Теми",
    defaultV2Theme: "По подразбиране",
    modernTheme: "Модерен",
    defaultTheme: "По подразбиране (по наследство)",
    testSurveyAgain: "Прегледай анкетата отново",
    testSurveyWidth: "Широчина на анкетата: ",
    navigateToMsg: "Трябва да навигираш до",
    logic: "Логика",
    embedSurvey: "Вграждане на анкета",
    translation: "Превод",
    saveSurvey: "Запазване на анкетата",
    saveSurveyTooltip: "Запазване на анкетата",
    saveTheme: "Запиши темата",
    saveThemeTooltip: "Запиши темата",
    designer: "Дизайнер",
    jsonEditor: "JSON редактор",
    jsonHideErrors: "Скриване на грешки",
    jsonShowErrors: "Показване на грешки",
    undo: "Отмяна",
    redo: "Повтаряне",
    undoTooltip: "Отмяна на последната промяна",
    redoTooltip: "Повтаряне на последната промяна",
    showMoreChoices: "Покажи повече.",
    showLessChoices: "Покажи по-малко.",
    copy: "Копиране",
    cut: "Изрязване",
    paste: "Поставяне на копираното",
    copyTooltip: "Копиране на селектираното в клипборда",
    cutTooltip: "Изрязване на селекцията в клипборда",
    pasteTooltip: "Поставяне от клипборда",
    options: "Опции",
    generateValidJSON: "Генериране на валиден JSON",
    generateReadableJSON: "Генериране на четим JSON",
    toolbox: "Кутия с инструменти",
    "property-grid": "Свойства",
    propertyGridFilteredTextPlaceholder: "Въведи за търсене...",
    propertyGridNoResultsFound: "Няма намерени резултати",
    toolboxGeneralCategory: "Общ",
    toolboxChoiceCategory: "Въпроси за избор",
    toolboxTextCategory: "Въпроси с въвеждане на текст",
    toolboxContainersCategory: "Контейнери",
    toolboxMatrixCategory: "Матрица с въпроси",
    toolboxMiscCategory: "Разни",
    correctJSON: "Моля, коригирай JSON.",
    surveyResults: "Резултати от анкетата ",
    surveyResultsTable: "Като таблица",
    surveyResultsJson: "Като JSON",
    resultsTitle: "Заглавие на въпроса",
    resultsName: "Име на въпроса",
    resultsValue: "Стойност на отговора",
    resultsDisplayValue: "Показване на стойност",
    modified: "Променен",
    saving: "Спасен",
    saved: "Запазен",
    propertyEditorError: "Грешка",
    saveError: "Грешка! Съдържанието на редактора не е запазено.",
    translationPropertyGridTitle: "Езикови настройки",
    themePropertyGridTitle: "Настройки на тема",
    translationLanguages: "Езици",
    translationDeleteLanguage: "Сигурни ли сте, че искате да изтриете всички низове за този език?",
    translationAddLanguage: "Изберане на език за превод",
    translationShowAllStrings: "Всички низове",
    translationShowUsedStringsOnly: "Само използвани низове",
    translationShowAllPages: "Всички страници",
    translationNoStrings: "Няма низове за превод. Моля, промени филтъра.",
    translationExportToSCVButton: "Експортиране в CSV",
    translationImportFromSCVButton: "Импортиране от CSV",
    translateUsigAI: "Автоматичен превод на всички",
    translationDialogTitle: "Непреведени низове",
    translationMergeLocaleWithDefault: "Обединение {0} с локалната стойност по подразбиране",
    translationPlaceHolder: "Превод...",
    themeExportButton: "Износ",
    themeImportButton: "Внос",
    surveyJsonExportButton: "Износ",
    surveyJsonImportButton: "Внос",
    surveyJsonCopyButton: "Копиране в системния буфер",
    themeResetButton: "Връщане на настройките на тема в начално състояние по подразбиране",
    themeResetConfirmation: "Наистина ли искате да нулирате темата? Всички ваши персонализации ще бъдат загубени.",
    themeResetConfirmationOk: "Да, нулирайте темата",
    bold: "Удебелен",
    italic: "Курсив",
    underline: "Подчертан",
    addNewQuestion: "Добавяне на въпрос",
    selectPage: "Избиране на страница...",
    carryForwardChoicesCopied: "Възможностите за избор се копират от",
    choicesLoadedFromWebText: "Възможностите за избор се зареждат от уеб услуга.",
    choicesLoadedFromWebLinkText: "Отидете в настройките",
    choicesLoadedFromWebPreviewTitle: "Визуализация на заредените опции за избор",
    htmlPlaceHolder: "HTML съдържанието ще бъде тук.",
    panelPlaceHolder: "Пусни въпроса от кутията с инструменти тук.",
    surveyPlaceHolder: "Анкетата е празна. Плъзни елемент от кутията с инструменти или щракни върху бутона по-долу.",
    imagePlaceHolder: "Плъзни и пусни изображение тук или щракни върху бутона по-долу и избери изображение за качване.",
    imageChooseImage: "Избери изображение.",
    addNewTypeQuestion: "Добави {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    auto: "Автоматично",
    choices_Item: "Елемент ",
    lg: {
      addNewItem: "Добавяне на ново правило",
      empty_tab: "Създай правило за персонализиране на анкетата.",
      page_visibilityName: "Показване (скриване) на страница",
      page_enableName: "Активиране (деактивиране) на страница",
      page_requireName: "Направи страницата задължителна",
      panel_visibilityName: "Показване (скриване) на панел",
      panel_enableName: "Активиране (деактивиране) на панел",
      panel_requireName: "Направи страницата задължителна",
      question_visibilityName: "Показване (скриване) на въпрос",
      question_enableName: "Активиране (деактивиране) на въпрос",
      question_requireName: "Задай въпроса като задължителен.",
      question_resetValueName: "Нулиране на стойността на въпроса",
      question_setValueName: "Задаване на стойност на въпрос",
      column_visibilityName: "Показване (скриване) на колона",
      column_enableName: "Активиране (деактивиране) на колона",
      column_requireName: "Задай колоната като задължителна.",
      column_resetValueName: "Нулиране на стойността на колона",
      column_setValueName: "Задаване на стойност на колона",
      trigger_completeName: "Попълнена анкета",
      trigger_setvalueName: "Задаване на отговор",
      trigger_copyvalueName: "Копиране на отговор",
      trigger_skipName: "Преминаване към въпрос",
      trigger_runExpressionName: "Стартиране на израза",
      completedHtmlOnConditionName: "Задай маркиране на страницата \"Анкетата е завършена.\".",
      page_visibilityDescription: "Страницата става видима, ако логическият израз върне истина. В противен случай остава невидима.",
      panel_visibilityDescription: "Панелът става видим, ако логическият израз върне истина. В противен случай остава невидим.",
      panel_enableDescription: "Панелът и всички елементи в него стават активирани, ако логическият израз върне истина. В противен случай остават деактивирани.",
      question_visibilityDescription: "Въпросът става видим, ако логическият израз върне истина. В противен случай остава невидим.",
      question_enableDescription: "Въпросът става активиран, ако логическият израз върне истина. В противен случай остава деактивиран.",
      question_requireDescription: "Въпросът става задължителен, ако логическият израз върне истина.",
      trigger_completeDescription: "Когато логическият израз върне вярно, анкетата приключва и потребителят вижда страницата 'Благодаря'.",
      trigger_setvalueDescription: "Когато стойностите на въпроса, които се използват в логическия израз, се променят и логическият израз върне вярно, тогава стойността се задава от избрания въпрос.",
      trigger_copyvalueDescription: "Когато стойностите на въпроса, които се използват в логическия израз, се променят и логическият израз върне вярно, тогава стойността на един избран въпрос се копира в друг избран въпрос.",
      trigger_skipDescription: "Когато логическият израз върне вярно, анкетата преминава / фокусира се към избрания въпрос.",
      trigger_runExpressionDescription: "Когато логическият израз върне истина, тогава се изпълнява персонализираният израз. По желание може да зададете този израз в избрания въпрос.",
      completedHtmlOnConditionDescription: "Ако логическият израз върне вярно, то текстът по подразбиране за страницата „Благодаря“ се променя с дадения.",
      itemExpressionText: "Когато логическият израз: '{0}' върне истина", //{0} - the expression
      itemEmptyExpressionText: "Ново правило",
      page_visibilityText: "направи страница {0} видима", //{0} page name
      panel_visibilityText: "направи панел {0} видим", //{0} panel name
      panel_enableText: "направи панел {0} активен", //{0} panel name
      question_visibilityText: "направи въпрос {0} видим", //{0} question name
      question_enableText: "направи въпрос {0} активен", //{0} question name
      question_requireText: "направи въпрос {0} задължителен", //{0} question name
      question_resetValueText: "нулиране на стойността за въпрос: {0}",
      question_setValueText: "присвояване на стойност: {1} на въпрос: {0}",
      column_visibilityText: "направи колона {0} на въпрос {1} видима", //{0} column name, {1} question name
      column_enableText: "направи колона {0} на въпрос {1} активна", //{0} column name, {1} question name
      column_requireText: "направи колона {0} на въпрос {1} задължителна", //{0} column name, {1} question name
      column_resetValueText: "Нулиране на стойността на клетката за колона: {0}",
      column_setValueText: "Присвояване на стойност на клетка: {1} на колона: {0}",
      setValueExpressionPlaceholder: " Израз, чийто резултат ще бъде присвоен на целевия въпрос.",
      trigger_completeText: "анкетата е завършена",
      trigger_setvalueText: "задай на въпрос: {0} стойност {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "ясна стойност на въпроса: {0}", //{0} question name
      trigger_copyvalueText: "копирай във въпрос: {0} стойност от въпрос {1}", //{0} and {1} question names
      trigger_skipText: "анкетата преминава към въпрос {0}", //{0} question name
      trigger_runExpressionText1: "стартов израз: '{0}'", //{0} the expression
      trigger_runExpressionText2: " и постави резултата му под въпрос: {0}", //{0} question name
      completedHtmlOnConditionText: "показване на персонализиран текст за страницата „Благодарности“.",
      showAllQuestions: "Всички въпроси",
      showAllActionTypes: "Всички типове действие",
      conditions: "Условие/условия",
      actions: "Действие/действия",
      expressionEditorTitle: "Дефинирай условието/условията",
      actionsEditorTitle: "Дефинирай действието/действията",
      deleteAction: "Изтриване на действие",
      addNewAction: "Добавяне на действие",
      selectedActionCaption: "Избиране на действие...",
      expressionInvalid: "Логическият израз е празен или невалиден. Моля, коригирайте го.",
      noActionError: "Моля, добави поне едно действие.",
      actionInvalid: "Моля, отстрани проблемите във вашите действия.",
      uncompletedRule_title: "Сигурен ли си, че искаш да напуснеш раздела?",
      uncompletedRule_text: "Едно или повече логически правила са незавършени. Ако напуснеш раздела, тези промени, които не може да бъдат приложени, ще изчезнат. Сигурен ли си, че искаш да напуснеш раздела?",
      uncompletedRule_apply: "Да",
      uncompletedRule_cancel: "Не, искам да попълня правилата."
    }
  },
  // Property Editors
  pe: {
    apply: "Приложи",
    ok: "ДА",
    save: "Запази",
    clear: "Изчисти",
    saveTooltip: "Запази",
    cancel: "Откажи",
    set: "Окомплектовай",
    reset: "Нулиране",
    change: "Промени",
    refresh: "Опресни",
    close: "Затвори",
    delete: "Изтрий",
    add: "Добави",
    addNew: "Добави нов",
    addItem: "Кликни за добавяне на елемент...",
    removeItem: "Кликни за изтриване на елемент...",
    dragItem: "Плъзни елемента",
    addOther: "Друг",
    addSelectAll: "Избери всички",
    addNone: "Нито един",
    removeAll: "Премахни всички",
    edit: "Редактиране",
    back: "Връщане без запазване",
    backTooltip: "Връщане без запазване",
    saveAndBack: "Запазване и връщане",
    saveAndBackTooltip: "Запазване и връщане",
    doneEditing: "Завършен",
    editChoices: "Редактиране на избора",
    showChoices: "Показване на избора",
    move: "Ход",
    empty: "<празен>",
    emptyValue: "Стойността е празна.",
    fastEntry: "Ръчно въвеждане",
    fastEntryNonUniqueError: "Стойността '{0}' не е уникална.",
    fastEntryChoicesCountError: "Моля, ограничи броя на елементите от {0} до {1}",
    fastEntryChoicesMinCountError: "Моля, въведете поне {0} артикула",
    fastEntryPlaceholder: "Може да зададеш данни в следния формат:стойност1|текстстойност2",
    formEntry: "Въвеждане на формуляр",
    testService: "Тествай услугата.",
    itemSelectorEmpty: "Моля, избери елемент.",
    conditionActionEmpty: "Моля, избери действие.",
    conditionSelectQuestion: "Избери въпрос...",
    conditionSelectPage: "Избери страница...",
    conditionSelectPanel: "Избери панел...",
    conditionValueQuestionTitle: "Моля, въведи/избери стойността.",
    expressionHelp: "Използвай къдрави (големи) скоби за достъп до отговорите: `{question1} + {question2}`. Изразите също поддържат функции: `iif()`, `today()`, `age()`, `min()`, `max()`, `count()`, `avg()`, и други",
    aceEditorHelp: "Натисни ctrl+space за подсказка за окомплектоване на израза.",
    aceEditorRowTitle: "Текущ ред",
    aceEditorPanelTitle: "Текущ панел",
    showMore: "За повече подробности, моля, провери документацията.",
    assistantTitle: "Налични въпроси",
    cellsEmptyRowsColumns: "Трябва да има поне една колона или ред.",
    showPreviewBeforeComplete: "Визуализирай отговорите, преди да изпратиш анкетата.",
    overridingPropertyPrefix: "Зададено от ",
    resetToDefaultCaption: "Проучване",
    propertyIsEmpty: "Моля, въведи стойност.",
    propertyIsNoUnique: "Моля, въведи уникална стойност.",
    propertyNameIsNotUnique: "Моля, въведи уникално име.",
    propertyNameIsIncorrect: "Не използвай запазени думи, като: \"елемент\", \"избор\", \"панел\", \"ред\".",
    listIsEmpty: "Все още няма добавени елементи.",
    "listIsEmpty@choices": "Все още няма добавени възможности за избор.",
    "addNew@choices": "Добавяне на възможност за избор",
    expressionIsEmpty: "Изразът е празен.",
    value: "Стойност",
    text: "Текст",
    rowid: "Идентификатор на ред",
    imageLink: "URL на изображение или видео",
    columnEdit: "Редактиране на колона: {0}",
    itemEdit: "Редактиране на елемент: {0}",
    url: "URL на услугата",
    path: "Път до данни в услугата",
    valueName: "Съхранявай отговорите в следното JSON поле.",
    choicesbyurl: {
      valueName: "Вземи стойности от следното JSON поле."
    },
    titleName: "Вземи текстове за показване от следното JSON поле.",
    imageLinkName: "Вземи URL адреси на изображения от следното JSON поле.",
    allowEmptyResponse: "Разреши празен отговор.",
    titlePlaceholder: "Заглавие",
    surveyTitlePlaceholder: "Заглавие на анкетата",
    pageTitlePlaceholder: "Страница {num}",
    descriptionPlaceholder: "Описание",
    surveyDescriptionPlaceholder: "Описание",
    pageDescriptionPlaceholder: "Описание",
    showOtherItem: "Достъп до опция Друго",
    otherText: "Текст на опция Друго",
    showNoneItem: "Достъп до опция Няма",
    showRefuseItem: "Разрешаване на опцията \"Отказ на отговор\"",
    showDontKnowItem: "Разрешаване на опцията \"Не знам\"",
    noneText: "Текст на опция Няма",
    showSelectAllItem: "Достъп до опция Избери всички",
    selectAllText: "Текст на опция Избери всички",
    choicesMin: "Минимална стойност за автоматично генерирани елементи",
    choicesMax: "Максимална стойност за автоматично генерирани елементи",
    choicesStep: "Стъпка за автоматично генерирани елементи",
    name: "Име",
    title: "Заглавие",
    cellType: "Тип на клетката",
    colCount: "Брой колони",
    choicesOrder: "Ред на сортиране на избора",
    visible: "Видим",
    isRequired: "Задължителен",
    markRequired: "Маркирай както се изисква",
    removeRequiredMark: "Премахване на необходимия знак",
    isAllRowRequired: "Изискване за отговор на всички редове",
    eachRowUnique: "Предотвратяване на дублиращи се отговори в редове",
    requiredErrorText: "\"Задължително\" съобщение за грешка",
    startWithNewLine: "Показване на въпроса на нов ред",
    rows: "Редове",
    cols: "Колони",
    placeholder: "Контейнер за област за въвеждане",
    showPreview: "Показване на областта за визуализация",
    storeDataAsText: "Съхранявай съдържанието на файла в JSON резултат като текст",
    maxSize: "Максимален размер на файла (в байтове)",
    imageHeight: "Височина на изображението",
    imageWidth: "Широчина на изображението",
    rowCount: "Брой редове",
    columnLayout: "Разположение на колоните",
    addRowLocation: "Добавяне на местоположение на бутона за ред",
    addRowText: "Добавяне на текст на бутона за ред",
    removeRowText: "Премахване на текста на бутона за ред",
    rateMin: "Минимална стойност на оценката",
    rateMax: "Максимална стойност на оценката",
    rateStep: "Стъпка на оценката",
    minRateDescription: "Описание на минималната оценка",
    maxRateDescription: "Описание на максималната оценка",
    inputType: "Тип на въвеждане",
    optionsCaption: "Контейнер за опция",
    defaultValue: "Отговор по подразбиране",
    cellsDefaultRow: "Текстове по подразбиране",
    surveyEditorTitle: "Редактиране на настройките на анкетата",
    qEditorTitle: "Редактиране: {0}",
    maxLength: "Максимална дължина (в знаци)",
    buildExpression: "Изграждане",
    editExpression: "Редактиране",
    and: "и",
    or: "или",
    remove: "Премахване",
    addCondition: "Добавяне на условие",
    emptyLogicPopupMessage: "Избери въпрос, за да започне конфигурирането на условия.",
    if: "Ако",
    then: "то",
    setToName: "Целеви въпрос",
    fromName: "Въпрос за копиране на отговора",
    gotoName: "Въпрос, към който да се премине",
    ruleIsNotSet: "Правилото е некоректно.",
    includeIntoResult: "Включете в резултатите от анкетата",
    showTitle: "Показване на заглавието",
    expandCollapseTitle: "Разширяване/свиване на заглавие",
    locale: "Език на анкетата",
    simulator: "Изберете тип устройство",
    landscapeOrientation: "Превключване към пейзажна ориентация",
    portraitOrientation: "Превключване към портретна ориентация",
    mode: "Редактируемо или само за четене",
    clearInvisibleValues: "Изчистване на невидими стойности",
    cookieName: "Име на бисквитката",
    sendResultOnPageNext: "Запазване на частични резултати от анкетата в процес на изпълнение",
    storeOthersAsComment: "Съхранявай стойността на Други в отделно поле",
    showPageTitles: "Показване на заглавия на страници",
    showPageNumbers: "Показване на номера на страници",
    pagePrevText: "Текст на бутона за предишна страница",
    pageNextText: "Текст на бутона за следваща страница",
    completeText: "Текст на бутона за попълнена анкета",
    previewText: "Текст на бутона за визуализация на отговорите",
    editText: "Редактиране текста на бутона за отговор",
    startSurveyText: "Текст на бутона за стартиране на анкетата",
    showNavigationButtons: "Разположение на навигационните бутони",
    showPrevButton: "Показване на бутона Предишна страница",
    firstPageIsStarted: "Първата страница е начална.",
    showCompletedPage: "Показване на страницата Завършена анкета",
    goNextPageAutomatic: "Продължи автоматично към следващата страница.",
    showProgressBar: "Местоположение на лентата за напредък",
    questionTitleLocation: "Местоположение на заглавието на въпроса",
    requiredText: "Задължителен символ(и)",
    questionStartIndex: "Начален индекс (цифра или буква)",
    showQuestionNumbers: "Номериране на въпросите",
    questionTitleTemplate: "Шаблонът за заглавие на въпрос по подразбиране е:: '{no}. {require} {title}'",
    questionErrorLocation: "Местоположение на съобщението за грешка",
    focusFirstQuestionAutomatic: "Постави първия въпрос на нова страница",
    questionsOrder: "Подреждане на елементите на страницата",
    maxTimeToFinish: "Време за завършване на анкетата (в секунди)",
    maxTimeToFinishPage: "Времево ограничение за завършване на една страница (в секунди)",
    image: {
      imageHeight: "Височина на изображението (в стойности, допустими от CSS)",
      imageWidth: "Вирочина на изображението (в стойности, допустими от CSS)"
    },
    // survey templates
    survey: {
      title: "Заглавие"
    },
    page: {
      title: "Заглавие",
      maxTimeToFinish: "Времево ограничение за завършване на страницата (в секунди)"
    },
    question: {
      page: "Родителска страница"
    },
    showTimerPanel: "Местоположение на таймера",
    showTimerPanelMode: "Режим на таймера",
    renderMode: "Режим на показване на панела",
    allowAddPanel: "Разрешаване добавянето на панели",
    allowRemovePanel: "Разрешаване премахването на панели",
    noEntriesText: "Празен текст на записите",
    panelAddText: "Добавяне на текст на панелен бутон",
    panelRemoveText: "Премахване на текст на панелен бутон",
    isSinglePage: "Показване на всички елементи на една страница",
    html: "HTML маркиране",
    expression: "Израз",
    setValue: "Отговор",
    dataFormat: "Формат на изображението",
    allowAddRows: "Разрешаване добавянето на редове",
    allowRemoveRows: "Разрешаване изтриването на редове",
    allowRowsDragAndDrop: "Разрешаване плъзгането и пускане на ред",
    responsiveImageSizeHelp: "Не се прилага, ако се посочи точна широчина или височина на изображението.",
    minImageWidth: "Минимална широчина на изображението",
    maxImageWidth: "Максимална широчина на изображението",
    minImageHeight: "Минимална височина на изображението",
    maxImageHeight: "Максимална височина на изображението",
    minValue: "Минимална стойност",
    maxValue: "Максимална стойност",
    minLength: "Минимална дължина (в символи)",
    allowDigits: "Разрешаване на цифри",
    minCount: "Минимален брой",
    maxCount: "Максимален брой",
    regex: "Регулярен израз",
    surveyvalidator: {
      text: "Съобщение за грешка",
      expression: "Израз за валидиране"
    },
    totalText: "Общ текст в реда",
    totalType: "Общ вид",
    totalExpression: "Тотален израз",
    totalDisplayStyle: "Стил на показване на обща стойност",
    totalCurrency: "Валута",
    totalFormat: "Форматиран низ",
    logo: "Лого (URL или base64-кодиран низ)",
    questionsOnPageMode: "Структура на анкетата",
    maxTextLength: "Максимална дължина на отговора (в символи)",
    maxOthersLength: "Максимална дължина на коментара (в символи)",
    autoGrowComment: "Автоматично разширяване на областта за коментари, ако е необходимо",
    allowResizeComment: "Позволява на потребителите да преоразмеряват текстови области",
    textUpdateMode: "Актуализиране стойността на текстовия въпрос",
    focusOnFirstError: "Фокусиране върху първия невалиден отговор",
    checkErrorsMode: "Стартиране на валидацията",
    navigateToUrl: "Навигирай до URL",
    navigateToUrlOnCondition: "Динамичен URL",
    completedBeforeHtml: "Маркиране за показване дали потребителят вече е попълнил тази анкета",
    completedHtml: "Анкета Пълно маркиране на страница",
    completedHtmlOnCondition: "Динамично проучване Пълно маркиране на страницата",
    loadingHtml: "Маркиране за показване, докато се зарежда моделът на анкетата",
    commentText: "Текст в полето за коментар",
    autocomplete: "Тип автодовършване",
    labelTrue: "\"Вярно\" етикет",
    labelFalse: "\"Невярно\" етикет",
    allowClear: "Показване на бутона Изчистване",
    displayStyle: "Стил за изобразяване на стойността",
    format: "Форматиран низ",
    maximumFractionDigits: "Максимален брой дробни цифри",
    minimumFractionDigits: "Минимален брой дробни цифри",
    useGrouping: "Показване на разделители за групиране",
    allowMultiple: "Разрешаване на множество файлове",
    allowImagesPreview: "Преглед на изображения",
    acceptedTypes: "Допустими типове файлове",
    waitForUpload: "Изчакай да завърши качването.",
    needConfirmRemoveFile: "Потвърждаване изтриването на файл",
    detailPanelMode: "Местоположение на детайлния панел",
    minRowCount: "Минимален брой редове",
    maxRowCount: "Максимален брой редове",
    confirmDelete: "Потвърждаване изтриването на реда",
    confirmDeleteText: "Съобщение за потвърждаване",
    paneldynamic: {
      confirmDelete: "Потвърждаване изтриването на панел"
    },
    panelCount: "Първоначален брой панели",
    minPanelCount: "Минимален брой панели",
    maxPanelCount: "Максимален брой панели",
    panelsState: "Разширено състояние на вътрешния панел",
    templateDescription: "Шаблон за описание",
    templateTitle: "Шаблон за заглавие",
    panelPrevText: "Подсказка към бутона за предишен панел",
    panelNextText: "Подсказка към бутона за следващ панел",
    showRangeInProgress: "Показване на лентата на напредък",
    templateTitleLocation: "Местоположение на заглавието на въпроса",
    panelRemoveButtonLocation: "Премахване местоположението на бутона на панела",
    hideIfRowsEmpty: "Скриване на въпроса, ако няма редове",
    hideColumnsIfEmpty: "Скриване на колони, ако няма редове",
    rateValues: "Персонализирани стойности на оценката",
    rateCount: "Брой на оценките",
    autoGenerate: "Как се задават стойности на оценката?",
    hideIfChoicesEmpty: "Показване въпроса, ако не съдържа избор",
    hideNumber: "Показване номера на въпроса",
    minWidth: "Минимална широчина (в CSS-допустими стойности)",
    maxWidth: "Максимална широчина (в CSS-допустими стойности)",
    width: "Широчина (в CSS-допустими стойности)",
    showHeader: "Показване заглавията на колоните",
    horizontalScroll: "Показване на хоризонталната лента за превъртане",
    columnMinWidth: "Минимална широчина на колоната (в CSS-допустими стойности)",
    rowTitleWidth: "Широчина на заглавния ред (в CSS-допустими стойности)",
    valueTrue: "\"Вярно\" стойност",
    valueFalse: "\"Грешно\" стойност",
    minErrorText: "\"Стойността е под минимума.\" съобщение за грешка",
    maxErrorText: "\"Стойността надвишава максимума.\" съобщение за грешка",
    otherErrorText: "\"Празен коментар\" съобщение за грешка",
    keyDuplicationError: "\"Неуникална стойност на ключ\" съобщение за грешка",
    minSelectedChoices: "Минимален избор",
    maxSelectedChoices: "Максимален брой избрани",
    showClearButton: "Показване на бутона Изчистване (Clear)",
    showNumber: "Показване на номера на панела",
    logoWidth: "Широчина на логото (в CSS-допустими стойности)",
    logoHeight: "Височина на логото (в CSS-допустими стойности)",
    readOnly: "Само за четене",
    enableIf: "Може да се редактира",
    emptyRowsText: "\"Без редове\" съобщение",
    size: "Размер на въвеждане (в знаци)",
    separateSpecialChoices: "Разделяне със специален избор (Не, Други, Избери всички)",
    choicesFromQuestion: "Копиране изборите от следния въпрос",
    choicesFromQuestionMode: "Кои избори да се копират?",
    showCommentArea: "Показване на областта за коментари",
    commentPlaceholder: "Заместител на областта за коментари",
    displayRateDescriptionsAsExtremeItems: "Показване описанията на скоростта като екстремни стойности",
    rowsOrder: "Поредност на редовете",
    columnsLayout: "Поредност на колоните",
    columnColCount: "Брой вложени колони",
    state: "Разширено състояние на панела",
    correctAnswer: "Правилен отговор",
    defaultPanelValue: "Стойности по подразбиране",
    cells: "Текст в клетката",
    keyName: "Ключова колона",
    itemvalue: {
      text: "Алтернативен текст"
    },
    logoPosition: "Позиция на логото",
    addLogo: "Добавяне на лого...",
    changeLogo: "Промяна на логото...",
    logoPositions: {
      none: "Изтриване на логото",
      left: "Вляво",
      right: "Вдясно",
      top: "Отгоре",
      bottom: "Отдолу"
    },
    tabs: {
      general: "Общ (главен)",
      fileOptions: "Настройки",
      html: "HTML Редактор",
      columns: "Колони",
      rows: "редове",
      choices: "Избори",
      items: "Елементи",
      visibleIf: "Видим",
      enableIf: "Редактируем",
      requiredIf: "Задължителен",
      rateValues: "Оценяване на стойностите",
      choicesByUrl: "Избор от услугата RESTful",
      matrixChoices: "Избор по подразбиране",
      multipleTextItems: "Въвеждане на текст",
      numbering: "Номерация",
      validators: "Валидатори",
      navigation: "Навигация",
      question: "Въпрос",
      pages: "Страници",
      timer: "Таймер/Тест",
      calculatedValues: "Изчислени стойности",
      triggers: "Тригери",
      templateTitle: "Шаблон за заглавие",
      totals: "Общо",
      logic: "Логика",
      layout: "Оформление",
      data: "Данни",
      validation: "Валидиране",
      cells: "Текст в клетката",
      showOnCompleted: "Проучването е завършено.",
      logo: "Лого в заглавието на анкетата",
      slider: "Плъзгач",
      expression: "Израз (фраза)",
      others: "Други"
    },
    editProperty: "Редактиране на свойства '{0}'",
    items: "Елементи",
    choicesVisibleIf: "Изборите са видими, ако",
    choicesEnableIf: "Изборите може да се избират, ако",
    columnsEnableIf: "Колоните са видими, ако",
    rowsEnableIf: "Редовете са видими, ако",
    indent: "Добавяне на отстъпи",
    panel: {
      indent: "Добавяне на външни отстъпи"
    },
    innerIndent: "Добавяне на вътрешни отстъпи",
    defaultValueFromLastRow: "Вземане стойностите по подразбиране от последния ред",
    defaultValueFromLastPanel: "Вземане стойностите по подразбиране от последния панел",
    enterNewValue: "Моля, въведете стойността.",
    noquestions: "В анкетата няма въпроси.",
    createtrigger: "Моля, създайте тригер.",
    titleKeyboardAdornerTip: "Натиснете бутона за въвеждане, за да редактирате.",
    keyboardAdornerTip: "Натиснете бутона за въвеждане, за да редактирате елемент, натиснете бутона за изтриване, за да изтриете елемент, натиснете alt плюс стрелка нагоре или стрелка надолу, за да преместите елемент.",
    triggerOn: "На ",
    triggerMakePagesVisible: "Направете страниците видими.",
    triggerMakeQuestionsVisible: "Направете елементите видими.",
    triggerCompleteText: "Попълнете анкетата, ако можете.",
    triggerNotSet: "Тригерът не е зададен.",
    triggerRunIf: "Работете, ако",
    triggerSetToName: "Промяна на стойността на: ",
    triggerFromName: "Копиране на стойност от: ",
    triggerRunExpression: "Изпълнете този израз.",
    triggerSetValue: "до: ",
    triggerGotoName: "Отидете на въпроса.",
    triggerIsVariable: "Не поставяйте променливата в резултата от анкетата.",
    triggerRunExpressionEmpty: "Моля, въведете валиден израз.",
    emptyExpressionPlaceHolder: "Въведете израз тук...",
    noFile: "Няма избран файл.",
    clearIfInvisible: "Изчистване на стойността, ако въпросът се скрие",
    valuePropertyName: "Име на свойството стойност",
    searchEnabled: "Търсенето разрешено",
    hideSelectedItems: "Скриване на избраните елементи",
    closeOnSelect: "Затворете падащото меню след избор.",
    signatureWidth: "Широчина на подписа",
    signatureHeight: "Височина на подписа",
    verticalAlign: "Вертикално подравняване",
    alternateRows: "Алтернативни редове",
    columnsVisibleIf: "Колоните се виждат, ако",
    rowsVisibleIf: "Редовете се виждат, ако",
    otherPlaceholder: "Заместител на областта за коментари",
    signaturepad: {
      showPlaceholder: "Показване на контейнера",
      placeholder: "Текст в контейнер",
      signatureWidth: "Ширина на областта за подпис",
      signatureHeight: "Височина на областта за подпис",
      signatureAutoScaleEnabled: "Автоматично мащабиране на областта за подписи",
      penMinWidth: "Минимална ширина на писалката",
      penMaxWidth: "Максимална ширина на перото"
    },
    filePlaceholder: "Текст в контейнер за файл",
    photoPlaceholder: "Текст в контейнер за снимка",
    fileOrPhotoPlaceholder: "Текст в контейнер за файл или снимка",
    rateType: "Тип на тарифата"
  },
  // Property values
  pv: {
    "true": "вярно",
    "false": "невярно",
    file: "Локални файлове",
    camera: "Камера",
    "file-camera": "Локални файлове или камера",
    inherit: "Наследяване",
    show: "Видим",
    hide: "Скрит",
    default: "Наследен",
    initial: "Първоначален",
    random: "Произволен",
    collapsed: "Сгънат",
    expanded: "Разширен",
    none: "Нито един",
    asc: "Възходящ",
    desc: "Низходящ",
    indeterminate: "Неопределен",
    decimal: "десетичен знак",
    currency: "валута",
    percent: "процент",
    firstExpanded: "Първият панел е разширен.",
    off: "Скриване на номерата на въпросите",
    onpanel: "Започнете от всеки панел.",
    onPanel: "Започнете от всеки панел.",
    onSurvey: "Продължете през цялата анкета.",
    list: "Списък",
    progressTop: "Панел навигатор + Лента за напредък в горната част",
    progressBottom: "Панел навигатор + Лента за напредък в долната част",
    progressTopBottom: "Панел навигатор + Лента за напредък в горната и долната част",
    tab: "Раздели",
    horizontal: "Хоризонтален",
    vertical: "Вертикален",
    top: "Горен",
    bottom: "Долен",
    topBottom: "Отгоре и отдолу",
    both: "И двете",
    left: "Вляво",
    right: "Отдясно",
    leftRight: "Наляво и надясно",
    color: "цвят",
    date: "дата",
    datetime: "Време за среща",
    "datetime-local": "Време за среща – локално",
    email: "имейл",
    month: "месец",
    number: "номер",
    password: "парола",
    range: "диапазон",
    tel: "телефон",
    text: "текст",
    time: "време",
    url: "url",
    week: "седмица",
    hidden: "Скрит",
    on: "Продължи от предишната страница.",
    onPage: "Започни от всяка страница.",
    edit: "Редактируем",
    display: "Само за четене",
    onComplete: "Когато анкетата приключи",
    onHidden: "Когато въпросът стане скрит",
    onHiddenContainer: "Когато въпросът или неговият панел/страница се скрият",
    contain: "Съдържам",
    cover: "Капак",
    fill: "Запълване",
    clearInvisibleValues: {
      none: "Никога"
    },
    inputType: {
      color: "Цвят",
      date: "Дата",
      "datetime-local": "Дата и час",
      email: "Имейл",
      month: "Месец",
      number: "Номер",
      password: "Парола",
      range: "Обхват",
      tel: "Телефонен номер",
      text: "Текст",
      time: "Време",
      url: "URL",
      week: "Седмица"
    },
    all: "Всички",
    page: "Старница",
    survey: "Анкета",
    onNextPage: "При превключване към следващата страница",
    onValueChanged: "След промяна на отговора",
    onValueChanging: "Преди да бъде променен отговор",
    standard: "Оригинална структура",
    singlePage: "Всички въпроси на една страница",
    questionPerPage: "Всеки въпрос на отделна страница",
    noPreview: "Без визуализация",
    showAllQuestions: "Показване на всички въпроси",
    showAnsweredQuestions: "Показване само на въпроси с отговор",
    pages: "Завършени страници",
    questions: "Отговорени въпроси",
    requiredQuestions: "Отговорени задължителни въпроси",
    correctQuestions: "Валидни отговори",
    buttons: "Завършени страници (бутон UI)",
    underInput: "Под входа",
    underTitle: "Под заглавието",
    onBlur: "Размазване",
    onTyping: "Докато пишете",
    underRow: "Под реда",
    underRowSingle: "Под реда се вижда само един панел.",
    showNavigationButtons: {
      none: "Скрит"
    },
    showProgressBar: {
      off: "Скрит"
    },
    showTimerPanel: {
      none: "Скрит"
    },
    showTimerPanelMode: {
      all: "И двете"
    },
    detailPanelMode: {
      none: "Скрит"
    },
    addRowLocation: {
      default: "Зависи от оформлението на матрицата."
    },
    panelsState: {
      default: "Потребителите не може да разгъват или свиват панели.",
      collapsed: "Всички панели са свити.",
      expanded: "Всички панели са разширени."
    },
    widthMode: {
      auto: "Автоматичен",
      static: "Статичен",
      responsive: "Адаптивен"
    },
    imageFit: {
      none: "Нито един",
      contain: "Съдържание",
      cover: "Обвивка",
      fill: "Запълване"
    },
    contentMode: {
      auto: "Автоматичен",
      image: "Изображение",
      video: "Видяо",
      youtube: "YouTube"
    },
    displayMode: {
      auto: "Автоматичен",
      buttons: "Бутони",
      dropdown: "Падащо меню"
    },
    rateColorMode: {
      default: "По подразбиране"
    },
    autoGenerate: {
      "true": "Генерирай.",
      "false": "Въведи ръчно."
    },
    rateType: {
      labels: "Етикети",
      stars: "Звезди",
      smileys: "Усмивки"
    }
  },
  // Operators
  op: {
    empty: "празно",
    notempty: "не е празно",
    equal: "равно",
    notequal: "не е равно",
    contains: "съдържа",
    notcontains: "не съдържа",
    anyof: "всеки от",
    allof: "всички",
    greater: "по-голямо",
    less: "по-малко",
    greaterorequal: "по-голямо или равно",
    lessorequal: "по-малко или равно",
    and: "и",
    or: "или"
  },
  // Embed window
  ew: {
    angular: "Използвайте Angular версия",
    jquery: "Използвайте jQuery версия",
    knockout: "Използвайте Knockout версия",
    react: "Използвайте версията на React",
    vue: "Използвайте версията на Vue",
    bootstrap: "За bootstrap framework",
    modern: "Модерна тема",
    default: "тема по подразбиране",
    orange: "Оранжева тема",
    darkblue: "Тъмносиня тема",
    darkrose: "Тъмнорозова тема",
    stone: "Каменна тема",
    winter: "Зимна тема",
    winterstone: "Зимно-каменна тема",
    showOnPage: "Показване на анкетата на страница",
    showInWindow: "Показване на анкетата в прозорец",
    loadFromServer: "Заредете JSON на анкетата от сървъра",
    titleScript: "Скриптове и стилове",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Избери страницата, за да я тестваш.",
    showInvisibleElements: "Показване на невидими елементи",
    hideInvisibleElements: "Скриване на невидими елементи"
  },
  validators: {
    answercountvalidator: "Брой отговори",
    emailvalidator: "Имейл",
    expressionvalidator: "Израз",
    numericvalidator: "Число",
    regexvalidator: "Регулярен израз",
    textvalidator: "Текст"
  },
  triggers: {
    completetrigger: "Попълнена анкета",
    setvaluetrigger: "Задаване на отговор",
    copyvaluetrigger: "Копиране на отговор",
    skiptrigger: "Преминаване към въпроса",
    runexpressiontrigger: "Стартиране на израз",
    visibletrigger: "промяна на видимостта (отхвърлено)"
  },
  pehelp: {
    cookieName: "Бисквитките не позволяват на потребителите да попълнят една и съща анкета два пъти.",
    size: "Преоразмерява видимата област на входното поле. Моля, използвайте настройката <b>Проверка → максимална</b> дължина, за да ограничите входната дължина.",
    format: "Използвай {0} като контейнер за действителната стойност.",
    totalText: "Вижда се, само когато поне една колона има общ тип или общ израз.",
    acceptedTypes: "Направи справка с (https://www.w3schools.com/tags/att_input_accept.asp) за повече информация.",
    columnColCount: "Приложимо само за типове клетки Radiogroup и Checkbox.",
    autocomplete: "Направи справка с [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) за повече информация.",
    valueName: "Ако не зададете това свойство, отговорът ще бъде съхранен в поле, указано от свойството Name.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Ако указаната колона съдържа идентични стойности, анкетата отговаря с \"Неуникална стойност на ключ\" грешка.",
    filePlaceholder: "Прилага се, когато \"Тип източник\" е \"Локални файлове\" или когато камерата не е налична",
    photoPlaceholder: "Прилага се, когато \"Тип източник\" е \"Камера\".",
    fileOrPhotoPlaceholder: "Прилага се, когато \"Тип източник\" е \"Локални файлове или камера\"."
  },
  // Properties
  p: {
    title: {
      name: "заглавие",
      title: "Остави го празно, ако е същото като 'Name'"
    },
    multiSelect: "Разрешаване многократен избор",
    showLabel: "Показване на надписи на изображения",
    value: "Стойност",
    tabAlign: "Подравняване на раздели",
    sourceType: "Тип източник",
    fitToContainer: "Побиране в контейнера",
    setValueExpression: "Задаване на израз за стойност",
    description: "Описание",
    logoFit: "Подходящо за лого",
    pages: "Страници",
    questions: "Въпроси",
    triggers: "Тригери",
    calculatedValues: "Изчислени стойности",
    surveyId: "Идентификационен номер на анкетата",
    surveyPostId: "Идентификационен номер на публикацията в проучването",
    surveyShowDataSaving: "Проучването показва спестяване на данни.",
    questionDescriptionLocation: "Местоположение на описанието на въпроса",
    progressBarType: "Тип лента за напредък",
    showTOC: "Показване на съдържание",
    tocLocation: "Местоположение на съдържанието",
    questionTitlePattern: "Шаблон на заглавието на въпроса",
    widthMode: "Режим на широчина",
    showBrandInfo: "Показване на информация за марката (бранда)",
    useDisplayValuesInDynamicTexts: "Стойности за показване на динамични текстове",
    visibleIf: "Видим, ако",
    titleLocation: "Местоположение на заглавието",
    descriptionLocation: "Описание на местоположението",
    defaultValueExpression: "Стойност по подразбиране на израза",
    requiredIf: "Задължителен, ако",
    resetValueIf: "Нулиране на стойността, ако",
    setValueIf: "Задайте стойност, ако",
    validators: "Валидатори",
    bindings: "Обвързване",
    renderAs: "Представяне като",
    attachOriginalItems: "Прикрепяне на оригиналните елементи",
    choices: "Избори",
    choicesByUrl: "Избори като url",
    currency: "Валута",
    cellHint: "Подсказка за клетка",
    isUnique: "Уникален",
    showInMultipleColumns: "Показване в няколко колони",
    totalMaximumFractionDigits: "Общо максимални дробни цифри",
    totalMinimumFractionDigits: "Общо минимални дробни цифри",
    columns: "Колони",
    detailElements: "Детайлни елементи",
    allowAdaptiveActions: "Позволи адаптивни действия",
    defaultRowValue: "Стойност на реда по подразбиране",
    detailPanelShowOnAdding: "Панелът с подробности се показва при добавяне.",
    choicesLazyLoadEnabled: "Отложеното зареждане на избора е активирано.",
    choicesLazyLoadPageSize: "Избор на размер на страницата за отложено зареждане",
    inputFieldComponent: "Компонент на полето за въвеждане",
    itemComponent: "Компонент на елемента",
    min: "Минимум",
    max: "Максимум",
    minValueExpression: "Минимална стойност на израза",
    maxValueExpression: "Максимална стойност на израза",
    step: "Стъпка",
    dataList: "Списък с данни",
    itemSize: "Размер на елемента",
    elements: "Елементи",
    content: "Съдържание",
    navigationButtonsVisibility: "Видимост на бутоните за навигация",
    navigationTitle: "Навигационно заглавие",
    navigationDescription: "Описание на навигацията",
    longTap: "Дълго докосване",
    autoGrow: "Автоматичен растеж",
    allowResize: "Разреши преоразмеряване.",
    acceptCarriageReturn: "Приеми връщане на каретка.",
    displayMode: "Режим на показване",
    rateType: "Тип на оценката",
    label: "Етикет",
    contentMode: "Съдържателен режим",
    imageFit: "Напасване на изображението",
    altText: "Алтернативен текст",
    height: "Височина",
    penColor: "Цвят на писалката",
    backgroundColor: "Цвят на фона",
    templateElements: "Елементи на шаблона",
    operator: "Оператор",
    isVariable: "Променлива",
    runExpression: "Стартиване на израза",
    showCaption: "Показване на надпис",
    iconName: "Име на икона",
    iconSize: "Размер на иконата",
    precision: "Точност",
    matrixDragHandleArea: "Област на манипулатора за плъзгане на матрицата",
    backgroundImage: "Фоново изображение",
    backgroundImageFit: "Побиране на фоново изображение",
    backgroundImageAttachment: "Прикачен файл с фоново изображение",
    backgroundOpacity: "Непрозрачност на фона",
    selectToRankEnabled: "Изберете за класиране разрешено",
    selectToRankAreasLayout: "Изберете оформление за класиране на области",
    allowCameraAccess: "Разреши достъп до камерата",
    scaleColorMode: "Режим на мащабиране на цветовете",
    rateColorMode: "Режим на оценяване на цветовете",
    templateTabTitle: "Заглавие на раздела \"Шаблон\"",
    templateVisibleIf: "Шаблонът се вижда, ако",
    copyDisplayValue: "Копиране на показваната стойност"
  },
  theme: {
    "--background": "Цвят на фона",
    "--background-dim-light": "Цвят на приглушената светлина на фона",
    "--primary-foreground": "Основен цвят на преден план",
    "--foreground": "Цвят на преден план",
    "--base-unit": "Базова единица",
    advancedMode: "Разширен режим",
    groupGeneral: "Общ",
    groupHeader: "Заглавка",
    groupBackground: "Фон",
    groupAppearance: "Външен вид",
    themeName: "Тема",
    themeMode: "Режими",
    themeModePanels: "Панели",
    themeModeLightweight: "Лек",
    themePaletteLight: "Светло",
    themePaletteDark: "Тъмно",
    primaryColor: "Цвят на акцента",
    primaryDefaultColor: "По подразбиране",
    primaryDarkColor: "Върху",
    primaryLightColor: "Селектиран",
    coverTitleForecolor: "Цвят на предния план на заглавието",
    coverDescriptionForecolor: "Описание цвят на предния цвят",
    coverOverlapEnabled: "Припокриване",
    backgroundDimColor: "Цвят на фона",
    backgroundImage: "Фоново изображение",
    backgroundImageFitAuto: "Автоматичен",
    backgroundImageFitCover: "Корица",
    backgroundImageFitContain: "Съдържание",
    backgroundImageFitFill: "Участък",
    backgroundImageFitTile: "Плочки",
    backgroundOpacity: "Непрозрачност",
    backgroundImageAttachmentFixed: "Неподвижен",
    backgroundImageAttachmentScroll: "Свитък",
    panelBackgroundTransparency: "Прозрачност на фона на панела",
    questionBackgroundTransparency: "Прозрачност на фона на въпроса",
    questionTitle: "Шрифт на заглавието на въпроса",
    editorPanel: "Редактор",
    backgroundCornerRadius: "Фон и радиус на ъгъла",
    backcolor: "Фон по подразбиране",
    hovercolor: "Фон под курсора на мишката",
    borderDecoration: "Декорация на контура",
    accentBackground: "Акцентен фон",
    accentForeground: "Акцентен преден план",
    primaryForecolor: "Цвят по подразбиране",
    primaryForecolorLight: "Деактивиран цвят",
    colorsTitle: "Цветове",
    font: "Шрифт",
    lines: "Линии",
    borderDefault: "Преобладаващ",
    borderLight: "Незначителен",
    fontFamily: "Шрифтово семейство",
    fontSize: "Размер на шрифта",
    color: "Цвят",
    placeholderColor: "Цвят на контейнера",
    size: "Размер",
    fontWeightRegular: "Същински (обичаен)",
    fontWeightHeavy: "Тежък",
    fontWeightSemiBold: "Полудебел",
    fontWeightBold: "Удебелен",
    scale: "Мащаб",
    cornerRadius: "Радиус на ъгъла",
    surveyTitle: "Шрифт на заглавието на анкетата",
    surveyDescription: "Шрифт за описание на проучването",
    pageTitle: "Шрифт на заглавието на страницата",
    titleFont: "Шрифт на заглавието",
    descriptionFont: "Шрифт за описание",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Добавяне на ефект на сянка",
    opacity: "Непрозрачност",
    boxShadowBlur: "Замъгляване",
    boxShadowSpread: "Разпространение",
    boxShadowDrop: "Капка",
    boxShadowInner: "Вътрешен",
    shadow: "Ефекти на сянка",
    headerView: "Изглед",
    headerViewBasic: "Основен",
    headerViewAdvanced: "Напреднал",
    coverInheritWidthFrom: "Ширина на областта на съдържанието",
    coverInheritWidthFromSurvey: "Същото като проучването",
    coverInheritWidthFromContainer: "Побиране в контейнера",
    coverTextAreaWidth: "Ширина на текста",
    coverBackgroundColorSwitch: "Цвят на фона",
    coverBackgroundColorNone: "Никой",
    coverBackgroundColorAccentColor: "Цвят за акцентиране",
    coverBackgroundColorCustom: "Обичай",
    horizontalAlignmentLeft: "Ляво",
    horizontalAlignmentCenter: "Център",
    horizontalAlignmentRight: "Дясно",
    verticalAlignmentTop: "Връх",
    verticalAlignmentMiddle: "Среда",
    verticalAlignmentBottom: "Дъно",
    logoPosition: "Позиция на логото",
    coverTitlePosition: "Позиция на заглавието",
    coverDescriptionPosition: "Описание позиция",
    names: {
      default: "По подразбиране",
      sharp: "Остър",
      borderless: "Без граници",
      flat: "Апартамент",
      plain: "Равнина",
      doubleborder: "Двойна граница",
      layered: "Пластове",
      solid: "Солиден",
      threedimensional: ".3D",
      contrast: "Контраст"
    },
    colors: {
      teal: "Тийл",
      blue: "Син",
      purple: "Лилав",
      orchid: "Орхидея",
      tulip: "Лале",
      brown: "Кафяв",
      green: "Зелен"
    }
  }
};

// Uncomment the line below if you create a custom dictionary.
// Replace "en" with a custom locale code (for example, "fr" or "de"),
// Replace `enStrings` with the name of the variable that contains the custom dictionary.
editorLocalization.locales["bg"] = bgStrings;
// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// ed.themePropertyGridTitle: "Theme Settings" => "Настройки на тема"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Сигурни ли сте, че искате да изтриете всички низове за този език?"
// ed.themeExportButton: "Export" => "Износ"
// ed.themeImportButton: "Import" => "Внос"
// ed.themeResetButton: "Reset theme settings to default" => "Връщане на настройките на тема в начално състояние по подразбиране"
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Възможностите за избор се копират от"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "ясна стойност на въпроса: {0}"
// pe.overridingPropertyPrefix: "Set by " => "Зададено от "
// pe.minSelectedChoices: "Minimum selected choices" => "Минимален избор"
// pe.rateType: "Rate type" => "Тип на тарифата"
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Преоразмерява видимата област на входното поле. Моля, използвайте настройката <b>Проверка → максимална</b> дължина, за да ограничите входната дължина."
// p.precision: "Precision" => "Точност"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Област на манипулатора за плъзгане на матрицата"
// p.backgroundImage: "Background image" => "Фоново изображение"
// p.backgroundImageFit: "Background image fit" => "Побиране на фоново изображение"
// p.backgroundImageAttachment: "Background image attachment" => "Прикачен файл с фоново изображение"
// p.backgroundOpacity: "Background opacity" => "Непрозрачност на фона"
// p.selectToRankEnabled: "Select to rank enabled" => "Изберете за класиране разрешено"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Изберете оформление за класиране на области"
// p.allowCameraAccess: "Allow camera access" => "Разреши достъп до камерата"
// p.scaleColorMode: "Scale color mode" => "Режим на мащабиране на цветовете"
// p.rateColorMode: "Rate color mode" => "Режим на оценяване на цветовете"
// p.templateTabTitle: "Template tab title" => "Заглавие на раздела \"Шаблон\""
// p.templateVisibleIf: "Template visible if" => "Шаблонът се вижда, ако"
// p.copyDisplayValue: "Copy display value" => "Копиране на показваната стойност"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Неподвижен"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Свитък"
// theme.placeholderColor: "Placeholder color" => "Цвят на контейнера"
// theme.fontWeightHeavy: "Heavy" => "Тежък"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Добавяне на ефект на сянка"
// theme.boxShadowDrop: "Drop" => "Капка"
// theme.boxShadowInner: "Inner" => "Вътрешен"
// names.default: "Default" => "По подразбиране"
// names.sharp: "Sharp" => "Остър"
// names.borderless: "Borderless" => "Без граници"
// names.flat: "Flat" => "Апартамент"
// names.plain: "Plain" => "Равнина"
// names.doubleborder: "Double Border" => "Двойна граница"
// names.layered: "Layered" => "Пластове"
// names.solid: "Solid" => "Солиден"
// names.threedimensional: "3D" => ".3D"
// names.contrast: "Contrast" => "Контраст"
// colors.teal: "Teal" => "Тийл"
// colors.blue: "Blue" => "Син"
// colors.purple: "Purple" => "Лилав"
// colors.orchid: "Orchid" => "Орхидея"
// colors.tulip: "Tulip" => "Лале"
// colors.brown: "Brown" => "Кафяв"
// colors.green: "Green" => "Зелен"
// ed.themeSettings: "Theme Settings" => "Настройки на тема"
// ed.themeSettingsTooltip: "Open theme settings" => "Отваряне на настройките на тема"
// pe.resetToDefaultCaption: "Reset" => "Проучване"
// pv.file: "Local files" => "Локални файлове"
// pv.camera: "Camera" => "Фотоапарат"
// pv.file-camera: "Local files or camera" => "Локални файлове или камера"
// ed.translateUsigAI: "Auto-translate All" => "Автоматичен превод на всички"
// ed.translationDialogTitle: "Untranslated strings" => "Непреведени низове"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Моля, въведете поне {0} артикула"
// lg.question_resetValueName: "Reset question value" => "Нулиране на стойността на въпроса"
// lg.column_resetValue: "Reset column value" => "Нулиране на стойността на колона"
// pe.markRequired: "Mark as required" => "Маркирай както се изисква"
// pe.removeRequiredMark: "Remove the required mark" => "Премахване на необходимия знак"
// p.resetValueIf: "Reset value if" => "Нулиране на стойността, ако"

// lg.question_setValueName: "Set question value" => "Задаване на стойност на въпрос"
// lg.column_resetValueName: "Reset column value" => "Нулиране на стойността на колона"
// lg.column_setValueName: "Set column value" => "Задаване на стойност на колона"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Израз, чийто резултат ще бъде присвоен на целевия въпрос."
// survey.title: "Title" => "Заглавие"
// page.title: "Title" => "Заглавие"
// p.setValueIf: "Set value if" => "Задайте стойност, ако"
// theme.groupHeader: "Header" => "Заглавка"
// theme.coverTitleForecolor: "Title forecolor" => "Цвят на предния план на заглавието"
// theme.coverOverlapEnabled: "Overlap" => "Припокриване"
// theme.backgroundImageFitFill: "Stretch" => "Участък"
// theme.backgroundImageFitTile: "Tile" => "Плочки"
// theme.headerView: "View" => "Изглед"
// theme.headerViewBasic: "Basic" => "Основен"
// theme.headerViewAdvanced: "Advanced" => "Напреднал"
// theme.coverInheritWidthFrom: "Content area width" => "Ширина на областта на съдържанието"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "Същото като проучването"
// theme.coverInheritWidthFromPage: "Fit to page" => "Побери в страницата"
// theme.coverTextAreaWidth: "Text width" => "Ширина на текста"
// theme.coverBackgroundColorSwitch: "Background color" => "Цвят на фона"
// theme.coverBackgroundColorNone: "None" => "Никой"
// theme.coverBackgroundColorAccentColor: "Accent color" => "Цвят за акцентиране"
// theme.coverBackgroundColorCustom: "Custom" => "Обичай"
// theme.horizontalAlignmentLeft: "Left" => "Ляво"
// theme.horizontalAlignmentCenter: "Center" => "Център"
// theme.horizontalAlignmentRight: "Right" => "Дясно"
// theme.verticalAlignmentTop: "Top" => "Връх"
// theme.verticalAlignmentMiddle: "Middle" => "Среда"
// theme.verticalAlignmentBottom: "Bottom" => "Дъно"
// lg.question_resetValueText: "reset value for question: {0}" => "нулиране на стойността за въпрос: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "присвояване на стойност: {1} на въпрос: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Нулиране на стойността на клетката за колона: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Присвояване на стойност на клетка: {1} на колона: {0}"
// ed.surveyJsonExportButton: "Export" => "Износ"
// ed.surveyJsonImportButton: "Import" => "Внос"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Копиране в системния буфер"
// pe.filePlaceholder: "File placeholder text" => "Текст в контейнер за файл"
// pe.photoPlaceholder: "Photo placeholder text" => "Текст в контейнер за снимка"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Текст в контейнер за файл или снимка"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Прилага се, когато \"Тип източник\" е \"Локални файлове\" или когато камерата не е налична"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Прилага се, когато \"Тип източник\" е \"Камера\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Прилага се, когато \"Тип източник\" е \"Локални файлове или камера\"."
// theme.groupBackground: "Background" => "Фон"
// theme.groupAppearance: "Appearance" => "Външен вид"
// theme.coverDescriptionForecolor: "Description forecolor" => "Описание цвят на предния цвят"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Наистина ли искате да нулирате темата? Всички ваши персонализации ще бъдат загубени."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Да, нулирайте темата"
// theme.groupBackground: "Background" => "Фон"
// theme.groupAppearance: "Appearance" => "Външен вид"
// theme.coverDescriptionForecolor: "Description forecolor" => "Описание цвят на предния цвят"
// theme.coverInheritWidthFromContainer: "Fit to container" => "Побиране в контейнера"
// signaturepad.showPlaceholder: "Show the placeholder" => "Показване на контейнера"
// signaturepad.placeholder: "Placeholder text" => "Текст в контейнер"
// theme.surveyDescription: "Survey description font" => "Шрифт за описание на проучването"
// ed.prevFocus: "Focus previous" => "Фокус предишен"
// ed.nextFocus: "Focus next" => "Фокусирай се върху следващия"
// ed.saveTheme: "Save Theme" => "Запиши темата"
// ed.saveThemeTooltip: "Save Theme" => "Запиши темата"
// lg.page_requireName: "Make page required" => "Направи страницата задължителна"
// lg.panel_requireName: "Make page required" => "Направи страницата задължителна"
// signaturepad.signatureWidth: "Signature area width" => "Ширина на областта за подпис"
// signaturepad.signatureHeight: "Signature area height" => "Височина на областта за подпис"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Автоматично мащабиране на областта за подписи"
// signaturepad.penMinWidth: "Minimum pen width" => "Минимална ширина на писалката"
// signaturepad.penMaxWidth: "Maximum pen width" => "Максимална ширина на перото"
// theme.logoPosition: "Logo position" => "Позиция на логото"
// theme.coverTitlePosition: "Title position" => "Позиция на заглавието"
// theme.coverDescriptionPosition: "Description position" => "Описание позиция"
// ed.propertyGridNoResultsFound: "No results found" => "Няма намерени резултати"
// pv.leftRight: "Left and right" => "Наляво и надясно"
// p.sourceType: "Source type" => "Тип източник"
// p.fitToContainer: "Fit to container" => "Побиране в контейнера"
// p.setValueExpression: "Set value expression" => "Задаване на израз за стойност"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Възможностите за избор се зареждат от уеб услуга."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Отидете в настройките"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Визуализация на заредените опции за избор"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Предотвратяване на дублиращи се отговори в редове"
// theme.advancedMode: "Advanced mode" => "Разширен режим"
// theme.backgroundCornerRadius: "Background and corner radius" => "Фон и радиус на ъгъла"
// theme.colorsTitle: "Colors" => "Цветове"
// theme.font: "Font" => "Шрифт"
// theme.lines: "Lines" => "Линии"
// theme.titleFont: "Title font" => "Шрифт на заглавието"
// theme.descriptionFont: "Description font" => "Шрифт за описание"
// theme.shadow: "Shadow effects" => "Ефекти на сянка"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Разрешаване на опцията \"Отказ на отговор\""
// pe.showDontKnowItem: "Allow the Don't Know option" => "Разрешаване на опцията \"Не знам\""
// pv.contain: "Contain" => "Съдържам"
// pv.cover: "Cover" => "Капак"
// pv.fill: "Fill" => "Запълване"