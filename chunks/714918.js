function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        JoinSourceType: function() {
            return u
        },
        fetchMemberSupplemental: function() {
            return N
        },
        getIntegrationLabel: function() {
            return g
        },
        getJoinSourceTypeLabel: function() {
            return v
        },
        registerFetchedSupplementals: function() {
            return S
        },
        useGetIntegrationIconString: function() {
            return A
        }
    });
    var r, o, i, a, u, s, l = n("967888"),
        c = n("751848"),
        f = n("523263"),
        d = n("386823"),
        _ = n("633225"),
        E = n("281767"),
        p = n("941504");

    function m(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }
    var y = {};

    function I(e, t) {
        return e + t
    }

    function h(e, t) {
        return t.map(function(t) {
            return e + t
        })
    }

    function O(e) {
        return e.split("-")[1]
    }(r = a || (a = {}))[r.FAILED = 0] = "FAILED", r[r.UNFETCHED = 1] = "UNFETCHED", r[r.PENDING = 2] = "PENDING", r[r.SUCCEEDED = 3] = "SUCCEEDED", r[r.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

    function T(e, t) {
        e.forEach(function(e) {
            y[e] = t
        })
    }

    function S(e, t) {
        t.forEach(function(t) {
            return function(e, t, n) {
                y[e + t] = 3
            }(e, t, 3)
        })
    }(o = u || (u = {}))[o.UNSPECIFIED = 0] = "UNSPECIFIED", o[o.BOT = 1] = "BOT", o[o.INTEGRATION = 2] = "INTEGRATION", o[o.DISCOVERY = 3] = "DISCOVERY", o[o.HUB = 4] = "HUB", o[o.INVITE = 5] = "INVITE", o[o.VANITY_URL = 6] = "VANITY_URL";
    var v = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        switch (e) {
            case 1:
                return p.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
            case 2:
                return p.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
            case 3:
                return p.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
            case 4:
                return p.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
            case 5:
                return p.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
            case 6:
                if (null != t && !n) return p.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({
                    vanityUrl: t
                });
                return p.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
            default:
                return p.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN
        }
    };
    (i = s || (s = {})).DISCORD = "discord", i.TWITCH = "twitch", i.YOUTUBE = "youtube", i.GUILD_SUBSCRIPTION = "guild_subscription";
    var g = function(e) {
            switch (e) {
                case "twitch":
                    return p.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
                case "youtube":
                    return p.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
                default:
                    return p.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
            }
        },
        A = function(e) {
            var t = d.default.get((0, _.useLegacyPlatformType)(e)),
                n = (0, f.default)();
            return null != t && ["twitch", "youtube"].includes(e) ? "url('".concat((0, c.isThemeDark)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
        };

    function b(e) {
        return {
            userId: e.user_id,
            sourceInviteCode: e.source_invite_code,
            joinSourceType: e.join_source_type,
            inviterId: e.inviter_id,
            integrationType: e.integration_type
        }
    }

    function N(e, t) {
        return R.apply(this, arguments)
    }

    function R() {
        var e;
        return e = function(e, t) {
            var n, r, o, i, a, u, s, c;
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
            }(this, function(c) {
                switch (c.label) {
                    case 0:
                        if (0 === (r = (n = h(e, t)).filter(function(e) {
                                return y[e] <= 1
                            }).map(O)).length) return [2, []];
                        T(n, 2), c.label = 1;
                    case 1:
                        return c.trys.push([1, 3, , 4]), [4, l.HTTP.post({
                            url: E.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
                            body: {
                                user_ids: r
                            }
                        })];
                    case 2:
                        if (!Array.isArray((o = c.sent()).body)) return T(n, 0), [2, []];
                        return i = o.body.map(b), a = [], i.forEach(function(e) {
                            var t = e.userId;
                            return a.push(t)
                        }), u = h(e, a), s = h(e, r.filter(function(e) {
                            return !a.includes(e)
                        })), T(u, 3), T(s, 0), [2, i];
                    case 3:
                        return c.sent(), T(n, 0), [3, 4];
                    case 4:
                        return [2, []]
                }
            })
        }, (R = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    m(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    m(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }
}