function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NO_PRIMARY_APP_COMMAND_ERROR: function() {
            return l
        },
        default: function() {
            return u
        }
    }), n("411104");
    var i = n("911969"),
        r = n("592125"),
        s = n("963456"),
        a = n("213459"),
        o = n("367790");
    let l = "no primary app command for application";
    async function u(e, t) {
        let n, i = r.default.getChannel(e);
        if (null != i) {
            let e = d(i, t);
            if (null == e.commands[0]) {
                let e = {
                        type: "application",
                        applicationId: t
                    },
                    r = new AbortController;
                (0, s.requestApplicationCommandIndex)(e, !1), await (0, s.fetchApplicationCommandIndex)(e, 0, r), n = d(i, t).commands[0]
            } else n = e.commands[0]
        }
        if (null != n) return n;
        throw Error(l)
    }

    function d(e, t) {
        return a.default.query(e, {
            commandType: i.ApplicationCommandType.PRIMARY_ENTRY_POINT
        }, {
            placeholderCount: 1,
            scoreMethod: o.ScoreMethod.COMMAND_ONLY,
            applicationId: t,
            allowFetch: !1
        })
    }
}