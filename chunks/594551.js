function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => "".concat(e.item, " غير المحدد"),
        longPressToSelect: "اضغط مطولًا للدخول إلى وضع التحديد.",
        select: "تحديد",
        selectedAll: "جميع العناصر المحددة.",
        selectedCount: (e, t) => "".concat(t.plural(e.count, {
            "=0": "لم يتم تحديد عناصر",
            one: () => "".concat(t.number(e.count), " عنصر محدد"),
            other: () => "".concat(t.number(e.count), " عنصر محدد")
        }), "."),
        selectedItem: e => "".concat(e.item, " المحدد")
    }
}