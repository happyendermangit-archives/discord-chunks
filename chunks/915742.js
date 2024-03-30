function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BACKUP_CODE_MAX_LENGTH: function() {
            return u
        },
        BACKUP_CODE_MIN_LENGTH: function() {
            return i
        },
        SMS_CODE_LENGTH: function() {
            return c
        },
        TOTP_CODE_LENGTH: function() {
            return s
        },
        trySubmit: function() {
            return d
        }
    });
    var r = n("967888");

    function a(e, t, n, r, a, l, o) {
        try {
            var i = e[l](o),
                u = i.value
        } catch (e) {
            n(e);
            return
        }
        i.done ? t(u) : Promise.resolve(u).then(r, a)
    }

    function l(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, l) {
                var o = e.apply(t, n);

                function i(e) {
                    a(o, r, l, i, u, "next", e)
                }

                function u(e) {
                    a(o, r, l, i, u, "throw", e)
                }
                i(void 0)
            })
        }
    }

    function o(e, t) {
        var n, r, a, l, o = {
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
                    for (; o;) try {
                        if (n = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                        switch (r = 0, a && (l = [2 & l[0], a.value]), l[0]) {
                            case 0:
                            case 1:
                                a = l;
                                break;
                            case 4:
                                return o.label++, {
                                    value: l[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, r = l[1], l = [0];
                                continue;
                            case 7:
                                l = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                    o.label = l[1];
                                    break
                                }
                                if (6 === l[0] && o.label < a[1]) {
                                    o.label = a[1], a = l;
                                    break
                                }
                                if (a && o.label < a[2]) {
                                    o.label = a[2], o.ops.push(l);
                                    break
                                }
                                a[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        l = t.call(e, o)
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
    }
    var i = 8,
        u = 11,
        s = 6,
        c = 6;

    function f() {
        return (f = l(function(e) {
            var t, n, a, l, i, u, s = arguments;
            return o(this, function(o) {
                switch (o.label) {
                    case 0:
                        t = e.ticket, n = e.mfaType, a = e.data, l = s.length > 1 && void 0 !== s[1] ? s[1] : 2, o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), [4, r.HTTP.post({
                            url: "/mfa/finish",
                            body: {
                                ticket: t,
                                mfa_type: n,
                                data: a
                            },
                            retries: l
                        })];
                    case 2:
                        return [2, o.sent().body];
                    case 3:
                        if (null === (u = (i = o.sent()).body) || void 0 === u ? void 0 : u.message) throw Error(i.body.message);
                        throw i;
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function d(e, t) {
        return m.apply(this, arguments)
    }

    function m() {
        return (m = l(function(e, t) {
            var n;
            return o(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, function(e) {
                            return f.apply(this, arguments)
                        }(e)];
                    case 1:
                        return n = r.sent().token, [2, new Promise(function(e, r) {
                            t({
                                "X-Discord-MFA-Authorization": n
                            }, function(t) {
                                var n, a;
                                return (null === (n = t.body) || void 0 === n ? void 0 : n.code) === 60008 || (null === (a = t.body) || void 0 === a ? void 0 : a.code) === 60003 ? (r(Error(t.body.message)), !0) : (e(), !1)
                            })
                        })]
                }
            })
        })).apply(this, arguments)
    }
}