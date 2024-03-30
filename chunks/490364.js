function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("658722"),
        o = n.n(r),
        i = n("300983"),
        a = n("27375"),
        u = n("686309"),
        s = n("141526"),
        l = [];

    function c(e, t, n, r) {
        if (0 === e.length) return l;
        var c = t.reduce(function(e, t) {
                var n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a = t.items[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                        var s = i.value;
                        t.categoryInfo.type !== u.SoundboardSoundGridSectionType.FAVORITES && s.type === u.SoundboardSoundItemType.SOUND && e.push(s.sound)
                    }
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        !n && null != a.return && a.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return e
            }, []),
            f = c.reduce(function(t, u) {
                var l, c, f, d, _, E, p, m, y, I, h;
                return t[u.soundId] = (l = e.toLocaleLowerCase(), c = u, f = n, d = r, E = 0, p = c.name.toLocaleLowerCase(), m = null != c.emojiId ? i.default.getCustomEmojiById(c.emojiId) : null, I = null != (y = null != c.emojiName ? a.default.convertSurrogateToName(c.emojiName, !1) : null) ? a.default.getByName(y) : null, h = null != m ? [m.name] : null !== (_ = null == I ? void 0 : I.names) && void 0 !== _ ? _ : [], l === p && (E += 8), h.includes(l) && (E += 7), p.startsWith(l) && (E += 6), h.some(function(e) {
                    return e.startsWith(l)
                }) && (E += 5), p.endsWith(l) && (E += 4), h.some(function(e) {
                    return e.endsWith(l)
                }) && (E += 3), o()(l, c.name.toLocaleLowerCase()) && (E += 2), h.some(function(e) {
                    return o()(l, e)
                }) && (E += 1), E > 0 && (0, s.canUseSoundboardSound)(f, c, d) && (E += 100), E), t
            }, {});
        return c.filter(function(e) {
            return f[e.soundId] > 0
        }).sort(function(e, t) {
            return f[t.soundId] - f[e.soundId]
        })
    }
}