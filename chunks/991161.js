function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Timestamp: function() {
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
            }(this, d), f.call(this, "google.protobuf.Timestamp", [{
                no: 1,
                name: "seconds",
                kind: "scalar",
                T: 3
            }, {
                no: 2,
                name: "nanos",
                kind: "scalar",
                T: 5
            }])
        }
        return s = d, l = [{
            key: "now",
            value: function() {
                var e = this.create(),
                    t = Date.now();
                return e.seconds = r.PbLong.from(Math.floor(t / 1e3)).toString(), e.nanos = t % 1e3 * 1e6, e
            }
        }, {
            key: "toDate",
            value: function(e) {
                return new Date(1e3 * r.PbLong.from(e.seconds).toNumber() + Math.ceil(e.nanos / 1e6))
            }
        }, {
            key: "fromDate",
            value: function(e) {
                var t = this.create(),
                    n = e.getTime();
                return t.seconds = r.PbLong.from(Math.floor(n / 1e3)).toString(), t.nanos = n % 1e3 * 1e6, t
            }
        }, {
            key: "internalJsonWrite",
            value: function(e, t) {
                var n = 1e3 * r.PbLong.from(e.seconds).toNumber();
                if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z")) throw Error("Unable to encode Timestamp to JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.");
                if (e.nanos < 0) throw Error("Unable to encode invalid Timestamp to JSON. Nanos must not be negative.");
                var o = "Z";
                if (e.nanos > 0) {
                    var i = (e.nanos + 1e9).toString().substring(1);
                    o = "000000" === i.substring(3) ? "." + i.substring(0, 3) + "Z" : "000" === i.substring(6) ? "." + i.substring(0, 6) + "Z" : "." + i + "Z"
                }
                return new Date(n).toISOString().replace(".000Z", o)
            }
        }, {
            key: "internalJsonRead",
            value: function(e, t, n) {
                if ("string" != typeof e) throw Error("Unable to parse Timestamp from JSON " + (0, r.typeofJsonValue)(e) + ".");
                var o = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
                if (!o) throw Error("Unable to parse Timestamp from JSON. Invalid format.");
                var i = Date.parse(o[1] + "-" + o[2] + "-" + o[3] + "T" + o[4] + ":" + o[5] + ":" + o[6] + (o[8] ? o[8] : "Z"));
                if (Number.isNaN(i)) throw Error("Unable to parse Timestamp from JSON. Invalid value.");
                if (i < Date.parse("0001-01-01T00:00:00Z") || i > Date.parse("9999-12-31T23:59:59Z")) throw new globalThis.Error("Unable to parse Timestamp from JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.");
                return !n && (n = this.create()), n.seconds = r.PbLong.from(i / 1e3).toString(), n.nanos = 0, o[7] && (n.nanos = parseInt("1" + o[7] + "0".repeat(9 - o[7].length)) - 1e9), n
            }
        }, {
            key: "create",
            value: function(e) {
                var t = {
                    seconds: "0",
                    nanos: 0
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
                            a.seconds = e.int64().toString();
                            break;
                        case 2:
                            a.nanos = e.int32();
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
                "0" !== e.seconds && t.tag(1, r.WireType.Varint).int64(e.seconds), 0 !== e.nanos && t.tag(2, r.WireType.Varint).int32(e.nanos);
                var o = n.writeUnknownFields;
                return !1 !== o && (!0 == o ? r.UnknownFieldHandler.onWrite : o)(this.typeName, e, t), t
            }
        }], i(s.prototype, l), c && i(s, c), d
    }(r.MessageType))
}