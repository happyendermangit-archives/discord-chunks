function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "Od ".concat(e.startDate, " do ").concat(e.endDate),
        dateSelected: e => "Vybrat\xfd d\xe1tum ".concat(e.date),
        finishRangeSelectionPrompt: "Kliknut\xedm dokonč\xedte v\xfdber rozsahu d\xe1tumov",
        maximumDate: "Posledn\xfd dostupn\xfd d\xe1tum",
        minimumDate: "Prv\xfd dostupn\xfd d\xe1tum",
        next: "Nasleduj\xface",
        previous: "Predch\xe1dzaj\xface",
        selectedDateDescription: e => "Vybrat\xfd d\xe1tum: ".concat(e.date),
        selectedRangeDescription: e => "Vybrat\xfd rozsah: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Kliknut\xedm spust\xedte v\xfdber rozsahu d\xe1tumov",
        todayDate: e => "Dnes ".concat(e.date),
        todayDateSelected: e => "Vybrat\xfd dnešn\xfd d\xe1tum ".concat(e.date)
    }
}