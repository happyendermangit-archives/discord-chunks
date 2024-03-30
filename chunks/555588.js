function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSession: function() {
            return E
        },
        setSessionExtendingEnabled: function() {
            return _
        },
        timestampOrZero: function() {
            return m
        }
    });
    var r = n("153832"),
        o = n("242880");

    function i(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function a(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var a = e.apply(t, n);

                function u(e) {
                    i(a, r, o, u, s, "next", e)
                }

                function s(e) {
                    i(a, r, o, u, s, "throw", e)
                }
                u(void 0)
            })
        }
    }

    function u(e, t) {
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
    var s = "LATEST_SESSION_TIMESTAMP",
        l = "LATEST_SESSION_UUID",
        c = "LATEST_SESSION_INITIALIZED_TIMESTAMP",
        f = Promise.resolve(),
        d = !1;

    function _(e) {
        d = e
    }

    function E() {
        return f = f.then(a(function() {
            var e, t;
            return u(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, function() {
                            return p.apply(this, arguments)
                        }()];
                    case 1:
                        if (null == (e = n.sent()) || function(e) {
                                return 18e5 + e.lastUsed - Date.now() <= 0
                            }(e)) {
                            if (!d) return [2, null];
                            t = {
                                uuid: (0, r.v4)(),
                                initialized: Date.now(),
                                lastUsed: Date.now()
                            }, o.Storage.set(l, t.uuid), o.Storage.set(c, t.initialized.toString()), o.Storage.set(s, Date.now().toString()), e = t
                        } else d && o.Storage.set(s, Date.now().toString());
                        return [2, e]
                }
            })
        }))
    }

    function p() {
        return (p = a(function() {
            var e, t, n;
            return u(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, o.Storage.getAfterRefresh(l)];
                    case 1:
                        return e = r.sent(), [4, o.Storage.getAfterRefresh(c).then(m)];
                    case 2:
                        return t = r.sent(), [4, o.Storage.getAfterRefresh(s).then(m)];
                    case 3:
                        return n = r.sent(), [2, null != e && null != t ? {
                            uuid: e,
                            initialized: t,
                            lastUsed: n
                        } : null]
                }
            })
        })).apply(this, arguments)
    }

    function m(e) {
        return null != e ? Number(e) : 0
    }
}