function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => `${e.startDate} \u{81F3} ${e.endDate}`,
        dateSelected: e => `\u{5DF2}\u{9009}\u{62E9} ${e.date}`,
        finishRangeSelectionPrompt: `\u{5355}\u{51FB}\u{4EE5}\u{5B8C}\u{6210}\u{9009}\u{62E9}\u{65E5}\u{671F}\u{8303}\u{56F4}`,
        maximumDate: `\u{6700}\u{540E}\u{4E00}\u{4E2A}\u{53EF}\u{7528}\u{65E5}\u{671F}`,
        minimumDate: `\u{7B2C}\u{4E00}\u{4E2A}\u{53EF}\u{7528}\u{65E5}\u{671F}`,
        next: `\u{4E0B}\u{4E00}\u{9875}`,
        previous: `\u{4E0A}\u{4E00}\u{9875}`,
        selectedDateDescription: e => `\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,
        selectedRangeDescription: e => `\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${e.dateRange}`,
        startRangeSelectionPrompt: `\u{5355}\u{51FB}\u{4EE5}\u{5F00}\u{59CB}\u{9009}\u{62E9}\u{65E5}\u{671F}\u{8303}\u{56F4}`,
        todayDate: e => `\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${e.date}`,
        todayDateSelected: e => `\u{5DF2}\u{9009}\u{62E9}\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${e.date}`
    }
}