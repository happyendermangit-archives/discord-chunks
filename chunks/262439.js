function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("808653"), n("424973"), n("222007");
    var i = n("448105"),
        l = n.n(i),
        a = n("385976"),
        s = n("867805"),
        r = n("389480"),
        o = n("78581");
    let u = [];

    function d(e, t, n, i) {
        if (0 === e.length) return u;
        let d = t.reduce((e, t) => {
                for (let n of t.items) t.categoryInfo.type !== r.SoundboardSoundGridSectionType.FAVORITES && n.type === r.SoundboardSoundItemType.SOUND && e.push(n.sound);
                return e
            }, []),
            c = d.reduce((t, r) => (t[r.soundId] = function(e, t, n, i) {
                var r;
                let u = 0,
                    d = t.name.toLocaleLowerCase(),
                    c = null != t.emojiId ? a.default.getCustomEmojiById(t.emojiId) : null,
                    f = null != t.emojiName ? s.default.convertSurrogateToName(t.emojiName, !1) : null,
                    p = null != f ? s.default.getByName(f) : null,
                    m = null != c ? [c.name] : null !== (r = null == p ? void 0 : p.names) && void 0 !== r ? r : [];
                return e === d && (u += 8), m.includes(e) && (u += 7), d.startsWith(e) && (u += 6), m.some(t => t.startsWith(e)) && (u += 5), d.endsWith(e) && (u += 4), m.some(t => t.endsWith(e)) && (u += 3), l(e, t.name.toLocaleLowerCase()) && (u += 2), m.some(t => l(e, t)) && (u += 1), u > 0 && (0, o.canUseSoundboardSound)(n, t, i) && (u += 100), u
            }(e.toLocaleLowerCase(), r, n, i), t), {}),
            f = d.filter(e => c[e.soundId] > 0).sort((e, t) => c[t.soundId] - c[e.soundId]);
        return f
    }
}