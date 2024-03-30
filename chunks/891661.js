function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildTooltipText: function() {
            return $
        },
        default: function() {
            return ee
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("898511"),
        l = n("337905"),
        c = n("784184"),
        f = n("632142"),
        d = n("778819"),
        _ = n("599527"),
        E = n("311074"),
        p = n("306374"),
        m = n("717744"),
        y = n("680721"),
        I = n("711334"),
        h = n("991160"),
        O = n("670996"),
        T = n("147071"),
        S = n("73013"),
        v = n("950520"),
        g = n("29604"),
        A = n("868447"),
        b = n("848957"),
        N = n("208454"),
        R = n("473702"),
        C = n("793570"),
        P = n("795629"),
        D = n("480696"),
        L = n("570887"),
        M = n("616790"),
        U = n("893427"),
        w = n("417863"),
        k = n("901482"),
        G = n("510795"),
        B = n("778513"),
        j = n("951840"),
        F = n("281767"),
        V = n("941504"),
        H = n("499890"),
        x = n("337341");

    function Y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function W(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function K(e) {
        return function(e) {
            if (Array.isArray(e)) return Y(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return Y(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Y(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var z = (0, B.cssValueToNumber)(l.default.GUILD_TOOLTIP_ICON_SIZE),
        X = (0, B.cssValueToNumber)(l.default.GUILD_TOOLTIP_ICON_SIZE_V_2);

    function q(e, t, n) {
        return 0 === t.length ? null : r.createElement("div", {
            className: H.row
        }, r.createElement(e, {
            className: H.activityIcon
        }), r.createElement(G.default, {
            guildId: n,
            users: t,
            max: 6
        }))
    }

    function Q(e) {
        var t = e.muteConfig,
            n = e.className;
        return (null == t ? void 0 : t.end_time) == null ? r.createElement(c.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: n
        }, V.default.Messages.FORM_LABEL_MUTED) : r.createElement(y.default, {
            muteConfig: t,
            className: n
        })
    }

    function J(e) {
        var t, n, o, a = e.guild,
            l = a.id,
            d = (0, s.useStateFromStoresArray)([g.default, T.default], function() {
                var e = g.default.getChannels(l)[g.GUILD_VOCAL_CHANNELS_KEY].filter(function(e) {
                        return e.channel.type === F.ChannelTypes.GUILD_VOICE
                    }).map(function(e) {
                        return e.channel.id
                    }),
                    t = Object.values(T.default.getThreadsForGuild(l)).flatMap(function(e) {
                        return Object.keys(e)
                    });
                return K(e).concat(K(t))
            }, [l]),
            _ = (0, O.default)(l),
            E = r.useMemo(function() {
                return _.map(function(e) {
                    return e.id
                })
            }, [_]),
            p = (0, s.useStateFromStores)([R.default], function() {
                return R.default.getVoiceStates(l)
            }, [l]),
            m = u().flatMap(d, function(e) {
                var t;
                if (e === a.afkChannelId) return [];
                return (null !== (t = p[e]) && void 0 !== t ? t : []).map(function(e) {
                    return e.user
                })
            }),
            y = (0, s.useStateFromStoresArray)([I.default], function() {
                return u().flatMap(E, function(e) {
                    return e === a.afkChannelId ? [] : I.default.getMutableParticipants(e, h.StageChannelParticipantNamedIndex.SPEAKER).filter(function(e) {
                        return e.type === h.StageChannelParticipantTypes.VOICE
                    }).map(function(e) {
                        return e.user
                    })
                })
            }),
            C = (0, s.useStateFromStores)([I.default], function() {
                var e = 0,
                    t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = E[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        var a = o.value;
                        e += I.default.getParticipantCount(a, h.StageChannelParticipantNamedIndex.AUDIENCE)
                    }
                } catch (e) {
                    n = !0, r = e
                } finally {
                    try {
                        !t && null != i.return && i.return()
                    } finally {
                        if (n) throw r
                    }
                }
                return e
            }),
            P = (0, s.useStateFromStoresArray)([S.default], function() {
                return S.default.getAllApplicationStreams().filter(function(e) {
                    return e.guildId === l
                }).map(function(e) {
                    return e.ownerId
                })
            }, [l]),
            B = (0, j.useIsGamingVoiceActivityEnabled)("Guild Tooltip", !1),
            V = (0, s.useStateFromStoresArray)([A.default, v.default], function() {
                return m.filter(function(e) {
                    return A.default.getActivities(e.id, l).some(function(e) {
                        return (null == e ? void 0 : e.application_id) != null && null != v.default.getDetectableGame(null == e ? void 0 : e.application_id)
                    })
                })
            }),
            x = q(D.default, V, l),
            Y = B ? V.map(function(e) {
                return e.id
            }) : [],
            z = (0, s.useStateFromStoresArray)([f.default], function() {
                return f.default.getEmbeddedActivitiesForGuild(l).flatMap(function(e) {
                    return Array.from(e.userIds)
                })
            }, [l]),
            X = (0, s.useStateFromStoresArray)([N.default], function() {
                return z.map(function(e) {
                    return N.default.getUser(e)
                })
            }, [z]),
            J = (0, s.useStateFromStoresArray)([N.default], function() {
                return P.map(function(e) {
                    return N.default.getUser(e)
                })
            }, [P]),
            Z = q(U.default, m.filter(function(e) {
                return !P.includes(e.id) && !z.includes(e.id) && !Y.includes(e.id)
            }), l);
        var $ = (t = l, n = y, o = C, 0 === n.length ? null : r.createElement("div", {
                className: H.row
            }, r.createElement(w.default, {
                className: H.activityIcon
            }), r.createElement(G.default, {
                guildId: t,
                users: n,
                max: 3
            }), r.createElement("div", {
                className: H.stageListenerPill
            }, r.createElement(L.default, {
                width: 16,
                height: 16
            }), r.createElement(c.Text, {
                className: H.stageListenerCount,
                color: "text-normal",
                variant: "text-xs/normal"
            }, o)))),
            ee = q(k.default, J.filter(function(e) {
                return null != e && !z.includes(e.id)
            }), l),
            et = q(M.default, X, l),
            en = (0, s.useStateFromStoresObject)([b.default], function() {
                return {
                    isMuted: b.default.isMuted(l),
                    muteConfig: b.default.getMuteConfig(l)
                }
            }, [l]),
            er = en.isMuted,
            eo = en.muteConfig;
        return null != x && j.default.trackExposure({
            location: "Guild Tooltip"
        }), r.createElement(r.Fragment, null, $, Z, ee, B && x, et, er ? r.createElement(Q, {
            muteConfig: eo,
            className: i()(H.muteText, W({}, H.muteTextWithActivity, null != Z || null != ee))
        }) : null)
    }

    function Z(e) {
        var t = e.guildJoinRequestStatus;
        return r.createElement(c.Text, {
            className: H.viewAsRolesWarning,
            color: "text-normal",
            variant: "text-xs/normal"
        }, function(e) {
            switch (e) {
                case _.GuildJoinRequestApplicationStatuses.SUBMITTED:
                    return V.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_PENDING;
                case _.GuildJoinRequestApplicationStatuses.REJECTED:
                    return V.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_REJECTED;
                case _.GuildJoinRequestApplicationStatuses.APPROVED:
                    return V.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_APPROVED;
                default:
                    return V.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_STARTED
            }
        }(t))
    }

    function $(e) {
        var t = e.guild,
            n = e.includeActivity,
            o = (0, d.default)(t),
            a = (0, E.useCurrentUserGuildBadgeStatus)(t.id),
            u = null != a ? r.createElement(Z, {
                guildJoinRequestStatus: a
            }) : null,
            l = void 0 === n || n ? r.createElement(J, {
                guild: t
            }) : null,
            f = (0, s.useStateFromStores)([m.default], function() {
                return m.default.isViewingRoles(t.id)
            }),
            _ = (0, p.useShouldShowInvitesDisabledNotif)(t);
        return r.createElement(r.Fragment, null, r.createElement("div", {
            className: i()(H.row, H.rowGuildName)
        }, o ? r.createElement(P.default, {
            guild: t,
            size: X,
            className: H.rowIconV2
        }) : r.createElement(C.default, {
            guild: t,
            size: z,
            className: H.rowIcon
        }), r.createElement("span", {
            className: i()(H.guildNameText, W({}, H.guildNameTextLimitedSize, null != l))
        }, t.toString())), _ ? r.createElement(c.Text, {
            className: H.invitesDisabledTooltip,
            color: "header-secondary",
            variant: "text-sm/medium"
        }, V.default.Messages.INVITES_DISABLED_TOOLTIP) : null, f ? r.createElement(c.Text, {
            className: H.viewAsRolesWarning,
            color: "text-normal",
            variant: "text-xs/normal"
        }, V.default.Messages.VIEW_AS_ROLES_MENTIONS_WARNING) : null != u ? u : l)
    }

    function ee(e) {
        var t = e.guild,
            n = e.disabled,
            o = e["aria-label"],
            i = e.children,
            a = e.includeActivity;
        return r.createElement(c.Tooltip, {
            hideOnClick: !0,
            spacing: 20,
            position: "right",
            text: void 0 !== n && n ? null : r.createElement($, {
                guild: t,
                includeActivity: a
            }),
            "aria-label": void 0 !== o && o,
            tooltipClassName: x.listItemTooltip
        }, function(e) {
            var t = e.onFocus,
                n = e.onBlur,
                o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                        return o
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) {
                            if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                    }
                    return o
                }(e, ["onFocus", "onBlur"]);
            return r.createElement("div", {
                onFocus: t,
                onBlur: n
            }, r.cloneElement(r.Children.only(i), function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        W(e, t, n[t])
                    })
                }
                return e
            }({}, o)))
        })
    }
}