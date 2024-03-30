function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        },
        getTopAndNewlyAddedEmojis: function() {
            return u
        }
    });
    var r = n("37295"),
        o = n("300983"),
        i = n("68735"),
        a = [];

    function u(e) {
        var t = e.emojiStoreInstance,
            n = void 0 === t ? o.default : t,
            r = e.guildId,
            u = e.pickerIntention;
        return {
            topEmojis: u !== i.EmojiIntention.REACTION ? n.getTopEmoji(r) : a,
            newlyAddedEmojis: u !== i.EmojiIntention.REACTION ? n.getNewlyAddedEmoji(r) : a
        }
    }

    function s(e, t) {
        return (0, r.useStateFromStoresObject)([o.default], function() {
            return u({
                emojiStoreInstance: o.default,
                guildId: e,
                pickerIntention: t
            })
        }, [e, t])
    }
}