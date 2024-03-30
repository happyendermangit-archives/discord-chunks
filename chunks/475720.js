function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s = n("967888"),
        l = n("629815"),
        c = n("686785"),
        f = n("717744"),
        d = n("54976"),
        _ = n("957808"),
        E = n("411778"),
        p = n("208454"),
        m = n("281767");

    function y(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function I(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    y(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    y(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function h(e, t) {
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
    var O = (r = I(function(e, t) {
        var n, r, o, i, a, u;
        return h(this, function(u) {
            switch (u.label) {
                case 0:
                    n = null != t ? t : E.default.getInviteKeyForGuildId(e), r = p.default.getCurrentUser(), o = !_.default.isMember(e, null == r ? void 0 : r.id), u.label = 1;
                case 1:
                    return u.trys.push([1, 3, , 4]), [4, s.HTTP.get({
                        url: m.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: o,
                            invite_code: null != n ? (0, d.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    })];
                case 2:
                    if (null == (i = u.sent()).body) throw i;
                    return a = i.body, l.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: a.version,
                            description: a.description,
                            formFields: a.form_fields,
                            guild: a.guild
                        }
                    }), [2, a];
                case 3:
                    return u.sent(), l.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    }), [3, 4];
                case 4:
                    return [2]
            }
        })
    }), function(e, t) {
        return r.apply(this, arguments)
    });
    var T = (o = I(function(e, t) {
        var n;
        return h(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, s.HTTP.patch({
                        url: m.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    })];
                case 1:
                    return n = r.sent().body, l.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: n.version,
                            description: n.description,
                            formFields: n.form_fields
                        }
                    }), [2]
            }
        })
    }), function(e, t) {
        return o.apply(this, arguments)
    });
    var S = (i = I(function(e, t) {
        var n;
        return h(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, s.HTTP.patch({
                        url: m.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    })];
                case 1:
                    return n = r.sent().body, l.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: n.version,
                            description: n.description,
                            formFields: n.form_fields
                        }
                    }), [2]
            }
        })
    }), function(e, t) {
        return i.apply(this, arguments)
    });
    var v = (a = I(function(e, t) {
        return h(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, s.HTTP.patch({
                        url: m.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            enabled: t
                        },
                        oldFormErrors: !0
                    })];
                case 1:
                    return n.sent(), [2]
            }
        })
    }), function(e, t) {
        return a.apply(this, arguments)
    });
    var g = (u = I(function(e, t) {
        var n;
        return h(this, function(r) {
            switch (r.label) {
                case 0:
                    if (f.default.isFullServerPreview(e)) return (0, c.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    }), [2];
                    r.label = 1;
                case 1:
                    return r.trys.push([1, 3, , 4]), [4, s.HTTP.put({
                        url: m.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                        body: {
                            version: t.version,
                            form_fields: t.formFields
                        }
                    })];
                case 2:
                    return n = r.sent().body, l.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: n
                    }), [2, n];
                case 3:
                    throw r.sent();
                case 4:
                    return [2]
            }
        })
    }), function(e, t) {
        return u.apply(this, arguments)
    });
    t.default = {
        fetchVerificationForm: O,
        updateVerificationForm: T,
        updateVerificationFormDescription: S,
        enableVerificationForm: v,
        submitVerificationForm: g
    }
}