function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        Versions: function() {
            return n
        }
    }), E("222007"), E("70102");
    var t = E("849266");
    class o extends t.MessageType {
        create(e) {
            let _ = {
                clientVersion: 0,
                serverVersion: 0,
                dataVersion: 0
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
                switch (_) {
                    case 1:
                        n.clientVersion = e.uint32();
                        break;
                    case 2:
                        n.serverVersion = e.uint32();
                        break;
                    case 3:
                        n.dataVersion = e.uint32();
                        break;
                    default:
                        let r = E.readUnknownField;
                        if ("throw" === r) throw new globalThis.Error("Unknown field ".concat(_, " (wire type ").concat(o, ") for ").concat(this.typeName));
                        let a = e.skip(o);
                        !1 !== r && (!0 === r ? t.UnknownFieldHandler.onRead : r)(this.typeName, n, _, o, a)
                }
            }
            return n
        }
        internalBinaryWrite(e, _, E) {
            0 !== e.clientVersion && _.tag(1, t.WireType.Varint).uint32(e.clientVersion), 0 !== e.serverVersion && _.tag(2, t.WireType.Varint).uint32(e.serverVersion), 0 !== e.dataVersion && _.tag(3, t.WireType.Varint).uint32(e.dataVersion);
            let o = E.writeUnknownFields;
            return !1 !== o && (!0 == o ? t.UnknownFieldHandler.onWrite : o)(this.typeName, e, _), _
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
    let n = new o
}