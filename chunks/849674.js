function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useShouldShowUserPopoutCollectiblesUpsell: function() {
            return E
        }
    }), n("222007");
    var l = n("884691"),
        i = n("627445"),
        a = n.n(i),
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
    let E = e => {
        let {
            popoutUser: t,
            source: n,
            guildId: i
        } = e, E = "useShouldShowUserPopoutCollectiblesUpsell";
        (0, u.useTriggerDebuggingAA)({
            location: E + "auto on",
            autoTrackExposure: !0
        }), (0, u.useTriggerDebuggingAA)({
            location: E + "auto off",
            autoTrackExposure: !1
        });
        let g = (0, c.default)(E),
            {
                upsellSource: C
            } = (0, h.useUserPopoutCollectiblesUpsellStore)(),
            S = (0, s.default)([m.default], () => m.default.getCurrentUser());
        a(null != S, "currentUser should not be null");
        let T = (0, d.useBlockedPaymentsConfig)(),
            I = (0, p.default)(S.id, i),
            v = (0, p.default)(t.id, i);
        l.useEffect(() => {
            null == I && (0, o.fetchProfile)(S.id)
        }, [I, S]);
        let _ = g !== c.CollectiblesShopMarketingVariants.DEFAULT && (null == S ? void 0 : S.id) !== t.id && !T && !(null != C && C !== n),
            N = _ && (null == S ? void 0 : S.avatarDecoration) == null && (null == t ? void 0 : t.avatarDecoration) != null,
            A = _ && null != I && null == I.profileEffectId && (null == v ? void 0 : v.profileEffectId) != null,
            [x, y] = (0, f.useSelectedDismissibleContent)((N, []), void 0, !0);
        return {
            shouldShow: x === r.DismissibleContent.SHOP_FOR_ALL_USER_POPOUT_UPSELL,
            canShowAvatarDecorationUpsell: N,
            canShowProfileEffectUpsell: A,
            onDismiss: y
        }
    }
}