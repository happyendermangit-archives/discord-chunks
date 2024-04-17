function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        },
        getDisplayProfile: function() {
            return E
        },
        useDisplayProfileWithFetchEffect: function() {
            return _
        }
    }), n("47120");
    var i = n("470079"),
        r = n("442837"),
        s = n("594174"),
        a = n("251625"),
        o = n("255564"),
        l = n("621853"),
        u = n("484459");

    function d(e, t) {
        return (0, r.useStateFromStores)([s.default, l.default], () => E(e, t, [s.default, l.default]))
    }

    function _(e, t) {
        return i.useEffect(() => {
            (0, u.default)(e, void 0, {
                guildId: null != t ? t : void 0
            })
        }, [t, e]), d(e, t)
    }
    let c = (0, a.cachedFunction)((e, t) => new o.default(e, t));

    function E(e, t) {
        let [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default, l.default], r = n.getUser(e), a = i.getUserProfile(e), o = i.getGuildMemberProfile(e, t);
        return null == r || null == a ? null : c(a, o)
    }
}