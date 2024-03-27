function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReflectionBinaryReader: function() {
            return s
        }
    });
    var r = n("230367"),
        i = n("36056"),
        a = n("929412"),
        o = n("436759");
    class s {
        constructor(e) {
            this.info = e
        }
        prepare() {
            var e;
            if (!this.fieldNoToField) {
                let t = null !== (e = this.info.fields) && void 0 !== e ? e : [];
                this.fieldNoToField = new Map(t.map(e => [e.no, e]))
            }
        }
        read(e, t, n, a) {
            this.prepare();
            let o = void 0 === a ? e.len : e.pos + a;
            for (; e.pos < o;) {
                let [a, o] = e.tag(), s = this.fieldNoToField.get(a);
                if (!s) {
                    let i = n.readUnknownField;
                    if ("throw" == i) throw Error(`Unknown field ${a} (wire type ${o}) for ${this.info.typeName}`);
                    let s = e.skip(o);
                    !1 !== i && (!0 === i ? r.UnknownFieldHandler.onRead : i)(this.info.typeName, t, a, o, s);
                    continue
                }
                let u = t,
                    c = s.repeat,
                    l = s.localName;
                switch (s.oneof && (u = u[s.oneof]).oneofKind !== l && (u = t[s.oneof] = {
                        oneofKind: l
                    }), s.kind) {
                    case "scalar":
                    case "enum":
                        let d = "enum" == s.kind ? i.ScalarType.INT32 : s.T,
                            f = "scalar" == s.kind ? s.L : void 0;
                        if (c) {
                            let t = u[l];
                            if (o == r.WireType.LengthDelimited && d != i.ScalarType.STRING && d != i.ScalarType.BYTES) {
                                let n = e.uint32() + e.pos;
                                for (; e.pos < n;) t.push(this.scalar(e, d, f))
                            } else t.push(this.scalar(e, d, f))
                        } else u[l] = this.scalar(e, d, f);
                        break;
                    case "message":
                        if (c) {
                            let t = u[l],
                                r = s.T().internalBinaryRead(e, e.uint32(), n);
                            t.push(r)
                        } else u[l] = s.T().internalBinaryRead(e, e.uint32(), n, u[l]);
                        break;
                    case "map":
                        let [p, h] = this.mapEntry(s, e, n);
                        u[l][p] = h
                }
            }
        }
        mapEntry(e, t, n) {
            let r, a, s = t.uint32(),
                u = t.pos + s;
            for (; t.pos < u;) {
                let [o, s] = t.tag();
                switch (o) {
                    case 1:
                        r = e.K == i.ScalarType.BOOL ? t.bool().toString() : this.scalar(t, e.K, i.LongType.STRING);
                        break;
                    case 2:
                        switch (e.V.kind) {
                            case "scalar":
                                a = this.scalar(t, e.V.T, e.V.L);
                                break;
                            case "enum":
                                a = t.int32();
                                break;
                            case "message":
                                a = e.V.T().internalBinaryRead(t, t.uint32(), n)
                        }
                        break;
                    default:
                        throw Error(`Unknown field ${o} (wire type ${s}) in map entry for ${this.info.typeName}#${e.name}`)
                }
            }
            if (void 0 === r) {
                let t = (0, o.reflectionScalarDefault)(e.K);
                r = e.K == i.ScalarType.BOOL ? t.toString() : t
            }
            if (void 0 === a) switch (e.V.kind) {
                case "scalar":
                    a = (0, o.reflectionScalarDefault)(e.V.T, e.V.L);
                    break;
                case "enum":
                    a = 0;
                    break;
                case "message":
                    a = e.V.T().create()
            }
            return [r, a]
        }
        scalar(e, t, n) {
            switch (t) {
                case i.ScalarType.INT32:
                    return e.int32();
                case i.ScalarType.STRING:
                    return e.string();
                case i.ScalarType.BOOL:
                    return e.bool();
                case i.ScalarType.DOUBLE:
                    return e.double();
                case i.ScalarType.FLOAT:
                    return e.float();
                case i.ScalarType.INT64:
                    return (0, a.reflectionLongConvert)(e.int64(), n);
                case i.ScalarType.UINT64:
                    return (0, a.reflectionLongConvert)(e.uint64(), n);
                case i.ScalarType.FIXED64:
                    return (0, a.reflectionLongConvert)(e.fixed64(), n);
                case i.ScalarType.FIXED32:
                    return e.fixed32();
                case i.ScalarType.BYTES:
                    return e.bytes();
                case i.ScalarType.UINT32:
                    return e.uint32();
                case i.ScalarType.SFIXED32:
                    return e.sfixed32();
                case i.ScalarType.SFIXED64:
                    return (0, a.reflectionLongConvert)(e.sfixed64(), n);
                case i.ScalarType.SINT32:
                    return e.sint32();
                case i.ScalarType.SINT64:
                    return (0, a.reflectionLongConvert)(e.sint64(), n)
            }
        }
    }
}