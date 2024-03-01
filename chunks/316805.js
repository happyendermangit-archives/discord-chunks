function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GUILD_FILTERS: function() {
            return p
        }
    }), n("222007");
    var i = n("552442"),
        r = n.n(i),
        s = n("210696"),
        a = n.n(s),
        o = n("519820"),
        l = n("525065"),
        u = n("305961"),
        c = n("718517"),
        d = n("299039");

    function f(e, t, n) {
        let i = r(e),
            s = null != t ? r(t) : null,
            a = null != n ? r(n) : null;
        return !(null != s && i.lesser(s) || null != a && i.greater(a)) && !0
    }

    function E(e) {
        let t, n;
        for (let [i, r] of e) switch (i) {
            case a.v3("min_id"):
                t = r;
                break;
            case a.v3("max_id"):
                n = r
        }
        return {
            min: t,
            max: n
        }
    }
    let p = {
        [a.v3("guild_ids")]: e => {
            let t = [];
            for (let [n, i] of e)
                if (n === a.v3("guild_ids")) t = i;
            return e => t.includes(e)
        },
        [a.v3("guild_id_range")]: e => {
            let {
                min: t,
                max: n
            } = E(e);
            return e => f(e, t, n)
        },
        [a.v3("guild_age_range_days")]: e => {
            let {
                min: t,
                max: n
            } = E(e);
            return e => {
                let i = Math.floor(d.default.age(e) / c.default.Millis.DAY);
                return f(i, t, n)
            }
        },
        [a.v3("guild_member_count_range")]: e => {
            let {
                min: t,
                max: n
            } = E(e);
            return e => {
                let i = l.default.getMemberCount(e);
                return null != i && f(i, t, n)
            }
        },
        [a.v3("guild_has_feature")]: e => {
            let [
                [, t]
            ] = e;
            return e => {
                var n;
                let i = null !== (n = u.default.getGuild(e)) && void 0 !== n ? n : o.default.getGuild(e);
                return null != i && t.some(e => i.hasFeature(e))
            }
        },
        [a.v3("guild_hub_types")]: e => {
            let [
                [, t]
            ] = e;
            return e => {
                var n;
                let i = null !== (n = u.default.getGuild(e)) && void 0 !== n ? n : o.default.getGuild(e);
                return null != i && "number" == typeof i.hubType && t.some(e => i.hubType === e)
            }
        },
        [a.v3("guild_has_vanity_url")]: e => {
            let [
                [, t]
            ] = e;
            return e => {
                var n;
                let i = null !== (n = u.default.getGuild(e)) && void 0 !== n ? n : o.default.getGuild(e);
                if (null == i) return !1;
                let r = null != i.vanityURLCode;
                return t === r
            }
        },
        [a.v3("guild_in_range_by_hash")]: e => {
            let t, n;
            for (let [r, s] of e) switch (r) {
                case a.v3("hash_key"):
                    t = s;
                    break;
                case a.v3("target"):
                    var i;
                    n = null !== (i = parseInt(s)) && void 0 !== i ? i : 0
            }
            return e => {
                let i = a.v3("".concat(t, ":").concat(e));
                return (i > 0 ? i + i : i >>> 0) % 1e4 < n
            }
        }
    }
}