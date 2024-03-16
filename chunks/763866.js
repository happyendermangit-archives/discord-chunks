function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return G
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("812204"),
        d = n("373469"),
        c = n("271938"),
        f = n("42203"),
        p = n("102985"),
        m = n("387111"),
        h = n("158998"),
        x = n("337487"),
        E = n("713135"),
        y = n("765698"),
        g = n("906889"),
        S = n("840211"),
        C = n("10532"),
        I = n("648149"),
        T = n("915712"),
        _ = n("261523"),
        v = n("369869"),
        N = n("545590"),
        A = n("316095"),
        O = n("802279"),
        M = n("577172"),
        R = n("465215"),
        k = n("301998"),
        L = n("379657"),
        b = n("853780"),
        P = n("574191"),
        j = n("491250"),
        U = n("453649"),
        D = n("49111"),
        w = n("838133"),
        F = n("787678");

    function G(e) {
        var t, n, a;
        let {
            activity: G,
            customStatusActivity: B,
            user: H,
            displayProfile: V,
            guild: K,
            guildMember: W,
            channelId: Y,
            onClose: z,
            setNote: Z = !1,
            canDM: J,
            hideNote: q = !1,
            showCopiableUsername: X = !1,
            analyticsParams: Q
        } = e, $ = (0, r.useStateFromStores)([p.default], () => p.default.hidePersonalInformation), ee = (0, r.useStateFromStores)([E.default], () => {
            var e;
            return null === (e = E.default.getUserProfile(H.id)) || void 0 === e ? void 0 : e.application
        }), et = (0, r.useStateFromStores)([d.default], () => null != d.default.getAnyStreamForUser(H.id)), en = (0, U.useGetVoiceChannelInfoForVoiceActivitySection)(H.id, null == K ? void 0 : K.id), ei = (null == G ? void 0 : G.type) === D.ActivityTypes.HANG_STATUS, el = !et && null != en && !ei, {
            showVoiceActivityInProfile: ea
        } = y.VoiceActivityProfileExperiment.useExperiment({
            location: "user popout"
        }, {
            autoTrackExposure: el
        }), es = (0, r.useStateFromStores)([f.default], () => f.default.getChannel(Y)), {
            profileTheme: er
        } = (0, g.default)(H, V), eo = l.useRef(null), [eu, ed] = l.useState(!0), ec = l.useCallback(() => {
            let {
                current: e
            } = eo;
            null != e && ed(0 === e.getScrollerState().scrollTop)
        }, []);
        l.useLayoutEffect(() => {
            var e;
            let {
                current: t
            } = eo;
            null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
                top: 0
            }))
        }, []);
        let ef = (0, r.useStateFromStores)([c.default], () => c.default.getId()),
            ep = H.id === ef,
            em = H.bot || ep,
            {
                enabled: eh
            } = (0, x.useProfileMutualsExperiment)({
                autoTrackExposure: !0,
                location: u.default.PROFILE_POPOUT,
                disable: em
            });
        if (H.isSystemUser()) return null;
        if (H.isNonUserBot()) return (0, i.jsx)(j.default, {
            user: H,
            nickname: null,
            pronouns: null,
            className: w.usernameSection,
            lastSection: !0
        });
        let ex = null !== (t = m.default.getNickname(null == K ? void 0 : K.id, Y, H)) && void 0 !== t ? t : h.default.getName(H),
            eE = {
                location: {
                    page: D.AnalyticsPages.USER_POPOUT,
                    section: D.AnalyticsSections.USER_PROFILE
                }
            };
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(j.default, {
                className: w.usernameSection,
                user: H,
                nickname: ex,
                pronouns: null == V ? void 0 : V.pronouns,
                usernameIcon: H.hasAvatarForGuild(null == K ? void 0 : K.id) && (0, i.jsx)(I.default, {
                    user: H,
                    nickname: ex
                }),
                shouldCopyOnClick: X
            }), (0, i.jsxs)(o.HeadingLevel, {
                children: [(0, i.jsx)(O.default, {
                    className: w.customStatusSection,
                    customStatusActivity: B
                }), (0, i.jsx)(C.default, {
                    className: w.divider
                }), (0, i.jsxs)(o.AdvancedScroller, {
                    className: s(w.scroller, {
                        [w.scrollerSeparator]: !eu
                    }),
                    onScroll: ec,
                    ref: eo,
                    children: [(0, i.jsx)(N.default, {
                        user: H,
                        guildId: null == K ? void 0 : K.id
                    }), (0, i.jsx)(v.default, {
                        isUsingGuildBio: null !== (n = null == V ? void 0 : V.isUsingGuildMemberBio()) && void 0 !== n && n,
                        bio: null == V ? void 0 : V.bio,
                        guild: K,
                        hidePersonalInformation: $
                    }), eh && (0, i.jsx)(S.default, {
                        className: w.profileMutuals,
                        user: H,
                        onClose: z
                    }), (0, i.jsx)(R.default, {
                        userId: H.id,
                        guild: K,
                        guildMember: W
                    }), ea && el && (0, i.jsx)(U.default, {
                        voiceChannel: en.voiceChannel,
                        voiceGuild: en.voiceGuild,
                        onClose: z,
                        color: F.buttonColor
                    }), (0, i.jsx)(T.default, {
                        activity: G,
                        user: H,
                        guild: K,
                        channelId: Y,
                        onClose: z,
                        analyticsParams: (null == Q ? void 0 : Q.location) != null ? Q : eE
                    }), (null == ee ? void 0 : ee.popularApplicationCommandIds) != null && null != es ? (0, i.jsx)(L.default, {
                        applicationId: ee.id,
                        commandIds: ee.popularApplicationCommandIds,
                        channel: es,
                        guildId: null == K ? void 0 : K.id,
                        onClick: z
                    }) : null, (0, i.jsx)(_.default, {
                        user: H,
                        guildId: null == K ? void 0 : K.id
                    }), (0, i.jsx)(P.default, {
                        user: H,
                        guild: K,
                        guildMember: W,
                        showBorder: null !== (a = null == V ? void 0 : V.canEditThemes) && void 0 !== a && a
                    }), (0, i.jsx)(A.default, {
                        userId: H.id,
                        channelId: Y,
                        guild: K,
                        onClose: z,
                        theme: er
                    }), null != ee && void 0 !== Y && (0, i.jsx)(b.default, {
                        channelId: Y,
                        applicationId: ee.id
                    }), (0, i.jsx)(k.default, {
                        user: H,
                        setNote: Z,
                        autoFocus: !J,
                        lastSection: !J,
                        hideNote: $ || q
                    }), (0, i.jsx)(M.default, {
                        user: H,
                        setNote: Z,
                        canDM: J,
                        onClose: z
                    })]
                })]
            })]
        })
    }
}