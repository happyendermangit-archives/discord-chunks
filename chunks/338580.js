function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getErlpackEncoding: function() {
            return a
        }
    }), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
    var s = n("605250"),
        i = n("773336"),
        r = n("50885");

    function a() {
        if (i.isPlatformEmbedded) {
            let e;
            try {
                e = r.default.requireModule("discord_erlpack")
            } catch (t) {
                try {
                    e = r.default.requireModule("erlpack")
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
                        throw new(0, s.default)("GatewayEncodingErlpackEncoding").error("Error unpacking", {
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