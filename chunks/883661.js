function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("932125"),
        a = n("489785"),
        o = n("902781"),
        l = n("497309"),
        u = n("478803"),
        d = n("407626"),
        _ = n("869555"),
        c = n("219541"),
        E = n("593552"),
        I = n("466111"),
        T = n("898140"),
        f = n("339487"),
        S = n("149203");
    let A = e => {
            switch (e) {
                case S.EmojiCategories.RECENT:
                    return l.default;
                case S.EmojiCategories.FAVORITES:
                    return T.default;
                case S.EmojiCategories.TOP_GUILD_EMOJI:
                    return f.default;
                case S.EmojiCategories.PEOPLE:
                    return _.default;
                case S.EmojiCategories.NATURE:
                    return u.default;
                case S.EmojiCategories.FOOD:
                    return o.default;
                case S.EmojiCategories.ACTIVITY:
                    return s.default;
                case S.EmojiCategories.TRAVEL:
                    return E.default;
                case S.EmojiCategories.OBJECTS:
                    return d.default;
                case S.EmojiCategories.SYMBOLS:
                    return c.default;
                case S.EmojiCategories.FLAGS:
                    return a.default;
                case S.EmojiCategories.PREMIUM_UPSELL:
                    return I.default;
                default:
                    return
            }
        },
        h = r.memo(function(e) {
            let {
                categoryId: t,
                ...n
            } = e, r = A(t);
            return null == r ? null : (0, i.jsx)(r, {
                ...n
            })
        });
    t.default = h
}