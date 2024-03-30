function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("724458"), n("653041"), n("47120");
    var i = n("658722"),
        r = n.n(i),
        s = n("339085"),
        a = n("633302"),
        o = n("697426"),
        l = n("242291");
    let u = [];

    function d(e, t, n, i) {
        if (0 === e.length) return u;
        let d = t.reduce((e, t) => {
                for (let n of t.items) t.categoryInfo.type !== o.SoundboardSoundGridSectionType.FAVORITES && n.type === o.SoundboardSoundItemType.SOUND && e.push(n.sound);
                return e
            }, []),
            _ = d.reduce((t, o) => (t[o.soundId] = function(e, t, n, i) {
                var o;
                let u = 0,
                    d = t.name.toLocaleLowerCase(),
                    _ = null != t.emojiId ? s.default.getCustomEmojiById(t.emojiId) : null,
                    c = null != t.emojiName ? a.default.convertSurrogateToName(t.emojiName, !1) : null,
                    E = null != c ? a.default.getByName(c) : null,
                    I = null != _ ? [_.name] : null !== (o = null == E ? void 0 : E.names) && void 0 !== o ? o : [];
                return e === d && (u += 8), I.includes(e) && (u += 7), d.startsWith(e) && (u += 6), I.some(t => t.startsWith(e)) && (u += 5), d.endsWith(e) && (u += 4), I.some(t => t.endsWith(e)) && (u += 3), r()(e, t.name.toLocaleLowerCase()) && (u += 2), I.some(t => r()(e, t)) && (u += 1), u > 0 && (0, l.canUseSoundboardSound)(n, t, i) && (u += 100), u
            }(e.toLocaleLowerCase(), o, n, i), t), {});
        return d.filter(e => _[e.soundId] > 0).sort((e, t) => _[t.soundId] - _[e.soundId])
    }
}