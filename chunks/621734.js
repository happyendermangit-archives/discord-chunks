function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReflectionJsonReader: function() {
            return l
        }
    }), n("222007"), n("70102"), n("424973"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
    var r = n("107678"),
        a = n("537502"),
        o = n("803628"),
        i = n("497557"),
        s = n("759780"),
        u = n("546749");
    class l {
        prepare() {
            var e;
            if (void 0 === this.fMap) {
                this.fMap = {};
                let t = null !== (e = this.info.fields) && void 0 !== e ? e : [];
                for (let e of t) this.fMap[e.name] = e, this.fMap[e.jsonName] = e, this.fMap[e.localName] = e
            }
        }
        assert(e, t, n) {
            if (!e) {
                let e = (0, r.typeofJsonValue)(n);
                throw ("number" == e || "boolean" == e) && (e = n.toString()), Error("Cannot parse JSON ".concat(e, " for ").concat(this.info.typeName, "#").concat(t))
            }
        }
        read(e, t, n) {
            this.prepare();
            let a = [];
            for (let [i, s] of Object.entries(e)) {
                let e;
                let u = this.fMap[i];
                if (!u) {
                    if (!n.ignoreUnknownFields) throw Error("Found unknown field while reading ".concat(this.info.typeName, " from JSON format. JSON key: ").concat(i));
                    continue
                }
                let l = u.localName;
                if (u.oneof) {
                    if (a.includes(u.oneof)) throw Error('Multiple members of the oneof group "'.concat(u.oneof, '" of ').concat(this.info.typeName, " are present in JSON."));
                    a.push(u.oneof), e = t[u.oneof] = {
                        oneofKind: l
                    }
                } else e = t;
                if ("map" == u.kind) {
                    if (null === s) continue;
                    this.assert((0, r.isJsonObject)(s), u.name, s);
                    let t = e[l];
                    for (let [e, r] of Object.entries(s)) {
                        let a;
                        switch (this.assert(null !== r, u.name + " map value", null), u.V.kind) {
                            case "message":
                                a = u.V.T().internalJsonRead(r, n);
                                break;
                            case "enum":
                                if (!1 === (a = this.enum(u.V.T(), r, u.name, n.ignoreUnknownFields))) continue;
                                break;
                            case "scalar":
                                a = this.scalar(r, u.V.T, u.V.L, u.name)
                        }
                        this.assert(void 0 !== a, u.name + " map value", r);
                        let i = e;
                        u.K == o.ScalarType.BOOL && (i = "true" == i || "false" != i && i), t[i = this.scalar(i, u.K, o.LongType.STRING, u.name).toString()] = a
                    }
                } else if (u.repeat) {
                    if (null === s) continue;
                    this.assert(Array.isArray(s), u.name, s);
                    let t = e[l];
                    for (let e of s) {
                        let r;
                        switch (this.assert(null !== e, u.name, null), u.kind) {
                            case "message":
                                r = u.T().internalJsonRead(e, n);
                                break;
                            case "enum":
                                if (!1 === (r = this.enum(u.T(), e, u.name, n.ignoreUnknownFields))) continue;
                                break;
                            case "scalar":
                                r = this.scalar(e, u.T, u.L, u.name)
                        }
                        this.assert(void 0 !== r, u.name, s), t.push(r)
                    }
                } else switch (u.kind) {
                    case "message":
                        if (null === s && "google.protobuf.Value" != u.T().typeName) {
                            this.assert(void 0 === u.oneof, u.name + " (oneof member)", null);
                            continue
                        }
                        e[l] = u.T().internalJsonRead(s, n, e[l]);
                        break;
                    case "enum":
                        let c = this.enum(u.T(), s, u.name, n.ignoreUnknownFields);
                        if (!1 === c) continue;
                        e[l] = c;
                        break;
                    case "scalar":
                        e[l] = this.scalar(s, u.T, u.L, u.name)
                }
            }
        }
        enum(e, t, n, r) {
            if ("google.protobuf.NullValue" == e[0] && (0, s.assert)(null === t, "Unable to parse field ".concat(this.info.typeName, "#").concat(n, ", enum ").concat(e[0], " only accepts null.")), null === t) return 0;
            switch (typeof t) {
                case "number":
                    return (0, s.assert)(Number.isInteger(t), "Unable to parse field ".concat(this.info.typeName, "#").concat(n, ", enum can only be integral number, got ").concat(t, ".")), t;
                case "string":
                    let a = t;
                    e[2] && t.substring(0, e[2].length) === e[2] && (a = t.substring(e[2].length));
                    let o = e[1][a];
                    if (void 0 === o && r) return !1;
                    return (0, s.assert)("number" == typeof o, "Unable to parse field ".concat(this.info.typeName, "#").concat(n, ", enum ").concat(e[0], ' has no value for "').concat(t, '".')), o
            }(0, s.assert)(!1, "Unable to parse field ".concat(this.info.typeName, "#").concat(n, ", cannot parse enum value from ").concat(typeof t, '".'))
        }
        scalar(e, t, n, r) {
            let l;
            try {
                switch (t) {
                    case o.ScalarType.DOUBLE:
                    case o.ScalarType.FLOAT:
                        if (null === e) return 0;
                        if ("NaN" === e) return Number.NaN;
                        if ("Infinity" === e) return Number.POSITIVE_INFINITY;
                        if ("-Infinity" === e) return Number.NEGATIVE_INFINITY;
                        if ("" === e) {
                            l = "empty string";
                            break
                        }
                        if ("string" == typeof e && e.trim().length !== e.length) {
                            l = "extra whitespace";
                            break
                        }
                        if ("string" != typeof e && "number" != typeof e) break;
                        let r = Number(e);
                        if (Number.isNaN(r)) {
                            l = "not a number";
                            break
                        }
                        if (!Number.isFinite(r)) {
                            l = "too large or small";
                            break
                        }
                        return t == o.ScalarType.FLOAT && (0, s.assertFloat32)(r), r;
                    case o.ScalarType.INT32:
                    case o.ScalarType.FIXED32:
                    case o.ScalarType.SFIXED32:
                    case o.ScalarType.SINT32:
                    case o.ScalarType.UINT32:
                        let c;
                        if (null === e) return 0;
                        if ("number" == typeof e ? c = e : "" === e ? l = "empty string" : "string" == typeof e && (e.trim().length !== e.length ? l = "extra whitespace" : c = Number(e)), void 0 === c) break;
                        return t == o.ScalarType.UINT32 ? (0, s.assertUInt32)(c) : (0, s.assertInt32)(c), c;
                    case o.ScalarType.INT64:
                    case o.ScalarType.SFIXED64:
                    case o.ScalarType.SINT64:
                        if (null === e) return (0, u.reflectionLongConvert)(i.PbLong.ZERO, n);
                        if ("number" != typeof e && "string" != typeof e) break;
                        return (0, u.reflectionLongConvert)(i.PbLong.from(e), n);
                    case o.ScalarType.FIXED64:
                    case o.ScalarType.UINT64:
                        if (null === e) return (0, u.reflectionLongConvert)(i.PbULong.ZERO, n);
                        if ("number" != typeof e && "string" != typeof e) break;
                        return (0, u.reflectionLongConvert)(i.PbULong.from(e), n);
                    case o.ScalarType.BOOL:
                        if (null === e) return !1;
                        if ("boolean" != typeof e) break;
                        return e;
                    case o.ScalarType.STRING:
                        if (null === e) return "";
                        if ("string" != typeof e) {
                            l = "extra whitespace";
                            break
                        }
                        try {
                            encodeURIComponent(e)
                        } catch (e) {
                            break
                        }
                        return e;
                    case o.ScalarType.BYTES:
                        if (null === e || "" === e) return new Uint8Array(0);
                        if ("string" != typeof e) break;
                        return (0, a.base64decode)(e)
                }
            } catch (e) {
                l = e.message
            }
            this.assert(!1, r + (l ? " - " + l : ""), e)
        }
        constructor(e) {
            this.info = e
        }
    }
}