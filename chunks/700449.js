function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BoolValue: function() {
            return y
        },
        Int32Value: function() {
            return p
        },
        Int64Value: function() {
            return _
        },
        StringValue: function() {
            return I
        },
        UInt32Value: function() {
            return m
        },
        UInt64Value: function() {
            return E
        }
    });
    var r = n("578012");

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function i(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t && a(e.prototype, t), n && a(e, n), e
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && c(e, t)
    }

    function c(e, t) {
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function f(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return o(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, i = s(e);
            if (t) {
                var a = s(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(n)
        }
    }
    new(function(e) {
        l(n, e);
        var t = d(n);

        function n() {
            return i(this, n), t.call(this, "google.protobuf.DoubleValue", [{
                no: 1,
                name: "value",
                kind: "scalar",
                T: 1
            }])
        }
        return u(n, [{
            key: "internalJsonWrite",
            value: function(e, t) {
                return this.refJsonWriter.scalar(2, e.value, "value", !1, !0)
            }
        }, {
            key: "internalJsonRead",
            value: function(e, t, n) {
                return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 1, void 0, "value"), n
            }
        }, {
            key: "create",
            value: function(e) {
                var t = {
                    value: 0
                };
                return globalThis.Object.defineProperty(t, r.MESSAGE_TYPE, {
                    enumerable: !1,
                    value: this
                }), void 0 !== e && (0, r.reflectionMergePartial)(this, t, e), t
            }
        }, {
            key: "internalBinaryRead",
            value: function(e, t, n, o) {
                for (var i = null != o ? o : this.create(), a = e.pos + t; e.pos < a;) {
                    var u = f(e.tag(), 2),
                        s = u[0],
                        l = u[1];
                    if (1 === s) i.value = e.double();
                    else {
                        var c = n.readUnknownField;
                        if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                        var d = e.skip(l);
                        !1 !== c && (!0 === c ? r.UnknownFieldHandler.onRead : c)(this.typeName, i, s, l, d)
                    }
                }
                return i
            }
        }, {
            key: "internalBinaryWrite",
            value: function(e, t, n) {
                0 !== e.value && t.tag(1, r.WireType.Bit64).double(e.value);
                var o = n.writeUnknownFields;
                return !1 !== o && (!0 == o ? r.UnknownFieldHandler.onWrite : o)(this.typeName, e, t), t
            }
        }]), n
    }(r.MessageType)), new(function(e) {
        l(n, e);
        var t = d(n);

        function n() {
            return i(this, n), t.call(this, "google.protobuf.FloatValue", [{
                no: 1,
                name: "value",
                kind: "scalar",
                T: 2
            }])
        }
        return u(n, [{
            key: "internalJsonWrite",
            value: function(e, t) {
                return this.refJsonWriter.scalar(1, e.value, "value", !1, !0)
            }
        }, {
            key: "internalJsonRead",
            value: function(e, t, n) {
                return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 1, void 0, "value"), n
            }
        }, {
            key: "create",
            value: function(e) {
                var t = {
                    value: 0
                };
                return globalThis.Object.defineProperty(t, r.MESSAGE_TYPE, {
                    enumerable: !1,
                    value: this
                }), void 0 !== e && (0, r.reflectionMergePartial)(this, t, e), t
            }
        }, {
            key: "internalBinaryRead",
            value: function(e, t, n, o) {
                for (var i = null != o ? o : this.create(), a = e.pos + t; e.pos < a;) {
                    var u = f(e.tag(), 2),
                        s = u[0],
                        l = u[1];
                    if (1 === s) i.value = e.float();
                    else {
                        var c = n.readUnknownField;
                        if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                        var d = e.skip(l);
                        !1 !== c && (!0 === c ? r.UnknownFieldHandler.onRead : c)(this.typeName, i, s, l, d)
                    }
                }
                return i
            }
        }, {
            key: "internalBinaryWrite",
            value: function(e, t, n) {
                0 !== e.value && t.tag(1, r.WireType.Bit32).float(e.value);
                var o = n.writeUnknownFields;
                return !1 !== o && (!0 == o ? r.UnknownFieldHandler.onWrite : o)(this.typeName, e, t), t
            }
        }]), n
    }(r.MessageType));
    var _ = new(function(e) {
            l(n, e);
            var t = d(n);

            function n() {
                return i(this, n), t.call(this, "google.protobuf.Int64Value", [{
                    no: 1,
                    name: "value",
                    kind: "scalar",
                    T: 3
                }])
            }
            return u(n, [{
                key: "internalJsonWrite",
                value: function(e, t) {
                    return this.refJsonWriter.scalar(r.ScalarType.INT64, e.value, "value", !1, !0)
                }
            }, {
                key: "internalJsonRead",
                value: function(e, t, n) {
                    return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, r.ScalarType.INT64, r.LongType.STRING, "value"), n
                }
            }, {
                key: "create",
                value: function(e) {
                    var t = {
                        value: "0"
                    };
                    return globalThis.Object.defineProperty(t, r.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, r.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, o) {
                    for (var i = null != o ? o : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = f(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        if (1 === s) i.value = e.int64().toString();
                        else {
                            var c = n.readUnknownField;
                            if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                            var d = e.skip(l);
                            !1 !== c && (!0 === c ? r.UnknownFieldHandler.onRead : c)(this.typeName, i, s, l, d)
                        }
                    }
                    return i
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    "0" !== e.value && t.tag(1, r.WireType.Varint).int64(e.value);
                    var o = n.writeUnknownFields;
                    return !1 !== o && (!0 == o ? r.UnknownFieldHandler.onWrite : o)(this.typeName, e, t), t
                }
            }]), n
        }(r.MessageType)),
        E = new(function(e) {
            l(n, e);
            var t = d(n);

            function n() {
                return i(this, n), t.call(this, "google.protobuf.UInt64Value", [{
                    no: 1,
                    name: "value",
                    kind: "scalar",
                    T: 4
                }])
            }
            return u(n, [{
                key: "internalJsonWrite",
                value: function(e, t) {
                    return this.refJsonWriter.scalar(r.ScalarType.UINT64, e.value, "value", !1, !0)
                }
            }, {
                key: "internalJsonRead",
                value: function(e, t, n) {
                    return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, r.ScalarType.UINT64, r.LongType.STRING, "value"), n
                }
            }, {
                key: "create",
                value: function(e) {
                    var t = {
                        value: "0"
                    };
                    return globalThis.Object.defineProperty(t, r.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, r.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, o) {
                    for (var i = null != o ? o : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = f(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        if (1 === s) i.value = e.uint64().toString();
                        else {
                            var c = n.readUnknownField;
                            if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                            var d = e.skip(l);
                            !1 !== c && (!0 === c ? r.UnknownFieldHandler.onRead : c)(this.typeName, i, s, l, d)
                        }
                    }
                    return i
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    "0" !== e.value && t.tag(1, r.WireType.Varint).uint64(e.value);
                    var o = n.writeUnknownFields;
                    return !1 !== o && (!0 == o ? r.UnknownFieldHandler.onWrite : o)(this.typeName, e, t), t
                }
            }]), n
        }(r.MessageType)),
        p = new(function(e) {
            l(n, e);
            var t = d(n);

            function n() {
                return i(this, n), t.call(this, "google.protobuf.Int32Value", [{
                    no: 1,
                    name: "value",
                    kind: "scalar",
                    T: 5
                }])
            }
            return u(n, [{
                key: "internalJsonWrite",
                value: function(e, t) {
                    return this.refJsonWriter.scalar(5, e.value, "value", !1, !0)
                }
            }, {
                key: "internalJsonRead",
                value: function(e, t, n) {
                    return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 5, void 0, "value"), n
                }
            }, {
                key: "create",
                value: function(e) {
                    var t = {
                        value: 0
                    };
                    return globalThis.Object.defineProperty(t, r.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, r.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, o) {
                    for (var i = null != o ? o : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = f(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        if (1 === s) i.value = e.int32();
                        else {
                            var c = n.readUnknownField;
                            if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                            var d = e.skip(l);
                            !1 !== c && (!0 === c ? r.UnknownFieldHandler.onRead : c)(this.typeName, i, s, l, d)
                        }
                    }
                    return i
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    0 !== e.value && t.tag(1, r.WireType.Varint).int32(e.value);
                    var o = n.writeUnknownFields;
                    return !1 !== o && (!0 == o ? r.UnknownFieldHandler.onWrite : o)(this.typeName, e, t), t
                }
            }]), n
        }(r.MessageType)),
        m = new(function(e) {
            l(n, e);
            var t = d(n);

            function n() {
                return i(this, n), t.call(this, "google.protobuf.UInt32Value", [{
                    no: 1,
                    name: "value",
                    kind: "scalar",
                    T: 13
                }])
            }
            return u(n, [{
                key: "internalJsonWrite",
                value: function(e, t) {
                    return this.refJsonWriter.scalar(13, e.value, "value", !1, !0)
                }
            }, {
                key: "internalJsonRead",
                value: function(e, t, n) {
                    return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 13, void 0, "value"), n
                }
            }, {
                key: "create",
                value: function(e) {
                    var t = {
                        value: 0
                    };
                    return globalThis.Object.defineProperty(t, r.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, r.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, o) {
                    for (var i = null != o ? o : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = f(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        if (1 === s) i.value = e.uint32();
                        else {
                            var c = n.readUnknownField;
                            if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                            var d = e.skip(l);
                            !1 !== c && (!0 === c ? r.UnknownFieldHandler.onRead : c)(this.typeName, i, s, l, d)
                        }
                    }
                    return i
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    0 !== e.value && t.tag(1, r.WireType.Varint).uint32(e.value);
                    var o = n.writeUnknownFields;
                    return !1 !== o && (!0 == o ? r.UnknownFieldHandler.onWrite : o)(this.typeName, e, t), t
                }
            }]), n
        }(r.MessageType)),
        y = new(function(e) {
            l(n, e);
            var t = d(n);

            function n() {
                return i(this, n), t.call(this, "google.protobuf.BoolValue", [{
                    no: 1,
                    name: "value",
                    kind: "scalar",
                    T: 8
                }])
            }
            return u(n, [{
                key: "internalJsonWrite",
                value: function(e, t) {
                    return e.value
                }
            }, {
                key: "internalJsonRead",
                value: function(e, t, n) {
                    return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 8, void 0, "value"), n
                }
            }, {
                key: "create",
                value: function(e) {
                    var t = {
                        value: !1
                    };
                    return globalThis.Object.defineProperty(t, r.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, r.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, o) {
                    for (var i = null != o ? o : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = f(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        if (1 === s) i.value = e.bool();
                        else {
                            var c = n.readUnknownField;
                            if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                            var d = e.skip(l);
                            !1 !== c && (!0 === c ? r.UnknownFieldHandler.onRead : c)(this.typeName, i, s, l, d)
                        }
                    }
                    return i
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    !1 !== e.value && t.tag(1, r.WireType.Varint).bool(e.value);
                    var o = n.writeUnknownFields;
                    return !1 !== o && (!0 == o ? r.UnknownFieldHandler.onWrite : o)(this.typeName, e, t), t
                }
            }]), n
        }(r.MessageType)),
        I = new(function(e) {
            l(n, e);
            var t = d(n);

            function n() {
                return i(this, n), t.call(this, "google.protobuf.StringValue", [{
                    no: 1,
                    name: "value",
                    kind: "scalar",
                    T: 9
                }])
            }
            return u(n, [{
                key: "internalJsonWrite",
                value: function(e, t) {
                    return e.value
                }
            }, {
                key: "internalJsonRead",
                value: function(e, t, n) {
                    return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 9, void 0, "value"), n
                }
            }, {
                key: "create",
                value: function(e) {
                    var t = {
                        value: ""
                    };
                    return globalThis.Object.defineProperty(t, r.MESSAGE_TYPE, {
                        enumerable: !1,
                        value: this
                    }), void 0 !== e && (0, r.reflectionMergePartial)(this, t, e), t
                }
            }, {
                key: "internalBinaryRead",
                value: function(e, t, n, o) {
                    for (var i = null != o ? o : this.create(), a = e.pos + t; e.pos < a;) {
                        var u = f(e.tag(), 2),
                            s = u[0],
                            l = u[1];
                        if (1 === s) i.value = e.string();
                        else {
                            var c = n.readUnknownField;
                            if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                            var d = e.skip(l);
                            !1 !== c && (!0 === c ? r.UnknownFieldHandler.onRead : c)(this.typeName, i, s, l, d)
                        }
                    }
                    return i
                }
            }, {
                key: "internalBinaryWrite",
                value: function(e, t, n) {
                    "" !== e.value && t.tag(1, r.WireType.LengthDelimited).string(e.value);
                    var o = n.writeUnknownFields;
                    return !1 !== o && (!0 == o ? r.UnknownFieldHandler.onWrite : o)(this.typeName, e, t), t
                }
            }]), n
        }(r.MessageType));
    new(function(e) {
        l(n, e);
        var t = d(n);

        function n() {
            return i(this, n), t.call(this, "google.protobuf.BytesValue", [{
                no: 1,
                name: "value",
                kind: "scalar",
                T: 12
            }])
        }
        return u(n, [{
            key: "internalJsonWrite",
            value: function(e, t) {
                return this.refJsonWriter.scalar(12, e.value, "value", !1, !0)
            }
        }, {
            key: "internalJsonRead",
            value: function(e, t, n) {
                return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 12, void 0, "value"), n
            }
        }, {
            key: "create",
            value: function(e) {
                var t = {
                    value: new Uint8Array(0)
                };
                return globalThis.Object.defineProperty(t, r.MESSAGE_TYPE, {
                    enumerable: !1,
                    value: this
                }), void 0 !== e && (0, r.reflectionMergePartial)(this, t, e), t
            }
        }, {
            key: "internalBinaryRead",
            value: function(e, t, n, o) {
                for (var i = null != o ? o : this.create(), a = e.pos + t; e.pos < a;) {
                    var u = f(e.tag(), 2),
                        s = u[0],
                        l = u[1];
                    if (1 === s) i.value = e.bytes();
                    else {
                        var c = n.readUnknownField;
                        if ("throw" === c) throw new globalThis.Error("Unknown field ".concat(s, " (wire type ").concat(l, ") for ").concat(this.typeName));
                        var d = e.skip(l);
                        !1 !== c && (!0 === c ? r.UnknownFieldHandler.onRead : c)(this.typeName, i, s, l, d)
                    }
                }
                return i
            }
        }, {
            key: "internalBinaryWrite",
            value: function(e, t, n) {
                e.value.length && t.tag(1, r.WireType.LengthDelimited).bytes(e.value);
                var o = n.writeUnknownFields;
                return !1 !== o && (!0 == o ? r.UnknownFieldHandler.onWrite : o)(this.typeName, e, t), t
            }
        }]), n
    }(r.MessageType))
}