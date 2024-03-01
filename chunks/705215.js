function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("70102");
    var s = n("197881"),
        i = n("338580");
    let r = (0, i.getErlpackEncoding)();
    class a {
        pack(e) {
            return JSON.stringify(e)
        }
        unpack(e) {
            if ("string" != typeof e) throw Error("Expected a string to be passed to JSONEncoding.unpack, got ".concat(null == e ? null : typeof e));
            return JSON.parse(e)
        }
        getName() {
            return "json"
        }
        wantsString() {
            return !0
        }
    }
    let o = void 0 !== r ? r : a;
    s.ProcessArgs.isDiscordGatewayPlaintextSet() && (o = a);
    var d = o
}