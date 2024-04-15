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
        u = n("598"),
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
        } = (0, u.usePaymentContext)(), [S, A] = r.useState(n), [h, m] = r.useState(), [N, O] = r.useState(!1), p = (0, l.shouldShowCustomGiftExperience)(S), R = (0, a.useIsSeasonalGiftingActive)(), {
            enabled: C
        } = a.default.useExperiment({
            location: "PaymentContextProvider"
        }, {
            autoTrackExposure: p && R
        }), [g, L] = r.useState(p ? C && R ? d.PremiumGiftStyles.SEASONAL_STANDARD_BOX : c : E), [D, v] = r.useState(t && (0, l.getGiftExperience)(S) === l.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD ? _.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : o), [M, y] = r.useState(void 0), [P, U] = r.useState(void 0), b = (0, l.useGetGiftCode)(f, t), [G, w] = r.useState(!1), [B, k] = r.useState(!1), [V, F] = r.useState(), x = r.useCallback(e => {
            let {
                onSubscriptionConfirmation: t
            } = e;
            return k(!0), (0, s.sendGiftMessage)(S, b).then(() => {
                k(!1), null == t || t(), w(!0)
            }).catch(e => {
                k(!1), F(e), w(!0)
            })
        }, [S, b, k, w, F]);
        return (0, i.jsx)(I.Provider, {
            value: {
                isGift: t,
                giftCode: b,
                giftMessage: o,
                giftRecipient: S,
                setGiftRecipient: A,
                giftRecipientError: h,
                setGiftRecipientError: m,
                validatingGiftRecipient: N,
                setValidatingGiftRecipient: O,
                soundEffect: M,
                setSoundEffect: y,
                emojiConfetti: P,
                setEmojiConfetti: U,
                customGiftMessage: D,
                setCustomGiftMessage: v,
                selectedGiftStyle: g,
                setSelectedGiftStyle: L,
                sendGiftMessage: x,
                hasSentMessage: G,
                isSendingMessage: B,
                giftMessageError: V
            },
            children: T
        })
    }
}