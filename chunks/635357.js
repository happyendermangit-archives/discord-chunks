function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GiftContextProvider: function() {
            return I
        },
        useGiftContext: function() {
            return m
        }
    }), n("222007");
    var i = n("37983"),
        a = n("884691"),
        s = n("210721"),
        r = n("53253"),
        l = n("105097"),
        o = n("659632"),
        u = n("642906"),
        c = n("646718"),
        d = n("782340");
    let f = c.PremiumGiftStyles.STANDARD_BOX,
        p = void 0,
        [h, m, S] = (0, l.default)();

    function I(e) {
        let {
            isGift: t = !1,
            giftRecipient: n,
            giftMessage: l,
            children: m
        } = e, {
            selectedSkuId: S
        } = (0, u.usePaymentContext)(), [I, g] = a.useState(n), [C, v] = a.useState(), [E, A] = a.useState(!1), N = (0, o.shouldShowCustomGiftExperience)(I), x = (0, r.useIsSeasonalGiftingActive)(), {
            enabled: T
        } = r.default.useExperiment({
            location: "PaymentContextProvider"
        }, {
            autoTrackExposure: N && x
        }), [_, b] = a.useState(N ? T && x ? c.PremiumGiftStyles.SEASONAL_STANDARD_BOX : f : p), [L, j] = a.useState(t && (0, o.getGiftExperience)(I) === o.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD ? d.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : l), [y, M] = a.useState(void 0), [O, P] = a.useState(void 0), R = (0, o.useGetGiftCode)(S, t), [U, B] = a.useState(!1), [G, w] = a.useState(!1), [D, k] = a.useState(), F = a.useCallback(e => {
            let {
                onSubscriptionConfirmation: t
            } = e;
            return w(!0), (0, s.sendGiftMessage)(I, R).then(() => {
                w(!1), null == t || t(), B(!0)
            }).catch(e => {
                w(!1), k(e), B(!0)
            })
        }, [I, R, w, B, k]);
        return (0, i.jsx)(h.Provider, {
            value: {
                isGift: t,
                giftCode: R,
                giftMessage: l,
                giftRecipient: I,
                setGiftRecipient: g,
                giftRecipientError: C,
                setGiftRecipientError: v,
                validatingGiftRecipient: E,
                setValidatingGiftRecipient: A,
                soundEffect: y,
                setSoundEffect: M,
                emojiConfetti: O,
                setEmojiConfetti: P,
                customGiftMessage: L,
                setCustomGiftMessage: j,
                selectedGiftStyle: _,
                setSelectedGiftStyle: b,
                sendGiftMessage: F,
                hasSentMessage: U,
                isSendingMessage: G,
                giftMessageError: D
            },
            children: m
        })
    }
}