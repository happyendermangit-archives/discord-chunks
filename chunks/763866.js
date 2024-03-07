function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return G
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("812204"),
        d = n("373469"),
        c = n("271938"),
        f = n("42203"),
        m = n("102985"),
        p = n("387111"),
        h = n("158998"),
        E = n("337487"),
        g = n("713135"),
        S = n("765698"),
        C = n("906889"),
        T = n("840211"),
        v = n("10532"),
        I = n("648149"),
        _ = n("915712"),
        N = n("261523"),
        A = n("369869"),
        x = n("545590"),
        y = n("316095"),
        O = n("802279"),
        R = n("577172"),
        M = n("465215"),
        L = n("301998"),
        P = n("379657"),
        b = n("853780"),
        j = n("574191"),
        U = n("491250"),
        D = n("453649"),
        k = n("49111"),
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
        } = e, $ = (0, r.useStateFromStores)([m.default], () => m.default.hidePersonalInformation), ee = (0, r.useStateFromStores)([g.default], () => {
            var e;
            return null === (e = g.default.getUserProfile(H.id)) || void 0 === e ? void 0 : e.application
        }), et = (0, r.useStateFromStores)([d.default], () => null != d.default.getAnyStreamForUser(H.id)), en = (0, D.useGetVoiceChannelInfoForVoiceActivitySection)(H.id, null == K ? void 0 : K.id), el = (null == G ? void 0 : G.type) === k.ActivityTypes.HANG_STATUS, ei = !et && null != en && !el, {
            showVoiceActivityInProfile: ea
        } = S.VoiceActivityProfileExperiment.useExperiment({
            location: "user popout"
        }, {
            autoTrackExposure: ei
        }), es = (0, r.useStateFromStores)([f.default], () => f.default.getChannel(Y)), {
            profileTheme: er
        } = (0, C.default)(H, V), eo = i.useRef(null), [eu, ed] = i.useState(!0), ec = i.useCallback(() => {
            let {
                current: e
            } = eo;
            null != e && ed(0 === e.getScrollerState().scrollTop)
        }, []);
        i.useLayoutEffect(() => {
            var e;
            let {
                current: t
            } = eo;
            null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
                top: 0
            }))
        }, []);
        let ef = (0, r.useStateFromStores)([c.default], () => c.default.getId()),
            em = H.id === ef,
            ep = H.bot || em,
            {
                enabled: eh
            } = (0, E.useProfileMutualsExperiment)({
                autoTrackExposure: !0,
                location: u.default.PROFILE_POPOUT,
                disable: ep
            });
        if (H.isSystemUser()) return null;
        if (H.isNonUserBot()) return (0, l.jsx)(U.default, {
            user: H,
            nickname: null,
            pronouns: null,
            className: w.usernameSection,
            lastSection: !0
        });
        let eE = null !== (t = p.default.getNickname(null == K ? void 0 : K.id, Y, H)) && void 0 !== t ? t : h.default.getName(H),
            eg = {
                location: {
                    page: k.AnalyticsPages.USER_POPOUT,
                    section: k.AnalyticsSections.USER_PROFILE
                }
            };
        return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(U.default, {
                className: w.usernameSection,
                user: H,
                nickname: eE,
                pronouns: null == V ? void 0 : V.pronouns,
                usernameIcon: H.hasAvatarForGuild(null == K ? void 0 : K.id) && (0, l.jsx)(I.default, {
                    user: H,
                    nickname: eE
                }),
                shouldCopyOnClick: X
            }), (0, l.jsxs)(o.HeadingLevel, {
                children: [(0, l.jsx)(O.default, {
                    className: w.customStatusSection,
                    customStatusActivity: B
                }), eh && (0, l.jsx)(T.default, {
                    className: w.profileMutuals,
                    user: H
                }), (0, l.jsx)(v.default, {
                    className: w.divider
                }), (0, l.jsxs)(o.AdvancedScroller, {
                    className: s(w.scroller, {
                        [w.scrollerSeparator]: !eu
                    }),
                    onScroll: ec,
                    ref: eo,
                    children: [(0, l.jsx)(x.default, {
                        user: H,
                        guildId: null == K ? void 0 : K.id
                    }), (0, l.jsx)(A.default, {
                        isUsingGuildBio: null !== (n = null == V ? void 0 : V.isUsingGuildMemberBio()) && void 0 !== n && n,
                        bio: null == V ? void 0 : V.bio,
                        guild: K,
                        hidePersonalInformation: $
                    }), (0, l.jsx)(M.default, {
                        userId: H.id,
                        guild: K,
                        guildMember: W
                    }), ea && ei && (0, l.jsx)(D.default, {
                        voiceChannel: en.voiceChannel,
                        voiceGuild: en.voiceGuild,
                        onClose: z,
                        color: F.buttonColor
                    }), (0, l.jsx)(_.default, {
                        activity: G,
                        user: H,
                        guild: K,
                        channelId: Y,
                        onClose: z,
                        analyticsParams: (null == Q ? void 0 : Q.location) != null ? Q : eg
                    }), (null == ee ? void 0 : ee.popularApplicationCommandIds) != null && null != es ? (0, l.jsx)(P.default, {
                        applicationId: ee.id,
                        commandIds: ee.popularApplicationCommandIds,
                        channel: es,
                        guildId: null == K ? void 0 : K.id,
                        onClick: z
                    }) : null, (0, l.jsx)(N.default, {
                        user: H,
                        guildId: null == K ? void 0 : K.id
                    }), (0, l.jsx)(j.default, {
                        user: H,
                        guild: K,
                        guildMember: W,
                        showBorder: null !== (a = null == V ? void 0 : V.canEditThemes) && void 0 !== a && a
                    }), (0, l.jsx)(y.default, {
                        userId: H.id,
                        channelId: Y,
                        guild: K,
                        onClose: z,
                        theme: er
                    }), null != ee && void 0 !== Y && (0, l.jsx)(b.default, {
                        channelId: Y,
                        applicationId: ee.id
                    }), (0, l.jsx)(L.default, {
                        user: H,
                        setNote: Z,
                        autoFocus: !J,
                        lastSection: !J,
                        hideNote: $ || q
                    }), (0, l.jsx)(R.default, {
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