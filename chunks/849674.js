function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useShouldShowUserPopoutCollectiblesUpsell: function() {
            return x
        }
    }), n("222007");
    var i = n("884691"),
        l = n("627445"),
        a = n.n(l),
        s = n("65597"),
        r = n("151426"),
        o = n("327037"),
        u = n("875212"),
        d = n("619935"),
        c = n("411691"),
        f = n("384997"),
        m = n("697218"),
        p = n("217513"),
        h = n("627601");
    let x = e => {
        let {
            popoutUser: t,
            source: n,
            guildId: l
        } = e, x = "useShouldShowUserPopoutCollectiblesUpsell";
        (0, u.useTriggerDebuggingAA)({
            location: x + "auto on",
            autoTrackExposure: !0
        }), (0, u.useTriggerDebuggingAA)({
            location: x + "auto off",
            autoTrackExposure: !1
        });
        let E = (0, c.default)(x),
            {
                upsellSource: y
            } = (0, h.useUserPopoutCollectiblesUpsellStore)(),
            g = (0, s.useStateFromStores)([m.default], () => m.default.getCurrentUser());
        a(null != g, "currentUser should not be null");
        let S = (0, d.useBlockedPaymentsConfig)(),
            C = (0, p.default)(g.id, l),
            T = (0, p.default)(t.id, l);
        i.useEffect(() => {
            null == C && (0, o.fetchProfile)(g.id)
        }, [C, g]);
        let _ = E !== c.CollectiblesShopMarketingVariants.DEFAULT && (null == g ? void 0 : g.id) !== t.id && !S && !(null != y && y !== n),
            I = _ && (null == g ? void 0 : g.avatarDecoration) == null && (null == t ? void 0 : t.avatarDecoration) != null,
            v = _ && null != C && null == C.profileEffectId && (null == T ? void 0 : T.profileEffectId) != null,
            [A, N] = (0, f.useSelectedDismissibleContent)((I, []), void 0, !0);
        return {
            shouldShow: A === r.DismissibleContent.SHOP_FOR_ALL_USER_POPOUT_UPSELL,
            canShowAvatarDecorationUpsell: I,
            canShowProfileEffectUpsell: v,
            onDismiss: N
        }
    }
}