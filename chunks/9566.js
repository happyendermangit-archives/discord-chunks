function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchApplicationCommandIndex: function() {
            return s
        },
        requestApplicationCommandIndex: function() {
            return u
        }
    });
    var i = n("872717"),
        l = n("913144"),
        a = n("599110"),
        o = n("718517"),
        r = n("49111");
    async function s(e, t, n) {
        let s, u = 0;
        switch (e.type) {
            case "channel":
                s = r.Endpoints.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
                break;
            case "guild":
                s = r.Endpoints.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
                break;
            case "user":
                s = r.Endpoints.APPLICATION_COMMAND_INDEX_USER
        }
        let d = async t => u >= 3 ? (p(!0), l.default.dispatch({
            type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
            target: e
        })) : (await new Promise(e => setTimeout(e, t)), c()), c = () => i.default.get({
            url: s,
            retries: 3 - u - 1,
            signal: n.signal,
            onRequestCreated: () => u++
        }).then(t => 202 === t.status ? d(5e3) : (p(!1), l.default.dispatch({
            type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS",
            target: e,
            index: t.body
        })), t => {
            if (n.signal.aborted) {
                p(!0);
                return
            }
            return 429 === t.status ? d(t.body.retry_after * o.default.Millis.SECOND) : (p(!0), l.default.dispatch({
                type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
                target: e
            }))
        }), p = e => {
            let i = performance.now() - t;
            a.default.track(r.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
                duration_ms: i,
                error: e,
                aborted: n.signal.aborted,
                include_applications: !0,
                retries: Math.max(u - 1, 0),
                kind: null,
                command_type: null
            })
        };
        await c()
    }

    function u(e) {
        l.default.dispatch({
            type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST",
            start: performance.now(),
            target: e
        })
    }
}