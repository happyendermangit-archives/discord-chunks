function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CUSTOM_CALL_SOUND_ANIMATION_RANGE: function() {
            return P
        },
        AnimationTypeToAnimations: function() {
            return U
        },
        getResizedEmojiData: function() {
            return D
        },
        sampleAnimationId: function() {
            return w
        },
        getEffectUrl: function() {
            return F
        },
        getEffectAnnouncement: function() {
            return G
        }
    });
    var i = n("917351"),
        l = n.n(i),
        a = n("440540"),
        s = n("811217"),
        r = n("504936"),
        o = n("988078"),
        u = n("939118"),
        d = n("101559"),
        c = n("326209"),
        f = n("610237"),
        p = n("733261"),
        m = n("596926"),
        h = n("761999"),
        x = n("189580"),
        E = n("679126"),
        y = n("101593"),
        g = n("414668"),
        S = n("97656"),
        C = n("812007"),
        I = n("721336"),
        T = n("954877"),
        _ = n("662151"),
        v = n("155232"),
        N = n("843093"),
        A = n("867805"),
        O = n("407063"),
        M = n("697218"),
        k = n("315102"),
        R = n("402671"),
        L = n("626334"),
        b = n("782340");
    let P = {
            start: 10,
            end: 15
        },
        j = {
            BASIC: [a],
            PREMIUM: [s, r, o, u, d, c, f, p, m, h, x, E, y, g, S, C, I, T, _, v, N]
        },
        U = {
            [L.VoiceChannelEffectAnimationType.BASIC]: j.BASIC,
            [L.VoiceChannelEffectAnimationType.PREMIUM]: j.PREMIUM
        },
        D = l.memoize(e => new Promise(t => {
            let n = new Image;
            n.src = e, n.crossOrigin = "Anonymous", n.onload = () => {
                let i = L.EMOJI_SIZE * (0, O.getDevicePixelRatio)();
                if (n.width === i && n.height === i) t(e);
                else {
                    var l;
                    let e = document.createElement("canvas");
                    e.width = i, e.height = i, null === (l = e.getContext("2d")) || void 0 === l || l.drawImage(n, 0, 0), t(e.toDataURL("image/png"))
                }
            }
        })),
        w = (e, t) => {
            let n = U[e];
            if (null != t && e === L.VoiceChannelEffectAnimationType.PREMIUM) {
                let e = t.end + 1;
                return Math.floor(Math.random() * (t.start - e) + e)
            }
            return Math.floor(Math.random() * n.length)
        };

    function F(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L.EMOJI_SIZE;
        if (null != e.id) {
            var n;
            return k.default.getEmojiURL({
                id: e.id,
                animated: null !== (n = e.animated) && void 0 !== n && n,
                size: t
            })
        }
        let i = A.default.convertSurrogateToName(e.name, !1),
            l = A.default.getByName(i);
        return null != l ? R.default.getURL(l.surrogates) : ""
    }

    function B(e, t) {
        return l(e).map(e => {
            var n;
            return null !== (n = e[t]) && void 0 !== n ? n : null
        }).filter(e => null != e).uniq().value()
    }

    function G(e) {
        var t, n, i, l, a, s;
        if (e.length < 1) return "";
        let r = B(e, "userId"),
            o = B(e, "emojiName"),
            u = o.length < 2 ? null !== (t = null == o ? void 0 : o[0]) && void 0 !== t ? t : "" : o.join(", ");
        if (r.length < 1) return "";
        if (1 === r.length) return b.default.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_SINGLE.format({
            firstUsername: null === (n = M.default.getUser(r[0])) || void 0 === n ? void 0 : n.username,
            emojiNames: u
        });
        if (2 === r.length) return b.default.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_DOUBLE.format({
            firstUsername: null === (i = M.default.getUser(r[0])) || void 0 === i ? void 0 : i.username,
            secondUsername: null === (l = M.default.getUser(r[1])) || void 0 === l ? void 0 : l.username,
            emojiNames: u
        });
        else return b.default.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_MULTIPLE.format({
            firstUsername: null === (a = M.default.getUser(r[0])) || void 0 === a ? void 0 : a.username,
            secondUsername: null === (s = M.default.getUser(r[1])) || void 0 === s ? void 0 : s.username,
            count: r.length - 2,
            emojiNames: u
        })
    }
}