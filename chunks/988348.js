function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createZstdContextWeb: function() {
            return u
        },
        getFastConnectZstd: function() {
            return o
        },
        setFastConnectZstd: function() {
            return l
        },
        supportsZstd: function() {
            return a
        }
    }), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817");
    var i = n("433517"),
        r = n("998502");
    let s = null;

    function a() {
        return null == s && (s = function() {
            if (null == window.DiscordNative || void 0 === window.Uint8Array || void 0 === window.TextDecoder) return !1;
            let e = window.GLOBAL_ENV.RELEASE_CHANNEL;
            if ("ptb" === e || "stable" === e) return !1;
            try {
                return r.default.requireModule("discord_zstd"), !0
            } catch (e) {
                if (e.message.includes("Cannot find")) return r.default.ensureModule("discord_zstd").catch(e => {}), !1;
                throw e
            }
        }()), s
    }

    function o() {
        return "true" === i.Storage.get("zstd_fast_connect")
    }

    function l(e) {
        e ? i.Storage.set("zstd_fast_connect", "true") : i.Storage.remove("zstd_fast_connect")
    }

    function u() {
        let {
            createContext: e
        } = r.default.requireModule("discord_zstd");
        return e()
    }
}