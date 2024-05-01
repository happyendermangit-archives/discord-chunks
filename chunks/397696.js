function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Versions: function() {
            return s
        }
    }), n("47120"), n("411104");
    var i = n("578012");
    class r extends i.MessageType {
        create(e) {
            let t = {
                clientVersion: 0,
                serverVersion: 0,
                dataVersion: 0
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
                switch (t) {
                    case 1:
                        s.clientVersion = e.uint32();
                        break;
                    case 2:
                        s.serverVersion = e.uint32();
                        break;
                    case 3:
                        s.dataVersion = e.uint32();
                        break;
                    default:
                        let a = n.readUnknownField;
                        if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(r, ") for ").concat(this.typeName));
                        let o = e.skip(r);
                        !1 !== a && (!0 === a ? i.UnknownFieldHandler.onRead : a)(this.typeName, s, t, r, o)
                }
            }
            return s
        }
        internalBinaryWrite(e, t, n) {
            0 !== e.clientVersion && t.tag(1, i.WireType.Varint).uint32(e.clientVersion), 0 !== e.serverVersion && t.tag(2, i.WireType.Varint).uint32(e.serverVersion), 0 !== e.dataVersion && t.tag(3, i.WireType.Varint).uint32(e.dataVersion);
            let r = n.writeUnknownFields;
            return !1 !== r && (!0 == r ? i.UnknownFieldHandler.onWrite : r)(this.typeName, e, t), t
        }
        constructor() {
            super("discord_protos.discord_users.v1.Versions", [{
                no: 1,
                name: "client_version",
                kind: "scalar",
                T: 13
            }, {
                no: 2,
                name: "server_version",
                kind: "scalar",
                T: 13
            }, {
                no: 3,
                name: "data_version",
                kind: "scalar",
                T: 13
            }])
        }
    }
    let s = new r
}