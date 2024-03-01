function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " - ").concat(e.endDate),
        dateSelected: e => "".concat(e.date, " se\xe7ildi"),
        finishRangeSelectionPrompt: "Tarih aralığı se\xe7imini tamamlamak i\xe7in tıklayın",
        maximumDate: "Son m\xfcsait tarih",
        minimumDate: "İlk m\xfcsait tarih",
        next: "Sonraki",
        previous: "\xd6nceki",
        selectedDateDescription: e => "Se\xe7ilen Tarih: ".concat(e.date),
        selectedRangeDescription: e => "Se\xe7ilen Aralık: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Tarih aralığı se\xe7imini başlatmak i\xe7in tıklayın",
        todayDate: e => "Bug\xfcn, ".concat(e.date),
        todayDateSelected: e => "Bug\xfcn, ".concat(e.date, " se\xe7ildi")
    }
}