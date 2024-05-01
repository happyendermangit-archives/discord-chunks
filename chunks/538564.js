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
        a = n("659101"),
        s = n("387045");

    function o(e) {
        let {
            customStatusActivity: t,
            className: n,
            animate: o
        } = e;
        return null == t ? null : (0, i.jsx)(a.default, {
            className: n,
            children: (0, i.jsx)(r.default, {
                activity: t,
                className: s.customStatus,
                animate: o,
                emojiClassName: s.customStatusEmoji,
                soloEmojiClassName: s.customStatusSoloEmoji,
                textClassName: s.customStatusText
            })
        })
    }
}