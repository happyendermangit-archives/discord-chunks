function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        },
        getTopAndNewlyAddedEmojis: function() {
            return o
        }
    });
    var i = n("399606"),
        r = n("339085"),
        a = n("185923");
    let s = [];

    function o(e) {
        let {
            emojiStoreInstance: t = r.default,
            guildId: n,
            pickerIntention: i
        } = e;
        return {
            topEmojis: i !== a.EmojiIntention.REACTION ? t.getTopEmoji(n) : s,
            newlyAddedEmojis: i !== a.EmojiIntention.REACTION ? t.getNewlyAddedEmoji(n) : s
        }
    }

    function l(e, t) {
        return (0, i.useStateFromStoresObject)([r.default], () => o({
            emojiStoreInstance: r.default,
            guildId: e,
            pickerIntention: t
        }), [e, t])
    }
}