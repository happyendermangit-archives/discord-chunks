function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return U
        }
    }), i("834022"), i("222007");
    var l = i("37983"),
        r = i("884691"),
        n = i("627445"),
        a = i.n(n),
        s = i("917351"),
        o = i.n(s),
        d = i("446674"),
        c = i("669491"),
        h = i("819855"),
        u = i("77078"),
        f = i("851387"),
        x = i("308289"),
        m = i("841098"),
        g = i("376556"),
        j = i("716241"),
        w = i("401642"),
        p = i("766274"),
        v = i("26989"),
        C = i("79798"),
        N = i("36694"),
        y = i("599110"),
        T = i("535013"),
        E = i("562368"),
        I = i("216049"),
        _ = i("339023"),
        O = i("526190"),
        M = i("685058"),
        S = i("214509"),
        A = i("49111"),
        R = i("590456"),
        P = i("782340"),
        b = i("48639");

    function L(t) {
        let e, {
            connectionType: i,
            connectionMetadataField: r,
            operator: n,
            value: a,
            description: s
        } = t;
        if (null != s) switch (n) {
            case S.OperatorTypes.LESS_THAN:
                e = P.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                    description: s,
                    count: Math.max(0, Number(a) - 1)
                });
                break;
            case S.OperatorTypes.GREATER_THAN:
                e = P.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                    description: s,
                    count: Math.max(0, Number(a) + 1)
                });
                break;
            default:
                e = s
        } else e = (0, T.getConnectionsCheckText)({
            connectionType: i,
            connectionMetadataField: r,
            operator: n,
            value: a
        });
        return null == e ? null : (0, l.jsxs)("div", {
            className: b.popoutCheck,
            children: [(0, l.jsx)(N.default, {
                className: b.popoutCheckIcon
            }), (0, l.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "header-primary",
                children: e
            })]
        })
    }

    function B(t) {
        let {
            eligibilityStates: e
        } = t, i = (0, m.default)(), r = (0, u.useToken)(c.default.unsafe_rawColors.GREEN_330).hex(), n = o.groupBy(e, t => "".concat(t.connection_type).concat(null != t.application_id ? ":".concat(t.application_id) : ""));
        return (0, l.jsx)(l.Fragment, {
            children: Object.keys(n).map(t => {
                var e, s;
                let o;
                let d = n[t],
                    c = d.filter(t => null != t.operator),
                    f = d.find(t => null != t.application),
                    m = g.default.get(t),
                    j = null == f ? void 0 : f.application,
                    w = (null == j ? void 0 : j.bot) != null ? new p.default(j.bot) : null,
                    v = T.officialApplicationIds.includes(null !== (e = null == j ? void 0 : j.id) && void 0 !== e ? e : "");
                return v ? o = (0, l.jsx)(O.default, {
                    className: b.botTag,
                    color: r,
                    size: 16
                }) : null != w && (o = (0, l.jsx)(C.default, {
                    className: b.botTag,
                    verified: w.isVerifiedBot()
                })), (0, l.jsxs)("div", {
                    className: b.popoutChecksGroup,
                    children: [(0, l.jsxs)("div", {
                        className: b.popoutCheckGroupName,
                        children: [null != m ? (0, l.jsx)("img", {
                            src: (0, h.isThemeDark)(i) ? m.icon.darkSVG : m.icon.lightSVG,
                            alt: "",
                            className: b.popoutCheckGroupPlatformIcon
                        }) : null, null != w ? (0, l.jsx)(x.default, {
                            user: w,
                            size: u.AvatarSizes.SIZE_20,
                            className: b.popoutCheckGroupPlatformIcon
                        }) : null, (0, l.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            color: "interactive-active",
                            children: null !== (s = null == m ? void 0 : m.name) && void 0 !== s ? s : null == j ? void 0 : j.name
                        }), o]
                    }), c.map(t => {
                        let {
                            connection_type: e,
                            connection_metadata_field: i,
                            operator: r,
                            value: n,
                            description: s
                        } = t;
                        return a(null != i, "connectionMetadataField is null"), a(null != r, "operator is null"), a(null != n, "value is null"), (0, l.jsx)(L, {
                            connectionType: e,
                            connectionMetadataField: i,
                            operator: r,
                            value: n,
                            description: s
                        }, "".concat(e, ":").concat(i, ":").concat(r, ":").concat(n))
                    })]
                }, t)
            })
        })
    }

    function D(t) {
        let e, {
            onGetRolesClicked: i,
            onOpenProfile: n,
            eligibilityStates: a,
            userId: s,
            roleId: o,
            channelId: c,
            guildId: h
        } = t;
        r.useEffect(() => {
            y.default.track(A.AnalyticEvents.PASSPORT_ROLE_POPOUT_VIEWED, {
                other_user_id: s,
                role_id: o,
                ...(0, j.collectChannelAnalyticsMetadataFromId)(c),
                ...(0, j.collectGuildAnalyticsMetadata)(h)
            })
        }, [s, o, c, h]);
        let f = (0, d.useStateFromStores)([v.default], () => {
            var t, e;
            return null !== (e = null === (t = v.default.getSelfMember(h)) || void 0 === t ? void 0 : t.roles.includes(o)) && void 0 !== e && e
        }, [h, o]);
        return e = 1 === a.length && 1 === a[0].length ? P.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ONE : 1 === a.length ? P.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ALL.format() : P.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_OR.format(), (0, l.jsxs)("div", {
            className: b.popout,
            children: [(0, l.jsx)("div", {
                className: b.popoutHeaderContainer,
                children: (0, l.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: "text-normal",
                    className: b.popoutHeaderText,
                    children: e
                })
            }), (0, l.jsx)("div", {
                className: b.popoutChecks,
                children: (0, l.jsx)(B, {
                    eligibilityStates: a.flat()
                })
            }), (0, l.jsxs)("div", {
                className: b.buttonContainer,
                children: [f ? null : (0, l.jsx)(u.Button, {
                    className: b.getRolesButton,
                    onClick: i,
                    children: P.default.Messages.CONNECTIONS_ROLE_POPOUT_GET_ROLES
                }), (0, l.jsx)(u.Button, {
                    className: b.viewConnectionsButton,
                    color: u.Button.Colors.PRIMARY,
                    onClick: n,
                    children: P.default.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_CONNECTIONS
                })]
            })]
        })
    }

    function U(t) {
        let {
            userId: e,
            guild: i,
            channel: n
        } = t, s = (0, I.default)(i, e, n.id, !0), o = (0, d.useStateFromStores)([E.default], () => E.default.getGuildRoleConnectionEligibility(null == s ? void 0 : s.id)), [c, h] = r.useState(null == o);
        if (null == s) return null;
        async function x() {
            a(null != s, "visibleConnectionsRole is null"), c && null == o && (await f.default.fetchGuildRoleConnectionsEligibility(i.id, s.id), h(!1))
        }
        return (0, l.jsx)(u.LazyPopout, {
            onRequestOpen: x,
            renderPopout: function() {
                return Promise.resolve(t => {
                    let {
                        closePopout: r
                    } = t;
                    return null == o ? (0, l.jsx)(l.Fragment, {}) : (a(null != s, "visibleConnectionsRole is null"), (0, l.jsx)(D, {
                        eligibilityStates: o,
                        userId: e,
                        roleId: s.id,
                        channelId: n.id,
                        guildId: i.id,
                        onGetRolesClicked: () => {
                            (0, M.openGuildRoleConnectionsModal)(i.id)
                        },
                        onOpenProfile: () => {
                            (0, w.openUserProfileModal)({
                                userId: e,
                                guildId: i.id,
                                channelId: n.id,
                                section: R.UserProfileSections.USER_INFO_CONNECTIONS,
                                analyticsLocation: {
                                    section: A.AnalyticsSections.CHANNEL
                                }
                            }), r()
                        }
                    }))
                })
            },
            align: "top",
            nudgeAlignIntoViewport: !0,
            children: t => (0, l.jsx)(u.Tooltip, {
                text: P.default.Messages.CONNECTIONS_ROLE_POPOUT_CLICK_TO_VIEW,
                children: e => (0, l.jsxs)("div", {
                    className: b.badge,
                    ...e,
                    ...t,
                    children: [(0, l.jsx)(_.default, {
                        className: b.badgeVerifiedIcon,
                        size: 16,
                        color: s.colorString
                    }), (0, l.jsx)(u.Text, {
                        variant: "text-xs/bold",
                        color: "header-primary",
                        className: b.roleName,
                        children: s.name
                    })]
                })
            })
        })
    }
}