function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        },
        getEmojiHotrail: function() {
            return i
        }
    });
    var r = n("470079"),
        o = n("644037");

    function i(e) {
        var t = e.topEmojis,
            n = e.newlyAddedEmojis,
            r = e.rowSize,
            i = void 0 === r ? o.EMOJI_ROW_SIZE : r,
            a = t.slice(0, i - n.length);
        return {
            visibleTopEmojis: a,
            visibleNewlyAddedEmojis: n,
            allEmojis: a.concat(n)
        }
    }

    function a(e) {
        return r.useMemo(function() {
            return i(e)
        }, [e])
    }
}