function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("805039"),
        i = n("880386"),
        a = n("647843"),
        u = n("808242"),
        s = n("175781"),
        l = n("814205"),
        c = n("599195"),
        f = n("975614"),
        d = n("943181"),
        _ = n("412791"),
        E = n("147163"),
        p = n("388780"),
        m = n("644037"),
        y = function(e) {
            switch (e) {
                case m.EmojiCategories.RECENT:
                    return u.default;
                case m.EmojiCategories.FAVORITES:
                    return E.default;
                case m.EmojiCategories.TOP_GUILD_EMOJI:
                    return p.default;
                case m.EmojiCategories.PEOPLE:
                    return c.default;
                case m.EmojiCategories.NATURE:
                    return s.default;
                case m.EmojiCategories.FOOD:
                    return a.default;
                case m.EmojiCategories.ACTIVITY:
                    return o.default;
                case m.EmojiCategories.TRAVEL:
                    return d.default;
                case m.EmojiCategories.OBJECTS:
                    return l.default;
                case m.EmojiCategories.SYMBOLS:
                    return f.default;
                case m.EmojiCategories.FLAGS:
                    return i.default;
                case m.EmojiCategories.PREMIUM_UPSELL:
                    return _.default;
                default:
                    return
            }
        },
        I = r.memo(function(e) {
            var t = e.categoryId,
                n = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                        return o
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) {
                            if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                    }
                    return o
                }(e, ["categoryId"]),
                o = y(t);
            return null == o ? null : r.createElement(o, n)
        });
    t.default = I
}