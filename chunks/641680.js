function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFilteredStickers: function() {
            return a
        }
    }), n("424973");
    var i = n("866353"),
        l = n("386543");
    let a = (e, t, n) => {
        if ("" === e) return null;
        let a = [],
            s = [];
        return (0, l.searchAllStickers)(e).forEach(e => {
            let l = (0, i.getStickerSendability)(e, t, n);
            l === i.StickerSendability.SENDABLE ? a.push(e) : l === i.StickerSendability.SENDABLE_WITH_PREMIUM && s.push(e)
        }), {
            sendable: a,
            sendableWithPremium: s
        }
    }
}