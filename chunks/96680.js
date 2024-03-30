function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return H
        }
    });
    var n = r("470079"),
        l = r("512722"),
        i = r.n(l),
        a = r("392711"),
        o = r.n(a),
        c = r("898511"),
        u = r("447515"),
        s = r("751848"),
        f = r("784184"),
        d = r("322997"),
        m = r("562052"),
        h = r("523263"),
        p = r("386823"),
        g = r("140817"),
        y = r("396586"),
        b = r("899517"),
        O = r("428009"),
        E = r("957808"),
        v = r("303052"),
        w = r("843317"),
        P = r("870331"),
        x = r("965067"),
        S = r("874768"),
        C = r("894538"),
        j = r("610577"),
        I = r("292076"),
        N = r("929978"),
        T = r("999325"),
        M = r("281767"),
        _ = r("731616"),
        A = r("941504"),
        R = r("436081");

    function D(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function k(e, t, r, n, l, i, a) {
        try {
            var o = e[i](a),
                c = o.value
        } catch (e) {
            r(e);
            return
        }
        o.done ? t(c) : Promise.resolve(c).then(n, l)
    }

    function L(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
                var n, l, i;
                n = e, l = t, i = r[t], l in n ? Object.defineProperty(n, l, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = i
            })
        }
        return e
    }

    function B(e) {
        var t, r = e.connectionType,
            l = e.connectionMetadataField,
            i = e.operator,
            a = e.value,
            o = e.description;
        if (null != o) switch (i) {
            case T.OperatorTypes.LESS_THAN:
                t = A.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                    description: o,
                    count: Math.max(0, Number(a) - 1)
                });
                break;
            case T.OperatorTypes.GREATER_THAN:
                t = A.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                    description: o,
                    count: Math.max(0, Number(a) + 1)
                });
                break;
            default:
                t = o
        } else t = (0, x.getConnectionsCheckText)({
            connectionType: r,
            connectionMetadataField: l,
            operator: i,
            value: a
        });
        return null == t ? null : n.createElement("div", {
            className: R.popoutCheck
        }, n.createElement(w.default, {
            className: R.popoutCheckIcon
        }), n.createElement(f.Text, {
            variant: "text-xs/medium",
            color: "header-primary"
        }, t))
    }

    function U(e) {
        var t = e.eligibilityStates,
            r = (0, h.default)(),
            l = (0, f.useToken)(u.default.unsafe_rawColors.GREEN_330).hex(),
            a = o().groupBy(t, function(e) {
                return "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : "")
            });
        return n.createElement(n.Fragment, null, Object.keys(a).map(function(e) {
            var t, o, c, u = a[e],
                d = u.filter(function(e) {
                    return null != e.operator
                }),
                h = u.find(function(e) {
                    return null != e.application
                }),
                g = p.default.get(e),
                y = null == h ? void 0 : h.application,
                b = (null == y ? void 0 : y.bot) != null ? new O.default(y.bot) : null;
            return x.officialApplicationIds.includes(null !== (t = null == y ? void 0 : y.id) && void 0 !== t ? t : "") ? o = n.createElement(I.default, {
                className: R.botTag,
                color: l,
                size: 16
            }) : null != b && (o = n.createElement(v.default, {
                className: R.botTag,
                verified: b.isVerifiedBot()
            })), n.createElement("div", {
                key: e,
                className: R.popoutChecksGroup
            }, n.createElement("div", {
                className: R.popoutCheckGroupName
            }, null != g ? n.createElement("img", {
                src: (0, s.isThemeDark)(r) ? g.icon.darkSVG : g.icon.lightSVG,
                alt: "",
                className: R.popoutCheckGroupPlatformIcon
            }) : null, null != b ? n.createElement(m.default, {
                user: b,
                size: f.AvatarSizes.SIZE_20,
                className: R.popoutCheckGroupPlatformIcon
            }) : null, n.createElement(f.Text, {
                variant: "text-sm/medium",
                color: "interactive-active"
            }, null !== (c = null == g ? void 0 : g.name) && void 0 !== c ? c : null == y ? void 0 : y.name), o), d.map(function(e) {
                var t = e.connection_type,
                    r = e.connection_metadata_field,
                    l = e.operator,
                    a = e.value,
                    o = e.description;
                return i()(null != r, "connectionMetadataField is null"), i()(null != l, "operator is null"), i()(null != a, "value is null"), n.createElement(B, {
                    key: "".concat(t, ":").concat(r, ":").concat(l, ":").concat(a),
                    connectionType: t,
                    connectionMetadataField: r,
                    operator: l,
                    value: a,
                    description: o
                })
            }))
        }))
    }

    function G(e) {
        var t, r = e.onGetRolesClicked,
            l = e.onOpenProfile,
            i = e.eligibilityStates,
            a = e.userId,
            o = e.roleId,
            u = e.channelId,
            s = e.guildId;
        n.useEffect(function() {
            P.default.track(M.AnalyticEvents.PASSPORT_ROLE_POPOUT_VIEWED, L({
                other_user_id: a,
                role_id: o
            }, (0, g.collectChannelAnalyticsMetadataFromId)(u), (0, g.collectGuildAnalyticsMetadata)(s)))
        }, [a, o, u, s]);
        var d = (0, c.useStateFromStores)([E.default], function() {
            var e, t;
            return null !== (t = null === (e = E.default.getSelfMember(s)) || void 0 === e ? void 0 : e.roles.includes(o)) && void 0 !== t && t
        }, [s, o]);
        return t = 1 === i.length && 1 === i[0].length ? A.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ONE : 1 === i.length ? A.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ALL.format() : A.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_OR.format(), n.createElement("div", {
            className: R.popout
        }, n.createElement("div", {
            className: R.popoutHeaderContainer
        }, n.createElement(f.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            className: R.popoutHeaderText
        }, t)), n.createElement("div", {
            className: R.popoutChecks
        }, n.createElement(U, {
            eligibilityStates: i.flat()
        })), n.createElement("div", {
            className: R.buttonContainer
        }, d ? null : n.createElement(f.Button, {
            className: R.getRolesButton,
            onClick: r
        }, A.default.Messages.CONNECTIONS_ROLE_POPOUT_GET_ROLES), n.createElement(f.Button, {
            className: R.viewConnectionsButton,
            color: f.Button.Colors.PRIMARY,
            onClick: l
        }, A.default.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_CONNECTIONS)))
    }

    function H(e) {
        var t, r, l = e.userId,
            a = e.messageId,
            o = e.guild,
            u = e.channel,
            s = (0, y.default)().analyticsLocations,
            m = (0, C.default)(o, l, u.id, !0),
            h = (0, c.useStateFromStores)([S.default], function() {
                return S.default.getGuildRoleConnectionEligibility(null == m ? void 0 : m.id)
            });
        var p = (t = n.useState(null == h), r = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var r, n, l = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != l) {
                    var i = [],
                        a = !0,
                        o = !1;
                    try {
                        for (l = l.call(e); !(a = (r = l.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        o = !0, n = e
                    } finally {
                        try {
                            !a && null != l.return && l.return()
                        } finally {
                            if (o) throw n
                        }
                    }
                    return i
                }
            }(t, r) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return D(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return D(e, t)
                }
            }(t, r) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            g = p[0],
            O = p[1];
        if (null == m) return null;

        function E() {
            var e;
            return e = function() {
                return function(e, t) {
                    var r, n, l, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & l[0]) throw l[1];
                            return l[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: o(0),
                        throw: o(1),
                        return: o(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function o(i) {
                        return function(o) {
                            return function(i) {
                                if (r) throw TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (r = 1, n && (l = 2 & i[0] ? n.return : i[0] ? n.throw || ((l = n.return) && l.call(n), 0) : n.next) && !(l = l.call(n, i[1])).done) return l;
                                    switch (n = 0, l && (i = [2 & i[0], l.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            l = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, n = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(l = (l = a.trys).length > 0 && l[l.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!l || i[1] > l[0] && i[1] < l[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < l[1]) {
                                                a.label = l[1], l = i;
                                                break
                                            }
                                            if (l && a.label < l[2]) {
                                                a.label = l[2], a.ops.push(i);
                                                break
                                            }
                                            l[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e], n = 0
                                } finally {
                                    r = l = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, o])
                        }
                    }
                }(this, function(e) {
                    switch (e.label) {
                        case 0:
                            if (i()(null != m, "visibleConnectionsRole is null"), !g || null != h) return [2];
                            return [4, d.default.fetchGuildRoleConnectionsEligibility(o.id, m.id)];
                        case 1:
                            return e.sent(), O(!1), [2]
                    }
                })
            }, (E = function() {
                var t = this,
                    r = arguments;
                return new Promise(function(n, l) {
                    var i = e.apply(t, r);

                    function a(e) {
                        k(i, n, l, a, o, "next", e)
                    }

                    function o(e) {
                        k(i, n, l, a, o, "throw", e)
                    }
                    a(void 0)
                })
            }).apply(this, arguments)
        }
        return n.createElement(f.LazyPopout, {
            onRequestOpen: function() {
                return E.apply(this, arguments)
            },
            renderPopout: function() {
                return Promise.resolve(function(e) {
                    var t = e.closePopout;
                    return null == h ? n.createElement(n.Fragment, null) : (i()(null != m, "visibleConnectionsRole is null"), n.createElement(G, {
                        eligibilityStates: h,
                        userId: l,
                        roleId: m.id,
                        channelId: u.id,
                        guildId: o.id,
                        onGetRolesClicked: function() {
                            (0, N.openGuildRoleConnectionsModal)(o.id)
                        },
                        onOpenProfile: function() {
                            (0, b.openUserProfileModal)({
                                userId: l,
                                messageId: a,
                                guildId: o.id,
                                channelId: u.id,
                                roleId: m.id,
                                section: _.UserProfileSections.USER_INFO_CONNECTIONS,
                                sourceAnalyticsLocations: s,
                                analyticsLocation: {
                                    section: M.AnalyticsSections.CHANNEL
                                }
                            }), t()
                        }
                    }))
                })
            },
            align: "top",
            nudgeAlignIntoViewport: !0
        }, function(e) {
            return n.createElement(f.Tooltip, {
                text: A.default.Messages.CONNECTIONS_ROLE_POPOUT_CLICK_TO_VIEW
            }, function(t) {
                return n.createElement("div", L({
                    className: R.badge
                }, t, e), n.createElement(j.default, {
                    className: R.badgeVerifiedIcon,
                    size: 16,
                    color: m.colorString
                }), n.createElement(f.Text, {
                    variant: "text-xs/bold",
                    color: "header-primary",
                    className: R.roleName
                }, m.name))
            })
        })
    }
}