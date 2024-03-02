function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "未選取「".concat(e.item, "」。"),
        longPressToSelect: "長按以進入選擇模式。",
        select: "選取",
        selectedAll: "已選取所有項目。",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "未選取任何項目",
            one: () => "已選取 ".concat(t.number(e.count), " 個項目"),
            other: () => "已選取 ".concat(t.number(e.count), " 個項目")
        }), "。"),
        selectedItem: e => "已選取「".concat(e.item, "」。")
    }
}