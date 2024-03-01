function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " až ").concat(e.endDate),
        dateSelected: e => "Vybr\xe1no ".concat(e.date),
        finishRangeSelectionPrompt: "Kliknut\xedm dokonč\xedte v\xfdběr rozsahu dat",
        maximumDate: "Posledn\xed dostupn\xe9 datum",
        minimumDate: "Prvn\xed dostupn\xe9 datum",
        next: "Dalš\xed",
        previous: "Předchoz\xed",
        selectedDateDescription: e => "Vybran\xe9 datum: ".concat(e.date),
        selectedRangeDescription: e => "Vybran\xe9 obdob\xed: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Kliknut\xedm zah\xe1j\xedte v\xfdběr rozsahu dat",
        todayDate: e => "Dnes, ".concat(e.date),
        todayDateSelected: e => "Dnes, vybr\xe1no ".concat(e.date)
    }
}