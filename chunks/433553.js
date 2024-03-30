function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return H
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("649455"),
        l = n("276256"),
        c = n("73013"),
        f = n("217014"),
        d = n("935741"),
        _ = n("930949"),
        E = n("62957"),
        p = n("830567"),
        m = n("689381"),
        y = n("903716"),
        I = n("407176"),
        h = n("979209"),
        O = n("590410"),
        T = n("89785"),
        S = n("671903"),
        v = n("638954"),
        g = n("599608"),
        A = n("678447"),
        b = n("264491"),
        N = n("65521"),
        R = n("508902"),
        C = n("227447"),
        P = n("475167"),
        D = n("809532"),
        L = n("995775"),
        M = n("887699"),
        U = n("321339"),
        w = n("579072"),
        k = n("829947"),
        G = n("742111"),
        B = n("281767"),
        j = n("700481"),
        F = n("27729");

    function V(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function H(e) {
        var t, n, o, H, x, Y, W, K, z = e.activity,
            X = e.customStatusActivity,
            q = e.user,
            Q = e.displayProfile,
            J = e.guild,
            Z = e.guildMember,
            $ = e.channelId,
            ee = e.onClose,
            et = e.setNote,
            en = void 0 !== et && et,
            er = e.canDM,
            eo = e.hideNote,
            ei = e.showCopiableUsername,
            ea = e.analyticsParams,
            eu = (0, a.useStateFromStores)([_.default], function() {
                return _.default.hidePersonalInformation
            }),
            es = (0, a.useStateFromStores)([y.default], function() {
                var e;
                return null === (e = y.default.getUserProfile(q.id)) || void 0 === e ? void 0 : e.application
            }),
            el = (0, a.useStateFromStores)([c.default], function() {
                return null != c.default.getAnyStreamForUser(q.id)
            }),
            ec = (0, G.useGetVoiceChannelInfoForVoiceActivitySection)(q.id, null == J ? void 0 : J.id),
            ef = (null == z ? void 0 : z.type) === B.ActivityTypes.HANG_STATUS,
            ed = !el && null != ec && !ef,
            e_ = I.VoiceActivityProfileExperiment.useExperiment({
                location: "user popout"
            }, {
                autoTrackExposure: ed
            }).showVoiceActivityInProfile,
            eE = (0, a.useStateFromStores)([d.default], function() {
                return d.default.getChannel($)
            }),
            ep = (0, h.default)(q, Q).profileTheme,
            em = r.useRef(null);
        var ey = (t = r.useState(!0), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return V(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return V(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            eI = ey[0],
            eh = ey[1],
            eO = r.useCallback(function() {
                var e = em.current;
                null != e && eh(0 === e.getScrollerState().scrollTop)
            }, []);
        r.useLayoutEffect(function() {
            var e, t = em.current;
            null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
                top: 0
            }))
        }, []);
        var eT = (0, a.useStateFromStores)([f.default], function() {
                return f.default.getId()
            }),
            eS = q.id === eT,
            ev = q.bot || eS,
            eg = (0, m.useProfileMutualsExperiment)({
                autoTrackExposure: !0,
                location: s.default.PROFILE_POPOUT,
                disable: ev
            }).enabled,
            eA = (0, l.useIsUserRecentGamesFetchEnabled)({
                userId: q.id,
                location: "28tk0bf_3"
            });
        if (q.isSystemUser()) return null;
        if (q.isNonUserBot()) return r.createElement(k.default, {
            user: q,
            nickname: null,
            pronouns: null,
            className: j.usernameSection,
            lastSection: !0
        });
        var eb = null !== (Y = E.default.getNickname(null == J ? void 0 : J.id, $, q)) && void 0 !== Y ? Y : p.default.getName(q),
            eN = {
                location: {
                    page: B.AnalyticsPages.USER_POPOUT,
                    section: B.AnalyticsSections.USER_PROFILE
                }
            };
        return r.createElement(r.Fragment, null, r.createElement(k.default, {
            className: j.usernameSection,
            user: q,
            nickname: eb,
            pronouns: null == Q ? void 0 : Q.pronouns,
            usernameIcon: q.hasAvatarForGuild(null == J ? void 0 : J.id) && r.createElement(v.default, {
                user: q,
                nickname: eb
            }),
            shouldCopyOnClick: void 0 !== ei && ei
        }), r.createElement(u.HeadingLevel, null, r.createElement(C.default, {
            className: j.customStatusSection,
            customStatusActivity: X
        }), r.createElement(S.default, {
            className: j.divider
        }), r.createElement(u.AdvancedScroller, {
            className: i()(j.scroller, (o = {}, H = j.scrollerSeparator, x = !eI, H in o ? Object.defineProperty(o, H, {
                value: x,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : o[H] = x, o)),
            onScroll: eO,
            ref: em
        }, r.createElement(N.default, {
            user: q,
            guildId: null == J ? void 0 : J.id
        }), r.createElement(b.default, {
            isUsingGuildBio: null !== (W = null == Q ? void 0 : Q.isUsingGuildMemberBio()) && void 0 !== W && W,
            bio: null == Q ? void 0 : Q.bio,
            guild: J,
            hidePersonalInformation: eu
        }), eg && r.createElement(O.default, {
            className: j.profileMutuals,
            user: q,
            onClose: ee
        }), r.createElement(D.default, {
            userId: q.id,
            guild: J,
            guildMember: Z
        }), eA && r.createElement(T.UserProfileRecentGamesSection, {
            userId: q.id
        }), e_ && ed && r.createElement(G.default, {
            voiceChannel: ec.voiceChannel,
            voiceGuild: ec.voiceGuild,
            color: F.buttonColor
        }), r.createElement(g.default, {
            activity: z,
            user: q,
            guild: J,
            channelId: $,
            onClose: ee,
            analyticsParams: (null == ea ? void 0 : ea.location) != null ? ea : eN
        }), (null == es ? void 0 : es.popularApplicationCommandIds) != null && null != eE ? r.createElement(M.default, {
            applicationId: es.id,
            commandIds: es.popularApplicationCommandIds,
            channel: eE,
            guildId: null == J ? void 0 : J.id,
            onClick: ee
        }) : null, r.createElement(A.default, {
            user: q,
            guildId: null == J ? void 0 : J.id
        }), r.createElement(w.default, {
            user: q,
            guild: J,
            guildMember: Z,
            showBorder: null !== (K = null == Q ? void 0 : Q.canEditThemes) && void 0 !== K && K
        }), r.createElement(R.default, {
            userId: q.id,
            channelId: $,
            guild: J,
            onClose: ee,
            theme: ep
        }), null != es && void 0 !== $ && r.createElement(U.default, {
            channelId: $,
            applicationId: es.id
        }), !eu && !(void 0 !== eo && eo) && r.createElement(L.default, {
            user: q,
            setNote: en,
            autoFocus: !er,
            lastSection: !er
        }), !q.isNonUserBot() && er && r.createElement(P.default, {
            user: q,
            setNote: en,
            canDM: er,
            onClose: ee
        }))))
    }
}