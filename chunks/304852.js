function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        },
        getEmojiHotrail: function() {
            return s
        }
    });
    var i = n("470079"),
        r = n("149203");

    function s(e) {
        let {
            topEmojis: t,
            newlyAddedEmojis: n,
            rowSize: i = r.EMOJI_ROW_SIZE
        } = e, s = t.slice(0, i - n.length);
        return {
            visibleTopEmojis: s,
            visibleNewlyAddedEmojis: n,
            allEmojis: s.concat(n)
        }
    }

    function a(e) {
        return i.useMemo(() => s(e), [e])
    }
}