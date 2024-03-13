function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return H
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
        x = n("685665"),
        E = n("299285"),
        y = n("442939"),
        g = n("373469"),
        S = n("26989"),
        C = n("305961"),
        I = n("824563"),
        T = n("27618"),
        _ = n("697218"),
        v = n("599110"),
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

    function B(e) {
        e.stopPropagation()
    }

    function G(e) {
        let {
            user: t,
            guildId: n,
            channelId: a,
            setNote: s,
            closePopout: _,
            setPopoutRef: G,
            disableUserProfileLink: H = __OVERLAY__,
            analyticsParams: V = {}
        } = e, K = l.useRef(null), W = (0, O.default)(t.id, n), Y = (0, d.default)(K), z = (0, r.useStateFromStores)([N.default], () => {
            var e;
            return null === (e = N.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
        }), {
            AnalyticsLocationProvider: Z
        } = (0, x.default)(h.default.PROFILE_POPOUT), J = (0, r.useStateFromStores)([C.default], () => null != n ? C.default.getGuild(n) : null), q = (0, r.useStateFromStores)([S.default], () => null != n ? S.default.getMember(n, t.id) : null), X = t.isNonUserBot(), {
            activity: Q,
            customStatusActivity: $,
            status: ee,
            isMobile: et,
            isApplicationStreaming: en
        } = (0, r.useStateFromStoresObject)([g.default, I.default], () => {
            let e = null != g.default.getAnyStreamForUser(t.id);
            return {
                activity: I.default.findActivity(t.id, t => {
                    let {
                        type: n
                    } = t;
                    return e ? n === D.ActivityTypes.PLAYING : n !== D.ActivityTypes.CUSTOM_STATUS
                }),
                customStatusActivity: I.default.findActivity(t.id, e => {
                    let {
                        type: t
                    } = e;
                    return t === D.ActivityTypes.CUSTOM_STATUS
                }),
                status: X ? null : I.default.getStatus(t.id),
                isMobile: I.default.isMobileOnline(t.id),
                isApplicationStreaming: e
            }
        }), [ei, el] = l.useState(!1), ea = l.useMemo(() => null != n ? {
            [n]: [t.id]
        } : {}, [n, t.id]);
        (0, f.useSubscribeGuildMembers)(ea);
        let es = (0, A.default)(t.id, n),
            er = (0, j.useShouldShowUserPopoutCollectiblesUpsell)({
                popoutUser: t,
                source: P.UserPopoutUpsellSource.USER_POPOUT,
                guildId: n
            }),
            [eo, eu] = l.useState(!1);
        (0, c.default)(() => eu(!0), er.shouldShow ? 250 : null);
        let ed = (0, y.useGetOrFetchApplication)(null == Q ? void 0 : Q.application_id);
        return l.useEffect(() => {
            null == G || G(null == K ? void 0 : K.current)
        }, [K, G]), l.useEffect(() => {
            if (!ei)((null == Q ? void 0 : Q.application_id) == null || null != ed) && (null == n || (null == q ? void 0 : q.fullProfileLoadedTimestamp) != null) && (function() {
                var e;
                let i, l, s;
                null != Q && (i = Q.party, l = Q.assets, s = null != Q.application_id ? E.default.getApplication(Q.application_id) : null);
                let r = ee;
                ee === D.StatusTypes.ONLINE && (r = et ? D.AnalyticsUserStatusTypes.ONLINE_MOBILE : D.AnalyticsUserStatusTypes.ONLINE_DESKTOP);
                let o = null != q ? {
                        has_nickname: !!(null == q ? void 0 : q.nick),
                        has_guild_member_avatar: !!(null == q ? void 0 : q.avatar),
                        has_guild_member_banner: !!(null == W ? void 0 : W.isUsingGuildMemberBanner()),
                        has_guild_member_bio: !!(null == W ? void 0 : W.isUsingGuildMemberBio())
                    } : {},
                    u = null != z ? {
                        other_application_id: null == z ? void 0 : z.id,
                        other_application_name: t.toString()
                    } : {};
                v.default.track(D.AnalyticEvents.OPEN_POPOUT, {
                    type: "Profile Popout",
                    guild_id: n,
                    channel_id: a,
                    other_user_id: t.id,
                    application_id: null != Q ? Q.application_id : void 0,
                    application_name: null != Q ? Q.name : void 0,
                    sku_id: null != s ? s.primarySkuId : null,
                    is_friend: T.default.isFriend(t.id),
                    has_images: !!(null !== (e = null == l ? void 0 : l.large_image) && void 0 !== e ? e : null == l ? void 0 : l.small_image),
                    party_max: null != i && null != i.size ? i.size[1] : void 0,
                    party_id: null != i ? i.id : void 0,
                    party_platform: null != i && (0, w.isSpotifyParty)(i.id) ? D.PlatformTypes.SPOTIFY : null,
                    game_platform: (0, p.default)(Q),
                    profile_user_status: r,
                    is_streaming: en,
                    has_custom_status: null != $,
                    has_avatar_decoration: null != t.avatarDecoration,
                    has_profile_effect: (null == W ? void 0 : W.profileEffectId) != null,
                    profile_has_nitro_customization: null != W && (null == W ? void 0 : W.hasPremiumCustomization()),
                    profile_has_theme_color_customized: null != W && W.hasThemeColors(),
                    profile_has_theme_animation: (null == W ? void 0 : W.popoutAnimationParticleType) != null,
                    ...o,
                    ...u,
                    ...V
                })
            }(), el(!0))
        }, [q, null == Q ? void 0 : Q.application_id, ed, ei, n]), (0, i.jsx)(Z, {
            children: (0, i.jsx)(u.default, {
                section: D.AnalyticsSections.PROFILE_POPOUT,
                children: (0, i.jsx)(o.Dialog, {
                    ref: K,
                    "aria-label": t.username,
                    onClick: B,
                    onContextMenu: B,
                    style: er.shouldShow ? {
                        marginTop: L.DEFAULT_COLLECTIBLES_UPSELL_HEIGHT
                    } : void 0,
                    children: (0, i.jsxs)(M.default, {
                        user: t,
                        guildId: n,
                        profileType: U.UserProfileTypes.POPOUT,
                        className: er.shouldShow ? F.hasCollectiblesUpsell : void 0,
                        showOutOfBoundaryComponents: eo,
                        children: [(0, i.jsx)(b.default, {
                            user: t,
                            displayProfile: W,
                            guildId: n,
                            channelId: a,
                            onClose: () => null == _ ? void 0 : _(),
                            isMobile: et,
                            isStreaming: (0, m.default)(Q),
                            status: ee,
                            disableUserProfileLink: H,
                            isHovering: Y,
                            upsell: er.shouldShow ? (0, i.jsx)(L.default, {
                                user: t,
                                upsellSource: P.UserPopoutUpsellSource.USER_POPOUT,
                                displayProfile: W,
                                onClose: _,
                                ...er
                            }) : void 0
                        }), (0, i.jsxs)(M.default.Inner, {
                            children: [(0, i.jsx)(R.default, {
                                onTooltipClose: _
                            }), (0, i.jsx)(k.default, {
                                activity: Q,
                                customStatusActivity: $,
                                displayProfile: W,
                                user: t,
                                guild: J,
                                guildMember: q,
                                channelId: a,
                                onClose: _,
                                setNote: s,
                                canDM: es,
                                analyticsParams: V
                            })]
                        })]
                    })
                })
            })
        })
    }
    var H = l.memo(function(e) {
        let {
            userId: t,
            user: n,
            ...l
        } = e, a = (0, r.useStateFromStores)([_.default], () => _.default.getUser(t), [t]), o = null != n ? n : a;
        return s(null != o, "Unexpected missing user"), (0, i.jsx)(G, {
            user: o,
            ...l
        })
    })
}