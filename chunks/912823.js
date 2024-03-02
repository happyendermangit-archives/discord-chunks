function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return P
        }
    }), n("222007"), n("424973");
    var l = n("37983"),
        i = n("884691"),
        a = n("394846"),
        s = n("446674"),
        r = n("798609"),
        o = n("206230"),
        u = n("427953"),
        d = n("383018"),
        c = n("619935"),
        f = n("540692"),
        m = n("53253"),
        p = n("795696"),
        h = n("1607"),
        E = n("328511"),
        g = n("585722"),
        C = n("697218"),
        S = n("719923"),
        T = n("998206"),
        I = n("35385"),
        v = n("695369"),
        _ = n("198"),
        N = n("315814"),
        A = n("108486"),
        x = n("923582"),
        y = n("80921"),
        O = n("954016"),
        R = n("646718"),
        M = n("350583");

    function L(e) {
        let {
            disabled: t,
            channel: n
        } = e, {
            enabled: a
        } = m.default.useExperiment({
            location: "dc120b_1"
        }, {
            autoTrackExposure: !1
        }), s = (0, m.useIsSeasonalGiftingActive)();
        i.useEffect(() => {
            s && m.default.trackExposure({
                location: "dc120b_2"
            })
        }, [s]);
        let r = a && s;
        return r ? (0, l.jsx)(A.default, {
            disabled: t,
            channel: n
        }) : (0, l.jsx)(_.default, {
            disabled: t,
            channel: n
        })
    }
    var P = i.memo(function(e) {
        var t, n, i, m, _, A, P, b, j;
        let {
            type: U,
            disabled: D,
            channel: k,
            handleSubmit: w,
            isEmpty: F
        } = e, G = (0, s.useStateFromStores)([o.default], () => o.default.isSubmitButtonEnabled), B = (0, s.useStateFromStores)([E.default], () => E.default.getStickerPreview(k.id, U.drafts.type)), H = null != B && B.length > 0, V = (0, s.useStateFromStores)([g.default], () => g.default.getUploads(k.id, U.drafts.type)), {
            activeCommand: K,
            activeCommandOption: W
        } = (0, s.useStateFromStoresObject)([d.default], () => ({
            activeCommand: d.default.getActiveCommand(k.id),
            activeCommandOption: d.default.getActiveOption(k.id)
        })), {
            paymentsBlocked: Y
        } = c.default.useExperiment({
            location: "dc120b_3"
        }, {
            autoTrackExposure: !1
        }), z = [], {
            enabled: Z
        } = h.default.getCurrentConfig({
            location: "dc120b_4"
        }, {
            autoTrackExposure: !1
        }), J = C.default.getCurrentUser(), q = null !== (m = (0, s.useStateFromStores)([f.default], () => Z && S.default.isPremiumExactly(J, R.PremiumTypes.TIER_2) ? f.default.getReferralsRemaining() : 0)) && void 0 !== m ? m : 0, X = (0, s.useStateFromStores)([f.default], () => {
            if (!k.isDM() || void 0 === k.recipients || k.recipients.length > 1 || !Z) return !1;
            let e = k.recipients[0],
                t = f.default.getSentUserIds();
            return t.includes(e)
        }), [Q, $] = (0, s.useStateFromStoresArray)([f.default, C.default], () => {
            let e = [!1, !1];
            if (!k.isDM() || void 0 === k.recipients || k.recipients.length > 1) return e;
            let t = k.recipients[0],
                n = C.default.getUser(t);
            if (null == n) return e;
            let l = n.bot;
            if (l) return e;
            let i = X || q > 0,
                a = f.default.getRecipientEligibility(t);
            return [Z && i && a, a]
        }), ee = (0, u.useActivitiesInTextButtonVisibility)(k.id, "ChannelTextAreaButtons");
        if (!a.isMobile) {
            if (k.isDM() && (null === (_ = U.gifts) || void 0 === _ ? void 0 : _.button) != null && null == K && (S.default.isPremiumExactly(J, R.PremiumTypes.TIER_2) && $ && h.default.trackExposure({
                    location: "dc120b_5"
                }), Q && z.push((0, l.jsx)(N.default, {
                    disabled: D,
                    referralsRemaining: q,
                    channel: k,
                    isResending: X
                }, "referral"))), (null == ee ? void 0 : ee.showChatInputButton) && O.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(k.type) && null == K && (null === (A = U.commands) || void 0 === A ? void 0 : A.enabled) && z.push((0, l.jsx)(T.default, {
                    disabled: D,
                    channel: k,
                    type: U
                }, "activity")), (null === (P = U.gifts) || void 0 === P ? void 0 : P.button) != null && null == K && !Y) {
                let {
                    hideChannelGiftButton: e
                } = p.default.getCurrentConfig({
                    location: "ChannelTextAreaButtons"
                }, {
                    autoTrackExposure: k.isDM()
                }), t = k.isDM() && e;
                !t && z.push((0, l.jsx)(L, {
                    disabled: D,
                    channel: k
                }, "gift"))
            }(null === (b = U.gifs) || void 0 === b ? void 0 : b.button) != null && null == K && z.push((0, l.jsx)(v.default, {
                disabled: D,
                type: U
            }, "gif")), (null === (j = U.stickers) || void 0 === j ? void 0 : j.button) != null && null == K && z.push((0, l.jsx)(y.default, {
                disabled: D,
                type: U
            }, "sticker"))
        }
        return ((null === (t = U.emojis) || void 0 === t ? void 0 : t.button) != null && (null == K || null != W && W.type !== r.ApplicationCommandOptionType.ATTACHMENT) && z.push((0, l.jsx)(I.default, {
            disabled: D,
            type: U
        }, "emoji")), (null === (n = U.submit) || void 0 === n ? void 0 : n.button) != null && ((null === (i = U.submit) || void 0 === i ? void 0 : i.ignorePreference) || G) && z.push((0, l.jsx)(x.default, {
            onClick: w,
            disabled: D || 0 === V.length && F && !H
        }, "submit")), 0 === z.length) ? null : (0, l.jsx)("div", {
            className: M.buttons,
            children: z
        })
    })
}