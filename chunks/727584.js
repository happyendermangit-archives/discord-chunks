function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        previous: "Previous",
        next: "Next",
        selectedDateDescription: e => "Selected Date: ".concat(e.date),
        selectedRangeDescription: e => "Selected Range: ".concat(e.dateRange),
        todayDate: e => "Today, ".concat(e.date),
        todayDateSelected: e => "Today, ".concat(e.date, " selected"),
        dateSelected: e => "".concat(e.date, " selected"),
        startRangeSelectionPrompt: "Click to start selecting date range",
        finishRangeSelectionPrompt: "Click to finish selecting date range",
        minimumDate: "First available date",
        maximumDate: "Last available date",
        dateRange: e => "".concat(e.startDate, " to ").concat(e.endDate)
    }
}