function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFilteredStickers: function() {
            return s
        }
    }), n("653041");
    var i = n("285651"),
        r = n("138421");
    let s = (e, t, n) => {
        if ("" === e) return null;
        let s = [],
            a = [];
        return (0, r.searchAllStickers)(e).forEach(e => {
            let r = (0, i.getStickerSendability)(e, t, n);
            r === i.StickerSendability.SENDABLE ? s.push(e) : r === i.StickerSendability.SENDABLE_WITH_PREMIUM && a.push(e)
        }), {
            sendable: s,
            sendableWithPremium: a
        }
    }
}