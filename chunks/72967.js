function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return k
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("194926"),
        l = n("898511"),
        c = n("784184"),
        f = n("549579"),
        d = n("471458"),
        _ = n("622780"),
        E = n("649455"),
        p = n("396586"),
        m = n("94498"),
        y = n("334954"),
        I = n("335050"),
        h = n("540105"),
        O = n("935741"),
        T = n("957808"),
        S = n("306912"),
        v = n("208454"),
        g = n("143953"),
        A = n("266140"),
        b = n("448472"),
        N = n("941504"),
        R = n("667595"),
        C = n("931093");

    function P(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function D(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    P(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    P(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function L(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function M(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function U(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    var w = (0, m.createExperiment)({
        kind: "user",
        id: "2021-07_role_popout",
        label: "Role Popout",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable Popout",
            config: {
                enabled: !0
            }
        }]
    });

    function k(e) {
        var t = e.roleColor,
            o = e.roleId,
            a = e.channelId,
            m = e.roleName,
            P = e.guildId,
            k = e.children,
            G = e.inlinePreview,
            B = void 0 !== G && G,
            j = (0, p.default)(E.default.ROLE_MENTION).analyticsLocations,
            F = (0, l.useStateFromStores)([_.default], function() {
                return _.default.roleStyle
            }),
            V = null != t && 0 !== t && !B,
            H = V && "dot" === F,
            x = function(e) {
                return r.createElement(A.default, L({
                    className: i()(C.roleMention),
                    color: "username" === F && V ? t : null
                }, e), H && r.createElement(c.RoleDot, {
                    color: (0, s.int2hex)(t),
                    className: R.roleDot,
                    background: !1,
                    tooltip: !1
                }), k)
            };
        return !w.getCurrentConfig({
            location: "2ec235_1"
        }, {
            autoTrackExposure: !1
        }).enabled || B || null == a || null == P || null == o && "@everyone" !== m ? r.createElement(p.AnalyticsLocationProvider, {
            value: j
        }, x()) : r.createElement(p.AnalyticsLocationProvider, {
            value: j
        }, r.createElement(c.Popout, {
            preload: D(function() {
                return U(this, function(e) {
                    switch (e.label) {
                        case 0:
                            if (!(null != o)) return [3, 2];
                            return [4, (0, y.requestMembersForRole)(P, o)];
                        case 1:
                            e.sent(), e.label = 2;
                        case 2:
                            return [2]
                    }
                })
            }),
            renderPopout: function(e) {
                var t = O.default.getChannel(a),
                    i = S.default.getGuild(P),
                    s = T.default.getMembers(i.id),
                    l = S.default.getRole(P, null != o ? o : i.getEveryoneRoleId()),
                    _ = u()(s).filter(function(e) {
                        return !!("@everyone" === m || e.roles.includes(o)) && null != v.default.getUser(e.userId)
                    }).sortBy(function(e) {
                        var t, n = v.default.getUser(e.userId);
                        return (null != n ? null !== (t = e.nick) && void 0 !== t ? t : n.username : "").toLocaleLowerCase()
                    }).map(function(e) {
                        var o = v.default.getUser(e.userId);
                        return r.createElement(c.Popout, {
                            key: o.id,
                            preload: function() {
                                return (0, I.default)(o.id, o.getAvatarURL(t.guild_id, 80), {
                                    guildId: t.guild_id,
                                    channelId: t.id
                                })
                            },
                            renderPopout: function(n) {
                                return r.createElement(h.default, M(L({}, n), {
                                    location: "RoleMention",
                                    userId: e.userId,
                                    guildId: i.id,
                                    channelId: t.id,
                                    roleId: l.id
                                }))
                            },
                            spacing: 14
                        }, function(a, u) {
                            var s = u.isShown;
                            return r.createElement(d.default, L({
                                key: e.userId,
                                selected: s,
                                colorString: e.colorString,
                                colorRoleName: l.name,
                                user: o,
                                isOwner: e.userId === i.ownerId,
                                nick: e.nick,
                                premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
                                channel: t,
                                guildId: i.id,
                                onContextMenu: function(e) {
                                    (0, f.openContextMenuLazy)(e, D(function() {
                                        var e;
                                        return U(this, function(a) {
                                            switch (a.label) {
                                                case 0:
                                                    return [4, Promise.all([n.e("99387"), n.e("40874"), n.e("92379"), n.e("51051"), n.e("13618"), n.e("91440"), n.e("88609"), n.e("28432"), n.e("46187"), n.e("85865")]).then(n.bind(n, "641727"))];
                                                case 1:
                                                    return e = a.sent().default, [2, function(n) {
                                                        return r.createElement(e, M(L({}, n), {
                                                            user: o,
                                                            guildId: i.id,
                                                            channel: t,
                                                            showMediaItems: !0
                                                        }))
                                                    }]
                                            }
                                        })
                                    }))
                                }
                            }, a))
                        })
                    }).value();
                return r.createElement(g.default, L({
                    className: C.rolePopout
                }, e), r.createElement(c.Scroller, {
                    className: C.roleScroller
                }, r.createElement(b.default, {
                    className: C.roleHeader,
                    "aria-label": N.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
                        title: l.name,
                        count: _.length
                    })
                }, r.createElement("span", {
                    "aria-hidden": !0
                }, l.name, " — ", _.length)), _))
            },
            position: "right"
        }, x))
    }
}