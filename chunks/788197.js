function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("512722"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("410575"),
        d = n("727637"),
        _ = n("980591"),
        c = n("58540"),
        E = n("603113"),
        I = n("420660"),
        T = n("100527"),
        f = n("812206"),
        S = n("835473"),
        h = n("199902"),
        A = n("271383"),
        m = n("430824"),
        N = n("158776"),
        O = n("699516"),
        p = n("594174"),
        R = n("626135"),
        C = n("785717"),
        g = n("621853"),
        L = n("505737"),
        D = n("318661"),
        v = n("484404"),
        M = n("747074"),
        y = n("192133"),
        P = n("240328"),
        U = n("436478"),
        b = n("131640"),
        G = n("664202"),
        w = n("228168"),
        k = n("981631"),
        B = n("616922"),
        V = n("617538");

    function F(e) {
        e.stopPropagation()
    }

    function x(e) {
        let {
            user: t,
            guildId: n,
            channelId: s,
            messageId: a,
            roleId: p,
            setNote: x,
            closePopout: H,
            setPopoutRef: Y,
            disableUserProfileLink: j = __OVERLAY__,
            analyticsParams: W = {},
            newAnalyticsLocations: K = []
        } = e, z = r.useRef(null), X = (0, D.default)(t.id, n), Q = (0, d.default)(z), q = (0, o.useStateFromStores)([g.default], () => {
            var e;
            return null === (e = g.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
        }), J = (0, o.useStateFromStores)([m.default], () => null != n ? m.default.getGuild(n) : null), Z = (0, o.useStateFromStores)([A.default], () => null != n ? A.default.getMember(n, t.id) : null), $ = t.isNonUserBot(), {
            UserProfileAnalyticsProvider: ee
        } = (0, C.useUserProfileAnalyticsProvider)({
            layout: "POPOUT",
            newAnalyticsLocations: [...K, T.default.PROFILE_POPOUT],
            userId: t.id,
            guildId: n,
            channelId: s,
            messageId: a,
            roleId: p
        }, null == Z || null != Z.fullProfileLoadedTimestamp), {
            activity: et,
            customStatusActivity: en,
            status: ei,
            isMobile: er,
            isApplicationStreaming: es
        } = (0, o.useStateFromStoresObject)([h.default, N.default], () => {
            let e = null != h.default.getAnyStreamForUser(t.id);
            return {
                activity: N.default.findActivity(t.id, t => {
                    let {
                        type: n
                    } = t;
                    return e ? n === k.ActivityTypes.PLAYING : n !== k.ActivityTypes.CUSTOM_STATUS
                }),
                customStatusActivity: N.default.findActivity(t.id, e => {
                    let {
                        type: t
                    } = e;
                    return t === k.ActivityTypes.CUSTOM_STATUS
                }),
                status: $ ? null : N.default.getStatus(t.id),
                isMobile: N.default.isMobileOnline(t.id),
                isApplicationStreaming: e
            }
        }), [ea, eo] = r.useState(!1), el = r.useMemo(() => null != n ? {
            [n]: [t.id]
        } : {}, [n, t.id]);
        (0, c.useSubscribeGuildMembers)(el);
        let eu = (0, L.default)(t.id, n),
            ed = (0, G.useShouldShowUserPopoutCollectiblesUpsell)({
                popoutUser: t,
                source: U.UserPopoutUpsellSource.USER_POPOUT,
                guildId: n
            }),
            [e_, ec] = r.useState(!1);
        (0, _.default)(() => ec(!0), ed.shouldShow ? 250 : null);
        let eE = (0, S.useGetOrFetchApplication)(null == et ? void 0 : et.application_id);
        return r.useEffect(() => {
            null == Y || Y(null == z ? void 0 : z.current)
        }, [z, Y]), r.useEffect(() => {
            if (!ea)((null == et ? void 0 : et.application_id) == null || null != eE) && (null == n || (null == Z ? void 0 : Z.fullProfileLoadedTimestamp) != null) && (function() {
                var e;
                let i, r, a;
                null != et && (i = et.party, r = et.assets, a = null != et.application_id ? f.default.getApplication(et.application_id) : null);
                let o = ei;
                ei === k.StatusTypes.ONLINE && (o = er ? k.AnalyticsUserStatusTypes.ONLINE_MOBILE : k.AnalyticsUserStatusTypes.ONLINE_DESKTOP);
                let l = null != Z ? {
                        has_nickname: !!(null == Z ? void 0 : Z.nick),
                        has_guild_member_avatar: !!(null == Z ? void 0 : Z.avatar),
                        has_guild_member_banner: !!(null == X ? void 0 : X.isUsingGuildMemberBanner()),
                        has_guild_member_bio: !!(null == X ? void 0 : X.isUsingGuildMemberBio())
                    } : {},
                    u = null != q ? {
                        other_application_id: null == q ? void 0 : q.id,
                        other_application_name: t.toString()
                    } : {};
                R.default.track(k.AnalyticEvents.OPEN_POPOUT, {
                    type: "Profile Popout",
                    guild_id: n,
                    channel_id: s,
                    other_user_id: t.id,
                    application_id: null != et ? et.application_id : void 0,
                    application_name: null != et ? et.name : void 0,
                    sku_id: null != a ? a.primarySkuId : null,
                    is_friend: O.default.isFriend(t.id),
                    has_images: !!(null !== (e = null == r ? void 0 : r.large_image) && void 0 !== e ? e : null == r ? void 0 : r.small_image),
                    party_max: null != i && null != i.size ? i.size[1] : void 0,
                    party_id: null != i ? i.id : void 0,
                    party_platform: null != i && (0, B.isSpotifyParty)(i.id) ? k.PlatformTypes.SPOTIFY : null,
                    game_platform: (0, E.default)(et),
                    profile_user_status: o,
                    is_streaming: es,
                    has_custom_status: null != en,
                    has_avatar_decoration: null != t.avatarDecoration,
                    has_profile_effect: (null == X ? void 0 : X.profileEffectId) != null,
                    profile_has_nitro_customization: null != X && (null == X ? void 0 : X.hasPremiumCustomization()),
                    profile_has_theme_color_customized: null != X && X.hasThemeColors(),
                    profile_has_theme_animation: (null == X ? void 0 : X.popoutAnimationParticleType) != null,
                    ...l,
                    ...u,
                    ...W
                })
            }(), eo(!0))
        }, [Z, null == et ? void 0 : et.application_id, eE, ea, n]), (0, i.jsx)(ee, {
            children: (0, i.jsx)(u.default, {
                section: k.AnalyticsSections.PROFILE_POPOUT,
                children: (0, i.jsx)(l.Dialog, {
                    ref: z,
                    "aria-label": t.username,
                    onClick: F,
                    onContextMenu: F,
                    style: ed.shouldShow ? {
                        marginTop: P.DEFAULT_COLLECTIBLES_UPSELL_HEIGHT
                    } : void 0,
                    children: (0, i.jsxs)(M.default, {
                        user: t,
                        guildId: n,
                        profileType: w.UserProfileTypes.POPOUT,
                        className: ed.shouldShow ? V.hasCollectiblesUpsell : void 0,
                        showOutOfBoundaryComponents: e_,
                        children: [(0, i.jsx)(b.default, {
                            user: t,
                            displayProfile: X,
                            guildId: n,
                            channelId: s,
                            onClose: () => null == H ? void 0 : H(),
                            isMobile: er,
                            isStreaming: (0, I.default)(et),
                            status: ei,
                            disableUserProfileLink: j,
                            isHovering: Q,
                            upsell: ed.shouldShow ? (0, i.jsx)(P.default, {
                                user: t,
                                upsellSource: U.UserPopoutUpsellSource.USER_POPOUT,
                                displayProfile: X,
                                onClose: H,
                                ...ed
                            }) : void 0
                        }), (0, i.jsxs)(M.default.Inner, {
                            children: [(0, i.jsx)(v.default, {
                                onTooltipClose: H
                            }), (0, i.jsx)(y.default, {
                                activity: et,
                                customStatusActivity: en,
                                displayProfile: X,
                                user: t,
                                guild: J,
                                guildMember: Z,
                                channelId: s,
                                onClose: H,
                                setNote: x,
                                canDM: eu,
                                analyticsParams: W
                            })]
                        })]
                    })
                })
            })
        })
    }
    t.default = r.memo(function(e) {
        let {
            userId: t,
            user: n,
            ...r
        } = e, s = (0, o.useStateFromStores)([p.default], () => p.default.getUser(t), [t]), l = null != n ? n : s;
        return a()(null != l, "Unexpected missing user"), (0, i.jsx)(x, {
            user: l,
            ...r
        })
    })
}