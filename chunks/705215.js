function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("70102");
    var i = n("197881"),
        s = n("338580");
    let r = (0, s.getErlpackEncoding)();
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
    i.ProcessArgs.isDiscordGatewayPlaintextSet() && (o = a);
    var l = o
}