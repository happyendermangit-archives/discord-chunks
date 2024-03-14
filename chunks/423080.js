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
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("446674"),
        d = n("769846"),
        c = n("77078"),
        f = n("191225"),
        p = n("51565"),
        m = n("567054"),
        h = n("5367"),
        x = n("100835"),
        E = n("38654"),
        y = n("319165"),
        g = n("488464"),
        S = n("998716"),
        C = n("170183"),
        I = n("689275"),
        T = n("373469"),
        _ = n("546463"),
        v = n("923959"),
        N = n("824563"),
        A = n("282109"),
        O = n("697218"),
        M = n("316133"),
        R = n("580357"),
        k = n("40469"),
        L = n("351368"),
        b = n("272339"),
        P = n("82636"),
        j = n("368121"),
        U = n("228427"),
        D = n("619911"),
        w = n("811305"),
        F = n("159885"),
        B = n("471374"),
        G = n("49111"),
        H = n("782340"),
        V = n("379333"),
        K = n("716175");
    let W = (0, F.cssValueToNumber)(d.default.GUILD_TOOLTIP_ICON_SIZE),
        Y = (0, F.cssValueToNumber)(d.default.GUILD_TOOLTIP_ICON_SIZE_V_2);

    function z(e, t, n) {
        return 0 === t.length ? null : (0, i.jsxs)("div", {
            className: V.row,
            children: [(0, i.jsx)(e, {
                className: V.activityIcon
            }), (0, i.jsx)(w.default, {
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
        return (null == t ? void 0 : t.end_time) == null ? (0, i.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: n,
            children: H.default.Messages.FORM_LABEL_MUTED
        }) : (0, i.jsx)(y.default, {
            muteConfig: t,
            className: n
        })
    }

    function J(e) {
        var t, n, a;
        let {
            guild: r
        } = e, d = r.id, p = (0, u.useStateFromStoresArray)([v.default, I.default], () => {
            let e = v.default.getChannels(d)[v.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return t.type === G.ChannelTypes.GUILD_VOICE
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return t.id
                }),
                t = Object.values(I.default.getThreadsForGuild(d)).flatMap(e => Object.keys(e));
            return [...e, ...t]
        }, [d]), m = (0, C.default)(d), h = l.useMemo(() => m.map(e => e.id), [m]), x = (0, u.useStateFromStores)([M.default], () => M.default.getVoiceStates(d), [d]), E = o.flatMap(p, e => {
            var t;
            if (e === r.afkChannelId) return [];
            let n = null !== (t = x[e]) && void 0 !== t ? t : [];
            return n.map(e => {
                let {
                    user: t
                } = e;
                return t
            })
        }), y = (0, u.useStateFromStoresArray)([g.default], () => o.flatMap(h, e => {
            if (e === r.afkChannelId) return [];
            let t = g.default.getMutableParticipants(e, S.StageChannelParticipantNamedIndex.SPEAKER);
            return t.filter(e => e.type === S.StageChannelParticipantTypes.VOICE).map(e => {
                let {
                    user: t
                } = e;
                return t
            })
        })), R = (0, u.useStateFromStores)([g.default], () => {
            let e = 0;
            for (let t of h) e += g.default.getParticipantCount(t, S.StageChannelParticipantNamedIndex.AUDIENCE);
            return e
        }), k = (0, u.useStateFromStoresArray)([T.default], () => T.default.getAllApplicationStreams().filter(e => e.guildId === d).map(e => e.ownerId), [d]), F = (0, B.useIsGamingVoiceActivityEnabled)("Guild Tooltip", !1), H = (0, u.useStateFromStoresArray)([N.default, _.default], () => E.filter(e => N.default.getActivities(e.id, d).some(e => (null == e ? void 0 : e.application_id) != null && null != _.default.getDetectableGame(null == e ? void 0 : e.application_id)))), K = z(L.default, H, d), W = F ? H.map(e => e.id) : [], Y = (0, u.useStateFromStoresArray)([f.default], () => f.default.getEmbeddedActivitiesForGuild(d).flatMap(e => Array.from(e.userIds)), [d]), J = (0, u.useStateFromStoresArray)([O.default], () => Y.map(e => O.default.getUser(e)), [Y]), q = (0, u.useStateFromStoresArray)([O.default], () => k.map(e => O.default.getUser(e)), [k]), X = z(j.default, E.filter(e => !k.includes(e.id) && !Y.includes(e.id) && !W.includes(e.id)), d);
        let Q = (t = d, n = y, a = R, 0 === n.length ? null : (0, i.jsxs)("div", {
                className: V.row,
                children: [(0, i.jsx)(U.default, {
                    className: V.activityIcon
                }), (0, i.jsx)(w.default, {
                    guildId: t,
                    users: n,
                    max: 3
                }), (0, i.jsxs)("div", {
                    className: V.stageListenerPill,
                    children: [(0, i.jsx)(b.default, {
                        width: 16,
                        height: 16
                    }), (0, i.jsx)(c.Text, {
                        className: V.stageListenerCount,
                        color: "text-normal",
                        variant: "text-xs/normal",
                        children: a
                    })]
                })]
            })),
            $ = z(D.default, q.filter(e => null != e && !Y.includes(e.id)), d),
            ee = z(P.default, J, d),
            {
                isMuted: et,
                muteConfig: en
            } = (0, u.useStateFromStoresObject)([A.default], () => ({
                isMuted: A.default.isMuted(d),
                muteConfig: A.default.getMuteConfig(d)
            }), [d]);
        return null != K && B.default.trackExposure({
            location: "Guild Tooltip"
        }), (0, i.jsxs)(i.Fragment, {
            children: [Q, X, $, F && K, ee, et ? (0, i.jsx)(Z, {
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
        return (0, i.jsx)(c.Text, {
            className: V.viewAsRolesWarning,
            color: "text-normal",
            variant: "text-xs/normal",
            children: function(e) {
                switch (e) {
                    case m.GuildJoinRequestApplicationStatuses.SUBMITTED:
                        return H.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_PENDING;
                    case m.GuildJoinRequestApplicationStatuses.REJECTED:
                        return H.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_REJECTED;
                    case m.GuildJoinRequestApplicationStatuses.APPROVED:
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
        } = e, l = (0, p.default)(t), a = (0, h.useCurrentUserGuildBadgeStatus)(t.id), r = null != a ? (0, i.jsx)(q, {
            guildJoinRequestStatus: a
        }) : null, o = n ? (0, i.jsx)(J, {
            guild: t
        }) : null, d = (0, u.useStateFromStores)([E.default], () => E.default.isViewingRoles(t.id)), f = (0, x.useShouldShowInvitesDisabledNotif)(t);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: s(V.row, V.rowGuildName),
                children: [l ? (0, i.jsx)(k.default, {
                    guild: t,
                    size: Y,
                    className: V.rowIconV2
                }) : (0, i.jsx)(R.default, {
                    guild: t,
                    size: W,
                    className: V.rowIcon
                }), (0, i.jsx)("span", {
                    className: s(V.guildNameText, {
                        [V.guildNameTextLimitedSize]: null != o
                    }),
                    children: t.toString()
                })]
            }), f ? (0, i.jsx)(c.Text, {
                className: V.invitesDisabledTooltip,
                color: "header-secondary",
                variant: "text-sm/medium",
                children: H.default.Messages.INVITES_DISABLED_TOOLTIP
            }) : null, d ? (0, i.jsx)(c.Text, {
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
        return (0, i.jsx)(c.Tooltip, {
            hideOnClick: !0,
            spacing: 20,
            position: "right",
            text: n ? null : (0, i.jsx)(X, {
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
                return (0, i.jsx)("div", {
                    onFocus: t,
                    onBlur: n,
                    children: l.cloneElement(l.Children.only(s), {
                        ...a
                    })
                })
            }
        })
    }
}