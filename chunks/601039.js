function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "De la ".concat(e.startDate, " p\xe2nă la ").concat(e.endDate),
        dateSelected: e => "".concat(e.date, " selectată"),
        finishRangeSelectionPrompt: "Apăsaţi pentru a finaliza selecţia razei pentru dată",
        maximumDate: "Ultima dată disponibilă",
        minimumDate: "Prima dată disponibilă",
        next: "Următorul",
        previous: "\xcenainte",
        selectedDateDescription: e => "Dată selectată: ".concat(e.date),
        selectedRangeDescription: e => "Interval selectat: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Apăsaţi pentru a \xeencepe selecţia razei pentru dată",
        todayDate: e => "Astăzi, ".concat(e.date),
        todayDateSelected: e => "Azi, ".concat(e.date, " selectată")
    }
}