function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    });
    var r = n("967888"),
        o = n("146591"),
        i = n("416391"),
        a = n("319654"),
        u = n("83653"),
        s = n("941504");

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
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return (d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
            var r = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _(e)););
                return e
            }(e, t);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n || e) : o.value
            }
        })(e, t, n || e)
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e) {
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

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function m(e, t) {
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
    var y = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
        }(O, e);
        var t, n, l, y, I, h = (t = O, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function O(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "POST",
                n = arguments.length > 2 ? arguments[2] : void 0;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, O), h.call(this, e, t, n)
        }
        return l = O, y = [{
            key: "uploadFiles",
            value: function(e, t) {
                var n = this,
                    r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).addFilesTo,
                    o = this;
                return c(function() {
                    var a, u, l;
                    return m(this, function(c) {
                        switch (c.label) {
                            case 0:
                                d(_(O.prototype), "upload", n).call(o, {
                                    name: s.default.Messages.ATTACHMENT_PROCESSING
                                }, t, e), a = new AbortController, c.label = 1;
                            case 1:
                                if (c.trys.push([1, 4, , 5]), o.files = e, o._aborted) return [2];
                                return o._handleStart(function() {
                                    return a.abort()
                                }), [4, o.compressAndCheckFileSize()];
                            case 2:
                                if (!c.sent()) return [2];
                                return o.setUploadingTextForUI(), [4, (0, i.stageAttachmentFiles)(o.files, !0, o._recomputeProgress.bind(o))];
                            case 3:
                                return c.sent(), [3, 5];
                            case 4:
                                return u = c.sent(), o._handleException(u), [3, 5];
                            case 5:
                                return c.trys.push([5, 7, , 8]), [4, o._createMessage(a.signal, t, r)];
                            case 6:
                                return [2, c.sent()];
                            case 7:
                                if (l = c.sent(), o._raiseEndpointErrors) throw l;
                                o._handleException(l);
                                return [3, 8];
                            case 8:
                                return [2]
                        }
                    })
                })()
            }
        }, {
            key: "_createMessage",
            value: function(e, t, n) {
                var i = this;
                return c(function() {
                    var s, l, c, f, d, _, p;
                    return m(this, function(m) {
                        switch (m.label) {
                            case 0:
                                if (s = [], i.files.forEach(function(e, t) {
                                        var n = (0, u.getAttachmentPayload)(e, t);
                                        e.item.platform === a.UploadPlatform.WEB && s.push(E({}, n))
                                    }), null != n && null != t) l = i._addAttachmentsToPayload(t, n, s);
                                else {
                                    var y, I;
                                    y = E({}, t), I = (I = {
                                        attachments: s
                                    }, I), Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(I)) : (function(e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r)
                                        }
                                        return n
                                    })(Object(I)).forEach(function(e) {
                                        Object.defineProperty(y, e, Object.getOwnPropertyDescriptor(I, e))
                                    }), l = y
                                }
                                c = {
                                    url: i._url,
                                    body: l,
                                    signal: e
                                }, f = "POST" === i._method ? r.HTTP.post : r.HTTP.patch, m.label = 1;
                            case 1:
                                return m.trys.push([1, 3, , 4]), [4, f(c)];
                            case 2:
                                return d = m.sent(), i._handleComplete(d.body), [2, d.body];
                            case 3:
                                if (_ = m.sent(), i._raiseEndpointErrors) throw new o.APIError(_);
                                i._handleError({
                                    code: null == _ ? void 0 : null === (p = _.body) || void 0 === p ? void 0 : p.code,
                                    body: null == _ ? void 0 : _.body
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })()
            }
        }], f(l.prototype, y), I && f(l, I), O
    }(i.default)
}