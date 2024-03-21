function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GUILD_FILTERS: function() {
            return E
        }
    }), n("222007");
    var i = n("552442"),
        s = n.n(i),
        r = n("210696"),
        a = n.n(r),
        o = n("519820"),
        l = n("525065"),
        u = n("305961"),
        d = n("718517"),
        c = n("299039");

    function _(e, t, n) {
        let i = s(e),
            r = null != t ? s(t) : null,
            a = null != n ? s(n) : null;
        return !(null != r && i.lesser(r) || null != a && i.greater(a)) && !0
    }

    function f(e) {
        let t, n;
        for (let [i, s] of e) switch (i) {
            case a.v3("min_id"):
                t = s;
                break;
            case a.v3("max_id"):
                n = s
        }
        return {
            min: t,
            max: n
        }
    }
    let E = {
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
            } = f(e);
            return e => _(e, t, n)
        },
        [a.v3("guild_age_range_days")]: e => {
            let {
                min: t,
                max: n
            } = f(e);
            return e => {
                let i = Math.floor(c.default.age(e) / d.default.Millis.DAY);
                return _(i, t, n)
            }
        },
        [a.v3("guild_member_count_range")]: e => {
            let {
                min: t,
                max: n
            } = f(e);
            return e => {
                let i = l.default.getMemberCount(e);
                return null != i && _(i, t, n)
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
                let s = null != i.vanityURLCode;
                return t === s
            }
        },
        [a.v3("guild_in_range_by_hash")]: e => {
            let t, n;
            for (let [s, r] of e) switch (s) {
                case a.v3("hash_key"):
                    t = r;
                    break;
                case a.v3("target"):
                    var i;
                    n = null !== (i = parseInt(r)) && void 0 !== i ? i : 0
            }
            return e => {
                let i = a.v3("".concat(t, ":").concat(e));
                return (i > 0 ? i + i : i >>> 0) % 1e4 < n
            }
        }
    }
}