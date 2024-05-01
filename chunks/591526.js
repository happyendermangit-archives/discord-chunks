function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("47120");
    var i = n("710845"),
        r = n("287328");
    let s = new i.default("ChannelReader");
    class a {
        static getSync(e, t) {
            let n = performance.now(),
                i = r.default.channels(e).getManySyncUnsafe(t),
                a = performance.now() - n;
            return s.log("synchronously loaded in ".concat(a, "ms (guild: ").concat(t, ", channels: ").concat(i.length, ")")), [i, a]
        }
        static async getAsync(e, t) {
            let n = performance.now(),
                i = await r.default.channels(e).getMany(t),
                a = performance.now() - n;
            return s.verbose("loaded in ".concat(a, "ms (guild: ").concat(t, ", channels: ").concat(i.length, ")")), i
        }
        static async getGuildIds() {
            try {
                var e;
                let t = r.default.channels();
                if (null == t) return new Set;
                let n = (null !== (e = await t.getGuildIds()) && void 0 !== e ? e : []).filter(e => null !== e && "string" == typeof e);
                return new Set(n)
            } catch (e) {
                return s.warn("couldn't get guild ids", e), new Set
            }
        }
    }
}