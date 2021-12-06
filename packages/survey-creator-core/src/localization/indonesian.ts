import { editorLocalization } from "../editorLocalization";

export var indonesianStrings = {
  //survey templates
  survey: {
    edit: "Ubah",
    externalHelpLink: "Tonton dan pelajari cara membuat survei",
    externalHelpLinkUrl:
      "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Silahkan letakkan pertanyaan di sini dari Kotak Perkakas di sebelah kiri.",
    copy: "Salin",
    addToToolbox: "Tambahkan ke Kotak Perkakas",
    deletePanel: "Hapus Panel",
    deleteQuestion: "Hapus Pertanyaan",
    convertTo: "Mengubah ke",
    drag: "Tarik elemen"
  },
  //questionTypes
  qt: {
    default: "Default",
    checkbox: "Kotak Centang",
    comment: "Komentar",
    imagepicker: "Gambar",
    dropdown: "Kotak Kombo",
    file: "Berkas",
    html: "Html",
    matrix: "Matriks (pilihan tunggal)",
    matrixdropdown: "Matriks (pilihan ganda)",
    matrixdynamic: "Matriks (baris dinamis)",
    multipletext: "Teks Ganda",
    panel: "Panel",
    paneldynamic: "Panel (panel dinamis)",
    radiogroup: "Pilihan Ganda",
    rating: "Peringkat",
    text: "Input Tunggal",
    boolean: "Boolean",
    expression: "Ekspresi (dibaca saja)",
    flowpanel: "Panel Aliran"
  },
  //Strings in Editor
  ed: {
    defaultLocale: "Default ({0})",
    survey: "Survei",
    settings: "Pengaturan Survei",
    opjectPropertiesHeader: "Lanjutan",
    showObjectProperties: "Tampilkan Properti Obyek",
    hideObjectProperties: "Sembunyikan Properti Obyek",
    editSurvey: "Ubah Survei",
    addNewPage: "Tambah Halaman Baru",
    moveRight: "Geser ke Kanan",
    moveLeft: "Geser ke Kiri",
    deletePage: "Hapus Halaman",
    editPage: "Ubah Halaman",
    edit: "Ubah",
    newPageName: "halaman",
    newQuestionName: "pertanyaan",
    newPanelName: "panel",
    testSurvey: "Coba Survei",
    testSurveyAgain: "Coba Survei Lagi",
    testSurveyWidth: "Lebar survei: ",
    embedSurvey: "Embed Survei",
    translation: "Terjemahan",
    saveSurvey: "Simpan Survei",
    designer: "Rancangan Survei",
    jsonEditor: "Pengubah JSON",
    undo: "Urungkan",
    redo: "Ulangi",
    options: "Pilihan",
    generateValidJSON: "Hasilkan JSON yang Valid",
    generateReadableJSON: "Hasilkan JSON yang dapat dibaca",
    toolbox: "Kotak Perkakas",
    toolboxGeneralCategory: "Umum",
    delSelObject: "Hapus objek yang dipilih",
    editSelObject: "Ubah objek yang dipilih",
    correctJSON: "Please correct JSON.",
    surveyResults: "Hasil survei: ",
    surveyResultsTable: "Sebagai tabel",
    surveyResultsJson: "Sebagai JSON",
    resultsTitle: "Judul Pertanyaan",
    resultsName: "Nama Pertanyaan",
    resultsValue: "Nilai Jawaban",
    resultsDisplayValue: "Tampilkan Nilai",
    modified: "Dimodifikasi",
    saving: "Menyimpan",
    saved: "Tersimpan",
    saveError: "Error! Konten editor tidak berhasil disimpan.",
    translationAddLanguage: "Pilih bahasa untuk terjemahan",
    translationShowAllStrings: "Tampilkan seluruh string",
    translationShowAllPages: "Tampilkan seluruh halaman",
    translationNoStrings: "Tidak ada string diterjemahkan. Silahkan ganti penyaring.",
    translationExportToSCVButton: "Eksport ke CSV",
    translationImportFromSCVButton: "Import dari CSV",
    translationMergeLocaleWithDefault: "Gabungkan {0} dengan default locale",
    bold: "Tebal",
    italic: "Miring",
    underline: "Garis Bawah",
    fpAddQuestion: "Tambah pertanyaan...",
    completedHtmlOnConditionItemText: "Tampilkan jika:"
  },
  //Property names in table headers
  pel: {
    isRequired: "Wajib?"
  },
  //Property Editors
  pe: {
    apply: "Terapkan",
    ok: "OK",
    cancel: "Batal",
    reset: "Reset",
    close: "Tutup",
    delete: "Hapus",
    addNew: "Tambahkan Baru",
    addItem: "Klik untuk menambahkan sebuah item...",
    removeAll: "Hapus Semua",
    edit: "Ubah",
    itemValueEdit: "Ditampilkan Jika",
    editChoices: "Ubah Pilihan",
    move: "Pindah",
    empty: "<kosong>",
    notEmpty: "<ubah nilai>",
    fastEntry: "Entri Cepat",
    formEntry: "Entri Form",
    testService: "Coba layanan",
    conditionSelectQuestion: "Pilih pertanyaan...",
    conditionValueQuestionTitle: "Silahkan masukkan/pilih nilai",
    conditionButtonAdd: "Tambah",
    conditionButtonReplace: "Ganti",
    conditionHelp:
      "Silahkan masukkan ekspresi boolean. Harus mengembalikan 'benar' agar pertanyaan dapat terlihat. Contoh: {question1} = 'nilai1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp:
      "Silahkan masukan sebuah ekspresi. Anda dapat menggunakan kurung kurawal untuk mendapatkan akses pada nilai pertanyaan: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
    aceEditorHelp: "Tekan ctrl+spasi untuk mendapatkan petunjuk penyelesaian ekspresi",
    aceEditorRowTitle: "Baris saat ini",
    aceEditorPanelTitle: "Panel saat ini",
    showMore: "Untuk detil selanjutnya silahkan periksa dokumentasi",
    conditionShowMoreUrl:
      "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
    assistantTitle: "Pertanyaan tersedia:",
    cellsEmptyRowsColumns: "Harus ada setidaknya satu kolom atau baris",

    propertyIsEmpty: "Silahkan masukkan nilai",
    value: "Nilai",
    text: "Teks",
    rowid: "ID baris",
    imageLink: "Link Gambar",
    columnEdit: "Ubah kolom: {0}",
    itemEdit: "Ubah item: {0}",

    url: "URL",
    path: "Path",
    valueName: "Nama nilai",
    titleName: "Nama judul",

    hasOther: "Memiliki item lain",
    otherText: "Teks item lain",
    name: "Nama",
    title: "Judul",
    cellType: "Jenis sel",
    colCount: "Jumlah kolom",
    choicesOrder: "Tentukan urutan pilihan",
    visible: "Terlihat?",
    isRequired: "Wajib?",
    startWithNewLine: "Mulai dengan baris baru?",
    rows: "Jumlah baris",
    placeHolder: "Masukkan placeholder",
    showPreview: "Tunjukkan tinjauan gambar?",
    storeDataAsText: "Simpan konten berkas dalam hasil JSON sebagai teks",
    maxSize: "Ukuran maksimum berkas dalam byte",
    imageHeight: "Tinggi gambar",
    imageWidth: "Lebar gambar",
    rowCount: "Jumlah baris",
    columnLayout: "Tata letak kolom",
    addRowLocation: "Tambah lokasi tombol baris",
    addRowText: "Teks tambah tombol baris",
    removeRowText: "Teks hapus tombol baris",
    minRateDescription: "Deskripsi nilai minimum",
    maxRateDescription: "Deskripsi nilai maksimum",
    inputType: "Jenis masukan",
    optionsCaption: "Keterangan pilihan",
    defaultValue: "Nilai standar",
    cellsDefaultRow: "Teks sel standar",

    surveyEditorTitle: "Ubah pengaturan survei",
    qEditorTitle: "Ubah: {0}",

    maxLength: "Panjang maksimum",

    //survey
    showTitle: "Tampilkan/sembunyikan judul",
    locale: "Bahasa standar",
    mode: "Mode (ubah/baca saja)",
    clearInvisibleValues: "Bersihkan nilai tak terlihat",
    cookieName: "Nama cookie (untuk menonaktifkan menjalankan survei dua kali secara lokal)",
    sendResultOnPageNext: "Kirim hasil survei pada halaman selanjutnya",
    storeOthersAsComment: "Simpan nilai 'lainnya' pada bidang lainnya",
    showPageTitles: "Tampilkan judul halaman",
    showPageNumbers: "Tampilkan nomor halaman",
    pagePrevText: "Teks halaman tombol sebelumnya",
    pageNextText: "Teks halaman tombol selanjutnya",
    completeText: "Teks tombol selesai",
    startSurveyText: "Teks tombol mulai",
    showNavigationButtons: "Tampilkan tombol navigasi (navigasi standar)",
    showPrevButton: "Tampilkan tombol sebelumnya (pengguna mungkin kembali ke halaman sebelumnya)",
    firstPageIsStarted: "Halaman pertama pada survei adalah halaman yang telah dimulai.",
    showCompletedPage: "Tampilkan keseluruhan halaman di akhir (completedHtml)",
    goNextPageAutomatic:
      "Setelah menjawa seluruh pertanyaan, pergi ke halaman berikutnya secara otomatis",
    showProgressBar: "Tampilkan progress bar",
    questionTitleLocation: "Lokasi judul pertanyaan",
    requiredText: "Simbil pertanyaan wajib",
    questionStartIndex: "Indeks mulai pertanyaan (1, 2 atau 'A', 'a')",
    showQuestionNumbers: "Tampilkan nomor pertanyaan",
    questionTitleTemplate:
      "Template Judul Pertanyaan, default adalah: '{no}. {require} {title}'",
    questionErrorLocation: "Lokasi Pertanyaan Error",
    focusFirstQuestionAutomatic: "Fokus ke pertanyaan pertama saat pergantian halaman",
    questionsOrder: "Urutakan elemen pada halaan",
    maxTimeToFinish: "Waktu maksimum untuk menyelesaikan survei",
    maxTimeToFinishPage: "Waktu maksimum untuk menyelesaikan suatu halaman",
    showTimerPanel: "Tampilkan panel pengatur waktu",
    showTimerPanelMode: "Tampilkan mode panel pengatur waktu",
    renderMode: "Mode render",
    allowAddPanel: "Bolehkan penambahan panel",
    allowRemovePanel: "Bolehkan penghapusan panel",
    panelAddText: "Teks tambah panel",
    panelRemoveText: "Teks hapus panel",
    isSinglePage: "Tampilkan seluruh elemen pada halaman",
    html: "Html",
    expression: "Ekspresi",

    minValue: "Nilai minimum",
    maxValue: "Nilai maksimum",
    minLength: "Panjang minimum",
    allowDigits: "Bolehkan angka",
    minCount: "Hitungan minimum",
    maxCount: "Hitungan maksimum",
    regex: "Ekspresi reguler",

    totalText: "Total teks",
    totalType: "Total jenis",
    totalExpression: "Total ekspresi",
    totalDisplayStyle: "Total gaya tampilan",
    totalCurrency: "Total mata uang",
    totalFormat: "Total format",

    tabs: {
      general: "Umum",
      fileOptions: "Pilihan berkas",
      html: "Editor Html",
      columns: "Kolom",
      rows: "Baris",
      choices: "Pilihan",
      items: "Barang",
      visibleIf: "Terlihat Jika",
      enableIf: "Memungkinkan Jika",
      requiredIf: "Wajib Jika",
      rateValues: "Nilai Tingkat",
      choicesByUrl: "Pilih dari Web",
      matrixChoices: "Pilihan Standar",
      multipleTextItems: "Masukan Teks",
      validators: "Validator",
      navigation: "Navigasi",
      question: "Pertanyaan",
      completedHtml: "Html Selesai",
      loadingHtml: "Memuat Html",
      timer: "Pengatur Waktu/Kuis",
      triggers: "Trigger",
      templateTitle: "Judul templat",
      totals: "Total"
    },
    editProperty: "Ubah properti '{0}'",
    items: "[ Barang: {0} ]",

    enterNewValue: "Silahkan masukkan nilai",
    noquestions: "Tidak ada pertanyaan dalam survei.",
    createtrigger: "Silahkan buat sebuah trigger",
    triggerOn: "On ",
    triggerMakePagesVisible: "Buat halaman terlihat:",
    triggerMakeQuestionsVisible: "Buat elemen terlihat:",
    triggerCompleteText: "Selesaikan survei jika sukses.",
    triggerNotSet: "Trigger belum diatur",
    triggerRunIf: "Berjalan jika",
    triggerSetToName: "Ubah nilai dari: ",
    triggerFromName: "Salin nilai dari: ",
    triggerRunExpression: "Jalankan ekspresi ini:",
    triggerSetValue: "ke: ",
    triggerIsVariable: "Jangan meletakkan variabel ke hasil survey."
  },
  //Property values
  pv: {
    true: "benar",
    false: "salah",
    inherit: "inherit",
    show: "tampilkan",
    hide: "sembunyikan",
    default: "standar",
    initial: "inisial",
    random: "acak",
    collapsed: "dilipat",
    expanded: "direntangkan",
    none: "tidak ada",
    asc: "naik",
    desc: "turun",
    indeterminate: "tidak tentu",
    decimal: "desimal",
    currency: "mata uang",
    percent: "persen",
    firstExpanded: "perluasanPertama",
    off: "mati",
    onPanel: "pada Panel",
    onSurvey: "pada Survei",
    list: "daftar",
    progressTop: "progress atas",
    progressBottom: "progress bawah",
    progressTopBottom: "progress atas bawah",
    horizontal: "horizontal",
    vertical: "vertikal",
    top: "atas",
    bottom: "bawah",
    topBottom: "atas dan bawah",
    left: "kiri",
    color: "warna",
    date: "tanggal",
    datetime: "tanggal&waktu",
    "datetime-local": "tanggal&waktu-lokal",
    email: "surel",
    month: "bulan",
    number: "nomor",
    password: "kata sandi",
    range: "rentang",
    tel: "telepon",
    text: "teks",
    time: "waktu",
    url: "url",
    week: "minggu",
    hidden: "tersembunyi",
    on: "nyala",
    onPage: "pada halaman",
    edit: "ubah",
    display: "tampilan",
    onComplete: "saat selesai",
    onHidden: "saat tersembunyi",
    all: "semua",
    page: "halaman",
    survey: "survei",
    onNextPage: "pada halaman selanjutnya",
    onValueChanged: "saat nilai berubah"
  },
  //Operators
  op: {
    empty: "kosong",
    notempty: "tidak kosong",
    equal: "sama dengan",
    notequal: "tidak sama dengan",
    contains: "mengandung",
    notcontains: "tidak mengandung",
    greater: "lebih besar",
    less: "lebih kecil",
    greaterorequal: "lebih besar atau sama dengan",
    lessorequal: "lebih kecil atau sama dengan"
  },
  //Embed window
  ew: {
    angular: "Gunakan versi Angular",
    jquery: "Gunakan versi JQuery",
    knockout: "Gunakan versi Knockout",
    react: "Gunakan versi React",
    vue: "Gunakan versi Vue",
    bootstrap: "Untuk framework bootstrap",
    standard: "Tidak ada bootstrap",
    showOnPage: "Tampilkan survei pada sebuah halaman",
    showInWindow: "Tampilkan survei pada sebuah jendela",
    loadFromServer: "Muat survei JSON dari server",
    titleScript: "Skrip dan gaya",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  //Preview (Survey)
  ts: {
    selectPage: "Pilih halaman untuk dicoba:",
    showInvisibleElements: "Tampilkan elemen tak terlihat",
    emptySurveyText: "Tidak ada halaman atau pertanyaan yang tersedia di survei ini."
  },
  validators: {
    answercountvalidator: "jumlah jawaban",
    emailvalidator: "surel",
    expressionvalidator: "ekspresi",
    numericvalidator: "numerik",
    regexvalidator: "ekspresi reguler",
    textvalidator: "teks"
  },
  triggers: {
    completetrigger: "selesaikan survei",
    setvaluetrigger: "atur nilai",
    copyvaluetrigger: "salin nilai",
    runexpressiontrigger: "jalankan ekspresi",
    visibletrigger: "ubah visibilitas"
  },
  //Properties
  p: {
    name: "nama",
    title: {
      name: "judul",
      title: "Biarkan kosong, jika sama dengan 'Nama'"
    },

    navigationButtonsVisibility: "visibilitas tombol navigasi",
    questionsOrder: "urutan pertanyaan",
    maxTimeToFinish: "waktu maks untuk menyelesaikan",

    visible: "terlihat",
    visibleIf: "terlihat jika",
    questionTitleLocation: "lokasi judul pertanyaan",
    description: "deskripsi",
    state: "keadaan",
    isRequired: "wajib",
    requiredIf: "wajib jika",
    indent: "indentansi",
    requiredErrorText: "teks error wajib",
    startWithNewLine: "mulai dengan baris baru",
    innerIndent: "inden dalam",
    page: "halaman",

    width: "lebar",

    commentText: "teks komentar",
    valueName: "nama nilai",
    enableIf: "aktif jika",
    defaultValue: "nilai default",
    correctAnswer: "jawaban benar",
    readOnly: "baca saja",
    validators: "validator",
    titleLocation: "lokasi judul",

    hasComment: "memiliki komentar",
    hasOther: "memiliki lainnya",
    choices: "pilihan",
    choicesOrder: "urutkan pilihan",
    choicesByUrl: "pilihan dari URL",
    otherText: "teks lainnya",
    otherErrorText: "teks error lainnya",
    storeOthersAsComment: "simpan lainnnya sebagai komentar",

    label: "label",
    showTitle: "tampilkan judul",
    valueTrue: "nilai benar",
    valueFalse: "nilai salah",

    cols: "kolom",
    rows: "baris",
    placeHolder: "placeHolder",

    optionsCaption: "keterangan pilihan",

    expression: "ekspresi",
    format: "format",
    displayStyle: "gaya tampilan",
    currency: "mata uang",
    useGrouping: "gunakan kelompok",

    showPreview: "tampilkan pratinjau",
    allowMultiple: "bolehkan ganda",
    imageHeight: "tinggi gambar",
    imageWidth: "lebar gambar",
    storeDataAsText: "simpan data sebagai teks",
    maxSize: "ukuran maks",

    html: "html",

    columns: "kolom",
    cells: "sel",
    isAllRowRequired: "semuaBarisWajib",

    horizontalScroll: "horizontalScroll",
    cellType: "jenisSel",
    columnsLayout: "tataLetakKolom",
    columnColCount: "jumlahKolom",
    columnMinWidth: "lebarMinimalKolom",

    rowCount: "jumlahBaris",
    minRowCount: "jumlahBarisMin",
    maxRowCount: "jumlahBarisMaks",
    keyName: "namaKunci",
    keyDuplicationError: "kesalahanDuplikasiKunci ",
    confirmDelete: "konfirmasiHapus",
    confirmDeleteText: "teksKonfirmasiHapus",
    addRowLocation: "tambahLokasiBaris",
    addRowText: "teksTambahBaris",
    removeRowText: "teksHapusBaris",

    items: "items",
    itemSize: "ukuranBarang",
    colCount: "jumlahKolom",

    templateTitle: "judulTemplat",
    templateDescription: "deskripsiTemplat",
    allowAddPanel: "bolehkanTambahPanel",
    allowRemovePanel: "bolehkanHapusPanel",
    panelCount: "jumlahPanel",
    minPanelCount: "jumlahMinimumPanel",
    maxPanelCount: "jumlahMaksimumPanel",
    panelsState: "keadaanPanel",
    panelAddText: "teksTambahPanel",
    panelRemoveText: "teksHapusPanel",
    panelPrevText: "teksPanelSebelumnya",
    panelNextText: "teksPanelSelanjutnya",
    showQuestionNumbers: "tampilkanNomorPertanyaan",
    showRangeInProgress: "tampilkanRentangBerlangsung",
    renderMode: "modeRender",
    templateTitleLocation: "lokasiJudulTemplat",

    rateValues: "nilaiTingkat",
    rateMin: "tingkatMinimum",
    rateMax: "tingkatMaksimum",
    rateStep: "langkahTingkat",
    minRateDescription: "deskripsiTingkatMinimum",
    maxRateDescription: "deskripsiTingkatMaksimum",

    inputType: "jenisMasukan",
    size: "ukuran",

    locale: "Lokal",
    focusFirstQuestionAutomatic: "focusFirstQuestionAutomatic",
    completedHtml: "HtmlSelesai",
    completedBeforeHtml: "completedBeforeHtml",
    loadingHtml: "loadingHtml",
    triggers: "Trigger",
    cookieName: "namaCookie",
    sendResultOnPageNext: "Kirim hasil ke halaman selanjutnya",
    showNavigationButtons: "Tampilkan Tombol Navigasi",
    showPrevButton: "Tampilkan Tombol Sebelumnya",
    showPageTitles: "Tampilkan Judul Halaman",
    showCompletedPage: "Tampilkan Keseluruhan Halaman",
    showPageNumbers: "Tampilkan Nomor Halaman",
    questionErrorLocation: "Lokasi Pertanyaan Error",
    showProgressBar: "Tampilkan progress bar",
    mode: "mode",
    goNextPageAutomatic: "Ke Halaman Selanjutnya Otomatis",
    checkErrorsMode: "Mode Periksa Error",
    clearInvisibleValues: "Bersihkan Nilai Tak Terlihat",
    startSurveyText: "teksMulaiSurvei",
    pagePrevText: "teksHalamanSebelumnya",
    pageNextText: "teksHalamanSelanjutnya",
    completeText: "teksSelesai",
    requiredText: "teksWajib",
    questionStartIndex: "Index Mulai Pertanyaan",
    questionTitleTemplate: "Template Judul Pertanyaan",
    firstPageIsStarted: "Halaman Pertama Dimulai",
    isSinglePage: "Halaman Tunggal?",
    maxTimeToFinishPage: "Waktu Maks untuk Menyelesaikan Halaman",
    showTimerPanel: "Tampilkan Panel Pengatur Waktu",
    showTimerPanelMode: "Tampilkan showTimerPanelMode",

    defaultPanelValue: "nilai panel default",
    defaultRowValue: "nilai baris default",
    hasNone: "Memiliki None",
    noneText: "Non-teks",

    text: "teks",
  }
};

editorLocalization.locales["id"] = indonesianStrings;
