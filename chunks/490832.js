function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " 至 ").concat(e.endDate),
        dateSelected: e => "已选择 ".concat(e.date),
        finishRangeSelectionPrompt: "单击以完成选择日期范围",
        maximumDate: "最后一个可用日期",
        minimumDate: "第一个可用日期",
        next: "下一页",
        previous: "上一页",
        selectedDateDescription: e => "选定的日期：".concat(e.date),
        selectedRangeDescription: e => "选定的范围：".concat(e.dateRange),
        startRangeSelectionPrompt: "单击以开始选择日期范围",
        todayDate: e => "今天，即 ".concat(e.date),
        todayDateSelected: e => "已选择今天，即 ".concat(e.date)
    }
}