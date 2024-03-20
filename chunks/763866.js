function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return B
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("812204"),
        d = n("755815"),
        c = n("373469"),
        f = n("271938"),
        p = n("42203"),
        m = n("102985"),
        h = n("387111"),
        x = n("158998"),
        E = n("337487"),
        y = n("713135"),
        g = n("765698"),
        S = n("906889"),
        C = n("840211"),
        _ = n("779479"),
        T = n("10532"),
        I = n("648149"),
        v = n("915712"),
        N = n("261523"),
        A = n("369869"),
        O = n("545590"),
        R = n("316095"),
        M = n("802279"),
        k = n("577172"),
        L = n("465215"),
        P = n("301998"),
        b = n("379657"),
        j = n("853780"),
        U = n("574191"),
        D = n("491250"),
        w = n("453649"),
        F = n("49111"),
        G = n("838133"),
        H = n("787678");

    function B(e) {
        var t, n, a;
        let {
            activity: B,
            customStatusActivity: V,
            user: K,
            displayProfile: W,
            guild: Y,
            guildMember: z,
            channelId: J,
            onClose: Z,
            setNote: q = !1,
            canDM: X,
            hideNote: Q = !1,
            showCopiableUsername: $ = !1,
            analyticsParams: ee
        } = e, et = (0, r.useStateFromStores)([m.default], () => m.default.hidePersonalInformation), en = (0, r.useStateFromStores)([y.default], () => {
            var e;
            return null === (e = y.default.getUserProfile(K.id)) || void 0 === e ? void 0 : e.application
        }), ei = (0, r.useStateFromStores)([c.default], () => null != c.default.getAnyStreamForUser(K.id)), el = (0, w.useGetVoiceChannelInfoForVoiceActivitySection)(K.id, null == Y ? void 0 : Y.id), ea = (null == B ? void 0 : B.type) === F.ActivityTypes.HANG_STATUS, es = !ei && null != el && !ea, {
            showVoiceActivityInProfile: er
        } = g.VoiceActivityProfileExperiment.useExperiment({
            location: "user popout"
        }, {
            autoTrackExposure: es
        }), eo = (0, r.useStateFromStores)([p.default], () => p.default.getChannel(J)), {
            profileTheme: eu
        } = (0, S.default)(K, W), ed = l.useRef(null), [ec, ef] = l.useState(!0), ep = l.useCallback(() => {
            let {
                current: e
            } = ed;
            null != e && ef(0 === e.getScrollerState().scrollTop)
        }, []);
        l.useLayoutEffect(() => {
            var e;
            let {
                current: t
            } = ed;
            null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
                top: 0
            }))
        }, []);
        let em = (0, r.useStateFromStores)([f.default], () => f.default.getId()),
            eh = K.id === em,
            ex = K.bot || eh,
            {
                enabled: eE
            } = (0, E.useProfileMutualsExperiment)({
                autoTrackExposure: !0,
                location: u.default.PROFILE_POPOUT,
                disable: ex
            }),
            ey = (0, d.useIsUserRecentGamesFetchEnabled)(K.id);
        if (K.isSystemUser()) return null;
        if (K.isNonUserBot()) return (0, i.jsx)(D.default, {
            user: K,
            nickname: null,
            pronouns: null,
            className: G.usernameSection,
            lastSection: !0
        });
        let eg = null !== (t = h.default.getNickname(null == Y ? void 0 : Y.id, J, K)) && void 0 !== t ? t : x.default.getName(K),
            eS = {
                location: {
                    page: F.AnalyticsPages.USER_POPOUT,
                    section: F.AnalyticsSections.USER_PROFILE
                }
            };
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(D.default, {
                className: G.usernameSection,
                user: K,
                nickname: eg,
                pronouns: null == W ? void 0 : W.pronouns,
                usernameIcon: K.hasAvatarForGuild(null == Y ? void 0 : Y.id) && (0, i.jsx)(I.default, {
                    user: K,
                    nickname: eg
                }),
                shouldCopyOnClick: $
            }), (0, i.jsxs)(o.HeadingLevel, {
                children: [(0, i.jsx)(M.default, {
                    className: G.customStatusSection,
                    customStatusActivity: V
                }), (0, i.jsx)(T.default, {
                    className: G.divider
                }), (0, i.jsxs)(o.AdvancedScroller, {
                    className: s(G.scroller, {
                        [G.scrollerSeparator]: !ec
                    }),
                    onScroll: ep,
                    ref: ed,
                    children: [(0, i.jsx)(O.default, {
                        user: K,
                        guildId: null == Y ? void 0 : Y.id
                    }), (0, i.jsx)(A.default, {
                        isUsingGuildBio: null !== (n = null == W ? void 0 : W.isUsingGuildMemberBio()) && void 0 !== n && n,
                        bio: null == W ? void 0 : W.bio,
                        guild: Y,
                        hidePersonalInformation: et
                    }), eE && (0, i.jsx)(C.default, {
                        className: G.profileMutuals,
                        user: K,
                        onClose: Z
                    }), (0, i.jsx)(L.default, {
                        userId: K.id,
                        guild: Y,
                        guildMember: z
                    }), ey && (0, i.jsx)(_.default, {
                        user: K
                    }), er && es && (0, i.jsx)(w.default, {
                        voiceChannel: el.voiceChannel,
                        voiceGuild: el.voiceGuild,
                        color: H.buttonColor
                    }), (0, i.jsx)(v.default, {
                        activity: B,
                        user: K,
                        guild: Y,
                        channelId: J,
                        onClose: Z,
                        analyticsParams: (null == ee ? void 0 : ee.location) != null ? ee : eS
                    }), (null == en ? void 0 : en.popularApplicationCommandIds) != null && null != eo ? (0, i.jsx)(b.default, {
                        applicationId: en.id,
                        commandIds: en.popularApplicationCommandIds,
                        channel: eo,
                        guildId: null == Y ? void 0 : Y.id,
                        onClick: Z
                    }) : null, (0, i.jsx)(N.default, {
                        user: K,
                        guildId: null == Y ? void 0 : Y.id
                    }), (0, i.jsx)(U.default, {
                        user: K,
                        guild: Y,
                        guildMember: z,
                        showBorder: null !== (a = null == W ? void 0 : W.canEditThemes) && void 0 !== a && a
                    }), (0, i.jsx)(R.default, {
                        userId: K.id,
                        channelId: J,
                        guild: Y,
                        onClose: Z,
                        theme: eu
                    }), null != en && void 0 !== J && (0, i.jsx)(j.default, {
                        channelId: J,
                        applicationId: en.id
                    }), !et && !Q && (0, i.jsx)(P.default, {
                        user: K,
                        setNote: q,
                        autoFocus: !X,
                        lastSection: !X
                    }), !K.isNonUserBot() && X && (0, i.jsx)(k.default, {
                        user: K,
                        setNote: q,
                        canDM: X,
                        onClose: Z
                    })]
                })]
            })]
        })
    }
}