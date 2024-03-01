function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        searchAllStickers: function() {
            return i
        }
    });
    var l = n("25292");
    n("866353");
    let i = e => l.default.queryStickers([e], !0).map(e => {
        let {
            sticker: t
        } = e;
        return t
    })
}