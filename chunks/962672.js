function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => `\u{421} ${e.startDate} \u{43F}\u{43E} ${e.endDate}`,
        dateSelected: e => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,
        finishRangeSelectionPrompt: `\u{429}\u{435}\u{43B}\u{43A}\u{43D}\u{438}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{437}\u{430}\u{432}\u{435}\u{440}\u{448}\u{438}\u{442}\u{44C} \u{432}\u{44B}\u{431}\u{43E}\u{440} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{430} \u{434}\u{430}\u{442}`,
        maximumDate: `\u{41F}\u{43E}\u{441}\u{43B}\u{435}\u{434}\u{43D}\u{44F}\u{44F} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}`,
        minimumDate: `\u{41F}\u{435}\u{440}\u{432}\u{430}\u{44F} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}`,
        next: `\u{414}\u{430}\u{43B}\u{435}\u{435}`,
        previous: `\u{41D}\u{430}\u{437}\u{430}\u{434}`,
        selectedDateDescription: e => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
        selectedRangeDescription: e => `\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,
        startRangeSelectionPrompt: `\u{429}\u{435}\u{43B}\u{43A}\u{43D}\u{438}\u{442}\u{435}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43D}\u{430}\u{447}\u{430}\u{442}\u{44C} \u{432}\u{44B}\u{431}\u{43E}\u{440} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{430} \u{434}\u{430}\u{442}`,
        todayDate: e => `\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, ${e.date}`,
        todayDateSelected: e => `\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`
    }
}