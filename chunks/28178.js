function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Versions: function() {
            return s
        }
    });
    var r = n("578012");

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function u(e, t) {
        return (u = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var s = new(function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && u(e, t)
        }(d, e);
        var t, n, s, l, c, f = (t = d, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = a(t);
            if (n) {
                var u = a(this).constructor;
                o = Reflect.construct(i, arguments, u)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function d() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, d), f.call(this, "discord_protos.discord_users.v1.Versions", [{
                no: 1,
                name: "client_version",
                kind: "scalar",
                T: 13
            }, {
                no: 2,
                name: "server_version",
                kind: "scalar",
                T: 13
            }, {
                no: 3,
                name: "data_version",
                kind: "scalar",
                T: 13
            }])
        }
        return s = d, l = [{
            key: "create",
            value: function(e) {
                var t = {
                    clientVersion: 0,
                    serverVersion: 0,
                    dataVersion: 0
                };
                return globalThis.Object.defineProperty(t, r.MESSAGE_TYPE, {
                    enumerable: !1,
                    value: this
                }), void 0 !== e && (0, r.reflectionMergePartial)(this, t, e), t
            }
        }, {
            key: "internalBinaryRead",
            value: function(e, t, n, i) {
                for (var a = null != i ? i : this.create(), u = e.pos + t; e.pos < u;) {
                    var s, l, c = (s = e.tag(), l = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(s) || function(e, t) {
                            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    a = !0,
                                    u = !1;
                                try {
                                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                } catch (e) {
                                    u = !0, r = e
                                } finally {
                                    try {
                                        !a && null != o.return && o.return()
                                    } finally {
                                        if (u) throw r
                                    }
                                }
                                return i
                            }
                        }(s, l) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return o(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                            }
                        }(s, l) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        f = c[0],
                        d = c[1];
                    switch (f) {
                        case 1:
                            a.clientVersion = e.uint32();
                            break;
                        case 2:
                            a.serverVersion = e.uint32();
                            break;
                        case 3:
                            a.dataVersion = e.uint32();
                            break;
                        default:
                            var _ = n.readUnknownField;
                            if ("throw" === _) throw new globalThis.Error("Unknown field ".concat(f, " (wire type ").concat(d, ") for ").concat(this.typeName));
                            var E = e.skip(d);
                            !1 !== _ && (!0 === _ ? r.UnknownFieldHandler.onRead : _)(this.typeName, a, f, d, E)
                    }
                }
                return a
            }
        }, {
            key: "internalBinaryWrite",
            value: function(e, t, n) {
                0 !== e.clientVersion && t.tag(1, r.WireType.Varint).uint32(e.clientVersion), 0 !== e.serverVersion && t.tag(2, r.WireType.Varint).uint32(e.serverVersion), 0 !== e.dataVersion && t.tag(3, r.WireType.Varint).uint32(e.dataVersion);
                var o = n.writeUnknownFields;
                return !1 !== o && (!0 == o ? r.UnknownFieldHandler.onWrite : o)(this.typeName, e, t), t
            }
        }], i(s.prototype, l), c && i(s, c), d
    }(r.MessageType))
}