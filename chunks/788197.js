function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return V
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("481060"),
        o = n("410575"),
        l = n("727637"),
        u = n("980591"),
        d = n("58540"),
        _ = n("603113"),
        c = n("420660"),
        E = n("100527"),
        I = n("906732"),
        T = n("812206"),
        f = n("835473"),
        S = n("199902"),
        h = n("271383"),
        A = n("430824"),
        m = n("158776"),
        N = n("699516"),
        p = n("626135"),
        O = n("785717"),
        R = n("621853"),
        C = n("505737"),
        g = n("318661"),
        L = n("484404"),
        D = n("502762"),
        v = n("192133"),
        M = n("240328"),
        y = n("436478"),
        P = n("131640"),
        U = n("664202"),
        b = n("228168"),
        G = n("981631"),
        w = n("616922"),
        B = n("245876");

    function k(e) {
        e.stopPropagation()
    }

    function V(e) {
        let {
            user: t,
            guildId: n,
            channelId: V,
            messageId: x,
            roleId: F,
            setNote: H,
            closePopout: Y,
            setPopoutRef: j,
            disableUserProfileLink: W = __OVERLAY__,
            analyticsParams: K = {},
            newAnalyticsLocations: z = []
        } = e, {
            analyticsLocations: X
        } = (0, I.default)([...z, E.default.PROFILE_POPOUT]), Q = r.useRef(null), q = (0, g.default)(t.id, n), Z = (0, l.default)(Q), J = (0, s.useStateFromStores)([R.default], () => {
            var e;
            return null === (e = R.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
        }), $ = (0, s.useStateFromStores)([A.default], () => null != n ? A.default.getGuild(n) : null), ee = (0, s.useStateFromStores)([h.default], () => null != n ? h.default.getMember(n, t.id) : null), et = t.isNonUserBot(), {
            activity: en,
            customStatusActivity: ei,
            status: er,
            isMobile: es,
            isApplicationStreaming: ea
        } = (0, s.useStateFromStoresObject)([S.default, m.default], () => {
            let e = null != S.default.getAnyStreamForUser(t.id);
            return {
                activity: m.default.findActivity(t.id, t => {
                    let {
                        type: n
                    } = t;
                    return e ? n === G.ActivityTypes.PLAYING : n !== G.ActivityTypes.CUSTOM_STATUS
                }),
                customStatusActivity: m.default.findActivity(t.id, e => {
                    let {
                        type: t
                    } = e;
                    return t === G.ActivityTypes.CUSTOM_STATUS
                }),
                status: et ? null : m.default.getStatus(t.id),
                isMobile: m.default.isMobileOnline(t.id),
                isApplicationStreaming: e
            }
        }), [eo, el] = r.useState(!1), eu = r.useMemo(() => null != n ? {
            [n]: [t.id]
        } : {}, [n, t.id]);
        (0, d.useSubscribeGuildMembers)(eu);
        let ed = (0, C.default)(t.id, n),
            e_ = (0, U.useShouldShowUserPopoutCollectiblesUpsell)({
                popoutUser: t,
                source: y.UserPopoutUpsellSource.USER_POPOUT,
                guildId: n
            }),
            [ec, eE] = r.useState(!1);
        (0, u.default)(() => eE(!0), e_.shouldShow ? 250 : null);
        let eI = (0, f.useGetOrFetchApplication)(null == en ? void 0 : en.application_id);
        return r.useEffect(() => {
            null == j || j(null == Q ? void 0 : Q.current)
        }, [Q, j]), r.useEffect(() => {
            if (!eo)((null == en ? void 0 : en.application_id) == null || null != eI) && (null == n || (null == ee ? void 0 : ee.fullProfileLoadedTimestamp) != null) && (function() {
                var e;
                let i, r, s;
                null != en && (i = en.party, r = en.assets, s = null != en.application_id ? T.default.getApplication(en.application_id) : null);
                let a = er;
                er === G.StatusTypes.ONLINE && (a = es ? G.AnalyticsUserStatusTypes.ONLINE_MOBILE : G.AnalyticsUserStatusTypes.ONLINE_DESKTOP);
                let o = null != ee ? {
                        has_nickname: !!(null == ee ? void 0 : ee.nick),
                        has_guild_member_avatar: !!(null == ee ? void 0 : ee.avatar),
                        has_guild_member_banner: !!(null == q ? void 0 : q.isUsingGuildMemberBanner()),
                        has_guild_member_bio: !!(null == q ? void 0 : q.isUsingGuildMemberBio())
                    } : {},
                    l = null != J ? {
                        other_application_id: null == J ? void 0 : J.id,
                        other_application_name: t.toString()
                    } : {};
                p.default.track(G.AnalyticEvents.OPEN_POPOUT, {
                    type: "Profile Popout",
                    guild_id: n,
                    channel_id: V,
                    other_user_id: t.id,
                    application_id: null != en ? en.application_id : void 0,
                    application_name: null != en ? en.name : void 0,
                    sku_id: null != s ? s.primarySkuId : null,
                    is_friend: N.default.isFriend(t.id),
                    has_images: !!(null !== (e = null == r ? void 0 : r.large_image) && void 0 !== e ? e : null == r ? void 0 : r.small_image),
                    party_max: null != i && null != i.size ? i.size[1] : void 0,
                    party_id: null != i ? i.id : void 0,
                    party_platform: null != i && (0, w.isSpotifyParty)(i.id) ? G.PlatformTypes.SPOTIFY : null,
                    game_platform: (0, _.default)(en),
                    profile_user_status: a,
                    is_streaming: ea,
                    has_custom_status: null != ei,
                    has_avatar_decoration: null != t.avatarDecoration,
                    has_profile_effect: (null == q ? void 0 : q.profileEffectId) != null,
                    profile_has_nitro_customization: null != q && (null == q ? void 0 : q.hasPremiumCustomization()),
                    profile_has_theme_color_customized: null != q && q.hasThemeColors(),
                    profile_has_theme_animation: (null == q ? void 0 : q.popoutAnimationParticleType) != null,
                    ...o,
                    ...l,
                    ...K
                })
            }(), el(!0))
        }, [ee, null == en ? void 0 : en.application_id, eI, eo, n]), (0, i.jsx)(I.AnalyticsLocationProvider, {
            value: X,
            children: (0, i.jsx)(O.UserProfileAnalyticsProvider, {
                layout: "POPOUT",
                userId: t.id,
                guildId: n,
                channelId: V,
                messageId: x,
                roleId: F,
                shouldTrackViewOnMount: null == ee || null != ee.fullProfileLoadedTimestamp,
                children: (0, i.jsx)(o.default, {
                    section: G.AnalyticsSections.PROFILE_POPOUT,
                    children: (0, i.jsx)(a.Dialog, {
                        ref: Q,
                        "aria-label": t.username,
                        onClick: k,
                        onContextMenu: k,
                        style: e_.shouldShow ? {
                            marginTop: M.DEFAULT_COLLECTIBLES_UPSELL_HEIGHT
                        } : void 0,
                        children: (0, i.jsxs)(D.default, {
                            user: t,
                            displayProfile: q,
                            profileType: b.UserProfileTypes.POPOUT,
                            className: e_.shouldShow ? B.hasCollectiblesUpsell : void 0,
                            showOutOfBoundaryComponents: ec,
                            children: [(0, i.jsx)(P.default, {
                                user: t,
                                displayProfile: q,
                                guildId: n,
                                channelId: V,
                                onClose: () => null == Y ? void 0 : Y(),
                                isMobile: es,
                                isStreaming: (0, c.default)(en),
                                status: er,
                                disableUserProfileLink: W,
                                isHovering: Z,
                                upsell: e_.shouldShow ? (0, i.jsx)(M.default, {
                                    user: t,
                                    upsellSource: y.UserPopoutUpsellSource.USER_POPOUT,
                                    displayProfile: q,
                                    onClose: Y,
                                    ...e_
                                }) : void 0
                            }), (0, i.jsxs)(D.default.Overlay, {
                                children: [(0, i.jsx)(L.default, {
                                    onTooltipClose: Y
                                }), (0, i.jsx)(v.default, {
                                    activity: en,
                                    customStatusActivity: ei,
                                    displayProfile: q,
                                    user: t,
                                    guild: $,
                                    guildMember: ee,
                                    channelId: V,
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
}