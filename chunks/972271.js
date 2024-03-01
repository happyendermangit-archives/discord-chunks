function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " から ").concat(e.endDate),
        dateSelected: e => "".concat(e.date, " を選択"),
        finishRangeSelectionPrompt: "クリックして日付範囲の選択を終了",
        maximumDate: "最終利用可能日",
        minimumDate: "最初の利用可能日",
        next: "次へ",
        previous: "前へ",
        selectedDateDescription: e => "選択した日付 : ".concat(e.date),
        selectedRangeDescription: e => "選択範囲 : ".concat(e.dateRange),
        startRangeSelectionPrompt: "クリックして日付範囲の選択を開始",
        todayDate: e => "本日、".concat(e.date),
        todayDateSelected: e => "本日、".concat(e.date, " を選択")
    }
}