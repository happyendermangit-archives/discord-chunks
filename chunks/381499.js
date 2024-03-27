function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BoolValue: function() {
            return T
        },
        Int32Value: function() {
            return _
        },
        Int64Value: function() {
            return o
        },
        StringValue: function() {
            return S
        },
        UInt32Value: function() {
            return E
        },
        UInt64Value: function() {
            return u
        }
    }), n("47120"), n("411104"), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817");
    var i = n("578012");
    class r extends i.MessageType {
        internalJsonWrite(e, t) {
            return this.refJsonWriter.scalar(2, e.value, "value", !1, !0)
        }
        internalJsonRead(e, t, n) {
            return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 1, void 0, "value"), n
        }
        create(e) {
            let t = {
                value: 0
            };
            return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, r) {
            let s = null != r ? r : this.create(),
                a = e.pos + t;
            for (; e.pos < a;) {
                let [t, r] = e.tag();
                if (1 === t) s.value = e.double();
                else {
                    let a = n.readUnknownField;
                    if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.UnknownFieldHandler.onRead : a)(this.typeName, s, t, r, o)
                }
            }
            return s
        }
        internalBinaryWrite(e, t, n) {
            0 !== e.value && t.tag(1, i.WireType.Bit64).double(e.value);
            let r = n.writeUnknownFields;
            return !1 !== r && (!0 == r ? i.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
        }
        constructor() {
            super("google.protobuf.DoubleValue", [{
                no: 1,
                name: "value",
                kind: "scalar",
                T: 1
            }])
        }
    }
    new r;
    class s extends i.MessageType {
        internalJsonWrite(e, t) {
            return this.refJsonWriter.scalar(1, e.value, "value", !1, !0)
        }
        internalJsonRead(e, t, n) {
            return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 1, void 0, "value"), n
        }
        create(e) {
            let t = {
                value: 0
            };
            return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, r) {
            let s = null != r ? r : this.create(),
                a = e.pos + t;
            for (; e.pos < a;) {
                let [t, r] = e.tag();
                if (1 === t) s.value = e.float();
                else {
                    let a = n.readUnknownField;
                    if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.UnknownFieldHandler.onRead : a)(this.typeName, s, t, r, o)
                }
            }
            return s
        }
        internalBinaryWrite(e, t, n) {
            0 !== e.value && t.tag(1, i.WireType.Bit32).float(e.value);
            let r = n.writeUnknownFields;
            return !1 !== r && (!0 == r ? i.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
        }
        constructor() {
            super("google.protobuf.FloatValue", [{
                no: 1,
                name: "value",
                kind: "scalar",
                T: 2
            }])
        }
    }
    new s;
    class a extends i.MessageType {
        internalJsonWrite(e, t) {
            return this.refJsonWriter.scalar(i.ScalarType.INT64, e.value, "value", !1, !0)
        }
        internalJsonRead(e, t, n) {
            return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, i.ScalarType.INT64, i.LongType.STRING, "value"), n
        }
        create(e) {
            let t = {
                value: "0"
            };
            return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, r) {
            let s = null != r ? r : this.create(),
                a = e.pos + t;
            for (; e.pos < a;) {
                let [t, r] = e.tag();
                if (1 === t) s.value = e.int64().toString();
                else {
                    let a = n.readUnknownField;
                    if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.UnknownFieldHandler.onRead : a)(this.typeName, s, t, r, o)
                }
            }
            return s
        }
        internalBinaryWrite(e, t, n) {
            "0" !== e.value && t.tag(1, i.WireType.Varint).int64(e.value);
            let r = n.writeUnknownFields;
            return !1 !== r && (!0 == r ? i.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
        }
        constructor() {
            super("google.protobuf.Int64Value", [{
                no: 1,
                name: "value",
                kind: "scalar",
                T: 3
            }])
        }
    }
    let o = new a;
    class l extends i.MessageType {
        internalJsonWrite(e, t) {
            return this.refJsonWriter.scalar(i.ScalarType.UINT64, e.value, "value", !1, !0)
        }
        internalJsonRead(e, t, n) {
            return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, i.ScalarType.UINT64, i.LongType.STRING, "value"), n
        }
        create(e) {
            let t = {
                value: "0"
            };
            return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, r) {
            let s = null != r ? r : this.create(),
                a = e.pos + t;
            for (; e.pos < a;) {
                let [t, r] = e.tag();
                if (1 === t) s.value = e.uint64().toString();
                else {
                    let a = n.readUnknownField;
                    if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.UnknownFieldHandler.onRead : a)(this.typeName, s, t, r, o)
                }
            }
            return s
        }
        internalBinaryWrite(e, t, n) {
            "0" !== e.value && t.tag(1, i.WireType.Varint).uint64(e.value);
            let r = n.writeUnknownFields;
            return !1 !== r && (!0 == r ? i.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
        }
        constructor() {
            super("google.protobuf.UInt64Value", [{
                no: 1,
                name: "value",
                kind: "scalar",
                T: 4
            }])
        }
    }
    let u = new l;
    class d extends i.MessageType {
        internalJsonWrite(e, t) {
            return this.refJsonWriter.scalar(5, e.value, "value", !1, !0)
        }
        internalJsonRead(e, t, n) {
            return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 5, void 0, "value"), n
        }
        create(e) {
            let t = {
                value: 0
            };
            return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, r) {
            let s = null != r ? r : this.create(),
                a = e.pos + t;
            for (; e.pos < a;) {
                let [t, r] = e.tag();
                if (1 === t) s.value = e.int32();
                else {
                    let a = n.readUnknownField;
                    if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.UnknownFieldHandler.onRead : a)(this.typeName, s, t, r, o)
                }
            }
            return s
        }
        internalBinaryWrite(e, t, n) {
            0 !== e.value && t.tag(1, i.WireType.Varint).int32(e.value);
            let r = n.writeUnknownFields;
            return !1 !== r && (!0 == r ? i.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
        }
        constructor() {
            super("google.protobuf.Int32Value", [{
                no: 1,
                name: "value",
                kind: "scalar",
                T: 5
            }])
        }
    }
    let _ = new d;
    class c extends i.MessageType {
        internalJsonWrite(e, t) {
            return this.refJsonWriter.scalar(13, e.value, "value", !1, !0)
        }
        internalJsonRead(e, t, n) {
            return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 13, void 0, "value"), n
        }
        create(e) {
            let t = {
                value: 0
            };
            return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, r) {
            let s = null != r ? r : this.create(),
                a = e.pos + t;
            for (; e.pos < a;) {
                let [t, r] = e.tag();
                if (1 === t) s.value = e.uint32();
                else {
                    let a = n.readUnknownField;
                    if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.UnknownFieldHandler.onRead : a)(this.typeName, s, t, r, o)
                }
            }
            return s
        }
        internalBinaryWrite(e, t, n) {
            0 !== e.value && t.tag(1, i.WireType.Varint).uint32(e.value);
            let r = n.writeUnknownFields;
            return !1 !== r && (!0 == r ? i.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
        }
        constructor() {
            super("google.protobuf.UInt32Value", [{
                no: 1,
                name: "value",
                kind: "scalar",
                T: 13
            }])
        }
    }
    let E = new c;
    class I extends i.MessageType {
        internalJsonWrite(e, t) {
            return e.value
        }
        internalJsonRead(e, t, n) {
            return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 8, void 0, "value"), n
        }
        create(e) {
            let t = {
                value: !1
            };
            return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, r) {
            let s = null != r ? r : this.create(),
                a = e.pos + t;
            for (; e.pos < a;) {
                let [t, r] = e.tag();
                if (1 === t) s.value = e.bool();
                else {
                    let a = n.readUnknownField;
                    if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.UnknownFieldHandler.onRead : a)(this.typeName, s, t, r, o)
                }
            }
            return s
        }
        internalBinaryWrite(e, t, n) {
            !1 !== e.value && t.tag(1, i.WireType.Varint).bool(e.value);
            let r = n.writeUnknownFields;
            return !1 !== r && (!0 == r ? i.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
        }
        constructor() {
            super("google.protobuf.BoolValue", [{
                no: 1,
                name: "value",
                kind: "scalar",
                T: 8
            }])
        }
    }
    let T = new I;
    class f extends i.MessageType {
        internalJsonWrite(e, t) {
            return e.value
        }
        internalJsonRead(e, t, n) {
            return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 9, void 0, "value"), n
        }
        create(e) {
            let t = {
                value: ""
            };
            return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, r) {
            let s = null != r ? r : this.create(),
                a = e.pos + t;
            for (; e.pos < a;) {
                let [t, r] = e.tag();
                if (1 === t) s.value = e.string();
                else {
                    let a = n.readUnknownField;
                    if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.UnknownFieldHandler.onRead : a)(this.typeName, s, t, r, o)
                }
            }
            return s
        }
        internalBinaryWrite(e, t, n) {
            "" !== e.value && t.tag(1, i.WireType.LengthDelimited).string(e.value);
            let r = n.writeUnknownFields;
            return !1 !== r && (!0 == r ? i.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
        }
        constructor() {
            super("google.protobuf.StringValue", [{
                no: 1,
                name: "value",
                kind: "scalar",
                T: 9
            }])
        }
    }
    let S = new f;
    class h extends i.MessageType {
        internalJsonWrite(e, t) {
            return this.refJsonWriter.scalar(12, e.value, "value", !1, !0)
        }
        internalJsonRead(e, t, n) {
            return !n && (n = this.create()), n.value = this.refJsonReader.scalar(e, 12, void 0, "value"), n
        }
        create(e) {
            let t = {
                value: new Uint8Array(0)
            };
            return globalThis.Object.defineProperty(t, i.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, i.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, r) {
            let s = null != r ? r : this.create(),
                a = e.pos + t;
            for (; e.pos < a;) {
                let [t, r] = e.tag();
                if (1 === t) s.value = e.bytes();
                else {
                    let a = n.readUnknownField;
                    if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.UnknownFieldHandler.onRead : a)(this.typeName, s, t, r, o)
                }
            }
            return s
        }
        internalBinaryWrite(e, t, n) {
            e.value.length && t.tag(1, i.WireType.LengthDelimited).bytes(e.value);
            let r = n.writeUnknownFields;
            return !1 !== r && (!0 == r ? i.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
        }
        constructor() {
            super("google.protobuf.BytesValue", [{
                no: 1,
                name: "value",
                kind: "scalar",
                T: 12
            }])
        }
    }
    new h
}