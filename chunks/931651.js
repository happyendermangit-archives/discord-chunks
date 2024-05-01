function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReactionPicker: function() {
            return s
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("907040"),
        a = n("185923");

    function s(e) {
        let {
            channel: t,
            closePopout: n,
            analyticsOverride: s,
            onSelectEmoji: o,
            messageId: l
        } = e;
        return (0, i.jsx)(r.default, {
            closePopout: n,
            channel: t,
            onSelectEmoji: o,
            pickerIntention: a.EmojiIntention.REACTION,
            analyticsOverride: s,
            messageId: l
        })
    }
}