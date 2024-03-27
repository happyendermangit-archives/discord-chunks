function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReflectionJsonReader: function() {
            return c
        }
    });
    var r = n("660284"),
        i = n("581282"),
        a = n("36056"),
        o = n("69122"),
        s = n("17146"),
        u = n("929412");
    class c {
        constructor(e) {
            this.info = e
        }
        prepare() {
            var e;
            if (void 0 === this.fMap)
                for (let t of (this.fMap = {}, null !== (e = this.info.fields) && void 0 !== e ? e : [])) this.fMap[t.name] = t, this.fMap[t.jsonName] = t, this.fMap[t.localName] = t
        }
        assert(e, t, n) {
            if (!e) {
                let e = (0, r.typeofJsonValue)(n);
                throw ("number" == e || "boolean" == e) && (e = n.toString()), Error(`Cannot parse JSON ${e} for ${this.info.typeName}#${t}`)
            }
        }
        read(e, t, n) {
            this.prepare();
            let i = [];
            for (let [o, s] of Object.entries(e)) {
                let e;
                let u = this.fMap[o];
                if (!u) {
                    if (!n.ignoreUnknownFields) throw Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${o}`);
                    continue
                }
                let c = u.localName;
                if (u.oneof) {
                    if (i.includes(u.oneof)) throw Error(`Multiple members of the oneof group "${u.oneof}" of ${this.info.typeName} are present in JSON.`);
                    i.push(u.oneof), e = t[u.oneof] = {
                        oneofKind: c
                    }
                } else e = t;
                if ("map" == u.kind) {
                    if (null === s) continue;
                    this.assert((0, r.isJsonObject)(s), u.name, s);
                    let t = e[c];
                    for (let [e, r] of Object.entries(s)) {
                        let i;
                        switch (this.assert(null !== r, u.name + " map value", null), u.V.kind) {
                            case "message":
                                i = u.V.T().internalJsonRead(r, n);
                                break;
                            case "enum":
                                if (!1 === (i = this.enum(u.V.T(), r, u.name, n.ignoreUnknownFields))) continue;
                                break;
                            case "scalar":
                                i = this.scalar(r, u.V.T, u.V.L, u.name)
                        }
                        this.assert(void 0 !== i, u.name + " map value", r);
                        let o = e;
                        u.K == a.ScalarType.BOOL && (o = "true" == o || "false" != o && o), t[o = this.scalar(o, u.K, a.LongType.STRING, u.name).toString()] = i
                    }
                } else if (u.repeat) {
                    if (null === s) continue;
                    this.assert(Array.isArray(s), u.name, s);
                    let t = e[c];
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
                        e[c] = u.T().internalJsonRead(s, n, e[c]);
                        break;
                    case "enum":
                        let l = this.enum(u.T(), s, u.name, n.ignoreUnknownFields);
                        if (!1 === l) continue;
                        e[c] = l;
                        break;
                    case "scalar":
                        e[c] = this.scalar(s, u.T, u.L, u.name)
                }
            }
        }
        enum(e, t, n, r) {
            if ("google.protobuf.NullValue" == e[0] && (0, s.assert)(null === t, `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} only accepts null.`), null === t) return 0;
            switch (typeof t) {
                case "number":
                    return (0, s.assert)(Number.isInteger(t), `Unable to parse field ${this.info.typeName}#${n}, enum can only be integral number, got ${t}.`), t;
                case "string":
                    let i = t;
                    e[2] && t.substring(0, e[2].length) === e[2] && (i = t.substring(e[2].length));
                    let a = e[1][i];
                    if (void 0 === a && r) return !1;
                    return (0, s.assert)("number" == typeof a, `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} has no value for "${t}".`), a
            }(0, s.assert)(!1, `Unable to parse field ${this.info.typeName}#${n}, cannot parse enum value from ${typeof t}".`)
        }
        scalar(e, t, n, r) {
            let c;
            try {
                switch (t) {
                    case a.ScalarType.DOUBLE:
                    case a.ScalarType.FLOAT:
                        if (null === e) return 0;
                        if ("NaN" === e) return Number.NaN;
                        if ("Infinity" === e) return Number.POSITIVE_INFINITY;
                        if ("-Infinity" === e) return Number.NEGATIVE_INFINITY;
                        if ("" === e) {
                            c = "empty string";
                            break
                        }
                        if ("string" == typeof e && e.trim().length !== e.length) {
                            c = "extra whitespace";
                            break
                        }
                        if ("string" != typeof e && "number" != typeof e) break;
                        let r = Number(e);
                        if (Number.isNaN(r)) {
                            c = "not a number";
                            break
                        }
                        if (!Number.isFinite(r)) {
                            c = "too large or small";
                            break
                        }
                        return t == a.ScalarType.FLOAT && (0, s.assertFloat32)(r), r;
                    case a.ScalarType.INT32:
                    case a.ScalarType.FIXED32:
                    case a.ScalarType.SFIXED32:
                    case a.ScalarType.SINT32:
                    case a.ScalarType.UINT32:
                        let l;
                        if (null === e) return 0;
                        if ("number" == typeof e ? l = e : "" === e ? c = "empty string" : "string" == typeof e && (e.trim().length !== e.length ? c = "extra whitespace" : l = Number(e)), void 0 === l) break;
                        return t == a.ScalarType.UINT32 ? (0, s.assertUInt32)(l) : (0, s.assertInt32)(l), l;
                    case a.ScalarType.INT64:
                    case a.ScalarType.SFIXED64:
                    case a.ScalarType.SINT64:
                        if (null === e) return (0, u.reflectionLongConvert)(o.PbLong.ZERO, n);
                        if ("number" != typeof e && "string" != typeof e) break;
                        return (0, u.reflectionLongConvert)(o.PbLong.from(e), n);
                    case a.ScalarType.FIXED64:
                    case a.ScalarType.UINT64:
                        if (null === e) return (0, u.reflectionLongConvert)(o.PbULong.ZERO, n);
                        if ("number" != typeof e && "string" != typeof e) break;
                        return (0, u.reflectionLongConvert)(o.PbULong.from(e), n);
                    case a.ScalarType.BOOL:
                        if (null === e) return !1;
                        if ("boolean" != typeof e) break;
                        return e;
                    case a.ScalarType.STRING:
                        if (null === e) return "";
                        if ("string" != typeof e) {
                            c = "extra whitespace";
                            break
                        }
                        try {
                            encodeURIComponent(e)
                        } catch (e) {
                            break
                        }
                        return e;
                    case a.ScalarType.BYTES:
                        if (null === e || "" === e) return new Uint8Array(0);
                        if ("string" != typeof e) break;
                        return (0, i.base64decode)(e)
                }
            } catch (e) {
                c = e.message
            }
            this.assert(!1, r + (c ? " - " + c : ""), e)
        }
    }
}