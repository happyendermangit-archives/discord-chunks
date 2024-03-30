function(e, t, n) {
    "use strict";

    function r(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function o(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(o, i) {
                var a = e.apply(t, n);

                function u(e) {
                    r(a, o, i, u, s, "next", e)
                }

                function s(e) {
                    r(a, o, i, u, s, "throw", e)
                }
                u(void 0)
            })
        }
    }
    n.r(t), n.d(t, {
        loadAssetMap: function() {
            return u
        }
    });

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t) {
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

    function u(e) {
        return s.apply(this, arguments)
    }

    function s() {
        return (s = o(function(e) {
            var t, n, r, o, i, u, s, c;
            return a(this, function(a) {
                switch (a.label) {
                    case 0:
                        t = new l, n = [], r = !0, o = !1, i = void 0;
                        try {
                            for (u = Object.keys(e)[Symbol.iterator](); !(r = (s = u.next()).done); r = !0) c = s.value, n.push(t.loadRemoteImage(c, e[c]))
                        } catch (e) {
                            o = !0, i = e
                        } finally {
                            try {
                                !r && null != u.return && u.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return [4, Promise.all(n)];
                    case 1:
                        return a.sent(), [2, t]
                }
            })
        })).apply(this, arguments)
    }
    var l = function() {
        var e, t, n;

        function r() {
            var e, t, n;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), e = this, n = {}, (t = "assets") in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
        return e = r, t = [{
            key: "loadRemoteImage",
            value: function(e, t) {
                var n = this;
                return o(function() {
                    var r, o, i, u;
                    return a(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [3, 2];
                            case 1:
                                return o = a.sent(), i = r.Image.MakeImageFromEncoded(o), n.assets[e] = i, [2, Promise.resolve()];
                            case 2:
                                return (u = new Image).src = t, u.crossOrigin = "anonymous", [4, u.decode()];
                            case 3:
                                return a.sent(), n.assets[e] = u, [2, Promise.resolve()]
                        }
                    })
                })()
            }
        }, {
            key: "get",
            value: function(e) {
                return this.assets[e]
            }
        }, {
            key: "has",
            value: function(e) {
                return null != this.assets[e]
            }
        }], i(e.prototype, t), n && i(e, n), r
    }()
}