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
        f = n("906732"),
        S = n("812206"),
        A = n("835473"),
        h = n("199902"),
        m = n("271383"),
        N = n("430824"),
        O = n("158776"),
        p = n("699516"),
        R = n("594174"),
        C = n("626135"),
        g = n("785717"),
        L = n("621853"),
        D = n("505737"),
        v = n("318661"),
        M = n("484404"),
        y = n("747074"),
        P = n("192133"),
        U = n("240328"),
        b = n("436478"),
        G = n("131640"),
        w = n("664202"),
        k = n("228168"),
        B = n("981631"),
        F = n("616922"),
        V = n("617538");

    function x(e) {
        e.stopPropagation()
    }

    function H(e) {
        let {
            user: t,
            guildId: n,
            channelId: s,
            messageId: a,
            roleId: R,
            setNote: H,
            closePopout: Y,
            setPopoutRef: j,
            disableUserProfileLink: W = __OVERLAY__,
            analyticsParams: K = {},
            newAnalyticsLocations: z = []
        } = e, {
            analyticsLocations: X
        } = (0, f.default)([...z, T.default.PROFILE_POPOUT]), Q = r.useRef(null), q = (0, v.default)(t.id, n), J = (0, d.default)(Q), Z = (0, o.useStateFromStores)([L.default], () => {
            var e;
            return null === (e = L.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
        }), $ = (0, o.useStateFromStores)([N.default], () => null != n ? N.default.getGuild(n) : null), ee = (0, o.useStateFromStores)([m.default], () => null != n ? m.default.getMember(n, t.id) : null), et = t.isNonUserBot(), {
            activity: en,
            customStatusActivity: ei,
            status: er,
            isMobile: es,
            isApplicationStreaming: ea
        } = (0, o.useStateFromStoresObject)([h.default, O.default], () => {
            let e = null != h.default.getAnyStreamForUser(t.id);
            return {
                activity: O.default.findActivity(t.id, t => {
                    let {
                        type: n
                    } = t;
                    return e ? n === B.ActivityTypes.PLAYING : n !== B.ActivityTypes.CUSTOM_STATUS
                }),
                customStatusActivity: O.default.findActivity(t.id, e => {
                    let {
                        type: t
                    } = e;
                    return t === B.ActivityTypes.CUSTOM_STATUS
                }),
                status: et ? null : O.default.getStatus(t.id),
                isMobile: O.default.isMobileOnline(t.id),
                isApplicationStreaming: e
            }
        }), [eo, el] = r.useState(!1), eu = r.useMemo(() => null != n ? {
            [n]: [t.id]
        } : {}, [n, t.id]);
        (0, c.useSubscribeGuildMembers)(eu);
        let ed = (0, D.default)(t.id, n),
            e_ = (0, w.useShouldShowUserPopoutCollectiblesUpsell)({
                popoutUser: t,
                source: b.UserPopoutUpsellSource.USER_POPOUT,
                guildId: n
            }),
            [ec, eE] = r.useState(!1);
        (0, _.default)(() => eE(!0), e_.shouldShow ? 250 : null);
        let eI = (0, A.useGetOrFetchApplication)(null == en ? void 0 : en.application_id);
        return r.useEffect(() => {
            null == j || j(null == Q ? void 0 : Q.current)
        }, [Q, j]), r.useEffect(() => {
            if (!eo)((null == en ? void 0 : en.application_id) == null || null != eI) && (null == n || (null == ee ? void 0 : ee.fullProfileLoadedTimestamp) != null) && (function() {
                var e;
                let i, r, a;
                null != en && (i = en.party, r = en.assets, a = null != en.application_id ? S.default.getApplication(en.application_id) : null);
                let o = er;
                er === B.StatusTypes.ONLINE && (o = es ? B.AnalyticsUserStatusTypes.ONLINE_MOBILE : B.AnalyticsUserStatusTypes.ONLINE_DESKTOP);
                let l = null != ee ? {
                        has_nickname: !!(null == ee ? void 0 : ee.nick),
                        has_guild_member_avatar: !!(null == ee ? void 0 : ee.avatar),
                        has_guild_member_banner: !!(null == q ? void 0 : q.isUsingGuildMemberBanner()),
                        has_guild_member_bio: !!(null == q ? void 0 : q.isUsingGuildMemberBio())
                    } : {},
                    u = null != Z ? {
                        other_application_id: null == Z ? void 0 : Z.id,
                        other_application_name: t.toString()
                    } : {};
                C.default.track(B.AnalyticEvents.OPEN_POPOUT, {
                    type: "Profile Popout",
                    guild_id: n,
                    channel_id: s,
                    other_user_id: t.id,
                    application_id: null != en ? en.application_id : void 0,
                    application_name: null != en ? en.name : void 0,
                    sku_id: null != a ? a.primarySkuId : null,
                    is_friend: p.default.isFriend(t.id),
                    has_images: !!(null !== (e = null == r ? void 0 : r.large_image) && void 0 !== e ? e : null == r ? void 0 : r.small_image),
                    party_max: null != i && null != i.size ? i.size[1] : void 0,
                    party_id: null != i ? i.id : void 0,
                    party_platform: null != i && (0, F.isSpotifyParty)(i.id) ? B.PlatformTypes.SPOTIFY : null,
                    game_platform: (0, E.default)(en),
                    profile_user_status: o,
                    is_streaming: ea,
                    has_custom_status: null != ei,
                    has_avatar_decoration: null != t.avatarDecoration,
                    has_profile_effect: (null == q ? void 0 : q.profileEffectId) != null,
                    profile_has_nitro_customization: null != q && (null == q ? void 0 : q.hasPremiumCustomization()),
                    profile_has_theme_color_customized: null != q && q.hasThemeColors(),
                    profile_has_theme_animation: (null == q ? void 0 : q.popoutAnimationParticleType) != null,
                    ...l,
                    ...u,
                    ...K
                })
            }(), el(!0))
        }, [ee, null == en ? void 0 : en.application_id, eI, eo, n]), (0, i.jsx)(f.AnalyticsLocationProvider, {
            value: X,
            children: (0, i.jsx)(g.UserProfileAnalyticsProvider, {
                layout: "POPOUT",
                userId: t.id,
                guildId: n,
                channelId: s,
                messageId: a,
                roleId: R,
                shouldTrackViewOnMount: null == ee || null != ee.fullProfileLoadedTimestamp,
                children: (0, i.jsx)(u.default, {
                    section: B.AnalyticsSections.PROFILE_POPOUT,
                    children: (0, i.jsx)(l.Dialog, {
                        ref: Q,
                        "aria-label": t.username,
                        onClick: x,
                        onContextMenu: x,
                        style: e_.shouldShow ? {
                            marginTop: U.DEFAULT_COLLECTIBLES_UPSELL_HEIGHT
                        } : void 0,
                        children: (0, i.jsxs)(y.default, {
                            user: t,
                            guildId: n,
                            profileType: k.UserProfileTypes.POPOUT,
                            className: e_.shouldShow ? V.hasCollectiblesUpsell : void 0,
                            showOutOfBoundaryComponents: ec,
                            children: [(0, i.jsx)(G.default, {
                                user: t,
                                displayProfile: q,
                                guildId: n,
                                channelId: s,
                                onClose: () => null == Y ? void 0 : Y(),
                                isMobile: es,
                                isStreaming: (0, I.default)(en),
                                status: er,
                                disableUserProfileLink: W,
                                isHovering: J,
                                upsell: e_.shouldShow ? (0, i.jsx)(U.default, {
                                    user: t,
                                    upsellSource: b.UserPopoutUpsellSource.USER_POPOUT,
                                    displayProfile: q,
                                    onClose: Y,
                                    ...e_
                                }) : void 0
                            }), (0, i.jsxs)(y.default.Inner, {
                                children: [(0, i.jsx)(M.default, {
                                    onTooltipClose: Y
                                }), (0, i.jsx)(P.default, {
                                    activity: en,
                                    customStatusActivity: ei,
                                    displayProfile: q,
                                    user: t,
                                    guild: $,
                                    guildMember: ee,
                                    channelId: s,
                                    onClose: Y,
                                    setNote: H,
                                    canDM: ed,
                                    analyticsParams: K
                                })]
                            })]
                        })
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
        } = e, s = (0, o.useStateFromStores)([R.default], () => R.default.getUser(t), [t]), l = null != n ? n : s;
        return a()(null != l, "Unexpected missing user"), (0, i.jsx)(H, {
            user: l,
            ...r
        })
    })
}