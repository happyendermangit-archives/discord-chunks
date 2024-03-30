function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFilteredStickers: function() {
            return i
        }
    });
    var r = n("922747"),
        o = n("151930"),
        i = function(e, t, n) {
            if ("" === e) return null;
            var i = [],
                a = [];
            return (0, o.searchAllStickers)(e).forEach(function(e) {
                var o = (0, r.getStickerSendability)(e, t, n);
                o === r.StickerSendability.SENDABLE ? i.push(e) : o === r.StickerSendability.SENDABLE_WITH_PREMIUM && a.push(e)
            }), {
                sendable: i,
                sendableWithPremium: a
            }
        }
}