function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReactionPicker: function() {
            return a
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("907040"),
        s = n("185923");

    function a(e) {
        let {
            channel: t,
            closePopout: n,
            analyticsOverride: a,
            onSelectEmoji: o,
            messageId: l
        } = e;
        return (0, i.jsx)(r.default, {
            closePopout: n,
            channel: t,
            onSelectEmoji: o,
            pickerIntention: s.EmojiIntention.REACTION,
            analyticsOverride: a,
            messageId: l
        })
    }
}