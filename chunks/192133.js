function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return j
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("100527"),
        d = n("963202"),
        _ = n("369077"),
        c = n("761174"),
        E = n("199902"),
        I = n("314897"),
        T = n("592125"),
        f = n("246946"),
        S = n("5192"),
        h = n("51144"),
        A = n("342656"),
        m = n("621853"),
        N = n("895618"),
        p = n("652853"),
        O = n("421486"),
        R = n("347949"),
        C = n("138394"),
        g = n("790711"),
        L = n("248345"),
        D = n("337125"),
        v = n("19836"),
        M = n("207570"),
        y = n("77097"),
        P = n("538564"),
        U = n("489642"),
        b = n("319300"),
        G = n("591600"),
        w = n("579729"),
        k = n("302316"),
        B = n("186395"),
        F = n("584045"),
        V = n("58307"),
        x = n("981631"),
        H = n("700481"),
        Y = n("27729");

    function j(e) {
        var t, n, s;
        let {
            activity: j,
            customStatusActivity: W,
            user: K,
            displayProfile: z,
            guild: X,
            guildMember: Q,
            channelId: q,
            onClose: Z,
            setNote: J = !1,
            canDM: $,
            hideNote: ee = !1,
            showCopiableUsername: et = !1,
            analyticsParams: en
        } = e, ei = (0, o.useStateFromStores)([f.default], () => f.default.hidePersonalInformation), er = (0, o.useStateFromStores)([m.default], () => {
            var e;
            return null === (e = m.default.getUserProfile(K.id)) || void 0 === e ? void 0 : e.application
        }), es = (0, o.useStateFromStores)([E.default], () => null != E.default.getAnyStreamForUser(K.id)), ea = (0, V.useGetVoiceChannelInfoForVoiceActivitySection)(K.id, null == X ? void 0 : X.id), eo = (null == j ? void 0 : j.type) === x.ActivityTypes.HANG_STATUS, el = !es && null != ea && !eo, {
            showVoiceActivityInProfile: eu
        } = N.VoiceActivityProfileExperiment.useExperiment({
            location: "user popout"
        }, {
            autoTrackExposure: el
        }), ed = (0, o.useStateFromStores)([T.default], () => T.default.getChannel(q)), {
            theme: e_
        } = (0, p.useUserProfileThemeContext)(), ec = r.useRef(null), [eE, eI] = r.useState(!0), eT = r.useCallback(() => {
            let {
                current: e
            } = ec;
            null != e && eI(0 === e.getScrollerState().scrollTop)
        }, []);
        r.useLayoutEffect(() => {
            var e;
            let {
                current: t
            } = ec;
            null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
                top: 0
            }))
        }, []);
        let ef = (0, o.useStateFromStores)([I.default], () => I.default.getId()),
            eS = K.id === ef,
            eh = K.bot || eS,
            {
                enabled: eA
            } = (0, A.useProfileMutualsExperiment)({
                autoTrackExposure: !0,
                location: u.default.PROFILE_POPOUT,
                disable: eh
            }),
            em = (0, c.useIsUserRecentGamesEnabled)({
                userId: K.id,
                location: "28tk0bf_1"
            }),
            eN = (0, d.useIsInUserClanExperiment)();
        if (K.isSystemUser()) return null;
        if (K.isNonUserBot()) return (0, i.jsx)(F.default, {
            user: K,
            nickname: null,
            pronouns: null,
            className: H.usernameSection,
            lastSection: !0
        });
        let ep = null !== (t = S.default.getNickname(null == X ? void 0 : X.id, q, K)) && void 0 !== t ? t : h.default.getName(K),
            eO = {
                location: {
                    page: x.AnalyticsPages.USER_POPOUT,
                    section: x.AnalyticsSections.USER_PROFILE
                }
            };
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(F.default, {
                className: H.usernameSection,
                user: K,
                nickname: ep,
                pronouns: null == z ? void 0 : z.pronouns,
                usernameIcon: K.hasAvatarForGuild(null == X ? void 0 : X.id) && (0, i.jsx)(g.default, {
                    user: K,
                    nickname: ep
                }),
                shouldCopyOnClick: et
            }), (0, i.jsxs)(l.HeadingLevel, {
                children: [(0, i.jsx)(P.default, {
                    className: H.customStatusSection,
                    customStatusActivity: W
                }), (0, i.jsx)(C.default, {
                    className: H.divider
                }), (0, i.jsxs)(l.AdvancedScroller, {
                    className: a()(H.scroller, {
                        [H.scrollerSeparator]: !eE
                    }),
                    onScroll: eT,
                    ref: ec,
                    children: [(0, i.jsx)(M.default, {
                        user: K,
                        guildId: null == X ? void 0 : X.id
                    }), (0, i.jsx)(v.default, {
                        isUsingGuildBio: null !== (n = null == z ? void 0 : z.isUsingGuildMemberBio()) && void 0 !== n && n,
                        bio: null == z ? void 0 : z.bio,
                        guild: X,
                        hidePersonalInformation: ei
                    }), eN && (0, i.jsx)(_.UserProfileClanSection, {
                        userId: K.id
                    }), eA && (0, i.jsx)(O.default, {
                        className: H.profileMutuals,
                        user: K,
                        onClose: Z
                    }), (0, i.jsx)(b.default, {
                        userId: K.id,
                        guildId: null == X ? void 0 : X.id
                    }), eu && el && (0, i.jsx)(V.default, {
                        voiceChannel: ea.voiceChannel,
                        voiceGuild: ea.voiceGuild,
                        color: Y.buttonColor
                    }), (0, i.jsx)(L.default, {
                        activity: j,
                        user: K,
                        guild: X,
                        channelId: q,
                        onClose: Z,
                        analyticsParams: (null == en ? void 0 : en.location) != null ? en : eO
                    }), em && (0, i.jsx)(R.UserProfileRecentGamesSection, {
                        userId: K.id
                    }), (null == er ? void 0 : er.popularApplicationCommandIds) != null && null != ed ? (0, i.jsx)(w.default, {
                        applicationId: er.id,
                        commandIds: er.popularApplicationCommandIds,
                        channel: ed,
                        guildId: null == X ? void 0 : X.id,
                        onClick: Z
                    }) : null, (0, i.jsx)(D.default, {
                        user: K,
                        guildId: null == X ? void 0 : X.id
                    }), (0, i.jsx)(B.default, {
                        user: K,
                        guild: X,
                        guildMember: Q,
                        showBorder: null !== (s = null == z ? void 0 : z.canEditThemes) && void 0 !== s && s
                    }), (0, i.jsx)(y.default, {
                        userId: K.id,
                        channelId: q,
                        guild: X,
                        onClose: Z,
                        theme: e_
                    }), null != er && void 0 !== q && (0, i.jsx)(k.default, {
                        channelId: q,
                        applicationId: er.id
                    }), !ei && !ee && (0, i.jsx)(G.default, {
                        user: K,
                        setNote: J,
                        autoFocus: !$,
                        lastSection: !$
                    }), !K.isNonUserBot() && $ && (0, i.jsx)(U.default, {
                        user: K,
                        setNote: J,
                        canDM: $,
                        onClose: Z
                    })]
                })]
            })]
        })
    }
}