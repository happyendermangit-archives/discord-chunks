function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GiftContextProvider: function() {
            return g
        },
        useGiftContext: function() {
            return h
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("210721"),
        s = n("53253"),
        r = n("105097"),
        o = n("659632"),
        u = n("642906"),
        d = n("646718"),
        c = n("782340");
    let f = d.PremiumGiftStyles.STANDARD_BOX,
        m = void 0,
        [p, h, E] = (0, r.default)();

    function g(e) {
        let {
            isGift: t = !1,
            giftRecipient: n,
            giftMessage: r,
            children: h
        } = e, {
            selectedSkuId: E
        } = (0, u.usePaymentContext)(), [g, C] = i.useState(n), [S, T] = i.useState(), [I, v] = i.useState(!1), _ = (0, o.shouldShowCustomGiftExperience)(g), N = (0, s.useIsSeasonalGiftingActive)(), {
            enabled: A
        } = s.default.useExperiment({
            location: "PaymentContextProvider"
        }, {
            autoTrackExposure: _ && N
        }), [x, y] = i.useState(_ ? A && N ? d.PremiumGiftStyles.SEASONAL_STANDARD_BOX : f : m), [O, R] = i.useState(t && (0, o.getGiftExperience)(g) === o.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD ? c.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : r), [M, L] = i.useState(void 0), [P, b] = i.useState(void 0), j = (0, o.useGetGiftCode)(E, t), [U, D] = i.useState(!1), [k, w] = i.useState(!1), [F, G] = i.useState(), B = i.useCallback(e => {
            let {
                onSubscriptionConfirmation: t
            } = e;
            return w(!0), (0, a.sendGiftMessage)(g, j).then(() => {
                w(!1), null == t || t(), D(!0)
            }).catch(e => {
                w(!1), G(e), D(!0)
            })
        }, [g, j, w, D, G]);
        return (0, l.jsx)(p.Provider, {
            value: {
                isGift: t,
                giftCode: j,
                giftMessage: r,
                giftRecipient: g,
                setGiftRecipient: C,
                giftRecipientError: S,
                setGiftRecipientError: T,
                validatingGiftRecipient: I,
                setValidatingGiftRecipient: v,
                soundEffect: M,
                setSoundEffect: L,
                emojiConfetti: P,
                setEmojiConfetti: b,
                customGiftMessage: O,
                setCustomGiftMessage: R,
                selectedGiftStyle: x,
                setSelectedGiftStyle: y,
                sendGiftMessage: B,
                hasSentMessage: U,
                isSendingMessage: k,
                giftMessageError: F
            },
            children: h
        })
    }
}