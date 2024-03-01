function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, "–").concat(e.endDate),
        dateSelected: e => "".concat(e.date, " kiv\xe1lasztva"),
        finishRangeSelectionPrompt: "Kattintson a d\xe1tumtartom\xe1ny kijel\xf6l\xe9s\xe9nek befejez\xe9s\xe9hez",
        maximumDate: "Utols\xf3 el\xe9rhető d\xe1tum",
        minimumDate: "Az első el\xe9rhető d\xe1tum",
        next: "K\xf6vetkező",
        previous: "Előző",
        selectedDateDescription: e => "Kijel\xf6lt d\xe1tum: ".concat(e.date),
        selectedRangeDescription: e => "Kijel\xf6lt tartom\xe1ny: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Kattintson a d\xe1tumtartom\xe1ny kijel\xf6l\xe9s\xe9nek ind\xedt\xe1s\xe1hoz",
        todayDate: e => "Ma, ".concat(e.date),
        todayDateSelected: e => "Ma, ".concat(e.date, " kijel\xf6lve")
    }
}