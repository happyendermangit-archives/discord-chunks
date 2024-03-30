function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n("383959"),
        o = n("774300"),
        u = n("629815"),
        i = n("463156"),
        l = n("281767");

    function a(t, e, n, r, o, u, i) {
        try {
            var l = t[u](i),
                a = l.value
        } catch (t) {
            n(t);
            return
        }
        l.done ? e(a) : Promise.resolve(a).then(r, o)
    }

    function c(t) {
        return function() {
            var e = this,
                n = arguments;
            return new Promise(function(r, o) {
                var u = t.apply(e, n);

                function i(t) {
                    a(u, r, o, i, l, "next", t)
                }

                function l(t) {
                    a(u, r, o, i, l, "throw", t)
                }
                i(void 0)
            })
        }
    }

    function s(t, e) {
        var n, r, o, u, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return u = {
            next: l(0),
            throw: l(1),
            return: l(2)
        }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
            return this
        }), u;

        function l(u) {
            return function(l) {
                return function(u) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                        switch (r = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                            case 0:
                            case 1:
                                o = u;
                                break;
                            case 4:
                                return i.label++, {
                                    value: u[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, r = u[1], u = [0];
                                continue;
                            case 7:
                                u = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                    i.label = u[1];
                                    break
                                }
                                if (6 === u[0] && i.label < o[1]) {
                                    i.label = o[1], o = u;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(u);
                                    break
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        u = e.call(t, i)
                    } catch (t) {
                        u = [6, t], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    }
                }([u, l])
            }
        }
    }
    e.default = {
        signup: function(t, e) {
            return i.default.post({
                url: l.Endpoints.HUB_WAITLIST_SIGNUP,
                body: {
                    email: t,
                    school: e
                },
                trackedActionData: {
                    event: r.NetworkActionNames.HUB_WAITLIST_SIGNUP,
                    properties: function(t) {
                        var e, n = !1,
                            r = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.email_domain;
                        return null != r && (n = -1 !== r.split(".").indexOf("edu")), (0, o.exact)({
                            is_edu_email: n
                        })
                    }
                }
            })
        },
        sendVerificationEmail: function(t, e, n) {
            return c(function() {
                return s(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return [4, i.default.post({
                                url: l.Endpoints.HUB_EMAIL_VERIFY_SEND,
                                body: {
                                    email: t,
                                    guild_id: n,
                                    allow_multiple_guilds: e,
                                    use_verification_code: !0
                                },
                                trackedActionData: {
                                    event: r.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
                                    properties: function(t) {
                                        var e, n = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.has_matching_guild;
                                        return (0, o.exact)({
                                            has_matching_guild: n
                                        })
                                    }
                                }
                            })];
                        case 1:
                            return [2, u.sent().body]
                    }
                })
            })()
        },
        verify: function(t) {
            return c(function() {
                var e, n, o;
                return s(this, function(a) {
                    switch (a.label) {
                        case 0:
                            if (!(null != t)) return [3, 4];
                            a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]), [4, i.default.post({
                                url: l.Endpoints.HUB_EMAIL_VERIFY,
                                body: {
                                    token: t
                                },
                                trackedActionData: {
                                    event: r.NetworkActionNames.HUB_EMAIL_VERIFY
                                }
                            })];
                        case 2:
                            return n = null === (e = a.sent().body.guild) || void 0 === e ? void 0 : e.id, u.default.dispatch({
                                type: "HUB_VERIFY_EMAIL_SUCCESS",
                                guildId: n
                            }), [3, 4];
                        case 3:
                            return o = a.sent(), u.default.dispatch({
                                type: "HUB_VERIFY_EMAIL_FAILURE",
                                errors: o.body
                            }), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })()
        },
        verifyCode: function(t, e, n) {
            return c(function() {
                var o, a, c, f;
                return s(this, function(s) {
                    switch (s.label) {
                        case 0:
                            if (!(null != t)) return [3, 4];
                            s.label = 1;
                        case 1:
                            return s.trys.push([1, 3, , 4]), [4, i.default.post({
                                url: l.Endpoints.HUB_EMAIL_VERIFY_CODE,
                                body: {
                                    code: t,
                                    guild_id: e,
                                    email: n
                                },
                                trackedActionData: {
                                    event: r.NetworkActionNames.HUB_EMAIL_VERIFY
                                }
                            })];
                        case 2:
                            return c = null === (o = (a = s.sent()).body.guild) || void 0 === o ? void 0 : o.id, u.default.dispatch({
                                type: "HUB_VERIFY_EMAIL_SUCCESS",
                                guildId: c
                            }), [2, a.body];
                        case 3:
                            throw f = s.sent(), u.default.dispatch({
                                type: "HUB_VERIFY_EMAIL_FAILURE",
                                errors: f.body
                            }), f;
                        case 4:
                            return [2]
                    }
                })
            })()
        }
    }
}