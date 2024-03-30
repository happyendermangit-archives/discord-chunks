function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        validateClipMetadata: function() {
            return l
        }
    });
    var r = n("945986");

    function o(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function i(e) {
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

    function a(e, t) {
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
    var u = [function(e) {
            var t = a(i({}, e), {
                version: 1,
                applicationName: e.gameName,
                applicationId: void 0
            });
            return delete t.gameName, t
        }, function(e) {
            return a(i({}, e), {
                version: 2,
                name: e.name.startsWith("Clip - ") ? void 0 : e.name
            })
        }, function(e) {
            return a(i({}, e), {
                version: 3,
                name: "" === e.name ? void 0 : e.name
            })
        }],
        s = null;

    function l(e) {
        return c.apply(this, arguments)
    }

    function c() {
        var e;
        return e = function(e) {
            var t, o, i;
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
            }(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, n.e("56268").then(n.t.bind(n, "826753", 23))];
                    case 1:
                        var l;
                        l = t = a.sent().default, o = null != s ? s : s = l.object({
                            id: l.string().required(),
                            version: l.number().positive().integer().min(0).max(r.CURRENT_CLIP_METADATA_VERSION).optional(),
                            name: l.string().when("version", {
                                is: l.number().less(3),
                                then: l.string().allow("")
                            }),
                            gameName: l.string().when("version", {
                                is: l.number().greater(0).required(),
                                then: l.forbidden(),
                                otherwise: l.required()
                            }),
                            applicationName: l.string().when("version", {
                                is: l.number().greater(0).required(),
                                then: l.required(),
                                otherwise: l.forbidden()
                            }),
                            applicationId: l.string(),
                            users: l.array().items(l.string()).required(),
                            filepath: l.string().required(),
                            length: l.number().required(),
                            thumbnail: l.string().required().allow(""),
                            editMetadata: l.object().keys({
                                start: l.number(),
                                end: l.number(),
                                applicationAudio: l.boolean(),
                                voiceAudio: l.boolean()
                            }),
                            clipMethod: l.string().allow("auto", "manual").required()
                        }).required();
                        try {
                            return t.assert(e, o), i = e, null == i.version && (i.version = 0), [2, u.slice(i.version).reduce(function(e, t) {
                                return t(e)
                            }, i)]
                        } catch (e) {
                            return [2, null]
                        }
                        return [2]
                }
            })
        }, (c = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, i) {
                var a = e.apply(t, n);

                function u(e) {
                    o(a, r, i, u, s, "next", e)
                }

                function s(e) {
                    o(a, r, i, u, s, "throw", e)
                }
                u(void 0)
            })
        }).apply(this, arguments)
    }
}