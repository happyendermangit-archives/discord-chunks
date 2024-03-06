function(i, x, t) {
    "use strict";
    t.r(x), t.d(x, {
        CUSTOM_CALL_SOUND_ANIMATION_RANGE: function() {
            return C
        },
        AnimationTypeToAnimations: function() {
            return T
        },
        getResizedEmojiData: function() {
            return j
        },
        sampleAnimationId: function() {
            return R
        },
        getEffectUrl: function() {
            return P
        },
        getEffectAnnouncement: function() {
            return V
        }
    });
    var s = t("917351"),
        a = t.n(s),
        o = t("440540"),
        y = t("811217"),
        k = t("504936"),
        d = t("988078"),
        p = t("939118"),
        r = t("101559"),
        e = t("326209"),
        m = t("610237"),
        n = t("733261"),
        c = t("596926"),
        l = t("761999"),
        f = t("189580"),
        h = t("679126"),
        _ = t("101593"),
        u = t("414668"),
        b = t("97656"),
        I = t("812007"),
        w = t("721336"),
        g = t("954877"),
        E = t("662151"),
        v = t("155232"),
        A = t("843093"),
        N = t("867805"),
        F = t("407063"),
        L = t("697218"),
        M = t("315102"),
        O = t("402671"),
        S = t("626334"),
        U = t("782340");
    let C = {
            start: 10,
            end: 15
        },
        B = {
            BASIC: [o],
            PREMIUM: [y, k, d, p, r, e, m, n, c, l, f, h, _, u, b, I, w, g, E, v, A]
        },
        T = {
            [S.VoiceChannelEffectAnimationType.BASIC]: B.BASIC,
            [S.VoiceChannelEffectAnimationType.PREMIUM]: B.PREMIUM
        },
        j = a.memoize(i => new Promise(x => {
            let t = new Image;
            t.src = i, t.crossOrigin = "Anonymous", t.onload = () => {
                let s = S.EMOJI_SIZE * (0, F.getDevicePixelRatio)();
                if (t.width === s && t.height === s) x(i);
                else {
                    var a;
                    let i = document.createElement("canvas");
                    i.width = s, i.height = s, null === (a = i.getContext("2d")) || void 0 === a || a.drawImage(t, 0, 0), x(i.toDataURL("image/png"))
                }
            }
        })),
        R = (i, x) => {
            let t = T[i];
            if (null != x && i === S.VoiceChannelEffectAnimationType.PREMIUM) {
                let i = x.end + 1;
                return Math.floor(Math.random() * (x.start - i) + i)
            }
            return Math.floor(Math.random() * t.length)
        };

    function P(i) {
        let x = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.EMOJI_SIZE;
        if (null != i.id) {
            var t;
            return M.default.getEmojiURL({
                id: i.id,
                animated: null !== (t = i.animated) && void 0 !== t && t,
                size: x
            })
        }
        let s = N.default.convertSurrogateToName(i.name, !1),
            a = N.default.getByName(s);
        return null != a ? O.default.getURL(a.surrogates) : ""
    }

    function D(i, x) {
        return a(i).map(i => {
            var t;
            return null !== (t = i[x]) && void 0 !== t ? t : null
        }).filter(i => null != i).uniq().value()
    }

    function V(i) {
        var x, t, s, a, o, y;
        if (i.length < 1) return "";
        let k = D(i, "userId"),
            d = D(i, "emojiName"),
            p = d.length < 2 ? null !== (x = null == d ? void 0 : d[0]) && void 0 !== x ? x : "" : d.join(", ");
        if (k.length < 1) return "";
        if (1 === k.length) return U.default.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_SINGLE.format({
            firstUsername: null === (t = L.default.getUser(k[0])) || void 0 === t ? void 0 : t.username,
            emojiNames: p
        });
        if (2 === k.length) return U.default.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_DOUBLE.format({
            firstUsername: null === (s = L.default.getUser(k[0])) || void 0 === s ? void 0 : s.username,
            secondUsername: null === (a = L.default.getUser(k[1])) || void 0 === a ? void 0 : a.username,
            emojiNames: p
        });
        else return U.default.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_MULTIPLE.format({
            firstUsername: null === (o = L.default.getUser(k[0])) || void 0 === o ? void 0 : o.username,
            secondUsername: null === (y = L.default.getUser(k[1])) || void 0 === y ? void 0 : y.username,
            count: k.length - 2,
            emojiNames: p
        })
    }
}