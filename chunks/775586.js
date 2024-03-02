function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " إلى ").concat(e.endDate),
        dateSelected: e => "".concat(e.date, " المحدد"),
        finishRangeSelectionPrompt: "انقر لإنهاء عملية تحديد نطاق التاريخ",
        maximumDate: "آخر تاريخ متاح",
        minimumDate: "أول تاريخ متاح",
        next: "التالي",
        previous: "السابق",
        selectedDateDescription: e => "تاريخ محدد: ".concat(e.date),
        selectedRangeDescription: e => "المدى الزمني المحدد: ".concat(e.dateRange),
        startRangeSelectionPrompt: "انقر لبدء عملية تحديد نطاق التاريخ",
        todayDate: e => "اليوم، ".concat(e.date),
        todayDateSelected: e => "اليوم، ".concat(e.date, " محدد")
    }
}