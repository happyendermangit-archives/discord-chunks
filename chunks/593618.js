function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildTooltipText: function() {
            return ee
        },
        default: function() {
            return et
        }
    }), n("390547"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("846519"),
        _ = n("477690"),
        c = n("481060"),
        E = n("317381"),
        I = n("666188"),
        T = n("246364"),
        f = n("746916"),
        S = n("965638"),
        h = n("160404"),
        A = n("777861"),
        m = n("565799"),
        N = n("501655"),
        p = n("517334"),
        O = n("344185"),
        R = n("199902"),
        C = n("77498"),
        g = n("984933"),
        L = n("158776"),
        v = n("9156"),
        D = n("594174"),
        M = n("938475"),
        y = n("940627"),
        P = n("705600"),
        U = n("737688"),
        b = n("242315"),
        G = n("944581"),
        w = n("632184"),
        B = n("170039"),
        k = n("761374"),
        V = n("602623"),
        x = n("624138"),
        F = n("510601"),
        H = n("59688"),
        Y = n("456774"),
        j = n("981631"),
        W = n("689938"),
        K = n("807801"),
        z = n("630839");
    let Z = (0, x.cssValueToNumber)(_.default.GUILD_TOOLTIP_ICON_SIZE),
        X = (0, x.cssValueToNumber)(_.default.GUILD_TOOLTIP_ICON_SIZE_V_2);

    function Q(e, t, n) {
        return 0 === t.length ? null : (0, i.jsxs)("div", {
            className: K.row,
            children: [(0, i.jsx)(e, {
                className: K.activityIcon
            }), (0, i.jsx)(V.default, {
                guildId: n,
                users: t,
                max: 6
            })]
        })
    }

    function q(e) {
        let {
            muteConfig: t,
            className: n
        } = e;
        return (null == t ? void 0 : t.end_time) == null ? (0, i.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: n,
            children: W.default.Messages.FORM_LABEL_MUTED
        }) : (0, i.jsx)(A.default, {
            muteConfig: t,
            className: n
        })
    }

    function J(e) {
        var t, n, a;
        let {
            guild: o
        } = e, d = o.id, _ = (0, u.useStateFromStoresArray)([g.default, O.default], () => {
            let e = g.default.getChannels(d)[g.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
                let {
                    channel: t
                } = e;
                return t.type === j.ChannelTypes.GUILD_VOICE
            }).map(e => {
                let {
                    channel: t
                } = e;
                return t.id
            });
            return [...e, ...Object.values(O.default.getThreadsForGuild(d)).flatMap(e => Object.keys(e))]
        }, [d]), I = (0, p.default)(d), T = r.useMemo(() => I.map(e => e.id), [I]), f = (0, u.useStateFromStores)([M.default], () => M.default.getVoiceStates(d), [d]), S = l().flatMap(_, e => {
            var t;
            return e === o.afkChannelId ? [] : (null !== (t = f[e]) && void 0 !== t ? t : []).map(e => {
                let {
                    user: t
                } = e;
                return t
            })
        }), h = (0, u.useStateFromStoresArray)([m.default], () => l().flatMap(T, e => e === o.afkChannelId ? [] : m.default.getMutableParticipants(e, N.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === N.StageChannelParticipantTypes.VOICE).map(e => {
            let {
                user: t
            } = e;
            return t
        }))), A = (0, u.useStateFromStores)([m.default], () => {
            let e = 0;
            for (let t of T) e += m.default.getParticipantCount(t, N.StageChannelParticipantNamedIndex.AUDIENCE);
            return e
        }), y = (0, u.useStateFromStoresArray)([R.default], () => R.default.getAllApplicationStreams().filter(e => e.guildId === d).map(e => e.ownerId), [d]), P = (0, F.useIsGamingVoiceActivityEnabled)("Guild Tooltip", !1), x = (0, u.useStateFromStoresArray)([L.default, C.default], () => S.filter(e => L.default.getActivities(e.id, d).some(e => (null == e ? void 0 : e.application_id) != null && null != C.default.getDetectableGame(null == e ? void 0 : e.application_id)))), H = Q(U.default, x, d), Y = P ? x.map(e => e.id) : [], W = (0, u.useStateFromStoresArray)([E.default], () => E.default.getEmbeddedActivitiesForGuild(d).flatMap(e => Array.from(e.userIds)), [d]), z = (0, u.useStateFromStoresArray)([D.default], () => W.map(e => D.default.getUser(e)), [W]), Z = (0, u.useStateFromStoresArray)([D.default], () => y.map(e => D.default.getUser(e)), [y]), X = Q(w.default, S.filter(e => !y.includes(e.id) && !W.includes(e.id) && !Y.includes(e.id)), d);
        let J = (t = d, n = h, a = A, 0 === n.length ? null : (0, i.jsxs)("div", {
                className: K.row,
                children: [(0, i.jsx)(B.default, {
                    className: K.activityIcon
                }), (0, i.jsx)(V.default, {
                    guildId: t,
                    users: n,
                    max: 3
                }), (0, i.jsxs)("div", {
                    className: K.stageListenerPill,
                    children: [(0, i.jsx)(b.default, {
                        width: 16,
                        height: 16
                    }), (0, i.jsx)(c.Text, {
                        className: K.stageListenerCount,
                        color: "text-normal",
                        variant: "text-xs/normal",
                        children: a
                    })]
                })]
            })),
            $ = Q(k.default, Z.filter(e => null != e && !W.includes(e.id)), d),
            ee = Q(G.default, z, d),
            {
                isMuted: et,
                muteConfig: en
            } = (0, u.useStateFromStoresObject)([v.default], () => ({
                isMuted: v.default.isMuted(d),
                muteConfig: v.default.getMuteConfig(d)
            }), [d]);
        return null != H && F.default.trackExposure({
            location: "Guild Tooltip"
        }), (0, i.jsxs)(i.Fragment, {
            children: [J, X, $, P && H, ee, et ? (0, i.jsx)(q, {
                muteConfig: en,
                className: s()(K.muteText, {
                    [K.muteTextWithActivity]: null != X || null != $
                })
            }) : null]
        })
    }

    function $(e) {
        let {
            guildJoinRequestStatus: t
        } = e;
        return (0, i.jsx)(c.Text, {
            className: K.viewAsRolesWarning,
            color: "text-normal",
            variant: "text-xs/normal",
            children: function(e) {
                switch (e) {
                    case T.GuildJoinRequestApplicationStatuses.SUBMITTED:
                        return W.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_PENDING;
                    case T.GuildJoinRequestApplicationStatuses.REJECTED:
                        return W.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_REJECTED;
                    case T.GuildJoinRequestApplicationStatuses.APPROVED:
                        return W.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_APPROVED;
                    default:
                        return W.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_STARTED
                }
            }(t)
        })
    }

    function ee(e) {
        let {
            guild: t,
            includeActivity: n = !0
        } = e, r = (0, I.default)(t), a = (0, f.useCurrentUserGuildBadgeStatus)(t.id), o = null != a ? (0, i.jsx)($, {
            guildJoinRequestStatus: a
        }) : null, l = n ? (0, i.jsx)(J, {
            guild: t
        }) : null, d = (0, u.useStateFromStores)([h.default], () => h.default.isViewingRoles(t.id)), _ = (0, S.useShouldShowInvitesDisabledNotif)(t);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: s()(K.row, K.rowGuildName),
                children: [r ? (0, i.jsx)(P.default, {
                    guild: t,
                    size: X,
                    className: K.rowIconV2
                }) : (0, i.jsx)(y.default, {
                    guild: t,
                    size: Z,
                    className: K.rowIcon
                }), (0, i.jsx)("span", {
                    className: s()(K.guildNameText, {
                        [K.guildNameTextLimitedSize]: null != l
                    }),
                    children: t.toString()
                })]
            }), _ ? (0, i.jsx)(c.Text, {
                className: K.invitesDisabledTooltip,
                color: "header-secondary",
                variant: "text-sm/medium",
                children: W.default.Messages.INVITES_DISABLED_TOOLTIP
            }) : null, d ? (0, i.jsx)(c.Text, {
                className: K.viewAsRolesWarning,
                color: "text-normal",
                variant: "text-xs/normal",
                children: W.default.Messages.VIEW_AS_ROLES_MENTIONS_WARNING
            }) : null != o ? o : l]
        })
    }

    function et(e) {
        let {
            guild: t,
            disabled: n = !1,
            "aria-label": a = !1,
            children: s,
            includeActivity: o = !0,
            isDragging: l
        } = e, u = (0, H.useCanShowNewGuildTooltip)(), [_, E] = r.useState(!1), I = r.useRef(new d.DelayedCall(50, () => E(!1))), T = r.useCallback(() => {
            I.current.cancel(), E(!0)
        }, []), f = r.useCallback(() => {
            I.current.delay()
        }, []);
        return u && o ? (0, i.jsx)("div", {
            onMouseEnter: T,
            onMouseLeave: f,
            children: (0, i.jsx)(c.Popout, {
                position: "right",
                renderPopout: () => (0, i.jsx)(Y.default, {
                    guild: t,
                    closePopout: f
                }),
                spacing: 15,
                shouldShow: !l && _,
                children: e => (0, i.jsx)("div", {
                    ...e,
                    children: s
                })
            })
        }) : (0, i.jsx)(c.Tooltip, {
            hideOnClick: !0,
            spacing: 20,
            position: "right",
            text: n ? null : (0, i.jsx)(ee, {
                guild: t,
                includeActivity: o
            }),
            "aria-label": a,
            tooltipClassName: z.listItemTooltip,
            children: e => {
                let {
                    onFocus: t,
                    onBlur: n,
                    ...a
                } = e;
                return (0, i.jsx)("div", {
                    onFocus: t,
                    onBlur: n,
                    children: r.cloneElement(r.Children.only(s), {
                        ...a
                    })
                })
            }
        })
    }
}