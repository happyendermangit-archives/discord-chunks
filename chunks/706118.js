function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("898511"),
        i = n("317861"),
        a = n("106440"),
        u = n("266290"),
        s = n("940444");

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

    function c(e) {
        return function() {
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
        }
    }

    function f(e, t) {
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

    function d() {
        return (d = c(function(e) {
            return f(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, (0, i.applyPublicBuildOverride)(e)];
                    case 1:
                        if (200 !== t.sent().status) throw Error("Build override couldn't apply");
                        return window.location.reload(!0), [2]
                }
            })
        })).apply(this, arguments)
    }

    function _() {
        return E.apply(this, arguments)
    }

    function E() {
        return (E = c(function() {
            return f(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, (0, i.clearBuildOverride)()];
                    case 1:
                        return e.sent(), window.location.reload(!0), [2]
                }
            })
        })).apply(this, arguments)
    }
    t.default = r.memo(function(e) {
        var t = e.url,
            n = (0, o.useStateFromStoresObject)([a.default], function() {
                return a.default.getCurrentBuildOverride()
            }),
            i = (0, o.useStateFromStores)([a.default], function() {
                return a.default.getBuildOverride(t)
            }),
            l = i.payload,
            c = i.validatedURL,
            f = n.state === a.State.Resolving || i.state === a.State.Resolving,
            E = r.useCallback(function() {
                return null == l ? Promise.reject(Error("Invalid override payload")) : ((0, s.addRecentBuildOverride)(i.override, l), function(e) {
                    return d.apply(this, arguments)
                }(l))
            }, [l, i]);
        return null != c ? r.createElement(u.default, {
            loading: f,
            linkMeta: i.override,
            currentOverrides: n.overrides,
            applyBuildOverride: E,
            clearBuildOverride: _,
            url: c
        }) : null
    })
}