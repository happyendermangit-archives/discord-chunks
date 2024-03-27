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
        m = n("575365"),
        p = n("502651"),
        h = n("812204"),
        x = n("299285"),
        E = n("442939"),
        y = n("373469"),
        g = n("26989"),
        S = n("305961"),
        C = n("824563"),
        T = n("27618"),
        _ = n("697218"),
        I = n("599110"),
        v = n("756507"),
        A = n("713135"),
        N = n("561845"),
        R = n("217513"),
        O = n("641055"),
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
            roleId: _,
            setNote: H,
            closePopout: B,
            setPopoutRef: V,
            disableUserProfileLink: K = __OVERLAY__,
            analyticsParams: W = {},
            newAnalyticsLocations: Y = []
        } = e, z = l.useRef(null), Q = (0, R.default)(t.id, n), Z = (0, d.default)(z), q = (0, r.useStateFromStores)([A.default], () => {
            var e;
            return null === (e = A.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
        }), J = (0, r.useStateFromStores)([S.default], () => null != n ? S.default.getGuild(n) : null), X = (0, r.useStateFromStores)([g.default], () => null != n ? g.default.getMember(n, t.id) : null), $ = t.isNonUserBot(), {
            UserProfileAnalyticsProvider: ee
        } = (0, v.useUserProfileAnalyticsProvider)({
            layout: "POPOUT",
            newAnalyticsLocations: [...Y, h.default.PROFILE_POPOUT],
            userId: t.id,
            guildId: n,
            channelId: a,
            messageId: s,
            roleId: _
        }, null == X || null != X.fullProfileLoadedTimestamp), {
            activity: et,
            customStatusActivity: en,
            status: ei,
            isMobile: el,
            isApplicationStreaming: ea
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
                status: $ ? null : C.default.getStatus(t.id),
                isMobile: C.default.isMobileOnline(t.id),
                isApplicationStreaming: e
            }
        }), [es, er] = l.useState(!1), eo = l.useMemo(() => null != n ? {
            [n]: [t.id]
        } : {}, [n, t.id]);
        (0, f.useSubscribeGuildMembers)(eo);
        let eu = (0, N.default)(t.id, n),
            ed = (0, j.useShouldShowUserPopoutCollectiblesUpsell)({
                popoutUser: t,
                source: P.UserPopoutUpsellSource.USER_POPOUT,
                guildId: n
            }),
            [ec, ef] = l.useState(!1);
        (0, c.default)(() => ef(!0), ed.shouldShow ? 250 : null);
        let em = (0, E.useGetOrFetchApplication)(null == et ? void 0 : et.application_id);
        return l.useEffect(() => {
            null == V || V(null == z ? void 0 : z.current)
        }, [z, V]), l.useEffect(() => {
            if (!es)((null == et ? void 0 : et.application_id) == null || null != em) && (null == n || (null == X ? void 0 : X.fullProfileLoadedTimestamp) != null) && (function() {
                var e;
                let i, l, s;
                null != et && (i = et.party, l = et.assets, s = null != et.application_id ? x.default.getApplication(et.application_id) : null);
                let r = ei;
                ei === D.StatusTypes.ONLINE && (r = el ? D.AnalyticsUserStatusTypes.ONLINE_MOBILE : D.AnalyticsUserStatusTypes.ONLINE_DESKTOP);
                let o = null != X ? {
                        has_nickname: !!(null == X ? void 0 : X.nick),
                        has_guild_member_avatar: !!(null == X ? void 0 : X.avatar),
                        has_guild_member_banner: !!(null == Q ? void 0 : Q.isUsingGuildMemberBanner()),
                        has_guild_member_bio: !!(null == Q ? void 0 : Q.isUsingGuildMemberBio())
                    } : {},
                    u = null != q ? {
                        other_application_id: null == q ? void 0 : q.id,
                        other_application_name: t.toString()
                    } : {};
                I.default.track(D.AnalyticEvents.OPEN_POPOUT, {
                    type: "Profile Popout",
                    guild_id: n,
                    channel_id: a,
                    other_user_id: t.id,
                    application_id: null != et ? et.application_id : void 0,
                    application_name: null != et ? et.name : void 0,
                    sku_id: null != s ? s.primarySkuId : null,
                    is_friend: T.default.isFriend(t.id),
                    has_images: !!(null !== (e = null == l ? void 0 : l.large_image) && void 0 !== e ? e : null == l ? void 0 : l.small_image),
                    party_max: null != i && null != i.size ? i.size[1] : void 0,
                    party_id: null != i ? i.id : void 0,
                    party_platform: null != i && (0, w.isSpotifyParty)(i.id) ? D.PlatformTypes.SPOTIFY : null,
                    game_platform: (0, m.default)(et),
                    profile_user_status: r,
                    is_streaming: ea,
                    has_custom_status: null != en,
                    has_avatar_decoration: null != t.avatarDecoration,
                    has_profile_effect: (null == Q ? void 0 : Q.profileEffectId) != null,
                    profile_has_nitro_customization: null != Q && (null == Q ? void 0 : Q.hasPremiumCustomization()),
                    profile_has_theme_color_customized: null != Q && Q.hasThemeColors(),
                    profile_has_theme_animation: (null == Q ? void 0 : Q.popoutAnimationParticleType) != null,
                    ...o,
                    ...u,
                    ...W
                })
            }(), er(!0))
        }, [X, null == et ? void 0 : et.application_id, em, es, n]), (0, i.jsx)(ee, {
            children: (0, i.jsx)(u.default, {
                section: D.AnalyticsSections.PROFILE_POPOUT,
                children: (0, i.jsx)(o.Dialog, {
                    ref: z,
                    "aria-label": t.username,
                    onClick: G,
                    onContextMenu: G,
                    style: ed.shouldShow ? {
                        marginTop: L.DEFAULT_COLLECTIBLES_UPSELL_HEIGHT
                    } : void 0,
                    children: (0, i.jsxs)(M.default, {
                        user: t,
                        guildId: n,
                        profileType: U.UserProfileTypes.POPOUT,
                        className: ed.shouldShow ? F.hasCollectiblesUpsell : void 0,
                        showOutOfBoundaryComponents: ec,
                        children: [(0, i.jsx)(b.default, {
                            user: t,
                            displayProfile: Q,
                            guildId: n,
                            channelId: a,
                            onClose: () => null == B ? void 0 : B(),
                            isMobile: el,
                            isStreaming: (0, p.default)(et),
                            status: ei,
                            disableUserProfileLink: K,
                            isHovering: Z,
                            upsell: ed.shouldShow ? (0, i.jsx)(L.default, {
                                user: t,
                                upsellSource: P.UserPopoutUpsellSource.USER_POPOUT,
                                displayProfile: Q,
                                onClose: B,
                                ...ed
                            }) : void 0
                        }), (0, i.jsxs)(M.default.Inner, {
                            children: [(0, i.jsx)(O.default, {
                                onTooltipClose: B
                            }), (0, i.jsx)(k.default, {
                                activity: et,
                                customStatusActivity: en,
                                displayProfile: Q,
                                user: t,
                                guild: J,
                                guildMember: X,
                                channelId: a,
                                onClose: B,
                                setNote: H,
                                canDM: eu,
                                analyticsParams: W
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
        } = e, a = (0, r.useStateFromStores)([_.default], () => _.default.getUser(t), [t]), o = null != n ? n : a;
        return s(null != o, "Unexpected missing user"), (0, i.jsx)(H, {
            user: o,
            ...l
        })
    })
}