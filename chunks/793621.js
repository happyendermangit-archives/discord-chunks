function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return k
        }
    }), i("834022"), i("222007");
    var l = i("37983"),
        r = i("884691"),
        a = i("627445"),
        n = i.n(a),
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
        w = i("685665"),
        p = i("401642"),
        v = i("766274"),
        C = i("26989"),
        N = i("79798"),
        y = i("36694"),
        T = i("599110"),
        I = i("535013"),
        E = i("562368"),
        _ = i("216049"),
        O = i("339023"),
        M = i("526190"),
        S = i("685058"),
        A = i("214509"),
        R = i("49111"),
        P = i("590456"),
        b = i("782340"),
        L = i("48639");

    function B(t) {
        let e, {
            connectionType: i,
            connectionMetadataField: r,
            operator: a,
            value: n,
            description: s
        } = t;
        if (null != s) switch (a) {
            case A.OperatorTypes.LESS_THAN:
                e = b.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                    description: s,
                    count: Math.max(0, Number(n) - 1)
                });
                break;
            case A.OperatorTypes.GREATER_THAN:
                e = b.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                    description: s,
                    count: Math.max(0, Number(n) + 1)
                });
                break;
            default:
                e = s
        } else e = (0, I.getConnectionsCheckText)({
            connectionType: i,
            connectionMetadataField: r,
            operator: a,
            value: n
        });
        return null == e ? null : (0, l.jsxs)("div", {
            className: L.popoutCheck,
            children: [(0, l.jsx)(y.default, {
                className: L.popoutCheckIcon
            }), (0, l.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "header-primary",
                children: e
            })]
        })
    }

    function D(t) {
        let {
            eligibilityStates: e
        } = t, i = (0, m.default)(), r = (0, u.useToken)(c.default.unsafe_rawColors.GREEN_330).hex(), a = o.groupBy(e, t => "".concat(t.connection_type).concat(null != t.application_id ? ":".concat(t.application_id) : ""));
        return (0, l.jsx)(l.Fragment, {
            children: Object.keys(a).map(t => {
                var e, s;
                let o;
                let d = a[t],
                    c = d.filter(t => null != t.operator),
                    f = d.find(t => null != t.application),
                    m = g.default.get(t),
                    j = null == f ? void 0 : f.application,
                    w = (null == j ? void 0 : j.bot) != null ? new v.default(j.bot) : null,
                    p = I.officialApplicationIds.includes(null !== (e = null == j ? void 0 : j.id) && void 0 !== e ? e : "");
                return p ? o = (0, l.jsx)(M.default, {
                    className: L.botTag,
                    color: r,
                    size: 16
                }) : null != w && (o = (0, l.jsx)(N.default, {
                    className: L.botTag,
                    verified: w.isVerifiedBot()
                })), (0, l.jsxs)("div", {
                    className: L.popoutChecksGroup,
                    children: [(0, l.jsxs)("div", {
                        className: L.popoutCheckGroupName,
                        children: [null != m ? (0, l.jsx)("img", {
                            src: (0, h.isThemeDark)(i) ? m.icon.darkSVG : m.icon.lightSVG,
                            alt: "",
                            className: L.popoutCheckGroupPlatformIcon
                        }) : null, null != w ? (0, l.jsx)(x.default, {
                            user: w,
                            size: u.AvatarSizes.SIZE_20,
                            className: L.popoutCheckGroupPlatformIcon
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
                            value: a,
                            description: s
                        } = t;
                        return n(null != i, "connectionMetadataField is null"), n(null != r, "operator is null"), n(null != a, "value is null"), (0, l.jsx)(B, {
                            connectionType: e,
                            connectionMetadataField: i,
                            operator: r,
                            value: a,
                            description: s
                        }, "".concat(e, ":").concat(i, ":").concat(r, ":").concat(a))
                    })]
                }, t)
            })
        })
    }

    function U(t) {
        let e, {
            onGetRolesClicked: i,
            onOpenProfile: a,
            eligibilityStates: n,
            userId: s,
            roleId: o,
            channelId: c,
            guildId: h
        } = t;
        r.useEffect(() => {
            T.default.track(R.AnalyticEvents.PASSPORT_ROLE_POPOUT_VIEWED, {
                other_user_id: s,
                role_id: o,
                ...(0, j.collectChannelAnalyticsMetadataFromId)(c),
                ...(0, j.collectGuildAnalyticsMetadata)(h)
            })
        }, [s, o, c, h]);
        let f = (0, d.useStateFromStores)([C.default], () => {
            var t, e;
            return null !== (e = null === (t = C.default.getSelfMember(h)) || void 0 === t ? void 0 : t.roles.includes(o)) && void 0 !== e && e
        }, [h, o]);
        return e = 1 === n.length && 1 === n[0].length ? b.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ONE : 1 === n.length ? b.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ALL.format() : b.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_OR.format(), (0, l.jsxs)("div", {
            className: L.popout,
            children: [(0, l.jsx)("div", {
                className: L.popoutHeaderContainer,
                children: (0, l.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: "text-normal",
                    className: L.popoutHeaderText,
                    children: e
                })
            }), (0, l.jsx)("div", {
                className: L.popoutChecks,
                children: (0, l.jsx)(D, {
                    eligibilityStates: n.flat()
                })
            }), (0, l.jsxs)("div", {
                className: L.buttonContainer,
                children: [f ? null : (0, l.jsx)(u.Button, {
                    className: L.getRolesButton,
                    onClick: i,
                    children: b.default.Messages.CONNECTIONS_ROLE_POPOUT_GET_ROLES
                }), (0, l.jsx)(u.Button, {
                    className: L.viewConnectionsButton,
                    color: u.Button.Colors.PRIMARY,
                    onClick: a,
                    children: b.default.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_CONNECTIONS
                })]
            })]
        })
    }

    function k(t) {
        let {
            userId: e,
            messageId: i,
            guild: a,
            channel: s
        } = t, {
            analyticsLocations: o
        } = (0, w.default)(), c = (0, _.default)(a, e, s.id, !0), h = (0, d.useStateFromStores)([E.default], () => E.default.getGuildRoleConnectionEligibility(null == c ? void 0 : c.id)), [x, m] = r.useState(null == h);
        if (null == c) return null;
        async function g() {
            n(null != c, "visibleConnectionsRole is null"), x && null == h && (await f.default.fetchGuildRoleConnectionsEligibility(a.id, c.id), m(!1))
        }
        return (0, l.jsx)(u.LazyPopout, {
            onRequestOpen: g,
            renderPopout: function() {
                return Promise.resolve(t => {
                    let {
                        closePopout: r
                    } = t;
                    return null == h ? (0, l.jsx)(l.Fragment, {}) : (n(null != c, "visibleConnectionsRole is null"), (0, l.jsx)(U, {
                        eligibilityStates: h,
                        userId: e,
                        roleId: c.id,
                        channelId: s.id,
                        guildId: a.id,
                        onGetRolesClicked: () => {
                            (0, S.openGuildRoleConnectionsModal)(a.id)
                        },
                        onOpenProfile: () => {
                            (0, p.openUserProfileModal)({
                                userId: e,
                                messageId: i,
                                guildId: a.id,
                                channelId: s.id,
                                roleId: c.id,
                                section: P.UserProfileSections.USER_INFO_CONNECTIONS,
                                sourceAnalyticsLocations: o,
                                analyticsLocation: {
                                    section: R.AnalyticsSections.CHANNEL
                                }
                            }), r()
                        }
                    }))
                })
            },
            align: "top",
            nudgeAlignIntoViewport: !0,
            children: t => (0, l.jsx)(u.Tooltip, {
                text: b.default.Messages.CONNECTIONS_ROLE_POPOUT_CLICK_TO_VIEW,
                children: e => (0, l.jsxs)("div", {
                    className: L.badge,
                    ...e,
                    ...t,
                    children: [(0, l.jsx)(O.default, {
                        className: L.badgeVerifiedIcon,
                        size: 16,
                        color: c.colorString
                    }), (0, l.jsx)(u.Text, {
                        variant: "text-xs/bold",
                        color: "header-primary",
                        className: L.roleName,
                        children: c.name
                    })]
                })
            })
        })
    }
}