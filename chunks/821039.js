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
        dateSelected: e => "".concat(e.date, " izbrano"),
        finishRangeSelectionPrompt: "Kliknite za dokončanje izbire datumskega obsega",
        maximumDate: "Zadnji razpoložljivi datum",
        minimumDate: "Prvi razpoložljivi datum",
        next: "Naprej",
        previous: "Nazaj",
        selectedDateDescription: e => "Izbrani datum: ".concat(e.date),
        selectedRangeDescription: e => "Izbrano območje: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Kliknite za začetek izbire datumskega obsega",
        todayDate: e => "Danes, ".concat(e.date),
        todayDateSelected: e => "Danes, ".concat(e.date, " izbrano")
    }
}