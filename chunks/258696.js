function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i = n("735250"),
        r = n("470079"),
        s = n("873546"),
        a = n("442837"),
        o = n("911969"),
        l = n("607070"),
        u = n("998698"),
        d = n("211242"),
        _ = n("276444"),
        c = n("646476"),
        E = n("963198"),
        I = n("913663"),
        T = n("117530"),
        f = n("594174"),
        S = n("74538"),
        h = n("94161"),
        A = n("9277"),
        m = n("897291"),
        N = n("764794"),
        p = n("241553"),
        O = n("319417"),
        R = n("728386"),
        C = n("474936"),
        g = n("23383");

    function L(e) {
        let {
            disabled: t,
            channel: n
        } = e, {
            enabled: s
        } = c.default.useExperiment({
            location: "dc120b_1"
        }, {
            autoTrackExposure: !1
        }), a = (0, c.useIsSeasonalGiftingActive)();
        return r.useEffect(() => {
            a && c.default.trackExposure({
                location: "dc120b_2"
            })
        }, [a]), s && a ? (0, i.jsx)(p.default, {
            disabled: t,
            channel: n
        }) : (0, i.jsx)(m.default, {
            disabled: t,
            channel: n
        })
    }
    t.default = r.memo(function(e) {
        var t, n, r, c, m, p, D, v;
        let {
            type: M,
            disabled: y,
            channel: P,
            handleSubmit: U,
            isEmpty: b
        } = e, G = (0, a.useStateFromStores)([l.default], () => l.default.isSubmitButtonEnabled), w = (0, a.useStateFromStores)([I.default], () => I.default.getStickerPreview(P.id, M.drafts.type)), B = null != w && w.length > 0, k = (0, a.useStateFromStores)([T.default], () => T.default.getUploads(P.id, M.drafts.type)), {
            activeCommand: F,
            activeCommandOption: V
        } = (0, a.useStateFromStoresObject)([u.default], () => ({
            activeCommand: u.default.getActiveCommand(P.id),
            activeCommandOption: u.default.getActiveOption(P.id)
        })), {
            paymentsBlocked: x
        } = d.default.useExperiment({
            location: "dc120b_3"
        }, {
            autoTrackExposure: !1
        }), H = [], {
            enabled: Y
        } = E.default.getCurrentConfig({
            location: "dc120b_4"
        }, {
            autoTrackExposure: !1
        }), j = f.default.getCurrentUser(), W = null !== (c = (0, a.useStateFromStores)([_.default], () => Y && S.default.isPremiumExactly(j, C.PremiumTypes.TIER_2) ? _.default.getReferralsRemaining() : 0)) && void 0 !== c ? c : 0, K = (0, a.useStateFromStores)([_.default], () => {
            if (!P.isDM() || void 0 === P.recipients || P.recipients.length > 1 || !Y) return !1;
            let e = P.recipients[0];
            return _.default.getSentUserIds().includes(e)
        }), [z, X] = (0, a.useStateFromStoresArray)([_.default, f.default], () => {
            let e = [!1, !1];
            if (!P.isDM() || void 0 === P.recipients || P.recipients.length > 1) return e;
            let t = P.recipients[0],
                n = f.default.getUser(t);
            if (null == n || n.bot) return e;
            let i = K || W > 0,
                r = _.default.getRecipientEligibility(t);
            return [Y && i && r, r]
        });
        return (!s.isMobile && (P.isDM() && (null === (m = M.gifts) || void 0 === m ? void 0 : m.button) != null && null == F && (S.default.isPremiumExactly(j, C.PremiumTypes.TIER_2) && X && E.default.trackExposure({
            location: "dc120b_5"
        }), z && H.push((0, i.jsx)(N.default, {
            disabled: y,
            referralsRemaining: W,
            channel: P,
            isResending: K
        }, "referral"))), (null === (p = M.gifts) || void 0 === p ? void 0 : p.button) != null && null == F && !x && H.push((0, i.jsx)(L, {
            disabled: y,
            channel: P
        }, "gift")), (null === (D = M.gifs) || void 0 === D ? void 0 : D.button) != null && null == F && H.push((0, i.jsx)(A.default, {
            disabled: y,
            type: M
        }, "gif")), (null === (v = M.stickers) || void 0 === v ? void 0 : v.button) != null && null == F && H.push((0, i.jsx)(R.default, {
            disabled: y,
            type: M
        }, "sticker"))), (null === (t = M.emojis) || void 0 === t ? void 0 : t.button) != null && (null == F || null != V && V.type !== o.ApplicationCommandOptionType.ATTACHMENT) && H.push((0, i.jsx)(h.default, {
            disabled: y,
            type: M
        }, "emoji")), (null === (n = M.submit) || void 0 === n ? void 0 : n.button) != null && ((null === (r = M.submit) || void 0 === r ? void 0 : r.ignorePreference) || G) && H.push((0, i.jsx)(O.default, {
            onClick: U,
            disabled: y || 0 === k.length && b && !B
        }, "submit")), 0 === H.length) ? null : (0, i.jsx)("div", {
            className: g.buttons,
            children: H
        })
    })
}