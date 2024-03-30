function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("590273"),
        i = n("877987"),
        a = n("568340");

    function u(e) {
        var t = e.customStatusActivity,
            n = e.className,
            u = e.animate;
        return null == t ? null : r.createElement(i.default, {
            className: n
        }, r.createElement(o.default, {
            activity: t,
            className: a.customStatus,
            animate: u,
            emojiClassName: a.customStatusEmoji,
            soloEmojiClassName: a.customStatusSoloEmoji,
            textClassName: a.customStatusText
        }))
    }
}