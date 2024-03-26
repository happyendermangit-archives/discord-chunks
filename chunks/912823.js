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
        p = n("1607"),
        m = n("328511"),
        h = n("585722"),
        x = n("697218"),
        E = n("719923"),
        y = n("35385"),
        g = n("695369"),
        S = n("198"),
        C = n("315814"),
        _ = n("108486"),
        T = n("923582"),
        I = n("80921"),
        v = n("646718"),
        N = n("350583");

    function A(e) {
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
        return r ? (0, i.jsx)(_.default, {
            disabled: t,
            channel: n
        }) : (0, i.jsx)(S.default, {
            disabled: t,
            channel: n
        })
    }
    var O = l.memo(function(e) {
        var t, n, l, f, S, _, O, R;
        let {
            type: M,
            disabled: k,
            channel: L,
            handleSubmit: P,
            isEmpty: b
        } = e, j = (0, s.useStateFromStores)([o.default], () => o.default.isSubmitButtonEnabled), U = (0, s.useStateFromStores)([m.default], () => m.default.getStickerPreview(L.id, M.drafts.type)), D = null != U && U.length > 0, w = (0, s.useStateFromStores)([h.default], () => h.default.getUploads(L.id, M.drafts.type)), {
            activeCommand: F,
            activeCommandOption: G
        } = (0, s.useStateFromStoresObject)([u.default], () => ({
            activeCommand: u.default.getActiveCommand(L.id),
            activeCommandOption: u.default.getActiveOption(L.id)
        })), {
            paymentsBlocked: H
        } = d.default.useExperiment({
            location: "dc120b_3"
        }, {
            autoTrackExposure: !1
        }), B = [], {
            enabled: V
        } = p.default.getCurrentConfig({
            location: "dc120b_4"
        }, {
            autoTrackExposure: !1
        }), K = x.default.getCurrentUser(), W = null !== (f = (0, s.useStateFromStores)([c.default], () => V && E.default.isPremiumExactly(K, v.PremiumTypes.TIER_2) ? c.default.getReferralsRemaining() : 0)) && void 0 !== f ? f : 0, Y = (0, s.useStateFromStores)([c.default], () => {
            if (!L.isDM() || void 0 === L.recipients || L.recipients.length > 1 || !V) return !1;
            let e = L.recipients[0],
                t = c.default.getSentUserIds();
            return t.includes(e)
        }), [z, Z] = (0, s.useStateFromStoresArray)([c.default, x.default], () => {
            let e = [!1, !1];
            if (!L.isDM() || void 0 === L.recipients || L.recipients.length > 1) return e;
            let t = L.recipients[0],
                n = x.default.getUser(t);
            if (null == n) return e;
            let i = n.bot;
            if (i) return e;
            let l = Y || W > 0,
                a = c.default.getRecipientEligibility(t);
            return [V && l && a, a]
        });
        return (!a.isMobile && (L.isDM() && (null === (S = M.gifts) || void 0 === S ? void 0 : S.button) != null && null == F && (E.default.isPremiumExactly(K, v.PremiumTypes.TIER_2) && Z && p.default.trackExposure({
            location: "dc120b_5"
        }), z && B.push((0, i.jsx)(C.default, {
            disabled: k,
            referralsRemaining: W,
            channel: L,
            isResending: Y
        }, "referral"))), (null === (_ = M.gifts) || void 0 === _ ? void 0 : _.button) != null && null == F && !H && B.push((0, i.jsx)(A, {
            disabled: k,
            channel: L
        }, "gift")), (null === (O = M.gifs) || void 0 === O ? void 0 : O.button) != null && null == F && B.push((0, i.jsx)(g.default, {
            disabled: k,
            type: M
        }, "gif")), (null === (R = M.stickers) || void 0 === R ? void 0 : R.button) != null && null == F && B.push((0, i.jsx)(I.default, {
            disabled: k,
            type: M
        }, "sticker"))), (null === (t = M.emojis) || void 0 === t ? void 0 : t.button) != null && (null == F || null != G && G.type !== r.ApplicationCommandOptionType.ATTACHMENT) && B.push((0, i.jsx)(y.default, {
            disabled: k,
            type: M
        }, "emoji")), (null === (n = M.submit) || void 0 === n ? void 0 : n.button) != null && ((null === (l = M.submit) || void 0 === l ? void 0 : l.ignorePreference) || j) && B.push((0, i.jsx)(T.default, {
            onClick: P,
            disabled: k || 0 === w.length && b && !D
        }, "submit")), 0 === B.length) ? null : (0, i.jsx)("div", {
            className: N.buttons,
            children: B
        })
    })
}