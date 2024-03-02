function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildTooltipText: function() {
            return X
        },
        default: function() {
            return Q
        }
    }), n("881410"), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("446674"),
        d = n("769846"),
        c = n("77078"),
        f = n("191225"),
        m = n("51565"),
        p = n("567054"),
        h = n("5367"),
        E = n("100835"),
        g = n("38654"),
        C = n("319165"),
        S = n("488464"),
        T = n("998716"),
        I = n("170183"),
        v = n("689275"),
        _ = n("373469"),
        N = n("546463"),
        A = n("923959"),
        x = n("824563"),
        y = n("282109"),
        O = n("697218"),
        R = n("316133"),
        M = n("580357"),
        L = n("40469"),
        P = n("351368"),
        b = n("272339"),
        j = n("82636"),
        U = n("368121"),
        D = n("228427"),
        k = n("619911"),
        w = n("811305"),
        F = n("159885"),
        G = n("471374"),
        B = n("49111"),
        H = n("782340"),
        V = n("379333"),
        K = n("716175");
    let W = (0, F.cssValueToNumber)(d.default.GUILD_TOOLTIP_ICON_SIZE),
        Y = (0, F.cssValueToNumber)(d.default.GUILD_TOOLTIP_ICON_SIZE_V_2);

    function z(e, t, n) {
        return 0 === t.length ? null : (0, l.jsxs)("div", {
            className: V.row,
            children: [(0, l.jsx)(e, {
                className: V.activityIcon
            }), (0, l.jsx)(w.default, {
                guildId: n,
                users: t,
                max: 6
            })]
        })
    }

    function Z(e) {
        let {
            muteConfig: t,
            className: n
        } = e;
        return (null == t ? void 0 : t.end_time) == null ? (0, l.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: n,
            children: H.default.Messages.FORM_LABEL_MUTED
        }) : (0, l.jsx)(C.default, {
            muteConfig: t,
            className: n
        })
    }

    function J(e) {
        var t, n, a;
        let {
            guild: r
        } = e, d = r.id, m = (0, u.useStateFromStoresArray)([A.default, v.default], () => {
            let e = A.default.getChannels(d)[A.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return t.type === B.ChannelTypes.GUILD_VOICE
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return t.id
                }),
                t = Object.values(v.default.getThreadsForGuild(d)).flatMap(e => Object.keys(e));
            return [...e, ...t]
        }, [d]), p = (0, I.default)(d), h = i.useMemo(() => p.map(e => e.id), [p]), E = (0, u.useStateFromStores)([R.default], () => R.default.getVoiceStates(d), [d]), g = o.flatMap(m, e => {
            var t;
            if (e === r.afkChannelId) return [];
            let n = null !== (t = E[e]) && void 0 !== t ? t : [];
            return n.map(e => {
                let {
                    user: t
                } = e;
                return t
            })
        }), C = (0, u.useStateFromStoresArray)([S.default], () => o.flatMap(h, e => {
            if (e === r.afkChannelId) return [];
            let t = S.default.getMutableParticipants(e, T.StageChannelParticipantNamedIndex.SPEAKER);
            return t.filter(e => e.type === T.StageChannelParticipantTypes.VOICE).map(e => {
                let {
                    user: t
                } = e;
                return t
            })
        })), M = (0, u.useStateFromStores)([S.default], () => {
            let e = 0;
            for (let t of h) e += S.default.getParticipantCount(t, T.StageChannelParticipantNamedIndex.AUDIENCE);
            return e
        }), L = (0, u.useStateFromStoresArray)([_.default], () => _.default.getAllApplicationStreams().filter(e => e.guildId === d).map(e => e.ownerId), [d]), F = (0, G.useIsGamingVoiceActivityEnabled)("Guild Tooltip", !1), H = (0, u.useStateFromStoresArray)([x.default, N.default], () => g.filter(e => x.default.getActivities(e.id, d).some(e => (null == e ? void 0 : e.application_id) != null && null != N.default.getDetectableGame(null == e ? void 0 : e.application_id)))), K = z(P.default, H, d), W = F ? H.map(e => e.id) : [], Y = (0, u.useStateFromStoresArray)([f.default], () => f.default.getEmbeddedActivitiesForGuild(d).flatMap(e => Array.from(e.userIds)), [d]), J = (0, u.useStateFromStoresArray)([O.default], () => Y.map(e => O.default.getUser(e)), [Y]), q = (0, u.useStateFromStoresArray)([O.default], () => L.map(e => O.default.getUser(e)), [L]), X = z(U.default, g.filter(e => !L.includes(e.id) && !Y.includes(e.id) && !W.includes(e.id)), d);
        let Q = (t = d, n = C, a = M, 0 === n.length ? null : (0, l.jsxs)("div", {
                className: V.row,
                children: [(0, l.jsx)(D.default, {
                    className: V.activityIcon
                }), (0, l.jsx)(w.default, {
                    guildId: t,
                    users: n,
                    max: 3
                }), (0, l.jsxs)("div", {
                    className: V.stageListenerPill,
                    children: [(0, l.jsx)(b.default, {
                        width: 16,
                        height: 16
                    }), (0, l.jsx)(c.Text, {
                        className: V.stageListenerCount,
                        color: "text-normal",
                        variant: "text-xs/normal",
                        children: a
                    })]
                })]
            })),
            $ = z(k.default, q.filter(e => null != e && !Y.includes(e.id)), d),
            ee = z(j.default, J, d),
            {
                isMuted: et,
                muteConfig: en
            } = (0, u.useStateFromStoresObject)([y.default], () => ({
                isMuted: y.default.isMuted(d),
                muteConfig: y.default.getMuteConfig(d)
            }), [d]);
        return null != K && G.default.trackExposure({
            location: "Guild Tooltip"
        }), (0, l.jsxs)(l.Fragment, {
            children: [Q, X, $, F && K, ee, et ? (0, l.jsx)(Z, {
                muteConfig: en,
                className: s(V.muteText, {
                    [V.muteTextWithActivity]: null != X || null != $
                })
            }) : null]
        })
    }

    function q(e) {
        let {
            guildJoinRequestStatus: t
        } = e;
        return (0, l.jsx)(c.Text, {
            className: V.viewAsRolesWarning,
            color: "text-normal",
            variant: "text-xs/normal",
            children: function(e) {
                switch (e) {
                    case p.GuildJoinRequestApplicationStatuses.SUBMITTED:
                        return H.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_PENDING;
                    case p.GuildJoinRequestApplicationStatuses.REJECTED:
                        return H.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_REJECTED;
                    case p.GuildJoinRequestApplicationStatuses.APPROVED:
                        return H.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_APPROVED;
                    default:
                        return H.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_STARTED
                }
            }(t)
        })
    }

    function X(e) {
        let {
            guild: t,
            includeActivity: n = !0
        } = e, i = (0, m.default)(t), a = (0, h.useCurrentUserGuildBadgeStatus)(t.id), r = null != a ? (0, l.jsx)(q, {
            guildJoinRequestStatus: a
        }) : null, o = n ? (0, l.jsx)(J, {
            guild: t
        }) : null, d = (0, u.useStateFromStores)([g.default], () => g.default.isViewingRoles(t.id)), f = (0, E.useShouldShowInvitesDisabledNotif)(t);
        return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)("div", {
                className: s(V.row, V.rowGuildName),
                children: [i ? (0, l.jsx)(L.default, {
                    guild: t,
                    size: Y,
                    className: V.rowIconV2
                }) : (0, l.jsx)(M.default, {
                    guild: t,
                    size: W,
                    className: V.rowIcon
                }), (0, l.jsx)("span", {
                    className: s(V.guildNameText, {
                        [V.guildNameTextLimitedSize]: null != o
                    }),
                    children: t.toString()
                })]
            }), f ? (0, l.jsx)(c.Text, {
                className: V.invitesDisabledTooltip,
                color: "header-secondary",
                variant: "text-sm/medium",
                children: H.default.Messages.INVITES_DISABLED_TOOLTIP
            }) : null, d ? (0, l.jsx)(c.Text, {
                className: V.viewAsRolesWarning,
                color: "text-normal",
                variant: "text-xs/normal",
                children: H.default.Messages.VIEW_AS_ROLES_MENTIONS_WARNING
            }) : null != r ? r : o]
        })
    }

    function Q(e) {
        let {
            guild: t,
            disabled: n = !1,
            "aria-label": a = !1,
            children: s,
            includeActivity: r
        } = e;
        return (0, l.jsx)(c.Tooltip, {
            hideOnClick: !0,
            spacing: 20,
            position: "right",
            text: n ? null : (0, l.jsx)(X, {
                guild: t,
                includeActivity: r
            }),
            "aria-label": a,
            tooltipClassName: K.listItemTooltip,
            children: e => {
                let {
                    onFocus: t,
                    onBlur: n,
                    ...a
                } = e;
                return (0, l.jsx)("div", {
                    onFocus: t,
                    onBlur: n,
                    children: i.cloneElement(i.Children.only(s), {
                        ...a
                    })
                })
            }
        })
    }
}