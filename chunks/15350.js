function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFilteredStickers: function() {
            return a
        }
    }), n("653041");
    var i = n("285651"),
        r = n("138421");
    let a = (e, t, n) => {
        if ("" === e) return null;
        let a = [],
            s = [];
        return (0, r.searchAllStickers)(e).forEach(e => {
            let r = (0, i.getStickerSendability)(e, t, n);
            r === i.StickerSendability.SENDABLE ? a.push(e) : r === i.StickerSendability.SENDABLE_WITH_PREMIUM && s.push(e)
        }), {
            sendable: a,
            sendableWithPremium: s
        }
    }
}