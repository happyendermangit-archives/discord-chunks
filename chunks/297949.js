function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_COLLECTIBLES_UPSELL_HEIGHT: function() {
            return P
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("278074"),
        u = n("37295"),
        s = n("784184"),
        l = n("675865"),
        c = n("622780"),
        f = n("649455"),
        d = n("396586"),
        _ = n("535386"),
        E = n("571970"),
        p = n("576827"),
        m = n("839894"),
        y = n("848864"),
        I = n("244801"),
        h = n("208454"),
        O = n("247164"),
        T = n("830721"),
        S = n("332641"),
        v = n("348201"),
        g = n("941504"),
        A = n("617538"),
        b = n("174492");

    function N(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function R(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function C(e) {
        var t = e.onClick;
        return r.createElement(s.Clickable, {
            className: A.closeButton,
            onClick: t,
            "aria-label": g.default.Messages.DISMISS
        }, r.createElement(O.default, {
            className: A.closeIcon,
            width: 18,
            height: 18
        }))
    }
    var P = 76,
        D = function(e) {
            return r.createElement(s.Text, {
                variant: "text-sm/normal",
                color: "text-normal",
                tag: "span",
                className: A.ctaLink
            }, e)
        },
        L = function(e) {
            var t = e.user,
                n = e.onClick,
                o = (0, E.default)({
                    user: t,
                    size: (0, _.getDecorationSizeForAvatarSize)(s.AvatarSizes.SIZE_48)
                }).avatarDecorationSrc;
            return r.createElement(s.Clickable, {
                className: A.avatarButton,
                onClick: n,
                "aria-label": g.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
            }, r.createElement(s.Avatar, {
                src: b,
                avatarDecoration: o,
                size: s.AvatarSizes.SIZE_48,
                "aria-hidden": !0
            }))
        };
    t.default = function(e) {
        var t, n, o, _, E = e.user,
            O = e.displayProfile,
            b = e.onClose,
            M = e.onDismiss,
            U = e.isInSidebar,
            w = e.canShowAvatarDecorationUpsell,
            k = void 0 !== w && w,
            G = e.canShowProfileEffectUpsell,
            B = void 0 !== G && G,
            j = e.upsellSource,
            F = (0, d.default)(f.default.COLLECTIBLES_USER_POPOUT_UPSELL).analyticsLocations,
            V = (0, u.useStateFromStores)([c.default], function() {
                return c.default.useReducedMotion
            }),
            H = (0, l.default)(),
            x = H.ref,
            Y = H.height,
            W = r.useMemo(function() {
                return {
                    top: "-".concat((null != Y ? Y : P) + 6, "px")
                }
            }, [Y]),
            K = (0, u.useStateFromStores)([h.default], function() {
                return h.default.getCurrentUser()
            }),
            z = T.default.canUseCollectibles(K),
            X = (0, S.useUserPopoutCollectiblesUpsellStore)(),
            q = X.setUpsellSource,
            Q = X.reset;
        r.useEffect(function() {
            return q(j),
                function() {
                    Q()
                }
        }, [q, j, Q]);
        var J = (0, I.useProfileEffectPreset)(null == O ? void 0 : O.profileEffectId);
        var Z = (t = (0, u.useStateFromStoresArray)([m.default], function() {
                var e;
                return [(0, y.isPremiumCollectiblesProduct)(m.default.getProduct(null === (e = E.avatarDecoration) || void 0 === e ? void 0 : e.skuId)), (0, y.isPremiumCollectiblesProduct)(m.default.getProduct(null == J ? void 0 : J.skuId))]
            }), n = 2, function(e) {
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
                    if ("string" == typeof e) return N(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return N(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            $ = Z[0],
            ee = Z[1],
            et = r.useCallback(function() {
                var e, t, n, r;
                null == M || M(v.ContentDismissActionType.PRIMARY), null == b || b(), (0, p.openCollectiblesShop)({
                    analyticsLocations: F,
                    analyticsSource: f.default.COLLECTIBLES_USER_POPOUT_UPSELL,
                    initialProductSkuId: $ ? null !== (n = null == J ? void 0 : J.skuId) && void 0 !== n ? n : null === (e = E.avatarDecoration) || void 0 === e ? void 0 : e.skuId : null !== (r = null === (t = E.avatarDecoration) || void 0 === t ? void 0 : t.skuId) && void 0 !== r ? r : null == J ? void 0 : J.skuId
                })
            }, [M, b, F, null == J ? void 0 : J.skuId, null === (o = E.avatarDecoration) || void 0 === o ? void 0 : o.skuId, $]),
            en = r.useCallback(function() {
                null == M || M(v.ContentDismissActionType.DISMISS)
            }, [M]);
        if (!k && !B) return null;
        var er = (0, a.match)([k, B]).with([!0, !0], function() {
            return $ && ee && z ? g.default.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NITRO.format({
                openShop: D
            }) : $ && ee ? g.default.Messages.COMBINED_STARTER_COLLECTIBLES_SOCIAL_UPSELL_NON_NITRO.format({
                openShop: D
            }) : g.default.Messages.COMBINED_COLLECTIBLES_SOCIAL_UPSELL.format({
                openShop: D
            })
        }).with([!0, !1], function() {
            return $ && z ? g.default.Messages.STARTER_AVATAR_DECORATIONS_SOCIAL_UPSELL_NITRO.format({
                openShop: D
            }) : g.default.Messages.AVATAR_DECORATIONS_SOCIAL_UPSELL.format({
                openShop: D
            })
        }).with([!1, !0], function() {
            return ee && z ? g.default.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NITRO.format({
                openShop: D
            }) : (ee && g.default.Messages.STARTER_PROFILE_EFFECTS_SOCIAL_UPSELL_NON_NITRO.format({
                openShop: D
            }), g.default.Messages.PROFILE_EFFECTS_SOCIAL_UPSELL.format({
                openShop: D
            }))
        }).otherwise(function() {
            return null
        });
        return r.createElement("div", {
            style: W,
            className: i()(A.containerWrapper, (R(_ = {}, A.animation, !V), R(_, A.inSidebar, void 0 !== U && U), _)),
            ref: x
        }, r.createElement("div", {
            className: A.container
        }, k && r.createElement(L, {
            user: E,
            onClick: et
        }), r.createElement(s.Clickable, {
            className: k ? A.contentWithAvatar : A.content,
            onClick: et,
            "aria-label": g.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }, r.createElement(s.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            tag: "span"
        }, er)), r.createElement("div", {
            className: A.buttons
        }, r.createElement(C, {
            onClick: en
        }))))
    }
}