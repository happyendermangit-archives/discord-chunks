function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " do ").concat(e.endDate),
        dateSelected: e => "".concat(e.date, " odabran"),
        finishRangeSelectionPrompt: "Kliknite da dovršite raspon odabranih datuma",
        maximumDate: "Posljednji raspoloživi datum",
        minimumDate: "Prvi raspoloživi datum",
        next: "Sljedeći",
        previous: "Prethodni",
        selectedDateDescription: e => "Odabrani datum: ".concat(e.date),
        selectedRangeDescription: e => "Odabrani raspon: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Kliknite da započnete raspon odabranih datuma",
        todayDate: e => "Danas, ".concat(e.date),
        todayDateSelected: e => "Danas, odabran ".concat(e.date)
    }
}