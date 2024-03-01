function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " kuni ").concat(e.endDate),
        dateSelected: e => "".concat(e.date, " valitud"),
        finishRangeSelectionPrompt: "Kl\xf5psake kuup\xe4evavahemiku valimise l\xf5petamiseks",
        maximumDate: "Viimane saadaolev kuup\xe4ev",
        minimumDate: "Esimene saadaolev kuup\xe4ev",
        next: "J\xe4rgmine",
        previous: "Eelmine",
        selectedDateDescription: e => "Valitud kuup\xe4ev: ".concat(e.date),
        selectedRangeDescription: e => "Valitud vahemik: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Kl\xf5psake kuup\xe4evavahemiku valimiseks",
        todayDate: e => "T\xe4na, ".concat(e.date),
        todayDateSelected: e => "T\xe4na, ".concat(e.date, " valitud")
    }
}