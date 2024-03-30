function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("335911"),
        a = n("439386"),
        u = n("941504");

    function s(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function l(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    s(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    s(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function c(e) {
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

    function f(e, t) {
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

    function d(e, t) {
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

    function _(e) {
        i.default.supports(a.Features.VIDEO) ? (0, o.openModalLazy)(l(function() {
            var t;
            return d(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, Promise.all([n.e("99387"), n.e("26316")]).then(n.bind(n, "832522"))];
                    case 1:
                        return t = o.sent().default, [2, function(n) {
                            return r.createElement(t, f(c({}, n), {
                                header: u.default.Messages.CAMERA_UNAVAILABLE,
                                body: u.default.Messages.CAMERA_NO_DEVICE,
                                confirmText: u.default.Messages.OKAY,
                                onConfirm: e
                            }))
                        }]
                }
            })
        })) : (0, o.openModalLazy)(l(function() {
            var t;
            return d(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, Promise.all([n.e("99387"), n.e("26316")]).then(n.bind(n, "832522"))];
                    case 1:
                        return t = i.sent().default, [2, function(i) {
                            return r.createElement(t, f(c({}, i), {
                                header: u.default.Messages.VIDEO_UNSUPPORTED_BROWSER_TITLE,
                                body: u.default.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
                                confirmText: u.default.Messages.DOWNLOAD_APP,
                                onConfirm: function() {
                                    null == e || e(), (0, o.openModalLazy)(l(function() {
                                        var e;
                                        return d(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, Promise.all([n.e("99387"), n.e("22618")]).then(n.bind(n, "959865"))];
                                                case 1:
                                                    return e = t.sent().default, [2, function(t) {
                                                        return r.createElement(e, c({
                                                            source: "Video unsupported browser"
                                                        }, t))
                                                    }]
                                            }
                                        })
                                    }))
                                }
                            }))
                        }]
                }
            })
        }))
    }
}