function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnimationTypeToAnimations: function() {
            return B
        },
        CUSTOM_CALL_SOUND_ANIMATION_RANGE: function() {
            return k
        },
        getEffectAnnouncement: function() {
            return x
        },
        getEffectUrl: function() {
            return V
        },
        getResizedEmojiData: function() {
            return j
        },
        sampleAnimationId: function() {
            return F
        }
    });
    var r, o = n("392711"),
        i = n.n(o),
        a = n("490757"),
        u = n("429827"),
        s = n("353928"),
        l = n("336892"),
        c = n("624833"),
        f = n("944314"),
        d = n("399358"),
        _ = n("945835"),
        E = n("912931"),
        p = n("966552"),
        m = n("561763"),
        y = n("529306"),
        I = n("90075"),
        h = n("862666"),
        O = n("252611"),
        T = n("136144"),
        S = n("316137"),
        v = n("654123"),
        g = n("660020"),
        A = n("980084"),
        b = n("24688"),
        N = n("200997"),
        R = n("27375"),
        C = n("896299"),
        P = n("208454"),
        D = n("299529"),
        L = n("739226"),
        M = n("992478"),
        U = n("941504");

    function w(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var k = {
            start: 10,
            end: 15
        },
        G = {
            BASIC: [a],
            PREMIUM: [u, s, l, c, f, d, _, E, p, m, y, I, h, O, T, S, v, g, A, b, N]
        },
        B = (w(r = {}, M.VoiceChannelEffectAnimationType.BASIC, G.BASIC), w(r, M.VoiceChannelEffectAnimationType.PREMIUM, G.PREMIUM), r),
        j = i().memoize(function(e) {
            return new Promise(function(t) {
                var n = new Image;
                n.src = e, n.crossOrigin = "Anonymous", n.onload = function() {
                    var r = M.EMOJI_SIZE * (0, C.getDevicePixelRatio)();
                    if (n.width === r && n.height === r) t(e);
                    else {
                        var o, i = document.createElement("canvas");
                        i.width = r, i.height = r, null === (o = i.getContext("2d")) || void 0 === o || o.drawImage(n, 0, 0), t(i.toDataURL("image/png"))
                    }
                }
            })
        }),
        F = function(e, t) {
            var n = B[e];
            if (null != t && e === M.VoiceChannelEffectAnimationType.PREMIUM) {
                var r = t.end + 1;
                return Math.floor(Math.random() * (t.start - r) + r)
            }
            return Math.floor(Math.random() * n.length)
        };

    function V(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M.EMOJI_SIZE;
        if (null != e.id) return D.default.getEmojiURL({
            id: e.id,
            animated: null !== (t = e.animated) && void 0 !== t && t,
            size: n
        });
        var r = R.default.convertSurrogateToName(e.name, !1),
            o = R.default.getByName(r);
        return null != o ? L.default.getURL(o.surrogates) : ""
    }

    function H(e, t) {
        return i()(e).map(function(e) {
            var n;
            return null !== (n = e[t]) && void 0 !== n ? n : null
        }).filter(function(e) {
            return null != e
        }).uniq().value()
    }

    function x(e) {
        if (e.length < 1) return "";
        var t, n, r, o, i, a, u = H(e, "userId"),
            s = H(e, "emojiName"),
            l = s.length < 2 ? null !== (t = null == s ? void 0 : s[0]) && void 0 !== t ? t : "" : s.join(", ");
        if (u.length < 1) return "";
        if (1 === u.length) return U.default.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_SINGLE.format({
            firstUsername: null === (n = P.default.getUser(u[0])) || void 0 === n ? void 0 : n.username,
            emojiNames: l
        });
        if (2 === u.length) return U.default.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_DOUBLE.format({
            firstUsername: null === (r = P.default.getUser(u[0])) || void 0 === r ? void 0 : r.username,
            secondUsername: null === (o = P.default.getUser(u[1])) || void 0 === o ? void 0 : o.username,
            emojiNames: l
        });
        else return U.default.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_MULTIPLE.format({
            firstUsername: null === (i = P.default.getUser(u[0])) || void 0 === i ? void 0 : i.username,
            secondUsername: null === (a = P.default.getUser(u[1])) || void 0 === a ? void 0 : a.username,
            count: u.length - 2,
            emojiNames: l
        })
    }
}