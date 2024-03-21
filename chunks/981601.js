function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return B
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("627445"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("901582"),
        d = n("252744"),
        c = n("340066"),
        f = n("750560"),
        p = n("575365"),
        m = n("502651"),
        h = n("812204"),
        x = n("299285"),
        E = n("442939"),
        y = n("373469"),
        g = n("26989"),
        S = n("305961"),
        C = n("824563"),
        _ = n("27618"),
        T = n("697218"),
        I = n("599110"),
        v = n("756507"),
        N = n("713135"),
        A = n("561845"),
        O = n("217513"),
        R = n("641055"),
        M = n("430312"),
        k = n("763866"),
        L = n("789321"),
        P = n("627601"),
        b = n("935409"),
        j = n("849674"),
        U = n("590456"),
        D = n("49111"),
        w = n("450484"),
        F = n("154477");

    function G(e) {
        e.stopPropagation()
    }

    function H(e) {
        let {
            user: t,
            guildId: n,
            channelId: a,
            messageId: s,
            setNote: T,
            closePopout: H,
            setPopoutRef: B,
            disableUserProfileLink: V = __OVERLAY__,
            analyticsParams: K = {},
            newAnalyticsLocations: W = []
        } = e, Y = l.useRef(null), z = (0, O.default)(t.id, n), Z = (0, d.default)(Y), J = (0, r.useStateFromStores)([N.default], () => {
            var e;
            return null === (e = N.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
        }), q = (0, r.useStateFromStores)([S.default], () => null != n ? S.default.getGuild(n) : null), X = (0, r.useStateFromStores)([g.default], () => null != n ? g.default.getMember(n, t.id) : null), Q = t.isNonUserBot(), {
            UserProfileAnalyticsProvider: $
        } = (0, v.useUserProfileAnalyticsProvider)({
            layout: "POPOUT",
            newAnalyticsLocations: [...W, h.default.PROFILE_POPOUT],
            userId: t.id,
            guildId: n,
            channelId: a,
            messageId: s
        }, null == X || null != X.fullProfileLoadedTimestamp), {
            activity: ee,
            customStatusActivity: et,
            status: en,
            isMobile: ei,
            isApplicationStreaming: el
        } = (0, r.useStateFromStoresObject)([y.default, C.default], () => {
            let e = null != y.default.getAnyStreamForUser(t.id);
            return {
                activity: C.default.findActivity(t.id, t => {
                    let {
                        type: n
                    } = t;
                    return e ? n === D.ActivityTypes.PLAYING : n !== D.ActivityTypes.CUSTOM_STATUS
                }),
                customStatusActivity: C.default.findActivity(t.id, e => {
                    let {
                        type: t
                    } = e;
                    return t === D.ActivityTypes.CUSTOM_STATUS
                }),
                status: Q ? null : C.default.getStatus(t.id),
                isMobile: C.default.isMobileOnline(t.id),
                isApplicationStreaming: e
            }
        }), [ea, es] = l.useState(!1), er = l.useMemo(() => null != n ? {
            [n]: [t.id]
        } : {}, [n, t.id]);
        (0, f.useSubscribeGuildMembers)(er);
        let eo = (0, A.default)(t.id, n),
            eu = (0, j.useShouldShowUserPopoutCollectiblesUpsell)({
                popoutUser: t,
                source: P.UserPopoutUpsellSource.USER_POPOUT,
                guildId: n
            }),
            [ed, ec] = l.useState(!1);
        (0, c.default)(() => ec(!0), eu.shouldShow ? 250 : null);
        let ef = (0, E.useGetOrFetchApplication)(null == ee ? void 0 : ee.application_id);
        return l.useEffect(() => {
            null == B || B(null == Y ? void 0 : Y.current)
        }, [Y, B]), l.useEffect(() => {
            if (!ea)((null == ee ? void 0 : ee.application_id) == null || null != ef) && (null == n || (null == X ? void 0 : X.fullProfileLoadedTimestamp) != null) && (function() {
                var e;
                let i, l, s;
                null != ee && (i = ee.party, l = ee.assets, s = null != ee.application_id ? x.default.getApplication(ee.application_id) : null);
                let r = en;
                en === D.StatusTypes.ONLINE && (r = ei ? D.AnalyticsUserStatusTypes.ONLINE_MOBILE : D.AnalyticsUserStatusTypes.ONLINE_DESKTOP);
                let o = null != X ? {
                        has_nickname: !!(null == X ? void 0 : X.nick),
                        has_guild_member_avatar: !!(null == X ? void 0 : X.avatar),
                        has_guild_member_banner: !!(null == z ? void 0 : z.isUsingGuildMemberBanner()),
                        has_guild_member_bio: !!(null == z ? void 0 : z.isUsingGuildMemberBio())
                    } : {},
                    u = null != J ? {
                        other_application_id: null == J ? void 0 : J.id,
                        other_application_name: t.toString()
                    } : {};
                I.default.track(D.AnalyticEvents.OPEN_POPOUT, {
                    type: "Profile Popout",
                    guild_id: n,
                    channel_id: a,
                    other_user_id: t.id,
                    application_id: null != ee ? ee.application_id : void 0,
                    application_name: null != ee ? ee.name : void 0,
                    sku_id: null != s ? s.primarySkuId : null,
                    is_friend: _.default.isFriend(t.id),
                    has_images: !!(null !== (e = null == l ? void 0 : l.large_image) && void 0 !== e ? e : null == l ? void 0 : l.small_image),
                    party_max: null != i && null != i.size ? i.size[1] : void 0,
                    party_id: null != i ? i.id : void 0,
                    party_platform: null != i && (0, w.isSpotifyParty)(i.id) ? D.PlatformTypes.SPOTIFY : null,
                    game_platform: (0, p.default)(ee),
                    profile_user_status: r,
                    is_streaming: el,
                    has_custom_status: null != et,
                    has_avatar_decoration: null != t.avatarDecoration,
                    has_profile_effect: (null == z ? void 0 : z.profileEffectId) != null,
                    profile_has_nitro_customization: null != z && (null == z ? void 0 : z.hasPremiumCustomization()),
                    profile_has_theme_color_customized: null != z && z.hasThemeColors(),
                    profile_has_theme_animation: (null == z ? void 0 : z.popoutAnimationParticleType) != null,
                    ...o,
                    ...u,
                    ...K
                })
            }(), es(!0))
        }, [X, null == ee ? void 0 : ee.application_id, ef, ea, n]), (0, i.jsx)($, {
            children: (0, i.jsx)(u.default, {
                section: D.AnalyticsSections.PROFILE_POPOUT,
                children: (0, i.jsx)(o.Dialog, {
                    ref: Y,
                    "aria-label": t.username,
                    onClick: G,
                    onContextMenu: G,
                    style: eu.shouldShow ? {
                        marginTop: L.DEFAULT_COLLECTIBLES_UPSELL_HEIGHT
                    } : void 0,
                    children: (0, i.jsxs)(M.default, {
                        user: t,
                        guildId: n,
                        profileType: U.UserProfileTypes.POPOUT,
                        className: eu.shouldShow ? F.hasCollectiblesUpsell : void 0,
                        showOutOfBoundaryComponents: ed,
                        children: [(0, i.jsx)(b.default, {
                            user: t,
                            displayProfile: z,
                            guildId: n,
                            channelId: a,
                            onClose: () => null == H ? void 0 : H(),
                            isMobile: ei,
                            isStreaming: (0, m.default)(ee),
                            status: en,
                            disableUserProfileLink: V,
                            isHovering: Z,
                            upsell: eu.shouldShow ? (0, i.jsx)(L.default, {
                                user: t,
                                upsellSource: P.UserPopoutUpsellSource.USER_POPOUT,
                                displayProfile: z,
                                onClose: H,
                                ...eu
                            }) : void 0
                        }), (0, i.jsxs)(M.default.Inner, {
                            children: [(0, i.jsx)(R.default, {
                                onTooltipClose: H
                            }), (0, i.jsx)(k.default, {
                                activity: ee,
                                customStatusActivity: et,
                                displayProfile: z,
                                user: t,
                                guild: q,
                                guildMember: X,
                                channelId: a,
                                onClose: H,
                                setNote: T,
                                canDM: eo,
                                analyticsParams: K
                            })]
                        })]
                    })
                })
            })
        })
    }
    var B = l.memo(function(e) {
        let {
            userId: t,
            user: n,
            ...l
        } = e, a = (0, r.useStateFromStores)([T.default], () => T.default.getUser(t), [t]), o = null != n ? n : a;
        return s(null != o, "Unexpected missing user"), (0, i.jsx)(H, {
            user: o,
            ...l
        })
    })
}