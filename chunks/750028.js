function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        Int64Value: function() {
            return a
        },
        UInt64Value: function() {
            return I
        },
        Int32Value: function() {
            return T
        },
        UInt32Value: function() {
            return N
        },
        BoolValue: function() {
            return A
        },
        StringValue: function() {
            return l
        }
    }), E("222007"), E("70102"), E("311790"), E("477657"), E("811875"), E("90301"), E("652153"), E("28797"), E("817884"), E("597349"), E("667536"), E("690341");
    var t = E("849266");
    class o extends t.MessageType {
        internalJsonWrite(e, _) {
            return this.refJsonWriter.scalar(2, e.value, "value", !1, !0)
        }
        internalJsonRead(e, _, E) {
            return !E && (E = this.create()), E.value = this.refJsonReader.scalar(e, 1, void 0, "value"), E
        }
        create(e) {
            let _ = {
                value: 0
            };
            return globalThis.Object.defineProperty(_, t.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, t.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, o) {
            let n = null != o ? o : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, o] = e.tag();
                if (1 === _) n.value = e.double();
                else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(o, ") for ").concat(this.typeName));
                    let a = e.skip(o);
                    !1 !== r && (!0 === r ? t.UnknownFieldHandler.onRead : r)(this.typeName, n, _, o, a)
                }
            }
            return n
        }
        internalBinaryWrite(e, _, E) {
            0 !== e.value && _.tag(1, t.WireType.Bit64).double(e.value);
            let o = E.writeUnknownFields;
            return !1 !== o && (!0 == o ? t.UnknownFieldHandler.onWrite : o)(this.typeName, e, _), _
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
    new o;
    class n extends t.MessageType {
        internalJsonWrite(e, _) {
            return this.refJsonWriter.scalar(1, e.value, "value", !1, !0)
        }
        internalJsonRead(e, _, E) {
            return !E && (E = this.create()), E.value = this.refJsonReader.scalar(e, 1, void 0, "value"), E
        }
        create(e) {
            let _ = {
                value: 0
            };
            return globalThis.Object.defineProperty(_, t.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, t.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, o) {
            let n = null != o ? o : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, o] = e.tag();
                if (1 === _) n.value = e.float();
                else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(o, ") for ").concat(this.typeName));
                    let a = e.skip(o);
                    !1 !== r && (!0 === r ? t.UnknownFieldHandler.onRead : r)(this.typeName, n, _, o, a)
                }
            }
            return n
        }
        internalBinaryWrite(e, _, E) {
            0 !== e.value && _.tag(1, t.WireType.Bit32).float(e.value);
            let o = E.writeUnknownFields;
            return !1 !== o && (!0 == o ? t.UnknownFieldHandler.onWrite : o)(this.typeName, e, _), _
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
    new n;
    class r extends t.MessageType {
        internalJsonWrite(e, _) {
            return this.refJsonWriter.scalar(t.ScalarType.INT64, e.value, "value", !1, !0)
        }
        internalJsonRead(e, _, E) {
            return !E && (E = this.create()), E.value = this.refJsonReader.scalar(e, t.ScalarType.INT64, t.LongType.STRING, "value"), E
        }
        create(e) {
            let _ = {
                value: "0"
            };
            return globalThis.Object.defineProperty(_, t.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, t.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, o) {
            let n = null != o ? o : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, o] = e.tag();
                if (1 === _) n.value = e.int64().toString();
                else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(o, ") for ").concat(this.typeName));
                    let a = e.skip(o);
                    !1 !== r && (!0 === r ? t.UnknownFieldHandler.onRead : r)(this.typeName, n, _, o, a)
                }
            }
            return n
        }
        internalBinaryWrite(e, _, E) {
            "0" !== e.value && _.tag(1, t.WireType.Varint).int64(e.value);
            let o = E.writeUnknownFields;
            return !1 !== o && (!0 == o ? t.UnknownFieldHandler.onWrite : o)(this.typeName, e, _), _
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
    let a = new r;
    class i extends t.MessageType {
        internalJsonWrite(e, _) {
            return this.refJsonWriter.scalar(t.ScalarType.UINT64, e.value, "value", !1, !0)
        }
        internalJsonRead(e, _, E) {
            return !E && (E = this.create()), E.value = this.refJsonReader.scalar(e, t.ScalarType.UINT64, t.LongType.STRING, "value"), E
        }
        create(e) {
            let _ = {
                value: "0"
            };
            return globalThis.Object.defineProperty(_, t.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, t.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, o) {
            let n = null != o ? o : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, o] = e.tag();
                if (1 === _) n.value = e.uint64().toString();
                else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(o, ") for ").concat(this.typeName));
                    let a = e.skip(o);
                    !1 !== r && (!0 === r ? t.UnknownFieldHandler.onRead : r)(this.typeName, n, _, o, a)
                }
            }
            return n
        }
        internalBinaryWrite(e, _, E) {
            "0" !== e.value && _.tag(1, t.WireType.Varint).uint64(e.value);
            let o = E.writeUnknownFields;
            return !1 !== o && (!0 == o ? t.UnknownFieldHandler.onWrite : o)(this.typeName, e, _), _
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
    let I = new i;
    class s extends t.MessageType {
        internalJsonWrite(e, _) {
            return this.refJsonWriter.scalar(5, e.value, "value", !1, !0)
        }
        internalJsonRead(e, _, E) {
            return !E && (E = this.create()), E.value = this.refJsonReader.scalar(e, 5, void 0, "value"), E
        }
        create(e) {
            let _ = {
                value: 0
            };
            return globalThis.Object.defineProperty(_, t.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, t.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, o) {
            let n = null != o ? o : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, o] = e.tag();
                if (1 === _) n.value = e.int32();
                else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(o, ") for ").concat(this.typeName));
                    let a = e.skip(o);
                    !1 !== r && (!0 === r ? t.UnknownFieldHandler.onRead : r)(this.typeName, n, _, o, a)
                }
            }
            return n
        }
        internalBinaryWrite(e, _, E) {
            0 !== e.value && _.tag(1, t.WireType.Varint).int32(e.value);
            let o = E.writeUnknownFields;
            return !1 !== o && (!0 == o ? t.UnknownFieldHandler.onWrite : o)(this.typeName, e, _), _
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
    let T = new s;
    class S extends t.MessageType {
        internalJsonWrite(e, _) {
            return this.refJsonWriter.scalar(13, e.value, "value", !1, !0)
        }
        internalJsonRead(e, _, E) {
            return !E && (E = this.create()), E.value = this.refJsonReader.scalar(e, 13, void 0, "value"), E
        }
        create(e) {
            let _ = {
                value: 0
            };
            return globalThis.Object.defineProperty(_, t.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, t.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, o) {
            let n = null != o ? o : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, o] = e.tag();
                if (1 === _) n.value = e.uint32();
                else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(o, ") for ").concat(this.typeName));
                    let a = e.skip(o);
                    !1 !== r && (!0 === r ? t.UnknownFieldHandler.onRead : r)(this.typeName, n, _, o, a)
                }
            }
            return n
        }
        internalBinaryWrite(e, _, E) {
            0 !== e.value && _.tag(1, t.WireType.Varint).uint32(e.value);
            let o = E.writeUnknownFields;
            return !1 !== o && (!0 == o ? t.UnknownFieldHandler.onWrite : o)(this.typeName, e, _), _
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
    let N = new S;
    class O extends t.MessageType {
        internalJsonWrite(e, _) {
            return e.value
        }
        internalJsonRead(e, _, E) {
            return !E && (E = this.create()), E.value = this.refJsonReader.scalar(e, 8, void 0, "value"), E
        }
        create(e) {
            let _ = {
                value: !1
            };
            return globalThis.Object.defineProperty(_, t.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, t.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, o) {
            let n = null != o ? o : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, o] = e.tag();
                if (1 === _) n.value = e.bool();
                else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(o, ") for ").concat(this.typeName));
                    let a = e.skip(o);
                    !1 !== r && (!0 === r ? t.UnknownFieldHandler.onRead : r)(this.typeName, n, _, o, a)
                }
            }
            return n
        }
        internalBinaryWrite(e, _, E) {
            !1 !== e.value && _.tag(1, t.WireType.Varint).bool(e.value);
            let o = E.writeUnknownFields;
            return !1 !== o && (!0 == o ? t.UnknownFieldHandler.onWrite : o)(this.typeName, e, _), _
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
    let A = new O;
    class R extends t.MessageType {
        internalJsonWrite(e, _) {
            return e.value
        }
        internalJsonRead(e, _, E) {
            return !E && (E = this.create()), E.value = this.refJsonReader.scalar(e, 9, void 0, "value"), E
        }
        create(e) {
            let _ = {
                value: ""
            };
            return globalThis.Object.defineProperty(_, t.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, t.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, o) {
            let n = null != o ? o : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, o] = e.tag();
                if (1 === _) n.value = e.string();
                else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(o, ") for ").concat(this.typeName));
                    let a = e.skip(o);
                    !1 !== r && (!0 === r ? t.UnknownFieldHandler.onRead : r)(this.typeName, n, _, o, a)
                }
            }
            return n
        }
        internalBinaryWrite(e, _, E) {
            "" !== e.value && _.tag(1, t.WireType.LengthDelimited).string(e.value);
            let o = E.writeUnknownFields;
            return !1 !== o && (!0 == o ? t.UnknownFieldHandler.onWrite : o)(this.typeName, e, _), _
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
    let l = new R;
    class u extends t.MessageType {
        internalJsonWrite(e, _) {
            return this.refJsonWriter.scalar(12, e.value, "value", !1, !0)
        }
        internalJsonRead(e, _, E) {
            return !E && (E = this.create()), E.value = this.refJsonReader.scalar(e, 12, void 0, "value"), E
        }
        create(e) {
            let _ = {
                value: new Uint8Array(0)
            };
            return globalThis.Object.defineProperty(_, t.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, t.reflectionMergePartial)(this, _, e), _
        }
        internalBinaryRead(e, _, E, o) {
            let n = null != o ? o : this.create(),
                r = e.pos + _;
            for (; e.pos < r;) {
                let [_, o] = e.tag();
                if (1 === _) n.value = e.bytes();
                else {
                    let r = E.readUnknownField;
                    if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(o, ") for ").concat(this.typeName));
                    let a = e.skip(o);
                    !1 !== r && (!0 === r ? t.UnknownFieldHandler.onRead : r)(this.typeName, n, _, o, a)
                }
            }
            return n
        }
        internalBinaryWrite(e, _, E) {
            e.value.length && _.tag(1, t.WireType.LengthDelimited).bytes(e.value);
            let o = E.writeUnknownFields;
            return !1 !== o && (!0 == o ? t.UnknownFieldHandler.onWrite : o)(this.typeName, e, _), _
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
    new u
}