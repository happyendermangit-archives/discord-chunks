function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReactionPicker: function() {
            return s
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("86678"),
        a = n("958706");

    function s(e) {
        let {
            channel: t,
            closePopout: n,
            analyticsOverride: s,
            onSelectEmoji: r,
            messageId: o
        } = e;
        return (0, i.jsx)(l.default, {
            closePopout: n,
            channel: t,
            onSelectEmoji: r,
            pickerIntention: a.EmojiIntention.REACTION,
            analyticsOverride: s,
            messageId: o
        })
    }
}