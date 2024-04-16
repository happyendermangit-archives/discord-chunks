function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createZstdContextWeb: function() {
            return l
        },
        getFastConnectZstd: function() {
            return a
        },
        setFastConnectZstd: function() {
            return o
        },
        supportsZstd: function() {
            return s
        }
    }), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817");
    var i = n("433517"),
        r = n("998502");

    function s() {
        if (null == window.DiscordNative || void 0 === window.Uint8Array || void 0 === window.TextDecoder) return !1;
        try {
            return r.default.requireModule("discord_zstd"), !0
        } catch (e) {
            if (e.message.includes("Cannot find")) return r.default.ensureModule("discord_zstd").catch(e => {}), !1;
            throw e
        }
    }

    function a() {
        return "true" === i.Storage.get("zstd_fast_connect")
    }

    function o(e) {
        e ? i.Storage.set("zstd_fast_connect", "true") : i.Storage.remove("zstd_fast_connect")
    }

    function l() {
        let {
            createContext: e
        } = r.default.requireModule("discord_zstd");
        return e()
    }
}