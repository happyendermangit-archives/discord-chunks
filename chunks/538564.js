function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("427217"),
        s = n("659101"),
        a = n("387045");

    function o(e) {
        let {
            customStatusActivity: t,
            className: n,
            animate: o
        } = e;
        return null == t ? null : (0, i.jsx)(s.default, {
            className: n,
            children: (0, i.jsx)(r.default, {
                activity: t,
                className: a.customStatus,
                animate: o,
                emojiClassName: a.customStatusEmoji,
                soloEmojiClassName: a.customStatusSoloEmoji,
                textClassName: a.customStatusText
            })
        })
    }
}