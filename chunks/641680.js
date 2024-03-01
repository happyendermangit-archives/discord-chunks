function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFilteredStickers: function() {
            return a
        }
    }), n("424973");
    var l = n("866353"),
        i = n("386543");
    let a = (e, t, n) => {
        if ("" === e) return null;
        let a = [],
            s = [];
        return (0, i.searchAllStickers)(e).forEach(e => {
            let i = (0, l.getStickerSendability)(e, t, n);
            i === l.StickerSendability.SENDABLE ? a.push(e) : i === l.StickerSendability.SENDABLE_WITH_PREMIUM && s.push(e)
        }), {
            sendable: a,
            sendableWithPremium: s
        }
    }
}