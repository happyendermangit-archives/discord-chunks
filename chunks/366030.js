function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return k
        }
    }), i("536091"), i("47120");
    var l = i("735250"),
        r = i("470079"),
        a = i("512722"),
        n = i.n(a),
        s = i("392711"),
        o = i.n(s),
        d = i("442837"),
        c = i("692547"),
        h = i("780384"),
        u = i("481060"),
        f = i("749210"),
        x = i("99690"),
        m = i("410030"),
        g = i("726542"),
        j = i("367907"),
        p = i("906732"),
        w = i("171368"),
        v = i("598077"),
        C = i("271383"),
        N = i("467679"),
        y = i("263704"),
        T = i("626135"),
        _ = i("275759"),
        I = i("107484"),
        E = i("977392"),
        O = i("134433"),
        M = i("753194"),
        S = i("458034"),
        A = i("856651"),
        R = i("981631"),
        P = i("228168"),
        b = i("689938"),
        L = i("436081");

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
        } else e = (0, _.getConnectionsCheckText)({
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
        } = t, i = (0, m.default)(), r = (0, u.useToken)(c.default.unsafe_rawColors.GREEN_330).hex(), a = o().groupBy(e, t => "".concat(t.connection_type).concat(null != t.application_id ? ":".concat(t.application_id) : ""));
        return (0, l.jsx)(l.Fragment, {
            children: Object.keys(a).map(t => {
                var e, s;
                let o;
                let d = a[t],
                    c = d.filter(t => null != t.operator),
                    f = d.find(t => null != t.application),
                    m = g.default.get(t),
                    j = null == f ? void 0 : f.application,
                    p = (null == j ? void 0 : j.bot) != null ? new v.default(j.bot) : null;
                return _.officialApplicationIds.includes(null !== (e = null == j ? void 0 : j.id) && void 0 !== e ? e : "") ? o = (0, l.jsx)(M.default, {
                    className: L.botTag,
                    color: r,
                    size: 16
                }) : null != p && (o = (0, l.jsx)(N.default, {
                    className: L.botTag,
                    verified: p.isVerifiedBot()
                })), (0, l.jsxs)("div", {
                    className: L.popoutChecksGroup,
                    children: [(0, l.jsxs)("div", {
                        className: L.popoutCheckGroupName,
                        children: [null != m ? (0, l.jsx)("img", {
                            src: (0, h.isThemeDark)(i) ? m.icon.darkSVG : m.icon.lightSVG,
                            alt: "",
                            className: L.popoutCheckGroupPlatformIcon
                        }) : null, null != p ? (0, l.jsx)(x.default, {
                            user: p,
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
                        return n()(null != i, "connectionMetadataField is null"), n()(null != r, "operator is null"), n()(null != a, "value is null"), (0, l.jsx)(B, {
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
        } = (0, p.default)(), c = (0, E.default)(a, e, s.id, !0), h = (0, d.useStateFromStores)([I.default], () => I.default.getGuildRoleConnectionEligibility(null == c ? void 0 : c.id)), [x, m] = r.useState(null == h);
        if (null == c) return null;
        async function g() {
            n()(null != c, "visibleConnectionsRole is null"), x && null == h && (await f.default.fetchGuildRoleConnectionsEligibility(a.id, c.id), m(!1))
        }
        return (0, l.jsx)(u.LazyPopout, {
            onRequestOpen: g,
            renderPopout: function() {
                return Promise.resolve(t => {
                    let {
                        closePopout: r
                    } = t;
                    return null == h ? (0, l.jsx)(l.Fragment, {}) : (n()(null != c, "visibleConnectionsRole is null"), (0, l.jsx)(U, {
                        eligibilityStates: h,
                        userId: e,
                        roleId: c.id,
                        channelId: s.id,
                        guildId: a.id,
                        onGetRolesClicked: () => {
                            (0, S.openGuildRoleConnectionsModal)(a.id)
                        },
                        onOpenProfile: () => {
                            (0, w.openUserProfileModal)({
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