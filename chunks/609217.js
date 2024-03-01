function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReflectionBinaryWriter: function() {
            return s
        }
    }), n("222007");
    var r = n("764624"),
        a = n("803628"),
        o = n("759780"),
        i = n("497557");
    class s {
        prepare() {
            if (!this.fields) {
                let e = this.info.fields ? this.info.fields.concat() : [];
                this.fields = e.sort((e, t) => e.no - t.no)
            }
        }
        write(e, t, n) {
            for (let r of (this.prepare(), this.fields)) {
                let i, s, u = r.repeat,
                    l = r.localName;
                if (r.oneof) {
                    let t = e[r.oneof];
                    if (t.oneofKind !== l) continue;
                    i = t[l], s = !0
                } else i = e[l], s = !1;
                switch (r.kind) {
                    case "scalar":
                    case "enum":
                        let c = "enum" == r.kind ? a.ScalarType.INT32 : r.T;
                        if (u) {
                            if ((0, o.assert)(Array.isArray(i)), u == a.RepeatType.PACKED) this.packed(t, c, r.no, i);
                            else
                                for (let e of i) this.scalar(t, c, r.no, e, !0)
                        } else void 0 === i ? (0, o.assert)(r.opt) : this.scalar(t, c, r.no, i, s || r.opt);
                        break;
                    case "message":
                        if (u)
                            for (let e of ((0, o.assert)(Array.isArray(i)), i)) this.message(t, n, r.T(), r.no, e);
                        else this.message(t, n, r.T(), r.no, i);
                        break;
                    case "map":
                        for (let [e, a] of((0, o.assert)("object" == typeof i && null !== i), Object.entries(i))) this.mapEntry(t, n, r, e, a)
                }
            }
            let i = n.writeUnknownFields;
            !1 !== i && (!0 === i ? r.UnknownFieldHandler.onWrite : i)(this.info.typeName, e, t)
        }
        mapEntry(e, t, n, i, s) {
            e.tag(n.no, r.WireType.LengthDelimited), e.fork();
            let u = i;
            switch (n.K) {
                case a.ScalarType.INT32:
                case a.ScalarType.FIXED32:
                case a.ScalarType.UINT32:
                case a.ScalarType.SFIXED32:
                case a.ScalarType.SINT32:
                    u = Number.parseInt(i);
                    break;
                case a.ScalarType.BOOL:
                    (0, o.assert)("true" == i || "false" == i), u = "true" == i
            }
            switch (this.scalar(e, n.K, 1, u, !0), n.V.kind) {
                case "scalar":
                    this.scalar(e, n.V.T, 2, s, !0);
                    break;
                case "enum":
                    this.scalar(e, a.ScalarType.INT32, 2, s, !0);
                    break;
                case "message":
                    this.message(e, t, n.V.T(), 2, s)
            }
            e.join()
        }
        message(e, t, n, a, o) {
            void 0 !== o && (n.internalBinaryWrite(o, e.tag(a, r.WireType.LengthDelimited).fork(), t), e.join())
        }
        scalar(e, t, n, r, a) {
            let [o, i, s] = this.scalarInfo(t, r);
            (!s || a) && (e.tag(n, o), e[i](r))
        }
        packed(e, t, n, i) {
            if (!i.length) return;
            (0, o.assert)(t !== a.ScalarType.BYTES && t !== a.ScalarType.STRING), e.tag(n, r.WireType.LengthDelimited), e.fork();
            let [, s] = this.scalarInfo(t);
            for (let t = 0; t < i.length; t++) e[s](i[t]);
            e.join()
        }
        scalarInfo(e, t) {
            let n, o = r.WireType.Varint,
                s = void 0 === t,
                u = 0 === t;
            switch (e) {
                case a.ScalarType.INT32:
                    n = "int32";
                    break;
                case a.ScalarType.STRING:
                    u = s || !t.length, o = r.WireType.LengthDelimited, n = "string";
                    break;
                case a.ScalarType.BOOL:
                    u = !1 === t, n = "bool";
                    break;
                case a.ScalarType.UINT32:
                    n = "uint32";
                    break;
                case a.ScalarType.DOUBLE:
                    o = r.WireType.Bit64, n = "double";
                    break;
                case a.ScalarType.FLOAT:
                    o = r.WireType.Bit32, n = "float";
                    break;
                case a.ScalarType.INT64:
                    u = s || i.PbLong.from(t).isZero(), n = "int64";
                    break;
                case a.ScalarType.UINT64:
                    u = s || i.PbULong.from(t).isZero(), n = "uint64";
                    break;
                case a.ScalarType.FIXED64:
                    u = s || i.PbULong.from(t).isZero(), o = r.WireType.Bit64, n = "fixed64";
                    break;
                case a.ScalarType.BYTES:
                    u = s || !t.byteLength, o = r.WireType.LengthDelimited, n = "bytes";
                    break;
                case a.ScalarType.FIXED32:
                    o = r.WireType.Bit32, n = "fixed32";
                    break;
                case a.ScalarType.SFIXED32:
                    o = r.WireType.Bit32, n = "sfixed32";
                    break;
                case a.ScalarType.SFIXED64:
                    u = s || i.PbLong.from(t).isZero(), o = r.WireType.Bit64, n = "sfixed64";
                    break;
                case a.ScalarType.SINT32:
                    n = "sint32";
                    break;
                case a.ScalarType.SINT64:
                    u = s || i.PbLong.from(t).isZero(), n = "sint64"
            }
            return [o, n, s || u]
        }
        constructor(e) {
            this.info = e
        }
    }
}