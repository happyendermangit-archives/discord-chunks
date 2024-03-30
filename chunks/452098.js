function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useShouldShowUserPopoutCollectiblesUpsell: function() {
            return y
        }
    });
    var r = n("470079"),
        o = n("512722"),
        i = n.n(o),
        a = n("37295"),
        u = n("14782"),
        s = n("531822"),
        l = n("198402"),
        c = n("453367"),
        f = n("446019"),
        d = n("177770"),
        _ = n("208454"),
        E = n("794173"),
        p = n("332641");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var y = function(e) {
        var t, n, o = e.popoutUser,
            y = e.source,
            I = e.guildId,
            h = "useShouldShowUserPopoutCollectiblesUpsell";
        (0, l.useTriggerDebuggingAA)({
            location: h + "auto on",
            autoTrackExposure: !0
        }), (0, l.useTriggerDebuggingAA)({
            location: h + "auto off",
            autoTrackExposure: !1
        });
        var O = (0, f.default)(h),
            T = (0, p.useUserPopoutCollectiblesUpsellStore)().upsellSource,
            S = (0, a.useStateFromStores)([_.default], function() {
                return _.default.getCurrentUser()
            });
        i()(null != S, "currentUser should not be null");
        var v = (0, c.useBlockedPaymentsConfig)(),
            g = (0, E.default)(S.id, I),
            A = (0, E.default)(o.id, I);
        r.useEffect(function() {
            null == g && (0, s.fetchProfile)(S.id)
        }, [g, S]);
        var b = O !== f.CollectiblesShopMarketingVariants.DEFAULT && (null == S ? void 0 : S.id) !== o.id && !v && !(null != T && T !== y),
            N = b && (null == S ? void 0 : S.avatarDecoration) == null && (null == o ? void 0 : o.avatarDecoration) != null,
            R = b && null != g && null == g.profileEffectId && (null == A ? void 0 : A.profileEffectId) != null;
        var C = (t = (0, d.useSelectedDismissibleContent)((N, []), void 0, !0), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            P = C[0],
            D = C[1];
        return {
            shouldShow: P === u.DismissibleContent.SHOP_FOR_ALL_USER_POPOUT_UPSELL,
            canShowAvatarDecorationUpsell: N,
            canShowProfileEffectUpsell: R,
            onDismiss: D
        }
    }
}