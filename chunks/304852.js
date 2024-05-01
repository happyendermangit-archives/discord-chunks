function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        },
        getEmojiHotrail: function() {
            return a
        }
    });
    var i = n("470079"),
        r = n("149203");

    function a(e) {
        let {
            topEmojis: t,
            newlyAddedEmojis: n,
            rowSize: i = r.EMOJI_ROW_SIZE
        } = e, a = t.slice(0, i - n.length);
        return {
            visibleTopEmojis: a,
            visibleNewlyAddedEmojis: n,
            allEmojis: a.concat(n)
        }
    }

    function s(e) {
        return i.useMemo(() => a(e), [e])
    }
}