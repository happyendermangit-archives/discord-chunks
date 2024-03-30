function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        searchAllStickers: function() {
            return r
        }
    });
    var i = n("483360");
    n("285651");
    let r = e => i.default.queryStickers([e], !0).map(e => {
        let {
            sticker: t
        } = e;
        return t
    })
}