function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ChangePhoneReason: function() {
            return a
        }
    });
    var r, a, l = n("383959"),
        u = n("967888"),
        i = n("629815"),
        o = n("217014"),
        s = n("463156"),
        c = n("313938"),
        E = n("281767");

    function d(e, t, n, r, a, l, u) {
        try {
            var i = e[l](u),
                o = i.value
        } catch (e) {
            n(e);
            return
        }
        i.done ? t(o) : Promise.resolve(o).then(r, a)
    }(r = a || (a = {})).USER_ACTION_REQUIRED = "user_action_required", r.USER_SETTINGS_UPDATE = "user_settings_update", r.GUILD_PHONE_REQUIRED = "guild_phone_required", r.MFA_PHONE_UPDATE = "mfa_phone_update", r.CONTACT_SYNC = "contact_sync", t.default = {
        setCountryCode: function(e) {
            i.default.dispatch({
                type: "PHONE_SET_COUNTRY_CODE",
                countryCode: e
            })
        },
        removePhone: function(e, t) {
            return u.HTTP.del({
                url: E.Endpoints.PHONE,
                body: {
                    password: e,
                    change_phone_reason: t
                },
                oldFormErrors: !0
            })
        },
        resendCode: function(e) {
            var t = {},
                n = o.default.getFingerprint();
            return null != n && "" !== n && (t["X-Fingerprint"] = n), u.HTTP.post({
                url: E.Endpoints.RESEND_PHONE,
                headers: t,
                body: {
                    phone: e
                }
            })
        },
        beginAddPhone: function(e, t) {
            return u.HTTP.post({
                url: E.Endpoints.PHONE,
                body: {
                    phone: e,
                    change_phone_reason: t
                }
            })
        },
        addPhone: function(e, t, n) {
            return u.HTTP.post({
                url: E.Endpoints.PHONE,
                body: {
                    phone_token: e,
                    password: t,
                    change_phone_reason: n
                },
                oldFormErrors: !0
            })
        },
        addPhoneWithoutPassword: function(e) {
            return u.HTTP.post({
                url: E.Endpoints.PHONE_VERIFY_NO_PASSWORD,
                body: {
                    code: e
                }
            })
        },
        beginReverifyPhone: function(e, t) {
            return u.HTTP.post({
                url: E.Endpoints.PHONE_REVERIFY,
                body: {
                    phone: e,
                    change_phone_reason: t
                }
            })
        },
        reverifyPhone: function(e, t, n) {
            return u.HTTP.post({
                url: E.Endpoints.PHONE_REVERIFY,
                body: {
                    phone_token: e,
                    password: t,
                    change_phone_reason: n
                },
                oldFormErrors: !0
            })
        },
        validatePhoneForSupport: function(e) {
            return u.HTTP.post({
                url: E.Endpoints.VERIFY_PHONE_FOR_TICKET,
                body: {
                    token: e
                },
                oldFormErrors: !0
            })
        },
        verifyPhone: function(e, t) {
            var n, r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return (n = function() {
                var n, u, d;
                return function(e, t) {
                    var n, r, a, l, u = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return l = {
                        next: i(0),
                        throw: i(1),
                        return: i(2)
                    }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                        return this
                    }), l;

                    function i(l) {
                        return function(i) {
                            return function(l) {
                                if (n) throw TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                    switch (r = 0, a && (l = [2 & l[0], a.value]), l[0]) {
                                        case 0:
                                        case 1:
                                            a = l;
                                            break;
                                        case 4:
                                            return u.label++, {
                                                value: l[1],
                                                done: !1
                                            };
                                        case 5:
                                            u.label++, r = l[1], l = [0];
                                            continue;
                                        case 7:
                                            l = u.ops.pop(), u.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = (a = u.trys).length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                                u.label = l[1];
                                                break
                                            }
                                            if (6 === l[0] && u.label < a[1]) {
                                                u.label = a[1], a = l;
                                                break
                                            }
                                            if (a && u.label < a[2]) {
                                                u.label = a[2], u.ops.push(l);
                                                break
                                            }
                                            a[2] && u.ops.pop(), u.trys.pop();
                                            continue
                                    }
                                    l = t.call(e, u)
                                } catch (e) {
                                    l = [6, e], r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & l[0]) throw l[1];
                                return {
                                    value: l[0] ? l[1] : void 0,
                                    done: !0
                                }
                            }([l, i])
                        }
                    }
                }(this, function(_) {
                    switch (_.label) {
                        case 0:
                            return n = {}, null != (u = o.default.getFingerprint()) && "" !== u && (n["X-Fingerprint"] = u), a && (n.authorization = ""), [4, s.default.post({
                                url: E.Endpoints.VERIFY_PHONE,
                                headers: n,
                                body: {
                                    phone: e,
                                    code: t
                                },
                                oldFormErrors: !0,
                                trackedActionData: {
                                    event: l.NetworkActionNames.USER_VERIFY_PHONE
                                }
                            })];
                        case 1:
                            return d = _.sent(), r && i.default.dispatch({
                                type: "MODAL_POP",
                                key: c.PHONE_VERIFICATION_MODAL_KEY
                            }), [2, d.body]
                    }
                })
            }, function() {
                var e = this,
                    t = arguments;
                return new Promise(function(r, a) {
                    var l = n.apply(e, t);

                    function u(e) {
                        d(l, r, a, u, i, "next", e)
                    }

                    function i(e) {
                        d(l, r, a, u, i, "throw", e)
                    }
                    u(void 0)
                })
            })()
        }
    }
}