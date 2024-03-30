function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GiftContextProvider: function() {
            return I
        },
        useGiftContext: function() {
            return y
        }
    });
    var r = n("470079"),
        o = n("349611"),
        i = n("348380"),
        a = n("343048"),
        u = n("758989"),
        s = n("751455"),
        l = n("868615"),
        c = n("941504");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return f(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var _ = l.PremiumGiftStyles.STANDARD_BOX,
        E = void 0,
        p = d((0, a.default)(), 3),
        m = p[0],
        y = p[1];

    function I(e) {
        var t = e.isGift,
            n = void 0 !== t && t,
            a = e.giftRecipient,
            f = e.giftMessage,
            p = e.children,
            y = (0, s.usePaymentContext)().selectedSkuId,
            I = d(r.useState(a), 2),
            h = I[0],
            O = I[1],
            T = d(r.useState(), 2),
            S = T[0],
            v = T[1],
            g = d(r.useState(!1), 2),
            A = g[0],
            b = g[1],
            N = (0, u.shouldShowCustomGiftExperience)(h),
            R = (0, i.useIsSeasonalGiftingActive)(),
            C = i.default.useExperiment({
                location: "PaymentContextProvider"
            }, {
                autoTrackExposure: N && R
            }).enabled,
            P = d(r.useState(N ? C && R ? l.PremiumGiftStyles.SEASONAL_STANDARD_BOX : _ : E), 2),
            D = P[0],
            L = P[1],
            M = d(r.useState(n && (0, u.getGiftExperience)(h) === u.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD ? c.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : f), 2),
            U = M[0],
            w = M[1],
            k = d(r.useState(void 0), 2),
            G = k[0],
            B = k[1],
            j = d(r.useState(void 0), 2),
            F = j[0],
            V = j[1],
            H = (0, u.useGetGiftCode)(y, n),
            x = d(r.useState(!1), 2),
            Y = x[0],
            W = x[1],
            K = d(r.useState(!1), 2),
            z = K[0],
            X = K[1],
            q = d(r.useState(), 2),
            Q = q[0],
            J = q[1],
            Z = r.useCallback(function(e) {
                var t = e.onSubscriptionConfirmation;
                return X(!0), (0, o.sendGiftMessage)(h, H).then(function() {
                    X(!1), null == t || t(), W(!0)
                }).catch(function(e) {
                    X(!1), J(e), W(!0)
                })
            }, [h, H, X, W, J]);
        return r.createElement(m.Provider, {
            value: {
                isGift: n,
                giftCode: H,
                giftMessage: f,
                giftRecipient: h,
                setGiftRecipient: O,
                giftRecipientError: S,
                setGiftRecipientError: v,
                validatingGiftRecipient: A,
                setValidatingGiftRecipient: b,
                soundEffect: G,
                setSoundEffect: B,
                emojiConfetti: F,
                setEmojiConfetti: V,
                customGiftMessage: U,
                setCustomGiftMessage: w,
                selectedGiftStyle: D,
                setSelectedGiftStyle: L,
                sendGiftMessage: Z,
                hasSentMessage: Y,
                isSendingMessage: z,
                giftMessageError: Q
            }
        }, p)
    }
    p[2]
}