function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        searchAllStickers: function() {
            return l
        }
    });
    var i = n("25292");
    n("866353");
    let l = e => i.default.queryStickers([e], !0).map(e => {
        let {
            sticker: t
        } = e;
        return t
    })
}