function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnimationTypeToAnimations: function() {
            return w
        },
        CUSTOM_CALL_SOUND_ANIMATION_RANGE: function() {
            return b
        },
        getEffectAnnouncement: function() {
            return x
        },
        getEffectUrl: function() {
            return F
        },
        getResizedEmojiData: function() {
            return k
        },
        sampleAnimationId: function() {
            return B
        }
    });
    var i = n("392711"),
        r = n.n(i),
        s = n("490757"),
        a = n("429827"),
        o = n("353928"),
        l = n("336892"),
        u = n("624833"),
        d = n("944314"),
        _ = n("399358"),
        c = n("945835"),
        E = n("912931"),
        I = n("966552"),
        T = n("561763"),
        f = n("529306"),
        S = n("90075"),
        A = n("862666"),
        h = n("252611"),
        m = n("136144"),
        N = n("316137"),
        O = n("654123"),
        p = n("660020"),
        R = n("980084"),
        C = n("24688"),
        g = n("200997"),
        L = n("633302"),
        D = n("134432"),
        v = n("594174"),
        M = n("768581"),
        y = n("176354"),
        P = n("353368"),
        U = n("689938");
    let b = {
            start: 10,
            end: 15
        },
        G = {
            BASIC: [s],
            PREMIUM: [a, o, l, u, d, _, c, E, I, T, f, S, A, h, m, N, O, p, R, C, g]
        },
        w = {
            [P.VoiceChannelEffectAnimationType.BASIC]: G.BASIC,
            [P.VoiceChannelEffectAnimationType.PREMIUM]: G.PREMIUM
        },
        k = r().memoize(e => new Promise(t => {
            let n = new Image;
            n.src = e, n.crossOrigin = "Anonymous", n.onload = () => {
                let i = P.EMOJI_SIZE * (0, D.getDevicePixelRatio)();
                if (n.width === i && n.height === i) t(e);
                else {
                    var r;
                    let e = document.createElement("canvas");
                    e.width = i, e.height = i, null === (r = e.getContext("2d")) || void 0 === r || r.drawImage(n, 0, 0), t(e.toDataURL("image/png"))
                }
            }
        })),
        B = (e, t) => {
            let n = w[e];
            if (null != t && e === P.VoiceChannelEffectAnimationType.PREMIUM) {
                let e = t.end + 1;
                return Math.floor(Math.random() * (t.start - e) + e)
            }
            return Math.floor(Math.random() * n.length)
        };

    function F(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P.EMOJI_SIZE;
        if (null != e.id) {
            var n;
            return M.default.getEmojiURL({
                id: e.id,
                animated: null !== (n = e.animated) && void 0 !== n && n,
                size: t
            })
        }
        let i = L.default.convertSurrogateToName(e.name, !1),
            r = L.default.getByName(i);
        return null != r ? y.default.getURL(r.surrogates) : ""
    }

    function V(e, t) {
        return r()(e).map(e => {
            var n;
            return null !== (n = e[t]) && void 0 !== n ? n : null
        }).filter(e => null != e).uniq().value()
    }

    function x(e) {
        var t, n, i, r, s, a;
        if (e.length < 1) return "";
        let o = V(e, "userId"),
            l = V(e, "emojiName"),
            u = l.length < 2 ? null !== (t = null == l ? void 0 : l[0]) && void 0 !== t ? t : "" : l.join(", ");
        if (o.length < 1) return "";
        if (1 === o.length) return U.default.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_SINGLE.format({
            firstUsername: null === (n = v.default.getUser(o[0])) || void 0 === n ? void 0 : n.username,
            emojiNames: u
        });
        if (2 === o.length) return U.default.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_DOUBLE.format({
            firstUsername: null === (i = v.default.getUser(o[0])) || void 0 === i ? void 0 : i.username,
            secondUsername: null === (r = v.default.getUser(o[1])) || void 0 === r ? void 0 : r.username,
            emojiNames: u
        });
        else return U.default.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_MULTIPLE.format({
            firstUsername: null === (s = v.default.getUser(o[0])) || void 0 === s ? void 0 : s.username,
            secondUsername: null === (a = v.default.getUser(o[1])) || void 0 === a ? void 0 : a.username,
            count: o.length - 2,
            emojiNames: u
        })
    }
}