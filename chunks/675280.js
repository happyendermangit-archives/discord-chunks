function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var i = n("37983"),
        l = n("884691"),
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
        x = n("742219"),
        E = n("115279");
    let y = e => {
            switch (e) {
                case E.EmojiCategories.RECENT:
                    return o.default;
                case E.EmojiCategories.FAVORITES:
                    return h.default;
                case E.EmojiCategories.TOP_GUILD_EMOJI:
                    return x.default;
                case E.EmojiCategories.PEOPLE:
                    return c.default;
                case E.EmojiCategories.NATURE:
                    return u.default;
                case E.EmojiCategories.FOOD:
                    return r.default;
                case E.EmojiCategories.ACTIVITY:
                    return a.default;
                case E.EmojiCategories.TRAVEL:
                    return m.default;
                case E.EmojiCategories.OBJECTS:
                    return d.default;
                case E.EmojiCategories.SYMBOLS:
                    return f.default;
                case E.EmojiCategories.FLAGS:
                    return s.default;
                case E.EmojiCategories.PREMIUM_UPSELL:
                    return p.default;
                default:
                    return
            }
        },
        g = l.memo(function(e) {
            let {
                categoryId: t,
                ...n
            } = e, l = y(t);
            return null == l ? null : (0, i.jsx)(l, {
                ...n
            })
        });
    var S = g
}