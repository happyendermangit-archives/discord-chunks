function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " ~ ").concat(e.endDate),
        dateSelected: e => "".concat(e.date, " 선택됨"),
        finishRangeSelectionPrompt: "날짜 범위 선택을 완료하려면 클릭하십시오.",
        maximumDate: "마지막으로 사용 가능한 일자",
        minimumDate: "처음으로 사용 가능한 일자",
        next: "다음",
        previous: "이전",
        selectedDateDescription: e => "선택 일자: ".concat(e.date),
        selectedRangeDescription: e => "선택 범위: ".concat(e.dateRange),
        startRangeSelectionPrompt: "날짜 범위 선택을 시작하려면 클릭하십시오.",
        todayDate: e => "오늘, ".concat(e.date),
        todayDateSelected: e => "오늘, ".concat(e.date, " 선택됨")
    }
}