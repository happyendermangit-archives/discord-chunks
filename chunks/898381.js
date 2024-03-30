function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getErlpackEncoding: function() {
            return u
        }
    });
    var r = n("35523"),
        o = n("374550"),
        i = n("131900");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u() {
        if (o.isPlatformEmbedded) {
            var e;
            try {
                e = i.default.requireModule("discord_erlpack")
            } catch (t) {
                try {
                    e = i.default.requireModule("erlpack")
                } catch (e) {}
            }
            if (null != e) return function() {
                var t, n, o;

                function i() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, i)
                }
                return t = i, n = [{
                    key: "pack",
                    value: function(t) {
                        return e.pack(t).buffer
                    }
                }, {
                    key: "unpack",
                    value: function(t) {
                        var n, o;
                        if (n = t, null != (o = ArrayBuffer) && "undefined" != typeof Symbol && o[Symbol.hasInstance] ? !!o[Symbol.hasInstance](n) : n instanceof o) t = new Uint8Array(t);
                        try {
                            return e.unpack(t)
                        } catch (e) {
                            throw new r.default("GatewayEncodingErlpackEncoding").error("Error unpacking", {
                                erlpackUnpackError: e,
                                erlpackDataPreview: null != t ? Array.from(t.slice(0, 32)) : null,
                                erlpackDataLength: null != t ? t.length : null
                            }), e
                        }
                    }
                }, {
                    key: "getName",
                    value: function() {
                        return "etf"
                    }
                }, {
                    key: "wantsString",
                    value: function() {
                        return !1
                    }
                }], o = [{
                    key: "canUse",
                    value: function() {
                        return null != e
                    }
                }], n && a(t.prototype, n), o && a(t, o), i
            }()
        }
    }
}