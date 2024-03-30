function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("204394");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                l(e, t, n[t])
            })
        }
        return e
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = Object.freeze([]),
        E = {},
        p = {},
        m = {},
        y = {},
        I = {};

    function h(e, t) {}

    function O() {
        I = {}
    }

    function T(e, t) {
        var n = E[e];
        return null != n && (E[e] = n.filter(function(e) {
            return e.id !== t
        }), delete p[t], delete m[t], n.length !== E[e].length)
    }

    function S(e, t) {
        var n = E[e];
        if (null == n) return !1;
        E[e] = n.map(function(e) {
            return e.id === t.id ? f({}, e, t) : e
        });
        var r = m[t.id];
        null != r && null != y[r.id] && (y[r.id] = f({}, y[r.id], t))
    }
    var v = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(e, t)
        }(l, e);
        var t, n, r, o, i, u = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = c(t);
            if (n) {
                var a = c(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function l() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), u.apply(this, arguments)
        }
        return r = l, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(a.default)
            }
        }, {
            key: "getFiles",
            value: function(e) {
                var t;
                return null !== (t = E[e]) && void 0 !== t ? t : _
            }
        }, {
            key: "getMessageForFile",
            value: function(e) {
                return m[e]
            }
        }, {
            key: "getUploaderFileForMessageId",
            value: function(e) {
                return y[e]
            }
        }, {
            key: "getUploadAttachments",
            value: function(e) {
                if (null != e) return I[e]
            }
        }], s(r.prototype, o), i && s(r, i), l
    }(o.default.Store);
    l(v, "displayName", "UploadStore"), t.default = new v(i.default, {
        CONNECTION_OPEN: function() {
            I = {}
        },
        LOGOUT: function() {
            I = {}
        },
        UPLOAD_START: function(e) {
            var t, n = e.channelId,
                r = e.file,
                o = e.uploader,
                i = e.message;
            if (!o._aborted && !o._errored) {
                var a, s, l, c = null !== (t = E[n]) && void 0 !== t ? t : _;
                p[r.id] = o, E[n] = ((function(e) {
                    if (Array.isArray(e)) return u(e)
                })(a = c) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(a) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return u(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                    }
                }(a) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()).concat([r]), m[r.id] = i;
                var d = r.items;
                if (null != d) {
                    ;
                    y[i.id] = (s = f({}, r), l = (l = {
                        items: d
                    }, l), Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(l)).forEach(function(e) {
                        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(l, e))
                    }), s)
                }
                i.nonce
            }
        },
        UPLOAD_COMPRESSION_PROGRESS: function(e) {
            S(e.channelId, e.file)
        },
        UPLOAD_PROGRESS: function(e) {
            S(e.channelId, e.file)
        },
        UPLOAD_COMPLETE: function(e) {
            return T(e.channelId, e.file.id)
        },
        UPLOAD_FAIL: function(e) {
            return T(e.channelId, e.file.id)
        },
        UPLOAD_CANCEL_REQUEST: function(e) {
            var t = p[e.file.id];
            if (null == t) return !1;
            setImmediate(function() {
                var e;
                return null === (e = t.cancel) || void 0 === e ? void 0 : e.call(t)
            })
        },
        UPLOAD_ITEM_CANCEL_REQUEST: function(e) {
            var t = e.file,
                n = e.itemId,
                r = p[t.id];
            if (null == r) return !1;
            setImmediate(function() {
                return r.cancelItem(n)
            })
        },
        UPLOAD_FILE_UPDATE: function(e) {
            var t = e.channelId,
                n = e.file,
                r = m[n.id];
            null != r && r.nonce, S(t, n)
        },
        UPLOAD_RESTORE_FAILED_UPLOAD: function(e) {
            var t = e.file;
            y[e.messageId] = t
        }
    })
}