function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return (e = String(e || ""), a.test(e)) ? "rtl" : o.test(e) ? "ltr" : "neutral"
    };
    var n = "֑-߿יִ-﷽ﹰ-ﻼ",
        u = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
        a = RegExp("^[^" + u + "]*[" + n + "]"),
        o = RegExp("^[^" + n + "]*[" + u + "]")
}