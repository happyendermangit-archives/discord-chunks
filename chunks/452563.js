function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "".concat(e.item, "이(가) 선택되지 않았습니다."),
        longPressToSelect: "선택 모드로 들어가려면 길게 누르십시오.",
        select: "선택",
        selectedAll: "모든 항목이 선택되었습니다.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "선택된 항목이 없습니다",
            one: () => "".concat(t.number(e.count), "개 항목이 선택되었습니다"),
            other: () => "".concat(t.number(e.count), "개 항목이 선택되었습니다")
        }), "."),
        selectedItem: e => "".concat(e.item, "이(가) 선택되었습니다.")
    }
}