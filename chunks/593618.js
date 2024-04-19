function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildTooltipText: function() {
            return $
        },
        default: function() {
            return ee
        }
    }), n("390547"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
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
        h = n("777861"),
        A = n("565799"),
        m = n("501655"),
        N = n("517334"),
        p = n("344185"),
        O = n("199902"),
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
        B = n("761374"),
        k = n("602623"),
        F = n("624138"),
        V = n("510601"),
        x = n("59688"),
        H = n("456774"),
        Y = n("981631"),
        j = n("689938"),
        W = n("499890"),
        K = n("337341");
    let z = (0, F.cssValueToNumber)(d.default.GUILD_TOOLTIP_ICON_SIZE),
        X = (0, F.cssValueToNumber)(d.default.GUILD_TOOLTIP_ICON_SIZE_V_2);

    function Q(e, t, n) {
        return 0 === t.length ? null : (0, i.jsxs)("div", {
            className: W.row,
            children: [(0, i.jsx)(e, {
                className: W.activityIcon
            }), (0, i.jsx)(k.default, {
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
        return (null == t ? void 0 : t.end_time) == null ? (0, i.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: n,
            children: j.default.Messages.FORM_LABEL_MUTED
        }) : (0, i.jsx)(h.default, {
            muteConfig: t,
            className: n
        })
    }

    function Z(e) {
        var t, n, s;
        let {
            guild: o
        } = e, d = o.id, E = (0, u.useStateFromStoresArray)([C.default, p.default], () => {
            let e = C.default.getChannels(d)[C.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
                let {
                    channel: t
                } = e;
                return t.type === Y.ChannelTypes.GUILD_VOICE
            }).map(e => {
                let {
                    channel: t
                } = e;
                return t.id
            });
            return [...e, ...Object.values(p.default.getThreadsForGuild(d)).flatMap(e => Object.keys(e))]
        }, [d]), I = (0, N.default)(d), T = r.useMemo(() => I.map(e => e.id), [I]), f = (0, u.useStateFromStores)([v.default], () => v.default.getVoiceStates(d), [d]), S = l().flatMap(E, e => {
            var t;
            return e === o.afkChannelId ? [] : (null !== (t = f[e]) && void 0 !== t ? t : []).map(e => {
                let {
                    user: t
                } = e;
                return t
            })
        }), h = (0, u.useStateFromStoresArray)([A.default], () => l().flatMap(T, e => e === o.afkChannelId ? [] : A.default.getMutableParticipants(e, m.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === m.StageChannelParticipantTypes.VOICE).map(e => {
            let {
                user: t
            } = e;
            return t
        }))), M = (0, u.useStateFromStores)([A.default], () => {
            let e = 0;
            for (let t of T) e += A.default.getParticipantCount(t, m.StageChannelParticipantNamedIndex.AUDIENCE);
            return e
        }), y = (0, u.useStateFromStoresArray)([O.default], () => O.default.getAllApplicationStreams().filter(e => e.guildId === d).map(e => e.ownerId), [d]), F = (0, V.useIsGamingVoiceActivityEnabled)("Guild Tooltip", !1), x = (0, u.useStateFromStoresArray)([g.default, R.default], () => S.filter(e => g.default.getActivities(e.id, d).some(e => (null == e ? void 0 : e.application_id) != null && null != R.default.getDetectableGame(null == e ? void 0 : e.application_id)))), H = Q(P.default, x, d), j = F ? x.map(e => e.id) : [], K = (0, u.useStateFromStoresArray)([c.default], () => c.default.getEmbeddedActivitiesForGuild(d).flatMap(e => Array.from(e.userIds)), [d]), z = (0, u.useStateFromStoresArray)([D.default], () => K.map(e => D.default.getUser(e)), [K]), X = (0, u.useStateFromStoresArray)([D.default], () => y.map(e => D.default.getUser(e)), [y]), Z = Q(G.default, S.filter(e => !y.includes(e.id) && !K.includes(e.id) && !j.includes(e.id)), d);
        let J = (t = d, n = h, s = M, 0 === n.length ? null : (0, i.jsxs)("div", {
                className: W.row,
                children: [(0, i.jsx)(w.default, {
                    className: W.activityIcon
                }), (0, i.jsx)(k.default, {
                    guildId: t,
                    users: n,
                    max: 3
                }), (0, i.jsxs)("div", {
                    className: W.stageListenerPill,
                    children: [(0, i.jsx)(U.default, {
                        width: 16,
                        height: 16
                    }), (0, i.jsx)(_.Text, {
                        className: W.stageListenerCount,
                        color: "text-normal",
                        variant: "text-xs/normal",
                        children: s
                    })]
                })]
            })),
            $ = Q(B.default, X.filter(e => null != e && !K.includes(e.id)), d),
            ee = Q(b.default, z, d),
            {
                isMuted: et,
                muteConfig: en
            } = (0, u.useStateFromStoresObject)([L.default], () => ({
                isMuted: L.default.isMuted(d),
                muteConfig: L.default.getMuteConfig(d)
            }), [d]);
        return null != H && V.default.trackExposure({
            location: "Guild Tooltip"
        }), (0, i.jsxs)(i.Fragment, {
            children: [J, Z, $, F && H, ee, et ? (0, i.jsx)(q, {
                muteConfig: en,
                className: a()(W.muteText, {
                    [W.muteTextWithActivity]: null != Z || null != $
                })
            }) : null]
        })
    }

    function J(e) {
        let {
            guildJoinRequestStatus: t
        } = e;
        return (0, i.jsx)(_.Text, {
            className: W.viewAsRolesWarning,
            color: "text-normal",
            variant: "text-xs/normal",
            children: function(e) {
                switch (e) {
                    case I.GuildJoinRequestApplicationStatuses.SUBMITTED:
                        return j.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_PENDING;
                    case I.GuildJoinRequestApplicationStatuses.REJECTED:
                        return j.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_REJECTED;
                    case I.GuildJoinRequestApplicationStatuses.APPROVED:
                        return j.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_APPROVED;
                    default:
                        return j.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_STARTED
                }
            }(t)
        })
    }

    function $(e) {
        let {
            guild: t,
            includeActivity: n = !0
        } = e, r = (0, E.default)(t), s = (0, T.useCurrentUserGuildBadgeStatus)(t.id), o = null != s ? (0, i.jsx)(J, {
            guildJoinRequestStatus: s
        }) : null, l = n ? (0, i.jsx)(Z, {
            guild: t
        }) : null, d = (0, u.useStateFromStores)([S.default], () => S.default.isViewingRoles(t.id)), c = (0, f.useShouldShowInvitesDisabledNotif)(t);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: a()(W.row, W.rowGuildName),
                children: [r ? (0, i.jsx)(y.default, {
                    guild: t,
                    size: X,
                    className: W.rowIconV2
                }) : (0, i.jsx)(M.default, {
                    guild: t,
                    size: z,
                    className: W.rowIcon
                }), (0, i.jsx)("span", {
                    className: a()(W.guildNameText, {
                        [W.guildNameTextLimitedSize]: null != l
                    }),
                    children: t.toString()
                })]
            }), c ? (0, i.jsx)(_.Text, {
                className: W.invitesDisabledTooltip,
                color: "header-secondary",
                variant: "text-sm/medium",
                children: j.default.Messages.INVITES_DISABLED_TOOLTIP
            }) : null, d ? (0, i.jsx)(_.Text, {
                className: W.viewAsRolesWarning,
                color: "text-normal",
                variant: "text-xs/normal",
                children: j.default.Messages.VIEW_AS_ROLES_MENTIONS_WARNING
            }) : null != o ? o : l]
        })
    }

    function ee(e) {
        let {
            guild: t,
            disabled: n = !1,
            "aria-label": s = !1,
            children: a,
            includeActivity: o,
            isHovered: l
        } = e;
        return (0, x.useCanShowNewGuildTooltip)() ? (0, i.jsx)(_.Popout, {
            position: "right",
            renderPopout: () => (0, i.jsx)(H.default, {
                guild: t
            }),
            spacing: 20,
            shouldShow: l,
            children: e => (0, i.jsx)("div", {
                ...e,
                children: a
            })
        }) : (0, i.jsx)(_.Tooltip, {
            hideOnClick: !0,
            spacing: 20,
            position: "right",
            text: n ? null : (0, i.jsx)($, {
                guild: t,
                includeActivity: o
            }),
            "aria-label": s,
            tooltipClassName: K.listItemTooltip,
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