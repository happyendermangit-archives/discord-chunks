function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    }), n("222007"), n("424973");
    var i = n("37983"),
        l = n("884691"),
        a = n("394846"),
        s = n("446674"),
        r = n("798609"),
        o = n("206230"),
        u = n("383018"),
        d = n("619935"),
        c = n("540692"),
        f = n("53253"),
        p = n("795696"),
        m = n("1607"),
        h = n("328511"),
        x = n("585722"),
        E = n("697218"),
        y = n("719923"),
        g = n("35385"),
        S = n("695369"),
        C = n("198"),
        _ = n("315814"),
        T = n("108486"),
        I = n("923582"),
        v = n("80921"),
        N = n("646718"),
        A = n("350583");

    function R(e) {
        let {
            disabled: t,
            channel: n
        } = e, {
            enabled: a
        } = f.default.useExperiment({
            location: "dc120b_1"
        }, {
            autoTrackExposure: !1
        }), s = (0, f.useIsSeasonalGiftingActive)();
        l.useEffect(() => {
            s && f.default.trackExposure({
                location: "dc120b_2"
            })
        }, [s]);
        let r = a && s;
        return r ? (0, i.jsx)(T.default, {
            disabled: t,
            channel: n
        }) : (0, i.jsx)(C.default, {
            disabled: t,
            channel: n
        })
    }
    var O = l.memo(function(e) {
        var t, n, l, f, C, T, O, M;
        let {
            type: k,
            disabled: L,
            channel: P,
            handleSubmit: b,
            isEmpty: j
        } = e, U = (0, s.useStateFromStores)([o.default], () => o.default.isSubmitButtonEnabled), D = (0, s.useStateFromStores)([h.default], () => h.default.getStickerPreview(P.id, k.drafts.type)), w = null != D && D.length > 0, F = (0, s.useStateFromStores)([x.default], () => x.default.getUploads(P.id, k.drafts.type)), {
            activeCommand: G,
            activeCommandOption: H
        } = (0, s.useStateFromStoresObject)([u.default], () => ({
            activeCommand: u.default.getActiveCommand(P.id),
            activeCommandOption: u.default.getActiveOption(P.id)
        })), {
            paymentsBlocked: B
        } = d.default.useExperiment({
            location: "dc120b_3"
        }, {
            autoTrackExposure: !1
        }), V = [], {
            enabled: K
        } = m.default.getCurrentConfig({
            location: "dc120b_4"
        }, {
            autoTrackExposure: !1
        }), W = E.default.getCurrentUser(), Y = null !== (f = (0, s.useStateFromStores)([c.default], () => K && y.default.isPremiumExactly(W, N.PremiumTypes.TIER_2) ? c.default.getReferralsRemaining() : 0)) && void 0 !== f ? f : 0, z = (0, s.useStateFromStores)([c.default], () => {
            if (!P.isDM() || void 0 === P.recipients || P.recipients.length > 1 || !K) return !1;
            let e = P.recipients[0],
                t = c.default.getSentUserIds();
            return t.includes(e)
        }), [Z, J] = (0, s.useStateFromStoresArray)([c.default, E.default], () => {
            let e = [!1, !1];
            if (!P.isDM() || void 0 === P.recipients || P.recipients.length > 1) return e;
            let t = P.recipients[0],
                n = E.default.getUser(t);
            if (null == n) return e;
            let i = n.bot;
            if (i) return e;
            let l = z || Y > 0,
                a = c.default.getRecipientEligibility(t);
            return [K && l && a, a]
        });
        if (!a.isMobile) {
            if (P.isDM() && (null === (C = k.gifts) || void 0 === C ? void 0 : C.button) != null && null == G && (y.default.isPremiumExactly(W, N.PremiumTypes.TIER_2) && J && m.default.trackExposure({
                    location: "dc120b_5"
                }), Z && V.push((0, i.jsx)(_.default, {
                    disabled: L,
                    referralsRemaining: Y,
                    channel: P,
                    isResending: z
                }, "referral"))), (null === (T = k.gifts) || void 0 === T ? void 0 : T.button) != null && null == G && !B) {
                let {
                    hideChannelGiftButton: e
                } = p.default.getCurrentConfig({
                    location: "ChannelTextAreaButtons"
                }, {
                    autoTrackExposure: P.isDM()
                }), t = P.isDM() && e;
                !t && V.push((0, i.jsx)(R, {
                    disabled: L,
                    channel: P
                }, "gift"))
            }(null === (O = k.gifs) || void 0 === O ? void 0 : O.button) != null && null == G && V.push((0, i.jsx)(S.default, {
                disabled: L,
                type: k
            }, "gif")), (null === (M = k.stickers) || void 0 === M ? void 0 : M.button) != null && null == G && V.push((0, i.jsx)(v.default, {
                disabled: L,
                type: k
            }, "sticker"))
        }
        return ((null === (t = k.emojis) || void 0 === t ? void 0 : t.button) != null && (null == G || null != H && H.type !== r.ApplicationCommandOptionType.ATTACHMENT) && V.push((0, i.jsx)(g.default, {
            disabled: L,
            type: k
        }, "emoji")), (null === (n = k.submit) || void 0 === n ? void 0 : n.button) != null && ((null === (l = k.submit) || void 0 === l ? void 0 : l.ignorePreference) || U) && V.push((0, i.jsx)(I.default, {
            onClick: b,
            disabled: L || 0 === F.length && j && !w
        }, "submit")), 0 === V.length) ? null : (0, i.jsx)("div", {
            className: A.buttons,
            children: V
        })
    })
}