function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationDisclosureType: function() {
            return i
        }
    }), n("47120"), n("411104"), n("653041");
    var i, r, s = n("578012"),
        a = n("835913");
    (r = i || (i = {}))[r.UNSPECIFIED_DISCLOSURE = 0] = "UNSPECIFIED_DISCLOSURE", r[r.IP_LOCATION = 1] = "IP_LOCATION", r[r.DISPLAYS_ADVERTISEMENTS = 2] = "DISPLAYS_ADVERTISEMENTS";
    class o extends s.MessageType {
        create(e) {
            let t = {
                metadata: {},
                platformName: "",
                platformUsername: "",
                version: "0"
            };
            return globalThis.Object.defineProperty(t, s.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, s.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                a = e.pos + t;
            for (; e.pos < a;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        this.binaryReadMap1(r.metadata, e, n);
                        break;
                    case 2:
                        r.platformName = e.string();
                        break;
                    case 3:
                        r.platformUsername = e.string();
                        break;
                    case 4:
                        r.version = e.fixed64().toString();
                        break;
                    default:
                        let a = n.readUnknownField;
                        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let o = e.skip(i);
                        !1 !== a && (!0 === a ? s.UnknownFieldHandler.onRead : a)(this.typeName, r, t, i, o)
                }
            }
            return r
        }
        binaryReadMap1(e, t, n) {
            let i = t.uint32(),
                r = t.pos + i,
                s, a;
            for (; t.pos < r;) {
                let [e, n] = t.tag();
                switch (e) {
                    case 1:
                        s = t.string();
                        break;
                    case 2:
                        a = t.string();
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection.metadata")
                }
            }
            e[null != s ? s : ""] = null != a ? a : ""
        }
        internalBinaryWrite(e, t, n) {
            for (let n of Object.keys(e.metadata)) t.tag(1, s.WireType.LengthDelimited).fork().tag(1, s.WireType.LengthDelimited).string(n).tag(2, s.WireType.LengthDelimited).string(e.metadata[n]).join();
            "" !== e.platformName && t.tag(2, s.WireType.LengthDelimited).string(e.platformName), "" !== e.platformUsername && t.tag(3, s.WireType.LengthDelimited).string(e.platformUsername), "0" !== e.version && t.tag(4, s.WireType.Bit64).fixed64(e.version);
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? s.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_kkv_store_value_models.v1.ApplicationUserRoleConnection", [{
                no: 1,
                name: "metadata",
                kind: "map",
                K: 9,
                V: {
                    kind: "scalar",
                    T: 9
                }
            }, {
                no: 2,
                name: "platform_name",
                kind: "scalar",
                T: 9
            }, {
                no: 3,
                name: "platform_username",
                kind: "scalar",
                T: 9
            }, {
                no: 4,
                name: "version",
                kind: "scalar",
                T: 6
            }])
        }
    }
    new o;
    class l extends s.MessageType {
        create(e) {
            let t = {
                disclosureType: 0
            };
            return globalThis.Object.defineProperty(t, s.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, s.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                o = e.pos + t;
            for (; e.pos < o;) {
                let [t, i] = e.tag();
                switch (t) {
                    case 1:
                        r.disclosureType = e.int32();
                        break;
                    case 2:
                        r.ackedAt = a.Timestamp.internalBinaryRead(e, e.uint32(), n, r.ackedAt);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                        let l = e.skip(i);
                        !1 !== o && (!0 === o ? s.UnknownFieldHandler.onRead : o)(this.typeName, r, t, i, l)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            0 !== e.disclosureType && t.tag(1, s.WireType.Varint).int32(e.disclosureType), e.ackedAt && a.Timestamp.internalBinaryWrite(e.ackedAt, t.tag(2, s.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? s.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosure", [{
                no: 1,
                name: "disclosure_type",
                kind: "enum",
                T: () => ["discord_protos.discord_kkv_store_value_models.v1.ApplicationDisclosureType", i]
            }, {
                no: 2,
                name: "acked_at",
                kind: "message",
                T: () => a.Timestamp
            }])
        }
    }
    let u = new l;
    class d extends s.MessageType {
        create(e) {
            let t = {
                ackedDisclosures: []
            };
            return globalThis.Object.defineProperty(t, s.MESSAGE_TYPE, {
                enumerable: !1,
                value: this
            }), void 0 !== e && (0, s.reflectionMergePartial)(this, t, e), t
        }
        internalBinaryRead(e, t, n, i) {
            let r = null != i ? i : this.create(),
                a = e.pos + t;
            for (; e.pos < a;) {
                let [t, i] = e.tag();
                if (1 === t) r.ackedDisclosures.push(u.internalBinaryRead(e, e.uint32(), n));
                else {
                    let a = n.readUnknownField;
                    if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? s.UnknownFieldHandler.onRead : a)(this.typeName, r, t, i, o)
                }
            }
            return r
        }
        internalBinaryWrite(e, t, n) {
            for (let i = 0; i < e.ackedDisclosures.length; i++) u.internalBinaryWrite(e.ackedDisclosures[i], t.tag(1, s.WireType.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return !1 !== i && (!0 == i ? s.UnknownFieldHandler.onWrite : i)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_kkv_store_value_models.v1.AcknowledgedApplicationDisclosures", [{
                no: 1,
                name: "acked_disclosures",
                kind: "message",
                repeat: 1,
                T: () => u
            }])
        }
    }
    new d
}