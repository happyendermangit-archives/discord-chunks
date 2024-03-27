function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReflectionJsonWriter: function() {
            return s
        }
    });
    var r = n("581282"),
        i = n("69122"),
        a = n("36056"),
        o = n("17146");
    class s {
        constructor(e) {
            var t;
            this.fields = null !== (t = e.fields) && void 0 !== t ? t : []
        }
        write(e, t) {
            let n = {};
            for (let r of this.fields) {
                if (!r.oneof) {
                    let i = this.field(r, e[r.localName], t);
                    void 0 !== i && (n[t.useProtoFieldName ? r.name : r.jsonName] = i);
                    continue
                }
                let i = e[r.oneof];
                if (i.oneofKind !== r.localName) continue;
                let a = "scalar" == r.kind || "enum" == r.kind ? Object.assign(Object.assign({}, t), {
                        emitDefaultValues: !0
                    }) : t,
                    s = this.field(r, i[r.localName], a);
                (0, o.assert)(void 0 !== s), n[t.useProtoFieldName ? r.name : r.jsonName] = s
            }
            return n
        }
        field(e, t, n) {
            let r;
            if ("map" == e.kind) {
                (0, o.assert)("object" == typeof t && null !== t);
                let i = {};
                switch (e.V.kind) {
                    case "scalar":
                        for (let [n, r] of Object.entries(t)) {
                            let t = this.scalar(e.V.T, r, e.name, !1, !0);
                            (0, o.assert)(void 0 !== t), i[n.toString()] = t
                        }
                        break;
                    case "message":
                        let a = e.V.T();
                        for (let [r, s] of Object.entries(t)) {
                            let t = this.message(a, s, e.name, n);
                            (0, o.assert)(void 0 !== t), i[r.toString()] = t
                        }
                        break;
                    case "enum":
                        let s = e.V.T();
                        for (let [r, a] of Object.entries(t)) {
                            (0, o.assert)(void 0 === a || "number" == typeof a);
                            let t = this.enum(s, a, e.name, !1, !0, n.enumAsInteger);
                            (0, o.assert)(void 0 !== t), i[r.toString()] = t
                        }
                }(n.emitDefaultValues || Object.keys(i).length > 0) && (r = i)
            } else if (e.repeat) {
                (0, o.assert)(Array.isArray(t));
                let i = [];
                switch (e.kind) {
                    case "scalar":
                        for (let n = 0; n < t.length; n++) {
                            let r = this.scalar(e.T, t[n], e.name, e.opt, !0);
                            (0, o.assert)(void 0 !== r), i.push(r)
                        }
                        break;
                    case "enum":
                        let a = e.T();
                        for (let r = 0; r < t.length; r++) {
                            (0, o.assert)(void 0 === t[r] || "number" == typeof t[r]);
                            let s = this.enum(a, t[r], e.name, e.opt, !0, n.enumAsInteger);
                            (0, o.assert)(void 0 !== s), i.push(s)
                        }
                        break;
                    case "message":
                        let s = e.T();
                        for (let r = 0; r < t.length; r++) {
                            let a = this.message(s, t[r], e.name, n);
                            (0, o.assert)(void 0 !== a), i.push(a)
                        }
                }(n.emitDefaultValues || i.length > 0 || n.emitDefaultValues) && (r = i)
            } else switch (e.kind) {
                case "scalar":
                    r = this.scalar(e.T, t, e.name, e.opt, n.emitDefaultValues);
                    break;
                case "enum":
                    r = this.enum(e.T(), t, e.name, e.opt, n.emitDefaultValues, n.enumAsInteger);
                    break;
                case "message":
                    r = this.message(e.T(), t, e.name, n)
            }
            return r
        }
        enum(e, t, n, r, i, a) {
            if ("google.protobuf.NullValue" == e[0]) return null;
            if (void 0 === t) {
                (0, o.assert)(r);
                return
            }
            if (0 !== t || i || r) return ((0, o.assert)("number" == typeof t), (0, o.assert)(Number.isInteger(t)), a || !e[1].hasOwnProperty(t)) ? t : e[2] ? e[2] + e[1][t] : e[1][t]
        }
        message(e, t, n, r) {
            return void 0 === t ? r.emitDefaultValues ? null : void 0 : e.internalJsonWrite(t, r)
        }
        scalar(e, t, n, s, u) {
            if (void 0 === t) {
                (0, o.assert)(s);
                return
            }
            let c = u || s;
            switch (e) {
                case a.ScalarType.INT32:
                case a.ScalarType.SFIXED32:
                case a.ScalarType.SINT32:
                    if (0 === t) return c ? 0 : void 0;
                    return (0, o.assertInt32)(t), t;
                case a.ScalarType.FIXED32:
                case a.ScalarType.UINT32:
                    if (0 === t) return c ? 0 : void 0;
                    return (0, o.assertUInt32)(t), t;
                case a.ScalarType.FLOAT:
                    (0, o.assertFloat32)(t);
                case a.ScalarType.DOUBLE:
                    if (0 === t) return c ? 0 : void 0;
                    if ((0, o.assert)("number" == typeof t), Number.isNaN(t)) return "NaN";
                    if (t === Number.POSITIVE_INFINITY) return "Infinity";
                    if (t === Number.NEGATIVE_INFINITY) return "-Infinity";
                    return t;
                case a.ScalarType.STRING:
                    if ("" === t) return c ? "" : void 0;
                    return (0, o.assert)("string" == typeof t), t;
                case a.ScalarType.BOOL:
                    if (!1 === t) return !c && void 0;
                    return (0, o.assert)("boolean" == typeof t), t;
                case a.ScalarType.UINT64:
                case a.ScalarType.FIXED64:
                    (0, o.assert)("number" == typeof t || "string" == typeof t || "bigint" == typeof t);
                    let l = i.PbULong.from(t);
                    if (l.isZero() && !c) return;
                    return l.toString();
                case a.ScalarType.INT64:
                case a.ScalarType.SFIXED64:
                case a.ScalarType.SINT64:
                    (0, o.assert)("number" == typeof t || "string" == typeof t || "bigint" == typeof t);
                    let d = i.PbLong.from(t);
                    if (d.isZero() && !c) return;
                    return d.toString();
                case a.ScalarType.BYTES:
                    if ((0, o.assert)(t instanceof Uint8Array), !t.byteLength) return c ? "" : void 0;
                    return (0, r.base64encode)(t)
            }
        }
    }
}