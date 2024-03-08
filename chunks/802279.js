function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("775377"),
        a = n("777003"),
        s = n("438123");

    function r(e) {
        let {
            customStatusActivity: t,
            className: n,
            animate: r
        } = e;
        return null == t ? null : (0, i.jsx)(a.default, {
            className: n,
            children: (0, i.jsx)(l.default, {
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