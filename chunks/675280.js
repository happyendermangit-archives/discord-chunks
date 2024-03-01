function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("23411"),
        s = n("811986"),
        r = n("648439"),
        o = n("841811"),
        u = n("432335"),
        d = n("849976"),
        c = n("742223"),
        f = n("877220"),
        m = n("258752"),
        p = n("216422"),
        h = n("290581"),
        E = n("742219"),
        g = n("115279");
    let C = e => {
            switch (e) {
                case g.EmojiCategories.RECENT:
                    return o.default;
                case g.EmojiCategories.FAVORITES:
                    return h.default;
                case g.EmojiCategories.TOP_GUILD_EMOJI:
                    return E.default;
                case g.EmojiCategories.PEOPLE:
                    return c.default;
                case g.EmojiCategories.NATURE:
                    return u.default;
                case g.EmojiCategories.FOOD:
                    return r.default;
                case g.EmojiCategories.ACTIVITY:
                    return a.default;
                case g.EmojiCategories.TRAVEL:
                    return m.default;
                case g.EmojiCategories.OBJECTS:
                    return d.default;
                case g.EmojiCategories.SYMBOLS:
                    return f.default;
                case g.EmojiCategories.FLAGS:
                    return s.default;
                case g.EmojiCategories.PREMIUM_UPSELL:
                    return p.default;
                default:
                    return
            }
        },
        S = i.memo(function(e) {
            let {
                categoryId: t,
                ...n
            } = e, i = C(t);
            return null == i ? null : (0, l.jsx)(i, {
                ...n
            })
        });
    var T = S
}