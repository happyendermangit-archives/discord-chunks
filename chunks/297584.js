function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReflectionBinaryWriter: function() {
            return s
        }
    });
    var r = n("230367"),
        i = n("36056"),
        a = n("17146"),
        o = n("69122");
    class s {
        constructor(e) {
            this.info = e
        }
        prepare() {
            if (!this.fields) {
                let e = this.info.fields ? this.info.fields.concat() : [];
                this.fields = e.sort((e, t) => e.no - t.no)
            }
        }
        write(e, t, n) {
            for (let r of (this.prepare(), this.fields)) {
                let o, s, u = r.repeat,
                    c = r.localName;
                if (r.oneof) {
                    let t = e[r.oneof];
                    if (t.oneofKind !== c) continue;
                    o = t[c], s = !0
                } else o = e[c], s = !1;
                switch (r.kind) {
                    case "scalar":
                    case "enum":
                        let l = "enum" == r.kind ? i.ScalarType.INT32 : r.T;
                        if (u) {
                            if ((0, a.assert)(Array.isArray(o)), u == i.RepeatType.PACKED) this.packed(t, l, r.no, o);
                            else
                                for (let e of o) this.scalar(t, l, r.no, e, !0)
                        } else void 0 === o ? (0, a.assert)(r.opt) : this.scalar(t, l, r.no, o, s || r.opt);
                        break;
                    case "message":
                        if (u)
                            for (let e of ((0, a.assert)(Array.isArray(o)), o)) this.message(t, n, r.T(), r.no, e);
                        else this.message(t, n, r.T(), r.no, o);
                        break;
                    case "map":
                        for (let [e, i] of((0, a.assert)("object" == typeof o && null !== o), Object.entries(o))) this.mapEntry(t, n, r, e, i)
                }
            }
            let o = n.writeUnknownFields;
            !1 !== o && (!0 === o ? r.UnknownFieldHandler.onWrite : o)(this.info.typeName, e, t)
        }
        mapEntry(e, t, n, o, s) {
            e.tag(n.no, r.WireType.LengthDelimited), e.fork();
            let u = o;
            switch (n.K) {
                case i.ScalarType.INT32:
                case i.ScalarType.FIXED32:
                case i.ScalarType.UINT32:
                case i.ScalarType.SFIXED32:
                case i.ScalarType.SINT32:
                    u = Number.parseInt(o);
                    break;
                case i.ScalarType.BOOL:
                    (0, a.assert)("true" == o || "false" == o), u = "true" == o
            }
            switch (this.scalar(e, n.K, 1, u, !0), n.V.kind) {
                case "scalar":
                    this.scalar(e, n.V.T, 2, s, !0);
                    break;
                case "enum":
                    this.scalar(e, i.ScalarType.INT32, 2, s, !0);
                    break;
                case "message":
                    this.message(e, t, n.V.T(), 2, s)
            }
            e.join()
        }
        message(e, t, n, i, a) {
            void 0 !== a && (n.internalBinaryWrite(a, e.tag(i, r.WireType.LengthDelimited).fork(), t), e.join())
        }
        scalar(e, t, n, r, i) {
            let [a, o, s] = this.scalarInfo(t, r);
            (!s || i) && (e.tag(n, a), e[o](r))
        }
        packed(e, t, n, o) {
            if (!o.length) return;
            (0, a.assert)(t !== i.ScalarType.BYTES && t !== i.ScalarType.STRING), e.tag(n, r.WireType.LengthDelimited), e.fork();
            let [, s] = this.scalarInfo(t);
            for (let t = 0; t < o.length; t++) e[s](o[t]);
            e.join()
        }
        scalarInfo(e, t) {
            let n, a = r.WireType.Varint,
                s = void 0 === t,
                u = 0 === t;
            switch (e) {
                case i.ScalarType.INT32:
                    n = "int32";
                    break;
                case i.ScalarType.STRING:
                    u = s || !t.length, a = r.WireType.LengthDelimited, n = "string";
                    break;
                case i.ScalarType.BOOL:
                    u = !1 === t, n = "bool";
                    break;
                case i.ScalarType.UINT32:
                    n = "uint32";
                    break;
                case i.ScalarType.DOUBLE:
                    a = r.WireType.Bit64, n = "double";
                    break;
                case i.ScalarType.FLOAT:
                    a = r.WireType.Bit32, n = "float";
                    break;
                case i.ScalarType.INT64:
                    u = s || o.PbLong.from(t).isZero(), n = "int64";
                    break;
                case i.ScalarType.UINT64:
                    u = s || o.PbULong.from(t).isZero(), n = "uint64";
                    break;
                case i.ScalarType.FIXED64:
                    u = s || o.PbULong.from(t).isZero(), a = r.WireType.Bit64, n = "fixed64";
                    break;
                case i.ScalarType.BYTES:
                    u = s || !t.byteLength, a = r.WireType.LengthDelimited, n = "bytes";
                    break;
                case i.ScalarType.FIXED32:
                    a = r.WireType.Bit32, n = "fixed32";
                    break;
                case i.ScalarType.SFIXED32:
                    a = r.WireType.Bit32, n = "sfixed32";
                    break;
                case i.ScalarType.SFIXED64:
                    u = s || o.PbLong.from(t).isZero(), a = r.WireType.Bit64, n = "sfixed64";
                    break;
                case i.ScalarType.SINT32:
                    n = "sint32";
                    break;
                case i.ScalarType.SINT64:
                    u = s || o.PbLong.from(t).isZero(), n = "sint64"
            }
            return [a, n, s || u]
        }
    }
}