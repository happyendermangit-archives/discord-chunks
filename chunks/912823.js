function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return L
        }
    }), n("222007"), n("424973");
    var i = n("37983"),
        l = n("884691"),
        a = n("394846"),
        s = n("446674"),
        r = n("798609"),
        o = n("206230"),
        u = n("427953"),
        d = n("383018"),
        c = n("619935"),
        f = n("540692"),
        p = n("53253"),
        m = n("795696"),
        h = n("1607"),
        x = n("328511"),
        E = n("585722"),
        y = n("697218"),
        g = n("719923"),
        S = n("998206"),
        C = n("35385"),
        _ = n("695369"),
        T = n("198"),
        I = n("315814"),
        v = n("108486"),
        N = n("923582"),
        A = n("80921"),
        O = n("954016"),
        R = n("646718"),
        M = n("350583");

    function k(e) {
        let {
            disabled: t,
            channel: n
        } = e, {
            enabled: a
        } = p.default.useExperiment({
            location: "dc120b_1"
        }, {
            autoTrackExposure: !1
        }), s = (0, p.useIsSeasonalGiftingActive)();
        l.useEffect(() => {
            s && p.default.trackExposure({
                location: "dc120b_2"
            })
        }, [s]);
        let r = a && s;
        return r ? (0, i.jsx)(v.default, {
            disabled: t,
            channel: n
        }) : (0, i.jsx)(T.default, {
            disabled: t,
            channel: n
        })
    }
    var L = l.memo(function(e) {
        var t, n, l, p, T, v, L, P, b;
        let {
            type: j,
            disabled: U,
            channel: D,
            handleSubmit: w,
            isEmpty: F
        } = e, G = (0, s.useStateFromStores)([o.default], () => o.default.isSubmitButtonEnabled), H = (0, s.useStateFromStores)([x.default], () => x.default.getStickerPreview(D.id, j.drafts.type)), B = null != H && H.length > 0, V = (0, s.useStateFromStores)([E.default], () => E.default.getUploads(D.id, j.drafts.type)), {
            activeCommand: K,
            activeCommandOption: W
        } = (0, s.useStateFromStoresObject)([d.default], () => ({
            activeCommand: d.default.getActiveCommand(D.id),
            activeCommandOption: d.default.getActiveOption(D.id)
        })), {
            paymentsBlocked: Y
        } = c.default.useExperiment({
            location: "dc120b_3"
        }, {
            autoTrackExposure: !1
        }), z = [], {
            enabled: J
        } = h.default.getCurrentConfig({
            location: "dc120b_4"
        }, {
            autoTrackExposure: !1
        }), Z = y.default.getCurrentUser(), q = null !== (p = (0, s.useStateFromStores)([f.default], () => J && g.default.isPremiumExactly(Z, R.PremiumTypes.TIER_2) ? f.default.getReferralsRemaining() : 0)) && void 0 !== p ? p : 0, X = (0, s.useStateFromStores)([f.default], () => {
            if (!D.isDM() || void 0 === D.recipients || D.recipients.length > 1 || !J) return !1;
            let e = D.recipients[0],
                t = f.default.getSentUserIds();
            return t.includes(e)
        }), [Q, $] = (0, s.useStateFromStoresArray)([f.default, y.default], () => {
            let e = [!1, !1];
            if (!D.isDM() || void 0 === D.recipients || D.recipients.length > 1) return e;
            let t = D.recipients[0],
                n = y.default.getUser(t);
            if (null == n) return e;
            let i = n.bot;
            if (i) return e;
            let l = X || q > 0,
                a = f.default.getRecipientEligibility(t);
            return [J && l && a, a]
        }), ee = (0, u.useActivitiesInTextButtonVisibility)(D.id, "ChannelTextAreaButtons");
        if (!a.isMobile) {
            if (D.isDM() && (null === (T = j.gifts) || void 0 === T ? void 0 : T.button) != null && null == K && (g.default.isPremiumExactly(Z, R.PremiumTypes.TIER_2) && $ && h.default.trackExposure({
                    location: "dc120b_5"
                }), Q && z.push((0, i.jsx)(I.default, {
                    disabled: U,
                    referralsRemaining: q,
                    channel: D,
                    isResending: X
                }, "referral"))), (null == ee ? void 0 : ee.showChatInputButton) && O.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(D.type) && null == K && (null === (v = j.commands) || void 0 === v ? void 0 : v.enabled) && z.push((0, i.jsx)(S.default, {
                    disabled: U,
                    channel: D,
                    type: j
                }, "activity")), (null === (L = j.gifts) || void 0 === L ? void 0 : L.button) != null && null == K && !Y) {
                let {
                    hideChannelGiftButton: e
                } = m.default.getCurrentConfig({
                    location: "ChannelTextAreaButtons"
                }, {
                    autoTrackExposure: D.isDM()
                }), t = D.isDM() && e;
                !t && z.push((0, i.jsx)(k, {
                    disabled: U,
                    channel: D
                }, "gift"))
            }(null === (P = j.gifs) || void 0 === P ? void 0 : P.button) != null && null == K && z.push((0, i.jsx)(_.default, {
                disabled: U,
                type: j
            }, "gif")), (null === (b = j.stickers) || void 0 === b ? void 0 : b.button) != null && null == K && z.push((0, i.jsx)(A.default, {
                disabled: U,
                type: j
            }, "sticker"))
        }
        return ((null === (t = j.emojis) || void 0 === t ? void 0 : t.button) != null && (null == K || null != W && W.type !== r.ApplicationCommandOptionType.ATTACHMENT) && z.push((0, i.jsx)(C.default, {
            disabled: U,
            type: j
        }, "emoji")), (null === (n = j.submit) || void 0 === n ? void 0 : n.button) != null && ((null === (l = j.submit) || void 0 === l ? void 0 : l.ignorePreference) || G) && z.push((0, i.jsx)(N.default, {
            onClick: w,
            disabled: U || 0 === V.length && F && !B
        }, "submit")), 0 === z.length) ? null : (0, i.jsx)("div", {
            className: M.buttons,
            children: z
        })
    })
}