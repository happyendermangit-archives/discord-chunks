function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return k
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("442837"),
        l = n("481060"),
        u = n("100527"),
        d = n("761174"),
        _ = n("314897"),
        c = n("592125"),
        E = n("246946"),
        I = n("5192"),
        T = n("51144"),
        f = n("342656"),
        S = n("621853"),
        h = n("652853"),
        A = n("421486"),
        m = n("347949"),
        N = n("138394"),
        p = n("790711"),
        O = n("248345"),
        R = n("337125"),
        C = n("19836"),
        g = n("207570"),
        L = n("77097"),
        v = n("538564"),
        D = n("489642"),
        M = n("319300"),
        y = n("591600"),
        P = n("579729"),
        U = n("302316"),
        b = n("186395"),
        G = n("584045"),
        w = n("981631"),
        B = n("833832");

    function k(e) {
        var t, n, a;
        let {
            activity: k,
            customStatusActivity: V,
            user: x,
            displayProfile: F,
            guild: H,
            guildMember: Y,
            channelId: j,
            onClose: W,
            setNote: K = !1,
            canDM: z,
            hideNote: Z = !1,
            showCopiableUsername: X = !1,
            analyticsParams: Q
        } = e, q = (0, o.useStateFromStores)([E.default], () => E.default.hidePersonalInformation), J = (0, o.useStateFromStores)([S.default], () => {
            var e;
            return null === (e = S.default.getUserProfile(x.id)) || void 0 === e ? void 0 : e.application
        }), $ = (0, o.useStateFromStores)([c.default], () => c.default.getChannel(j)), {
            theme: ee
        } = (0, h.useUserProfileThemeContext)(), et = r.useRef(null), [en, ei] = r.useState(!0), er = r.useCallback(() => {
            let {
                current: e
            } = et;
            null != e && ei(0 === e.getScrollerState().scrollTop)
        }, []);
        r.useLayoutEffect(() => {
            var e;
            let {
                current: t
            } = et;
            null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
                top: 0
            }))
        }, []);
        let ea = (0, o.useStateFromStores)([_.default], () => _.default.getId()),
            es = x.id === ea,
            eo = x.bot || es,
            {
                enabled: el
            } = (0, f.useProfileMutualsExperiment)({
                autoTrackExposure: !0,
                location: u.default.PROFILE_POPOUT,
                disable: eo
            }),
            eu = (0, d.useIsUserRecentGamesEnabled)({
                userId: x.id,
                location: "28tk0bf_1"
            });
        if (x.isSystemUser()) return null;
        if (x.isNonUserBot()) return (0, i.jsx)(G.default, {
            user: x,
            nickname: null,
            pronouns: null,
            className: B.usernameSection,
            lastSection: !0
        });
        let ed = null !== (t = I.default.getNickname(null == H ? void 0 : H.id, j, x)) && void 0 !== t ? t : T.default.getName(x),
            e_ = {
                location: {
                    page: w.AnalyticsPages.USER_POPOUT,
                    section: w.AnalyticsSections.USER_PROFILE
                }
            };
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(G.default, {
                className: B.usernameSection,
                user: x,
                nickname: ed,
                pronouns: null == F ? void 0 : F.pronouns,
                usernameIcon: x.hasAvatarForGuild(null == H ? void 0 : H.id) && (0, i.jsx)(p.default, {
                    user: x,
                    nickname: ed
                }),
                shouldCopyOnClick: X
            }), (0, i.jsxs)(l.HeadingLevel, {
                children: [(0, i.jsx)(v.default, {
                    className: B.customStatusSection,
                    customStatusActivity: V
                }), (0, i.jsx)(N.default, {
                    className: B.divider
                }), (0, i.jsxs)(l.AdvancedScroller, {
                    className: s()(B.scroller, {
                        [B.scrollerSeparator]: !en
                    }),
                    onScroll: er,
                    ref: et,
                    children: [(0, i.jsx)(g.default, {
                        user: x,
                        guildId: null == H ? void 0 : H.id
                    }), (0, i.jsx)(C.default, {
                        isUsingGuildBio: null !== (n = null == F ? void 0 : F.isUsingGuildMemberBio()) && void 0 !== n && n,
                        bio: null == F ? void 0 : F.bio,
                        guild: H,
                        hidePersonalInformation: q
                    }), el && (0, i.jsx)(A.default, {
                        className: B.profileMutuals,
                        user: x,
                        onClose: W
                    }), (0, i.jsx)(M.default, {
                        userId: x.id,
                        guildId: null == H ? void 0 : H.id
                    }), (0, i.jsx)(O.default, {
                        activity: k,
                        user: x,
                        guild: H,
                        channelId: j,
                        onClose: W,
                        analyticsParams: (null == Q ? void 0 : Q.location) != null ? Q : e_
                    }), eu && (0, i.jsx)(m.UserProfileRecentGamesSection, {
                        userId: x.id
                    }), (null == J ? void 0 : J.popularApplicationCommandIds) != null && null != $ ? (0, i.jsx)(P.default, {
                        applicationId: J.id,
                        commandIds: J.popularApplicationCommandIds,
                        channel: $,
                        guildId: null == H ? void 0 : H.id,
                        onClick: W
                    }) : null, (0, i.jsx)(R.default, {
                        user: x,
                        guildId: null == H ? void 0 : H.id
                    }), (0, i.jsx)(b.default, {
                        user: x,
                        guild: H,
                        guildMember: Y,
                        showBorder: null !== (a = null == F ? void 0 : F.canEditThemes) && void 0 !== a && a
                    }), (0, i.jsx)(L.default, {
                        userId: x.id,
                        channelId: j,
                        guild: H,
                        onClose: W,
                        theme: ee
                    }), null != J && void 0 !== j && (0, i.jsx)(U.default, {
                        channelId: j,
                        applicationId: J.id
                    }), !q && !Z && (0, i.jsx)(y.default, {
                        user: x,
                        setNote: K,
                        autoFocus: !z,
                        lastSection: !z
                    }), !x.isNonUserBot() && z && (0, i.jsx)(D.default, {
                        user: x,
                        setNote: K,
                        canDM: z,
                        onClose: W
                    })]
                })]
            })]
        })
    }
}