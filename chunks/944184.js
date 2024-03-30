function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return eo
        }
    });
    var r, o, i, a, u = n("470079"),
        s = n("803997"),
        l = n.n(s),
        c = n("194926"),
        f = n("898511"),
        d = n("447515"),
        _ = n("784184"),
        E = n("482644"),
        p = n("649455"),
        m = n("396586"),
        y = n("712398"),
        I = n("653133"),
        h = n("429383"),
        O = n("324727"),
        T = n("53867"),
        S = n("217014"),
        v = n("935741"),
        g = n("306912"),
        A = n("894288"),
        b = n("208454"),
        N = n("290976"),
        R = n("668631"),
        C = n("247164"),
        P = n("358425"),
        D = n("412791"),
        L = n("205631"),
        M = n("547700"),
        U = n("870331"),
        w = n("299529"),
        k = n("830721"),
        G = n("264437"),
        B = n("903716"),
        j = n("108455"),
        F = n("884125"),
        V = n("266211"),
        H = n("731616"),
        x = n("281767"),
        Y = n("868615"),
        W = n("941504"),
        K = n("350315");

    function z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function X(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function q(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                q(e, t, n[t])
            })
        }
        return e
    }

    function J(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function Z(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }

    function $(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return z(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return z(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }(r = o || (o = {}))[r.SHOULD_LOAD = 0] = "SHOULD_LOAD", r[r.LOADING = 1] = "LOADING", r[r.COMPLETE = 2] = "COMPLETE";
    var ee = (q(i = {}, H.UserProfileTypes.POPOUT, 18), q(i, H.UserProfileTypes.MODAL, 24), q(i, H.UserProfileTypes.SETTINGS, 0), q(i, H.UserProfileTypes.PANEL, 18), q(i, H.UserProfileTypes.POMELO_POPOUT, 18), q(i, H.UserProfileTypes.CANCEL_MODAL, 0), i),
        et = (q(a = {}, H.UserProfileTypes.MODAL, x.AnalyticsPages.USER_PROFILE), q(a, H.UserProfileTypes.POPOUT, x.AnalyticsPages.USER_POPOUT), q(a, H.UserProfileTypes.SETTINGS, x.AnalyticsPages.USER_POPOUT), q(a, H.UserProfileTypes.PANEL, x.AnalyticsPages.DM_CHANNEL), q(a, H.UserProfileTypes.POMELO_POPOUT, x.AnalyticsPages.POMELO_POPOUT), q(a, H.UserProfileTypes.CANCEL_MODAL, x.AnalyticsPages.USER_POPOUT), a);

    function en(e) {
        var t = e.type,
            r = e.shown,
            o = e.onClick,
            i = (0, f.useStateFromStores)([b.default], function() {
                var e = b.default.getCurrentUser();
                return k.default.canUsePremiumProfileCustomization(e)
            }),
            a = u.useRef(!1),
            s = (0, m.default)(p.default.BADGE).analyticsLocations;
        return u.useEffect(function() {
            r && !a.current && (a.current = !0, U.default.track(x.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: Y.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
                location: {
                    page: et[t],
                    section: x.AnalyticsSections.NITRO_BANNER,
                    object: x.AnalyticsObjects.NITRO_BADGE
                },
                location_stack: s
            }))
        }, [s, r, t]), u.createElement(_.Tooltip, {
            tooltipContentClassName: K.premiumIconTooltipContent,
            text: i ? W.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : W.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL
        }, function(e) {
            var t;
            return u.createElement(_.Clickable, J(Q({}, e), {
                onClick: i ? void 0 : function() {
                    var e, t;
                    e = s, (0, _.openModalLazy)((t = function() {
                        var t;
                        return function(e, t) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: u(0),
                                throw: u(1),
                                return: u(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function u(i) {
                                return function(u) {
                                    return function(i) {
                                        if (n) throw TypeError("Generator is already executing.");
                                        for (; a;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: i[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                        a.label = i[1];
                                                        break
                                                    }
                                                    if (6 === i[0] && a.label < o[1]) {
                                                        a.label = o[1], o = i;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(i);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, a)
                                        } catch (e) {
                                            i = [6, e], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & i[0]) throw i[1];
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    }([i, u])
                                }
                            }
                        }(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, Promise.all([n.e("99387"), n.e("70899")]).then(n.bind(n, "6423"))];
                                case 1:
                                    return t = r.sent().default, [2, function(n) {
                                        var r = n.onClose,
                                            o = Z(n, ["onClose"]);
                                        return u.createElement(t, Q({
                                            analyticsLocations: e,
                                            title: W.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
                                            description: W.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                                                onAndMoreWithPremiumClick: function() {
                                                    r(), E.default.open(x.UserSettingsSections.PREMIUM, null, {
                                                        analyticsLocations: e
                                                    })
                                                }
                                            }),
                                            onClose: r
                                        }, o))
                                    }]
                            }
                        })
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var i = t.apply(e, n);

                            function a(e) {
                                X(i, r, o, a, u, "next", e)
                            }

                            function u(e) {
                                X(i, r, o, a, u, "throw", e)
                            }
                            a(void 0)
                        })
                    })), null == o || o()
                },
                className: l()(K.premiumIconWrapper, (q(t = {}, K.visible, r), q(t, K.clickable, !i), t))
            }), u.createElement(M.TextBadge, {
                color: "rgba(32, 34, 37, 0.8)",
                text: u.createElement(D.default, {
                    width: 16,
                    height: 16,
                    className: K.premiumIcon
                })
            }))
        })
    }

    function er(e) {
        var t = e.darkenOnHover,
            n = e.profileType,
            r = e.profileLabel,
            o = e.icon,
            i = Z(e, ["darkenOnHover", "profileType", "profileLabel", "icon"]),
            a = ee[n],
            s = "pencil" === o ? L.default : P.default;
        return u.createElement(_.Clickable, J(Q({}, i), {
            "aria-label": r,
            className: t ? K.pencilContainerDark : K.pencilContainer
        }), u.createElement(_.Tooltip, {
            text: r
        }, function(e) {
            return u.createElement(s, J(Q({}, e), {
                width: a,
                height: a,
                className: K.editIcon
            }))
        }))
    }

    function eo(e) {
        var t, n, r, o = e.user,
            i = e.displayProfile,
            a = e.bannerSrc,
            s = e.onClose,
            E = e.guildId,
            p = e.profileType,
            m = void 0 === p ? H.UserProfileTypes.POPOUT : p,
            b = e.isHovering,
            P = e.animateOnHover,
            D = e.allowEdit,
            L = e.showPremiumBadgeUpsell,
            M = void 0 === L || L,
            U = e.hasProfileEffect,
            z = void 0 !== U && U,
            X = $(u.useState((null == i ? void 0 : i.banner) == null ? 2 : 0), 2),
            Z = X[0],
            ee = X[1],
            et = (0, f.useStateFromStores)([g.default], function() {
                return g.default.getGuild(E)
            }),
            eo = (0, f.useStateFromStores)([S.default], function() {
                return S.default.getId()
            }) === o.id && (void 0 === D || D),
            ei = k.default.isPremiumAtLeast(null == i ? void 0 : i.premiumType, Y.PremiumTypes.TIER_2),
            ea = (0, G.useUserProfileAnalyticsContext)().trackUserProfileAction,
            eu = $(u.useState(!1), 2),
            es = eu[0],
            el = eu[1],
            ec = (0, f.useStateFromStores)([N.default], function() {
                return N.default.isFocused()
            }),
            ef = T.GifAutoPlay.getSetting(),
            ed = (0, _.useToken)(d.default.unsafe_rawColors.PRIMARY_800).hex(),
            e_ = (0, _.getAvatarSize)(_.AvatarSizes.SIZE_80),
            eE = (0, c.hex2int)((0, y.default)(o.getAvatarURL(E, e_), ed, !1)),
            ep = (0, I.default)(null !== (t = null == i ? void 0 : i.primaryColor) && void 0 !== t ? t : eE).hsl,
            em = (0, F.getUserBannerSize)(m),
            ey = null != a ? a : null == i ? void 0 : i.getBannerURL({
                size: em,
                canAnimate: P || !ef ? es : ec
            }),
            eI = null != ey,
            eh = (0, f.useStateFromStores)([B.default], function() {
                return B.default.getUserProfile(o.id)
            }),
            eO = v.default.getChannel(A.default.getChannelId()),
            eT = (0, h.usePrivateChannelIntegrationState)({
                channelId: null !== (n = null == eO ? void 0 : eO.id) && void 0 !== n ? n : x.EMPTY_STRING_SNOWFLAKE_ID
            }),
            eS = eT.appsInGDMEnabled,
            ev = eT.availableApplications,
            eg = null == eh ? void 0 : eh.application,
            eA = eS && null != ev.find(function(e) {
                return e.id === (null == eg ? void 0 : eg.id)
            });
        (0, u.useEffect)(function() {
            if (eI && 0 === Z) {
                ee(1);
                var e = new Image;
                e.src = ey, e.onload = function() {
                    return ee(2)
                }
            }
        }, [o, eI, ey, Z]), u.useEffect(function() {
            if (!ef && !!eI) {
                var e = null != a ? a : null == i ? void 0 : i.getBannerURL({
                    size: em,
                    canAnimate: !0
                });
                null != e && (new Image().src = e)
            }
        }, [ef, eI, a, i, em]);
        var eb = (0, O.default)({
            analyticsLocation: {
                page: x.AnalyticsPages.USER_POPOUT,
                section: x.AnalyticsSections.PROFILE_POPOUT
            }
        });
        return u.createElement(j.default, {
            isPremium: ei,
            hasThemeColors: null !== (r = null == i ? void 0 : i.canEditThemes) && void 0 !== r && r,
            profileType: m,
            hasBanner: eI,
            hasProfileEffect: z
        }, u.createElement("div", {
            className: l()(K.banner, (0, F.getUserBannerStyles)({
                profileType: m,
                user: {
                    hasBanner: eI,
                    isPremium: ei,
                    hasProfileEffect: z
                }
            }), q({}, K.reducedMotion, !ef)),
            onMouseMove: function() {
                return el(!0)
            },
            onMouseLeave: function() {
                return el(!1)
            },
            style: {
                backgroundImage: eI ? "url(".concat(ey, ")") : void 0,
                backgroundColor: 2 !== Z ? d.default.unsafe_rawColors.PRIMARY_800.css : ep
            }
        }, eo ? null == et ? u.createElement(er, {
            darkenOnHover: z && b,
            profileType: m,
            profileLabel: W.default.Messages.EDIT_PROFILE,
            icon: "pencil",
            onClick: function() {
                ea({
                    action: "EDIT_PROFILE"
                }), null == s || s(), eb()
            }
        }) : u.createElement(_.Popout, {
            spacing: 6,
            position: "bottom",
            renderPopout: function(e) {
                var t = e.closePopout;
                return u.createElement(V.default, {
                    onClose: t,
                    onSelect: s,
                    guild: et
                })
            }
        }, function(e) {
            return u.createElement(er, J(Q({
                darkenOnHover: z && b,
                profileLabel: W.default.Messages.EDIT_PROFILE,
                icon: "pencil"
            }, e), {
                profileType: m
            }))
        }) : M && eI && m !== H.UserProfileTypes.SETTINGS ? u.createElement(en, {
            type: m,
            shown: void 0 === b ? es : b,
            onClick: function() {
                ea({
                    action: "PRESS_PREMIUM_UPSELL"
                }), null == s || s()
            }
        }) : null, eA ? m !== H.UserProfileTypes.MODAL ? null : u.createElement(_.Clickable, {
            onClick: s,
            "aria-label": W.default.Messages.BACK,
            className: K.pencilContainer
        }, u.createElement(_.Tooltip, {
            text: W.default.Messages.BACK
        }, function(e) {
            return u.createElement(C.default, J(Q({}, e), {
                className: K.closeIcon,
                color: "white"
            }))
        })) : null, !ef && (0, w.isAnimatedImageURL)(ey) && u.createElement(R.default, {
            className: K.gifTag
        })))
    }
}