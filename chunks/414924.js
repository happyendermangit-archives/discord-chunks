function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " – ").concat(e.endDate),
        dateSelected: e => "".concat(e.date, " valittu"),
        finishRangeSelectionPrompt: "Lopeta p\xe4iv\xe4m\xe4\xe4r\xe4alueen valinta napsauttamalla t\xe4t\xe4.",
        maximumDate: "Viimeinen varattavissa oleva p\xe4iv\xe4m\xe4\xe4r\xe4",
        minimumDate: "Ensimm\xe4inen varattavissa oleva p\xe4iv\xe4m\xe4\xe4r\xe4",
        next: "Seuraava",
        previous: "Edellinen",
        selectedDateDescription: e => "Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ".concat(e.date),
        selectedRangeDescription: e => "Valittu aikav\xe4li: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Aloita p\xe4iv\xe4m\xe4\xe4r\xe4alueen valinta napsauttamalla t\xe4t\xe4.",
        todayDate: e => "T\xe4n\xe4\xe4n, ".concat(e.date),
        todayDateSelected: e => "T\xe4n\xe4\xe4n, ".concat(e.date, " valittu")
    }
}