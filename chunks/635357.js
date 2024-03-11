function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GiftContextProvider: function() {
            return E
        },
        useGiftContext: function() {
            return h
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("210721"),
        s = n("53253"),
        r = n("105097"),
        o = n("659632"),
        u = n("642906"),
        d = n("646718"),
        c = n("782340");
    let f = d.PremiumGiftStyles.STANDARD_BOX,
        p = void 0,
        [m, h, x] = (0, r.default)();

    function E(e) {
        let {
            isGift: t = !1,
            giftRecipient: n,
            giftMessage: r,
            children: h
        } = e, {
            selectedSkuId: x
        } = (0, u.usePaymentContext)(), [E, y] = l.useState(n), [g, S] = l.useState(), [C, I] = l.useState(!1), T = (0, o.shouldShowCustomGiftExperience)(E), _ = (0, s.useIsSeasonalGiftingActive)(), {
            enabled: v
        } = s.default.useExperiment({
            location: "PaymentContextProvider"
        }, {
            autoTrackExposure: T && _
        }), [N, A] = l.useState(T ? v && _ ? d.PremiumGiftStyles.SEASONAL_STANDARD_BOX : f : p), [O, M] = l.useState(t && (0, o.getGiftExperience)(E) === o.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD ? c.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : r), [k, R] = l.useState(void 0), [L, b] = l.useState(void 0), P = (0, o.useGetGiftCode)(x, t), [j, U] = l.useState(!1), [D, w] = l.useState(!1), [F, B] = l.useState(), G = l.useCallback(e => {
            let {
                onSubscriptionConfirmation: t
            } = e;
            return w(!0), (0, a.sendGiftMessage)(E, P).then(() => {
                w(!1), null == t || t(), U(!0)
            }).catch(e => {
                w(!1), B(e), U(!0)
            })
        }, [E, P, w, U, B]);
        return (0, i.jsx)(m.Provider, {
            value: {
                isGift: t,
                giftCode: P,
                giftMessage: r,
                giftRecipient: E,
                setGiftRecipient: y,
                giftRecipientError: g,
                setGiftRecipientError: S,
                validatingGiftRecipient: C,
                setValidatingGiftRecipient: I,
                soundEffect: k,
                setSoundEffect: R,
                emojiConfetti: L,
                setEmojiConfetti: b,
                customGiftMessage: O,
                setCustomGiftMessage: M,
                selectedGiftStyle: N,
                setSelectedGiftStyle: A,
                sendGiftMessage: G,
                hasSentMessage: j,
                isSendingMessage: D,
                giftMessageError: F
            },
            children: h
        })
    }
}