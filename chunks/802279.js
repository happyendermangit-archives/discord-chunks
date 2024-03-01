function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("775377"),
        a = n("777003"),
        s = n("438123");

    function r(e) {
        let {
            customStatusActivity: t,
            className: n,
            animate: r
        } = e;
        return null == t ? null : (0, l.jsx)(a.default, {
            className: n,
            children: (0, l.jsx)(i.default, {
                activity: t,
                className: s.customStatus,
                animate: r,
                emojiClassName: s.customStatusEmoji,
                soloEmojiClassName: s.customStatusSoloEmoji,
                textClassName: s.customStatusText
            })
        })
    }
}