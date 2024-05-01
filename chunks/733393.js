function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getErlpackEncoding: function() {
            return a
        }
    }), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817");
    var i = n("710845"),
        r = n("358085"),
        s = n("998502");

    function a() {
        if (r.isPlatformEmbedded) {
            let e;
            try {
                e = s.default.requireModule("discord_erlpack")
            } catch (t) {
                try {
                    e = s.default.requireModule("erlpack")
                } catch (e) {}
            }
            if (null != e) return class {
                static canUse() {
                    return null != e
                }
                pack(t) {
                    return e.pack(t).buffer
                }
                unpack(t) {
                    t instanceof ArrayBuffer && (t = new Uint8Array(t));
                    try {
                        return e.unpack(t)
                    } catch (e) {
                        throw new i.default("GatewayEncodingErlpackEncoding").error("Error unpacking", {
                            erlpackUnpackError: e,
                            erlpackDataPreview: null != t ? Array.from(t.slice(0, 32)) : null,
                            erlpackDataLength: null != t ? t.length : null
                        }), e
                    }
                }
                getName() {
                    return "etf"
                }
                wantsString() {
                    return !1
                }
            }
        }
    }
}