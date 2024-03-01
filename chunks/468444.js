function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " til ").concat(e.endDate),
        dateSelected: e => "".concat(e.date, " valgt"),
        finishRangeSelectionPrompt: "Klikk for \xe5 fullf\xf8re valg av datoomr\xe5de",
        maximumDate: "Siste tilgjengelige dato",
        minimumDate: "F\xf8rste tilgjengelige dato",
        next: "Neste",
        previous: "Forrige",
        selectedDateDescription: e => "Valgt dato: ".concat(e.date),
        selectedRangeDescription: e => "Valgt omr\xe5de: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Klikk for \xe5 starte valg av datoomr\xe5de",
        todayDate: e => "I dag, ".concat(e.date),
        todayDateSelected: e => "I dag, ".concat(e.date, " valgt")
    }
}