function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return H
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("100527"),
        d = n("761174"),
        _ = n("199902"),
        c = n("314897"),
        E = n("592125"),
        I = n("246946"),
        T = n("5192"),
        f = n("51144"),
        S = n("342656"),
        h = n("621853"),
        A = n("895618"),
        m = n("358794"),
        N = n("421486"),
        p = n("347949"),
        O = n("138394"),
        R = n("790711"),
        C = n("248345"),
        g = n("337125"),
        L = n("19836"),
        D = n("207570"),
        v = n("77097"),
        M = n("538564"),
        y = n("489642"),
        P = n("319300"),
        U = n("591600"),
        b = n("579729"),
        G = n("302316"),
        w = n("186395"),
        B = n("584045"),
        k = n("58307"),
        V = n("981631"),
        F = n("700481"),
        x = n("27729");

    function H(e) {
        var t, n, s;
        let {
            activity: H,
            customStatusActivity: Y,
            user: j,
            displayProfile: W,
            guild: K,
            guildMember: z,
            channelId: X,
            onClose: Q,
            setNote: q = !1,
            canDM: Z,
            hideNote: J = !1,
            showCopiableUsername: $ = !1,
            analyticsParams: ee
        } = e, et = (0, o.useStateFromStores)([I.default], () => I.default.hidePersonalInformation), en = (0, o.useStateFromStores)([h.default], () => {
            var e;
            return null === (e = h.default.getUserProfile(j.id)) || void 0 === e ? void 0 : e.application
        }), ei = (0, o.useStateFromStores)([_.default], () => null != _.default.getAnyStreamForUser(j.id)), er = (0, k.useGetVoiceChannelInfoForVoiceActivitySection)(j.id, null == K ? void 0 : K.id), es = (null == H ? void 0 : H.type) === V.ActivityTypes.HANG_STATUS, ea = !ei && null != er && !es, {
            showVoiceActivityInProfile: eo
        } = A.VoiceActivityProfileExperiment.useExperiment({
            location: "user popout"
        }, {
            autoTrackExposure: ea
        }), el = (0, o.useStateFromStores)([E.default], () => E.default.getChannel(X)), {
            profileTheme: eu
        } = (0, m.default)(j, W), ed = r.useRef(null), [e_, ec] = r.useState(!0), eE = r.useCallback(() => {
            let {
                current: e
            } = ed;
            null != e && ec(0 === e.getScrollerState().scrollTop)
        }, []);
        r.useLayoutEffect(() => {
            var e;
            let {
                current: t
            } = ed;
            null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
                top: 0
            }))
        }, []);
        let eI = (0, o.useStateFromStores)([c.default], () => c.default.getId()),
            eT = j.id === eI,
            ef = j.bot || eT,
            {
                enabled: eS
            } = (0, S.useProfileMutualsExperiment)({
                autoTrackExposure: !0,
                location: u.default.PROFILE_POPOUT,
                disable: ef
            }),
            eh = (0, d.useIsUserRecentGamesEnabled)({
                userId: j.id,
                location: "28tk0bf_1"
            });
        if (j.isSystemUser()) return null;
        if (j.isNonUserBot()) return (0, i.jsx)(B.default, {
            user: j,
            nickname: null,
            pronouns: null,
            className: F.usernameSection,
            lastSection: !0
        });
        let eA = null !== (t = T.default.getNickname(null == K ? void 0 : K.id, X, j)) && void 0 !== t ? t : f.default.getName(j),
            em = {
                location: {
                    page: V.AnalyticsPages.USER_POPOUT,
                    section: V.AnalyticsSections.USER_PROFILE
                }
            };
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(B.default, {
                className: F.usernameSection,
                user: j,
                nickname: eA,
                pronouns: null == W ? void 0 : W.pronouns,
                usernameIcon: j.hasAvatarForGuild(null == K ? void 0 : K.id) && (0, i.jsx)(R.default, {
                    user: j,
                    nickname: eA
                }),
                shouldCopyOnClick: $
            }), (0, i.jsxs)(l.HeadingLevel, {
                children: [(0, i.jsx)(M.default, {
                    className: F.customStatusSection,
                    customStatusActivity: Y
                }), (0, i.jsx)(O.default, {
                    className: F.divider
                }), (0, i.jsxs)(l.AdvancedScroller, {
                    className: a()(F.scroller, {
                        [F.scrollerSeparator]: !e_
                    }),
                    onScroll: eE,
                    ref: ed,
                    children: [(0, i.jsx)(D.default, {
                        user: j,
                        guildId: null == K ? void 0 : K.id
                    }), (0, i.jsx)(L.default, {
                        isUsingGuildBio: null !== (n = null == W ? void 0 : W.isUsingGuildMemberBio()) && void 0 !== n && n,
                        bio: null == W ? void 0 : W.bio,
                        guild: K,
                        hidePersonalInformation: et
                    }), eS && (0, i.jsx)(N.default, {
                        className: F.profileMutuals,
                        user: j,
                        onClose: Q
                    }), (0, i.jsx)(P.default, {
                        userId: j.id,
                        guild: K,
                        guildMember: z
                    }), eo && ea && (0, i.jsx)(k.default, {
                        voiceChannel: er.voiceChannel,
                        voiceGuild: er.voiceGuild,
                        color: x.buttonColor
                    }), (0, i.jsx)(C.default, {
                        activity: H,
                        user: j,
                        guild: K,
                        channelId: X,
                        onClose: Q,
                        analyticsParams: (null == ee ? void 0 : ee.location) != null ? ee : em
                    }), eh && (0, i.jsx)(p.UserProfileRecentGamesSection, {
                        userId: j.id
                    }), (null == en ? void 0 : en.popularApplicationCommandIds) != null && null != el ? (0, i.jsx)(b.default, {
                        applicationId: en.id,
                        commandIds: en.popularApplicationCommandIds,
                        channel: el,
                        guildId: null == K ? void 0 : K.id,
                        onClick: Q
                    }) : null, (0, i.jsx)(g.default, {
                        user: j,
                        guildId: null == K ? void 0 : K.id
                    }), (0, i.jsx)(w.default, {
                        user: j,
                        guild: K,
                        guildMember: z,
                        showBorder: null !== (s = null == W ? void 0 : W.canEditThemes) && void 0 !== s && s
                    }), (0, i.jsx)(v.default, {
                        userId: j.id,
                        channelId: X,
                        guild: K,
                        onClose: Q,
                        theme: eu
                    }), null != en && void 0 !== X && (0, i.jsx)(G.default, {
                        channelId: X,
                        applicationId: en.id
                    }), !et && !J && (0, i.jsx)(U.default, {
                        user: j,
                        setNote: q,
                        autoFocus: !Z,
                        lastSection: !Z
                    }), !j.isNonUserBot() && Z && (0, i.jsx)(y.default, {
                        user: j,
                        setNote: q,
                        canDM: Z,
                        onClose: Q
                    })]
                })]
            })]
        })
    }
}