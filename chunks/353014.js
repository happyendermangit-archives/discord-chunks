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
        finishRangeSelectionPrompt: "Klik for at fuldf\xf8re valg af datoomr\xe5de",
        maximumDate: "Sidste ledige dato",
        minimumDate: "F\xf8rste ledige dato",
        next: "N\xe6ste",
        previous: "Forrige",
        selectedDateDescription: e => "Valgt dato: ".concat(e.date),
        selectedRangeDescription: e => "Valgt interval: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Klik for at starte valg af datoomr\xe5de",
        todayDate: e => "I dag, ".concat(e.date),
        todayDateSelected: e => "I dag, ".concat(e.date, " valgt")
    }
}