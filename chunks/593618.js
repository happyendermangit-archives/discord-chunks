function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildTooltipText: function() {
            return J
        },
        default: function() {
            return Z
        }
    }), n("390547"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("477690"),
        _ = n("481060"),
        c = n("317381"),
        E = n("666188"),
        I = n("246364"),
        T = n("746916"),
        f = n("965638"),
        S = n("160404"),
        A = n("777861"),
        h = n("565799"),
        m = n("501655"),
        N = n("517334"),
        O = n("344185"),
        p = n("199902"),
        R = n("77498"),
        C = n("984933"),
        g = n("158776"),
        L = n("9156"),
        D = n("594174"),
        v = n("938475"),
        M = n("940627"),
        y = n("705600"),
        P = n("737688"),
        U = n("242315"),
        b = n("944581"),
        G = n("632184"),
        w = n("170039"),
        k = n("761374"),
        B = n("602623"),
        V = n("624138"),
        F = n("510601"),
        x = n("981631"),
        H = n("689938"),
        Y = n("499890"),
        j = n("337341");
    let W = (0, V.cssValueToNumber)(d.default.GUILD_TOOLTIP_ICON_SIZE),
        K = (0, V.cssValueToNumber)(d.default.GUILD_TOOLTIP_ICON_SIZE_V_2);

    function z(e, t, n) {
        return 0 === t.length ? null : (0, i.jsxs)("div", {
            className: Y.row,
            children: [(0, i.jsx)(e, {
                className: Y.activityIcon
            }), (0, i.jsx)(B.default, {
                guildId: n,
                users: t,
                max: 6
            })]
        })
    }

    function X(e) {
        let {
            muteConfig: t,
            className: n
        } = e;
        return (null == t ? void 0 : t.end_time) == null ? (0, i.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: n,
            children: H.default.Messages.FORM_LABEL_MUTED
        }) : (0, i.jsx)(A.default, {
            muteConfig: t,
            className: n
        })
    }

    function Q(e) {
        var t, n, s;
        let {
            guild: o
        } = e, d = o.id, E = (0, u.useStateFromStoresArray)([C.default, O.default], () => {
            let e = C.default.getChannels(d)[C.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
                let {
                    channel: t
                } = e;
                return t.type === x.ChannelTypes.GUILD_VOICE
            }).map(e => {
                let {
                    channel: t
                } = e;
                return t.id
            });
            return [...e, ...Object.values(O.default.getThreadsForGuild(d)).flatMap(e => Object.keys(e))]
        }, [d]), I = (0, N.default)(d), T = r.useMemo(() => I.map(e => e.id), [I]), f = (0, u.useStateFromStores)([v.default], () => v.default.getVoiceStates(d), [d]), S = l().flatMap(E, e => {
            var t;
            return e === o.afkChannelId ? [] : (null !== (t = f[e]) && void 0 !== t ? t : []).map(e => {
                let {
                    user: t
                } = e;
                return t
            })
        }), A = (0, u.useStateFromStoresArray)([h.default], () => l().flatMap(T, e => e === o.afkChannelId ? [] : h.default.getMutableParticipants(e, m.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === m.StageChannelParticipantTypes.VOICE).map(e => {
            let {
                user: t
            } = e;
            return t
        }))), M = (0, u.useStateFromStores)([h.default], () => {
            let e = 0;
            for (let t of T) e += h.default.getParticipantCount(t, m.StageChannelParticipantNamedIndex.AUDIENCE);
            return e
        }), y = (0, u.useStateFromStoresArray)([p.default], () => p.default.getAllApplicationStreams().filter(e => e.guildId === d).map(e => e.ownerId), [d]), V = (0, F.useIsGamingVoiceActivityEnabled)("Guild Tooltip", !1), H = (0, u.useStateFromStoresArray)([g.default, R.default], () => S.filter(e => g.default.getActivities(e.id, d).some(e => (null == e ? void 0 : e.application_id) != null && null != R.default.getDetectableGame(null == e ? void 0 : e.application_id)))), j = z(P.default, H, d), W = V ? H.map(e => e.id) : [], K = (0, u.useStateFromStoresArray)([c.default], () => c.default.getEmbeddedActivitiesForGuild(d).flatMap(e => Array.from(e.userIds)), [d]), Q = (0, u.useStateFromStoresArray)([D.default], () => K.map(e => D.default.getUser(e)), [K]), q = (0, u.useStateFromStoresArray)([D.default], () => y.map(e => D.default.getUser(e)), [y]), J = z(G.default, S.filter(e => !y.includes(e.id) && !K.includes(e.id) && !W.includes(e.id)), d);
        let Z = (t = d, n = A, s = M, 0 === n.length ? null : (0, i.jsxs)("div", {
                className: Y.row,
                children: [(0, i.jsx)(w.default, {
                    className: Y.activityIcon
                }), (0, i.jsx)(B.default, {
                    guildId: t,
                    users: n,
                    max: 3
                }), (0, i.jsxs)("div", {
                    className: Y.stageListenerPill,
                    children: [(0, i.jsx)(U.default, {
                        width: 16,
                        height: 16
                    }), (0, i.jsx)(_.Text, {
                        className: Y.stageListenerCount,
                        color: "text-normal",
                        variant: "text-xs/normal",
                        children: s
                    })]
                })]
            })),
            $ = z(k.default, q.filter(e => null != e && !K.includes(e.id)), d),
            ee = z(b.default, Q, d),
            {
                isMuted: et,
                muteConfig: en
            } = (0, u.useStateFromStoresObject)([L.default], () => ({
                isMuted: L.default.isMuted(d),
                muteConfig: L.default.getMuteConfig(d)
            }), [d]);
        return null != j && F.default.trackExposure({
            location: "Guild Tooltip"
        }), (0, i.jsxs)(i.Fragment, {
            children: [Z, J, $, V && j, ee, et ? (0, i.jsx)(X, {
                muteConfig: en,
                className: a()(Y.muteText, {
                    [Y.muteTextWithActivity]: null != J || null != $
                })
            }) : null]
        })
    }

    function q(e) {
        let {
            guildJoinRequestStatus: t
        } = e;
        return (0, i.jsx)(_.Text, {
            className: Y.viewAsRolesWarning,
            color: "text-normal",
            variant: "text-xs/normal",
            children: function(e) {
                switch (e) {
                    case I.GuildJoinRequestApplicationStatuses.SUBMITTED:
                        return H.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_PENDING;
                    case I.GuildJoinRequestApplicationStatuses.REJECTED:
                        return H.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_REJECTED;
                    case I.GuildJoinRequestApplicationStatuses.APPROVED:
                        return H.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_APPROVED;
                    default:
                        return H.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_STARTED
                }
            }(t)
        })
    }

    function J(e) {
        let {
            guild: t,
            includeActivity: n = !0
        } = e, r = (0, E.default)(t), s = (0, T.useCurrentUserGuildBadgeStatus)(t.id), o = null != s ? (0, i.jsx)(q, {
            guildJoinRequestStatus: s
        }) : null, l = n ? (0, i.jsx)(Q, {
            guild: t
        }) : null, d = (0, u.useStateFromStores)([S.default], () => S.default.isViewingRoles(t.id)), c = (0, f.useShouldShowInvitesDisabledNotif)(t);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: a()(Y.row, Y.rowGuildName),
                children: [r ? (0, i.jsx)(y.default, {
                    guild: t,
                    size: K,
                    className: Y.rowIconV2
                }) : (0, i.jsx)(M.default, {
                    guild: t,
                    size: W,
                    className: Y.rowIcon
                }), (0, i.jsx)("span", {
                    className: a()(Y.guildNameText, {
                        [Y.guildNameTextLimitedSize]: null != l
                    }),
                    children: t.toString()
                })]
            }), c ? (0, i.jsx)(_.Text, {
                className: Y.invitesDisabledTooltip,
                color: "header-secondary",
                variant: "text-sm/medium",
                children: H.default.Messages.INVITES_DISABLED_TOOLTIP
            }) : null, d ? (0, i.jsx)(_.Text, {
                className: Y.viewAsRolesWarning,
                color: "text-normal",
                variant: "text-xs/normal",
                children: H.default.Messages.VIEW_AS_ROLES_MENTIONS_WARNING
            }) : null != o ? o : l]
        })
    }

    function Z(e) {
        let {
            guild: t,
            disabled: n = !1,
            "aria-label": s = !1,
            children: a,
            includeActivity: o
        } = e;
        return (0, i.jsx)(_.Tooltip, {
            hideOnClick: !0,
            spacing: 20,
            position: "right",
            text: n ? null : (0, i.jsx)(J, {
                guild: t,
                includeActivity: o
            }),
            "aria-label": s,
            tooltipClassName: j.listItemTooltip,
            children: e => {
                let {
                    onFocus: t,
                    onBlur: n,
                    ...s
                } = e;
                return (0, i.jsx)("div", {
                    onFocus: t,
                    onBlur: n,
                    children: r.cloneElement(r.Children.only(a), {
                        ...s
                    })
                })
            }
        })
    }
}