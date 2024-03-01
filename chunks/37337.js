function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " till ").concat(e.endDate),
        dateSelected: e => "".concat(e.date, " har valts"),
        finishRangeSelectionPrompt: "Klicka f\xf6r att avsluta val av datumintervall",
        maximumDate: "Sista tillg\xe4ngliga datum",
        minimumDate: "F\xf6rsta tillg\xe4ngliga datum",
        next: "N\xe4sta",
        previous: "F\xf6reg\xe5ende",
        selectedDateDescription: e => "Valt datum: ".concat(e.date),
        selectedRangeDescription: e => "Valt intervall: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Klicka f\xf6r att v\xe4lja datumintervall",
        todayDate: e => "Idag, ".concat(e.date),
        todayDateSelected: e => "Idag, ".concat(e.date, " har valts")
    }
}