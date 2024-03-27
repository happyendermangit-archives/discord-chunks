function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GUILD_FILTERS: function() {
            return I
        }
    }), n("47120");
    var i = n("654861"),
        r = n.n(i),
        s = n("505578"),
        a = n.n(s),
        o = n("943881"),
        l = n("650774"),
        u = n("430824"),
        d = n("70956"),
        _ = n("709054");

    function c(e, t, n) {
        let i = r()(e),
            s = null != t ? r()(t) : null,
            a = null != n ? r()(n) : null;
        return !(null != s && i.lesser(s) || null != a && i.greater(a)) && !0
    }

    function E(e) {
        let t, n;
        for (let [i, r] of e) switch (i) {
            case a().v3("min_id"):
                t = r;
                break;
            case a().v3("max_id"):
                n = r
        }
        return {
            min: t,
            max: n
        }
    }
    let I = {
        [a().v3("guild_ids")]: e => {
            let t = [];
            for (let [n, i] of e)
                if (n === a().v3("guild_ids")) t = i;
            return e => t.includes(e)
        },
        [a().v3("guild_id_range")]: e => {
            let {
                min: t,
                max: n
            } = E(e);
            return e => c(e, t, n)
        },
        [a().v3("guild_age_range_days")]: e => {
            let {
                min: t,
                max: n
            } = E(e);
            return e => c(Math.floor(_.default.age(e) / d.default.Millis.DAY), t, n)
        },
        [a().v3("guild_member_count_range")]: e => {
            let {
                min: t,
                max: n
            } = E(e);
            return e => {
                let i = l.default.getMemberCount(e);
                return null != i && c(i, t, n)
            }
        },
        [a().v3("guild_has_feature")]: e => {
            let [
                [, t]
            ] = e;
            return e => {
                var n;
                let i = null !== (n = u.default.getGuild(e)) && void 0 !== n ? n : o.default.getGuild(e);
                return null != i && t.some(e => i.hasFeature(e))
            }
        },
        [a().v3("guild_hub_types")]: e => {
            let [
                [, t]
            ] = e;
            return e => {
                var n;
                let i = null !== (n = u.default.getGuild(e)) && void 0 !== n ? n : o.default.getGuild(e);
                return null != i && "number" == typeof i.hubType && t.some(e => i.hubType === e)
            }
        },
        [a().v3("guild_has_vanity_url")]: e => {
            let [
                [, t]
            ] = e;
            return e => {
                var n;
                let i = null !== (n = u.default.getGuild(e)) && void 0 !== n ? n : o.default.getGuild(e);
                return null != i && t === (null != i.vanityURLCode)
            }
        },
        [a().v3("guild_in_range_by_hash")]: e => {
            let t, n;
            for (let [r, s] of e) switch (r) {
                case a().v3("hash_key"):
                    t = s;
                    break;
                case a().v3("target"):
                    var i;
                    n = null !== (i = parseInt(s)) && void 0 !== i ? i : 0
            }
            return e => {
                let i = a().v3("".concat(t, ":").concat(e));
                return (i > 0 ? i + i : i >>> 0) % 1e4 < n
            }
        }
    }
}