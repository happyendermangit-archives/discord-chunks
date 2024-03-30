function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InvitesDisabledExperiment: function() {
            return c
        },
        setInvitesDisabled: function() {
            return _
        },
        useInvitesDisabledExperiment: function() {
            return d
        },
        useInvitesDisabledPermission: function() {
            return f
        },
        useShouldShowInvitesDisabledNotif: function() {
            return p
        }
    });
    var r = n("898511"),
        o = n("94498"),
        i = n("400650"),
        a = n("29884"),
        u = n("878943"),
        s = n("281767");

    function l(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }
    var c = (0, o.createExperiment)({
        kind: "guild",
        id: "2022-07_invites_disabled",
        label: "Report Raids",
        defaultConfig: {
            enableInvitesDisabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable Reporting Of Raids",
            config: {
                enableInvitesDisabled: !0
            }
        }]
    });

    function f(e) {
        return (0, r.useStateFromStores)([a.default], function() {
            return null != e && a.default.can(s.Permissions.MANAGE_GUILD, e)
        }, [e])
    }

    function d(e) {
        return c.useExperiment({
            guildId: e.id,
            location: "108f83_1"
        }, {
            autoTrackExposure: !1
        })
    }

    function _(e, t) {
        return E.apply(this, arguments)
    }

    function E() {
        var e;
        return e = function(e, t) {
            var n;
            return function(e, t) {
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
            }(this, function(r) {
                switch (r.label) {
                    case 0:
                        if (e.hasFeature(s.GuildFeatures.INVITES_DISABLED) === t) return [2];
                        return n = new Set(e.features), t ? n.add(s.GuildFeatures.INVITES_DISABLED) : n.delete(s.GuildFeatures.INVITES_DISABLED), [4, u.default.saveGuild(e.id, {
                            features: n
                        }, {
                            throwErr: !0
                        })];
                    case 1:
                        return r.sent(), [2]
                }
            })
        }, (E = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    l(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    l(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }

    function p(e) {
        var t, n = f(e),
            o = (0, r.useStateFromStores)([i.default], function() {
                return null != e ? i.default.getGuildIncident(e.id) : null
            }),
            a = (null == e ? void 0 : null === (t = e.hasFeature) || void 0 === t ? void 0 : t.call(e, s.GuildFeatures.INVITES_DISABLED)) || (null == o ? void 0 : o.invitesDisabledUntil) != null && new Date(o.invitesDisabledUntil) > new Date;
        return n && a
    }
}