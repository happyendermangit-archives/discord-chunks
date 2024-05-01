function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return V
        }
    }), n("536091"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("512722"),
        s = n.n(a),
        o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("692547"),
        _ = n("780384"),
        c = n("481060"),
        E = n("749210"),
        I = n("99690"),
        T = n("410030"),
        f = n("726542"),
        S = n("367907"),
        h = n("906732"),
        A = n("171368"),
        m = n("598077"),
        N = n("271383"),
        p = n("467679"),
        O = n("263704"),
        R = n("626135"),
        C = n("275759"),
        g = n("107484"),
        L = n("977392"),
        v = n("134433"),
        D = n("753194"),
        M = n("458034"),
        y = n("856651"),
        P = n("981631"),
        U = n("228168"),
        b = n("689938"),
        G = n("311157");

    function w(e) {
        let t, {
            connectionType: n,
            connectionMetadataField: r,
            operator: a,
            value: s,
            description: o
        } = e;
        if (null != o) switch (a) {
            case y.OperatorTypes.LESS_THAN:
                t = b.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                    description: o,
                    count: Math.max(0, Number(s) - 1)
                });
                break;
            case y.OperatorTypes.GREATER_THAN:
                t = b.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                    description: o,
                    count: Math.max(0, Number(s) + 1)
                });
                break;
            default:
                t = o
        } else t = (0, C.getConnectionsCheckText)({
            connectionType: n,
            connectionMetadataField: r,
            operator: a,
            value: s
        });
        return null == t ? null : (0, i.jsxs)("div", {
            className: G.popoutCheck,
            children: [(0, i.jsx)(O.default, {
                className: G.popoutCheckIcon
            }), (0, i.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "header-primary",
                children: t
            })]
        })
    }

    function B(e) {
        let {
            eligibilityStates: t
        } = e, n = (0, T.default)(), r = (0, c.useToken)(d.default.unsafe_rawColors.GREEN_330).hex(), a = l().groupBy(t, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""));
        return (0, i.jsx)(i.Fragment, {
            children: Object.keys(a).map(e => {
                var t, o;
                let l;
                let u = a[e],
                    d = u.filter(e => null != e.operator),
                    E = u.find(e => null != e.application),
                    T = f.default.get(e),
                    S = null == E ? void 0 : E.application,
                    h = (null == S ? void 0 : S.bot) != null ? new m.default(S.bot) : null;
                return C.officialApplicationIds.includes(null !== (t = null == S ? void 0 : S.id) && void 0 !== t ? t : "") ? l = (0, i.jsx)(D.default, {
                    className: G.botTag,
                    color: r,
                    size: 16
                }) : null != h && (l = (0, i.jsx)(p.default, {
                    className: G.botTag,
                    verified: h.isVerifiedBot()
                })), (0, i.jsxs)("div", {
                    className: G.popoutChecksGroup,
                    children: [(0, i.jsxs)("div", {
                        className: G.popoutCheckGroupName,
                        children: [null != T ? (0, i.jsx)("img", {
                            src: (0, _.isThemeDark)(n) ? T.icon.darkSVG : T.icon.lightSVG,
                            alt: "",
                            className: G.popoutCheckGroupPlatformIcon
                        }) : null, null != h ? (0, i.jsx)(I.default, {
                            user: h,
                            size: c.AvatarSizes.SIZE_20,
                            className: G.popoutCheckGroupPlatformIcon
                        }) : null, (0, i.jsx)(c.Text, {
                            variant: "text-sm/medium",
                            color: "interactive-active",
                            children: null !== (o = null == T ? void 0 : T.name) && void 0 !== o ? o : null == S ? void 0 : S.name
                        }), l]
                    }), d.map(e => {
                        let {
                            connection_type: t,
                            connection_metadata_field: n,
                            operator: r,
                            value: a,
                            description: o
                        } = e;
                        return s()(null != n, "connectionMetadataField is null"), s()(null != r, "operator is null"), s()(null != a, "value is null"), (0, i.jsx)(w, {
                            connectionType: t,
                            connectionMetadataField: n,
                            operator: r,
                            value: a,
                            description: o
                        }, "".concat(t, ":").concat(n, ":").concat(r, ":").concat(a))
                    })]
                }, e)
            })
        })
    }

    function k(e) {
        let t, {
            onGetRolesClicked: n,
            onOpenProfile: a,
            eligibilityStates: s,
            userId: o,
            roleId: l,
            channelId: d,
            guildId: _
        } = e;
        r.useEffect(() => {
            R.default.track(P.AnalyticEvents.PASSPORT_ROLE_POPOUT_VIEWED, {
                other_user_id: o,
                role_id: l,
                ...(0, S.collectChannelAnalyticsMetadataFromId)(d),
                ...(0, S.collectGuildAnalyticsMetadata)(_)
            })
        }, [o, l, d, _]);
        let E = (0, u.useStateFromStores)([N.default], () => {
            var e, t;
            return null !== (t = null === (e = N.default.getSelfMember(_)) || void 0 === e ? void 0 : e.roles.includes(l)) && void 0 !== t && t
        }, [_, l]);
        return t = 1 === s.length && 1 === s[0].length ? b.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ONE : 1 === s.length ? b.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ALL.format() : b.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_OR.format(), (0, i.jsxs)("div", {
            className: G.popout,
            children: [(0, i.jsx)("div", {
                className: G.popoutHeaderContainer,
                children: (0, i.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: "text-normal",
                    className: G.popoutHeaderText,
                    children: t
                })
            }), (0, i.jsx)("div", {
                className: G.popoutChecks,
                children: (0, i.jsx)(B, {
                    eligibilityStates: s.flat()
                })
            }), (0, i.jsxs)("div", {
                className: G.buttonContainer,
                children: [E ? null : (0, i.jsx)(c.Button, {
                    className: G.getRolesButton,
                    onClick: n,
                    children: b.default.Messages.CONNECTIONS_ROLE_POPOUT_GET_ROLES
                }), (0, i.jsx)(c.Button, {
                    className: G.viewConnectionsButton,
                    color: c.Button.Colors.PRIMARY,
                    onClick: a,
                    children: b.default.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_CONNECTIONS
                })]
            })]
        })
    }

    function V(e) {
        let {
            userId: t,
            messageId: n,
            guild: a,
            channel: o
        } = e, {
            analyticsLocations: l
        } = (0, h.default)(), d = (0, L.default)(a, t, o.id, !0), _ = (0, u.useStateFromStores)([g.default], () => g.default.getGuildRoleConnectionEligibility(null == d ? void 0 : d.id)), [I, T] = r.useState(null == _);
        if (null == d) return null;
        async function f() {
            s()(null != d, "visibleConnectionsRole is null"), I && null == _ && (await E.default.fetchGuildRoleConnectionsEligibility(a.id, d.id), T(!1))
        }
        return (0, i.jsx)(c.LazyPopout, {
            onRequestOpen: f,
            renderPopout: function() {
                return Promise.resolve(e => {
                    let {
                        closePopout: r
                    } = e;
                    return null == _ ? (0, i.jsx)(i.Fragment, {}) : (s()(null != d, "visibleConnectionsRole is null"), (0, i.jsx)(k, {
                        eligibilityStates: _,
                        userId: t,
                        roleId: d.id,
                        channelId: o.id,
                        guildId: a.id,
                        onGetRolesClicked: () => {
                            (0, M.openGuildRoleConnectionsModal)(a.id)
                        },
                        onOpenProfile: () => {
                            (0, A.openUserProfileModal)({
                                userId: t,
                                messageId: n,
                                guildId: a.id,
                                channelId: o.id,
                                roleId: d.id,
                                section: U.UserProfileSections.USER_INFO_CONNECTIONS,
                                sourceAnalyticsLocations: l,
                                analyticsLocation: {
                                    section: P.AnalyticsSections.CHANNEL
                                }
                            }), r()
                        }
                    }))
                })
            },
            align: "top",
            nudgeAlignIntoViewport: !0,
            children: e => (0, i.jsx)(c.Tooltip, {
                text: b.default.Messages.CONNECTIONS_ROLE_POPOUT_CLICK_TO_VIEW,
                children: t => (0, i.jsxs)("div", {
                    className: G.badge,
                    ...t,
                    ...e,
                    children: [(0, i.jsx)(v.default, {
                        className: G.badgeVerifiedIcon,
                        size: 16,
                        color: d.colorString
                    }), (0, i.jsx)(c.Text, {
                        variant: "text-xs/bold",
                        color: "header-primary",
                        className: G.roleName,
                        children: d.name
                    })]
                })
            })
        })
    }
}