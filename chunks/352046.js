function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        getTopAndNewlyAddedEmojis: function() {
            return a
        },
        default: function() {
            return s
        }
    });
    var n = i("65597"),
        r = i("385976"),
        o = i("958706");
    let u = [];

    function a(e) {
        let {
            emojiStoreInstance: t = r.default,
            guildId: i,
            pickerIntention: n
        } = e;
        return {
            topEmojis: n !== o.EmojiIntention.REACTION ? t.getTopEmoji(i) : u,
            newlyAddedEmojis: n !== o.EmojiIntention.REACTION ? t.getNewlyAddedEmoji(i) : u
        }
    }

    function s(e, t) {
        return (0, n.useStateFromStoresObject)([r.default], () => a({
            emojiStoreInstance: r.default,
            guildId: e,
            pickerIntention: t
        }), [e, t])
    }
}