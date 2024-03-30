function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReactionPicker: function() {
            return a
        }
    });
    var r = n("470079"),
        o = n("329128"),
        i = n("68735");

    function a(e) {
        var t = e.channel,
            n = e.closePopout,
            a = e.analyticsOverride,
            u = e.onSelectEmoji,
            s = e.messageId;
        return r.createElement(o.default, {
            closePopout: n,
            channel: t,
            onSelectEmoji: u,
            pickerIntention: i.EmojiIntention.REACTION,
            analyticsOverride: a,
            messageId: s
        })
    }
}