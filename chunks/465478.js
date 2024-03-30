function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchUserProfileEffects: function() {
            return d
        }
    });
    var r, o, i = n("967888"),
        a = n("629815"),
        u = n("146591"),
        s = n("412471"),
        l = n("281767");

    function c(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }
    var f = function(e) {
        var t, n, r = e.sku_id,
            o = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["sku_id"]);
        return {
            id: o.id,
            skuId: r,
            config: (t = function(e) {
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
            }({}, o), n = (n = {
                skuId: r
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t)
        }
    };
    var d = (o = (r = function() {
        var e, t, n, r = arguments;
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
        }(this, function(o) {
            switch (o.label) {
                case 0:
                    if (!(r.length > 0 && void 0 !== r[0] && r[0]) && (s.default.hasFetched() || s.default.isFetching) || !s.default.canFetch()) return [2];
                    a.default.dispatch({
                        type: "USER_PROFILE_EFFECTS_FETCH"
                    }), o.label = 1;
                case 1:
                    return o.trys.push([1, 3, , 4]), [4, i.HTTP.get(l.Endpoints.USER_PROFILE_EFFECTS)];
                case 2:
                    return t = (null == (e = o.sent().body) ? void 0 : e.profile_effect_configs).map(f), a.default.dispatch({
                        type: "USER_PROFILE_EFFECTS_FETCH_SUCCESS",
                        profileEffects: t
                    }), [3, 4];
                case 3:
                    throw n = o.sent(), a.default.dispatch({
                        type: "USER_PROFILE_EFFECTS_FETCH_FAILURE",
                        error: n
                    }), new u.APIError(n);
                case 4:
                    return [2]
            }
        })
    }, function() {
        var e = this,
            t = arguments;
        return new Promise(function(n, o) {
            var i = r.apply(e, t);

            function a(e) {
                c(i, n, o, a, u, "next", e)
            }

            function u(e) {
                c(i, n, o, a, u, "throw", e)
            }
            a(void 0)
        })
    }), function() {
        return o.apply(this, arguments)
    })
}