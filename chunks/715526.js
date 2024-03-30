function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPurchaseToken: function() {
            return c
        },
        getPurchaseTokenHash: function() {
            return f
        }
    });
    var r = n("153832"),
        o = n("242880"),
        i = n("388990");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }
    var s = "purchase_token",
        l = 60 * i.default.Millis.DAY;

    function c() {
        var e = o.Storage.get(s);
        if (null != e && e.expires >= Date.now()) return e.purchaseToken;
        var t = (0, r.v4)();
        return o.Storage.set(s, {
            purchaseToken: t,
            expires: Date.now() + l
        }), t
    }

    function f() {
        return d.apply(this, arguments)
    }

    function d() {
        var e;
        return e = function() {
            var e, t, n;
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
                        return t = new Uint8Array(c().split("").map(function(e) {
                            return e.charCodeAt(0)
                        })), [4, window.crypto.subtle.digest({
                            name: "SHA-256"
                        }, t)];
                    case 1:
                        var o;
                        return n = r.sent(), [2, btoa((e = String).fromCharCode.apply(e, function(e) {
                            if (Array.isArray(e)) return a(e)
                        }(o = new Uint8Array(n)) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(o) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return a(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                            }
                        }(o) || function() {
                            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()))]
                }
            })
        }, (d = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    u(i, r, o, a, s, "next", e)
                }

                function s(e) {
                    u(i, r, o, a, s, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }
}