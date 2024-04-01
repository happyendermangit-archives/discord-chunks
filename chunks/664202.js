function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useShouldShowUserPopoutCollectiblesUpsell: function() {
            return f
        }
    }), n("47120");
    var i = n("470079"),
        r = n("512722"),
        s = n.n(r),
        a = n("399606"),
        o = n("524437"),
        l = n("232567"),
        u = n("634894"),
        d = n("211242"),
        _ = n("410154"),
        c = n("243778"),
        E = n("594174"),
        I = n("318661"),
        T = n("436478");
    let f = e => {
        let {
            popoutUser: t,
            source: n,
            guildId: r
        } = e, f = "useShouldShowUserPopoutCollectiblesUpsell";
        (0, u.useTriggerDebuggingAA)({
            location: f + "auto on",
            autoTrackExposure: !0
        }), (0, u.useTriggerDebuggingAA)({
            location: f + "auto off",
            autoTrackExposure: !1
        });
        let S = (0, _.default)(f),
            {
                upsellSource: h
            } = (0, T.useUserPopoutCollectiblesUpsellStore)(),
            A = (0, a.useStateFromStores)([E.default], () => E.default.getCurrentUser());
        s()(null != A, "currentUser should not be null");
        let m = (0, d.useBlockedPaymentsConfig)(),
            N = (0, I.default)(A.id, r),
            O = (0, I.default)(t.id, r);
        i.useEffect(() => {
            null == N && (0, l.fetchProfile)(A.id)
        }, [N, A]);
        let p = S !== _.CollectiblesShopMarketingVariants.DEFAULT && (null == A ? void 0 : A.id) !== t.id && !m && !(null != h && h !== n),
            R = p && (null == A ? void 0 : A.avatarDecoration) == null && (null == t ? void 0 : t.avatarDecoration) != null,
            C = p && null != N && null == N.profileEffectId && (null == O ? void 0 : O.profileEffectId) != null,
            [g, L] = (0, c.useSelectedDismissibleContent)((R, []), void 0, !0);
        return {
            shouldShow: g === o.DismissibleContent.SHOP_FOR_ALL_USER_POPOUT_UPSELL,
            canShowAvatarDecorationUpsell: R,
            canShowProfileEffectUpsell: C,
            onDismiss: L
        }
    }
}