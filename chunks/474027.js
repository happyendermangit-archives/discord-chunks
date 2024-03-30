function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("512722"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("286601"),
        l = n("436208"),
        c = n("291619"),
        f = n("797078"),
        d = n("491049"),
        _ = n("896154"),
        E = n("649455"),
        p = n("396586"),
        m = n("342942"),
        y = n("550168"),
        I = n("73013"),
        h = n("957808"),
        O = n("306912"),
        T = n("868447"),
        S = n("776982"),
        v = n("208454"),
        g = n("870331"),
        A = n("264437"),
        b = n("903716"),
        N = n("573594"),
        R = n("794173"),
        C = n("459997"),
        P = n("906885"),
        D = n("433553"),
        L = n("297949"),
        M = n("332641"),
        U = n("929939"),
        w = n("452098"),
        k = n("731616"),
        G = n("281767"),
        B = n("935776"),
        j = n("617538");

    function F(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function V(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function H(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                V(e, t, n[t])
            })
        }
        return e
    }

    function x(e, t) {
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
        }(e, t) || Y(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Y(e, t) {
        if (e) {
            if ("string" == typeof e) return F(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return F(e, t)
        }
    }

    function W(e) {
        e.stopPropagation()
    }

    function K(e) {
        var t, n = e.user,
            o = e.guildId,
            i = e.channelId,
            v = e.messageId,
            K = e.roleId,
            z = e.setNote,
            X = e.closePopout,
            q = e.setPopoutRef,
            Q = e.disableUserProfileLink,
            J = void 0 === Q ? __OVERLAY__ : Q,
            Z = e.analyticsParams,
            $ = void 0 === Z ? {} : Z,
            ee = e.newAnalyticsLocations;
        var et = (0, p.default)(((function(e) {
                if (Array.isArray(e)) return F(e)
            })(t = void 0 === ee ? [] : ee) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(t) || Y(t) || function() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()).concat([E.default.PROFILE_POPOUT])).analyticsLocations,
            en = r.useRef(null),
            er = (0, R.default)(n.id, o),
            eo = (0, l.default)(en),
            ei = (0, a.useStateFromStores)([b.default], function() {
                var e;
                return null === (e = b.default.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application
            }),
            ea = (0, a.useStateFromStores)([O.default], function() {
                return null != o ? O.default.getGuild(o) : null
            }),
            eu = (0, a.useStateFromStores)([h.default], function() {
                return null != o ? h.default.getMember(o, n.id) : null
            }),
            es = n.isNonUserBot(),
            el = (0, a.useStateFromStoresObject)([I.default, T.default], function() {
                var e = null != I.default.getAnyStreamForUser(n.id);
                return {
                    activity: T.default.findActivity(n.id, function(t) {
                        var n = t.type;
                        return e ? n === G.ActivityTypes.PLAYING : n !== G.ActivityTypes.CUSTOM_STATUS
                    }),
                    customStatusActivity: T.default.findActivity(n.id, function(e) {
                        return e.type === G.ActivityTypes.CUSTOM_STATUS
                    }),
                    status: es ? null : T.default.getStatus(n.id),
                    isMobile: T.default.isMobileOnline(n.id),
                    isApplicationStreaming: e
                }
            }),
            ec = el.activity,
            ef = el.customStatusActivity,
            ed = el.status,
            e_ = el.isMobile,
            eE = el.isApplicationStreaming,
            ep = x(r.useState(!1), 2),
            em = ep[0],
            ey = ep[1],
            eI = r.useMemo(function() {
                return null != o ? V({}, o, [n.id]) : {}
            }, [o, n.id]);
        (0, f.useSubscribeGuildMembers)(eI);
        var eh = (0, N.default)(n.id, o),
            eO = (0, w.useShouldShowUserPopoutCollectiblesUpsell)({
                popoutUser: n,
                source: M.UserPopoutUpsellSource.USER_POPOUT,
                guildId: o
            }),
            eT = x(r.useState(!1), 2),
            eS = eT[0],
            ev = eT[1];
        (0, c.default)(function() {
            return ev(!0)
        }, eO.shouldShow ? 250 : null);
        var eg = (0, y.useGetOrFetchApplication)(null == ec ? void 0 : ec.application_id);
        return r.useEffect(function() {
            null == q || q(null == en ? void 0 : en.current)
        }, [en, q]), r.useEffect(function() {
            if (!em)((null == ec ? void 0 : ec.application_id) == null || null != eg) && (null == o || (null == eu ? void 0 : eu.fullProfileLoadedTimestamp) != null) && (function() {
                null != ec && (e = ec.party, t = ec.assets, r = null != ec.application_id ? m.default.getApplication(ec.application_id) : null);
                var e, t, r, a, u = ed;
                ed === G.StatusTypes.ONLINE && (u = e_ ? G.AnalyticsUserStatusTypes.ONLINE_MOBILE : G.AnalyticsUserStatusTypes.ONLINE_DESKTOP);
                var s = null != eu ? {
                        has_nickname: !!(null == eu ? void 0 : eu.nick),
                        has_guild_member_avatar: !!(null == eu ? void 0 : eu.avatar),
                        has_guild_member_banner: !!(null == er ? void 0 : er.isUsingGuildMemberBanner()),
                        has_guild_member_bio: !!(null == er ? void 0 : er.isUsingGuildMemberBio())
                    } : {},
                    l = null != ei ? {
                        other_application_id: null == ei ? void 0 : ei.id,
                        other_application_name: n.toString()
                    } : {};
                g.default.track(G.AnalyticEvents.OPEN_POPOUT, H({
                    type: "Profile Popout",
                    guild_id: o,
                    channel_id: i,
                    other_user_id: n.id,
                    application_id: null != ec ? ec.application_id : void 0,
                    application_name: null != ec ? ec.name : void 0,
                    sku_id: null != r ? r.primarySkuId : null,
                    is_friend: S.default.isFriend(n.id),
                    has_images: !!(null !== (a = null == t ? void 0 : t.large_image) && void 0 !== a ? a : null == t ? void 0 : t.small_image),
                    party_max: null != e && null != e.size ? e.size[1] : void 0,
                    party_id: null != e ? e.id : void 0,
                    party_platform: null != e && (0, B.isSpotifyParty)(e.id) ? G.PlatformTypes.SPOTIFY : null,
                    game_platform: (0, d.default)(ec),
                    profile_user_status: u,
                    is_streaming: eE,
                    has_custom_status: null != ef,
                    has_avatar_decoration: null != n.avatarDecoration,
                    has_profile_effect: (null == er ? void 0 : er.profileEffectId) != null,
                    profile_has_nitro_customization: null != er && (null == er ? void 0 : er.hasPremiumCustomization()),
                    profile_has_theme_color_customized: null != er && er.hasThemeColors(),
                    profile_has_theme_animation: (null == er ? void 0 : er.popoutAnimationParticleType) != null
                }, s, l, $))
            }(), ey(!0))
        }, [eu, null == ec ? void 0 : ec.application_id, eg, em, o]), r.createElement(p.AnalyticsLocationProvider, {
            value: et
        }, r.createElement(A.UserProfileAnalyticsProvider, {
            layout: "POPOUT",
            userId: n.id,
            guildId: o,
            channelId: i,
            messageId: v,
            roleId: K,
            shouldTrackViewOnMount: null == eu || null != eu.fullProfileLoadedTimestamp
        }, r.createElement(s.default, {
            section: G.AnalyticsSections.PROFILE_POPOUT
        }, r.createElement(u.Dialog, {
            ref: en,
            "aria-label": n.username,
            onClick: W,
            onContextMenu: W,
            style: eO.shouldShow ? {
                marginTop: L.DEFAULT_COLLECTIBLES_UPSELL_HEIGHT
            } : void 0
        }, r.createElement(P.default, {
            user: n,
            guildId: o,
            profileType: k.UserProfileTypes.POPOUT,
            className: eO.shouldShow ? j.hasCollectiblesUpsell : void 0,
            showOutOfBoundaryComponents: eS
        }, r.createElement(U.default, {
            user: n,
            displayProfile: er,
            guildId: o,
            channelId: i,
            onClose: function() {
                return null == X ? void 0 : X()
            },
            isMobile: e_,
            isStreaming: (0, _.default)(ec),
            status: ed,
            disableUserProfileLink: J,
            isHovering: eo,
            upsell: eO.shouldShow ? r.createElement(L.default, H({
                user: n,
                upsellSource: M.UserPopoutUpsellSource.USER_POPOUT,
                displayProfile: er,
                onClose: X
            }, eO)) : void 0
        }), r.createElement(P.default.Inner, null, r.createElement(C.default, {
            onTooltipClose: X
        }), r.createElement(D.default, {
            activity: ec,
            customStatusActivity: ef,
            displayProfile: er,
            user: n,
            guild: ea,
            guildMember: eu,
            channelId: i,
            onClose: X,
            setNote: z,
            canDM: eh,
            analyticsParams: $
        })))))))
    }
    t.default = r.memo(function(e) {
        var t = e.userId,
            n = e.user,
            o = function(e, t) {
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
            }(e, ["userId", "user"]),
            u = (0, a.useStateFromStores)([v.default], function() {
                return v.default.getUser(t)
            }, [t]),
            s = null != n ? n : u;
        return i()(null != s, "Unexpected missing user"), r.createElement(K, H({
            user: s
        }, o))
    })
}