function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GiftContextProvider: function() {
            return S
        },
        useGiftContext: function() {
            return T
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("479446"),
        a = n("646476"),
        o = n("975104"),
        l = n("669079"),
        u = n("563132"),
        d = n("474936"),
        _ = n("689938");
    let c = d.PremiumGiftStyles.STANDARD_BOX,
        E = void 0,
        [I, T, f] = (0, o.default)();

    function S(e) {
        let {
            isGift: t = !1,
            giftRecipient: n,
            giftMessage: o,
            children: T
        } = e, {
            selectedSkuId: f
        } = (0, u.usePaymentContext)(), [S, h] = r.useState(n), [A, m] = r.useState(), [N, p] = r.useState(!1), O = (0, l.shouldShowCustomGiftExperience)(S), R = (0, a.useIsSeasonalGiftingActive)(), {
            enabled: C
        } = a.default.useExperiment({
            location: "PaymentContextProvider"
        }, {
            autoTrackExposure: O && R
        }), [g, L] = r.useState(O ? C && R ? d.PremiumGiftStyles.SEASONAL_STANDARD_BOX : c : E), [D, v] = r.useState(t && (0, l.getGiftExperience)(S) === l.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD ? _.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : o), [M, y] = r.useState(void 0), [P, U] = r.useState(void 0), b = (0, l.useGetGiftCode)(f, t), [G, w] = r.useState(!1), [B, k] = r.useState(!1), [V, x] = r.useState(), F = r.useCallback(e => {
            let {
                onSubscriptionConfirmation: t
            } = e;
            return k(!0), (0, s.sendGiftMessage)(S, b).then(() => {
                k(!1), null == t || t(), w(!0)
            }).catch(e => {
                k(!1), x(e), w(!0)
            })
        }, [S, b, k, w, x]);
        return (0, i.jsx)(I.Provider, {
            value: {
                isGift: t,
                giftCode: b,
                giftMessage: o,
                giftRecipient: S,
                setGiftRecipient: h,
                giftRecipientError: A,
                setGiftRecipientError: m,
                validatingGiftRecipient: N,
                setValidatingGiftRecipient: p,
                soundEffect: M,
                setSoundEffect: y,
                emojiConfetti: P,
                setEmojiConfetti: U,
                customGiftMessage: D,
                setCustomGiftMessage: v,
                selectedGiftStyle: g,
                setSelectedGiftStyle: L,
                sendGiftMessage: F,
                hasSentMessage: G,
                isSendingMessage: B,
                giftMessageError: V
            },
            children: T
        })
    }
}