function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchApplicationCommandIndex: function() {
            return l
        },
        requestApplicationCommandIndex: function() {
            return u
        }
    });
    var i = n("544891"),
        r = n("570140"),
        s = n("626135"),
        a = n("70956"),
        o = n("981631");
    async function l(e, t, n) {
        let l, u = 0;
        switch (e.type) {
            case "channel":
                l = o.Endpoints.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
                break;
            case "guild":
                l = o.Endpoints.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
                break;
            case "user":
                l = o.Endpoints.APPLICATION_COMMAND_INDEX_USER
        }
        let d = async t => u >= 3 ? (c(!0), r.default.dispatch({
            type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
            target: e
        })) : (await new Promise(e => setTimeout(e, t)), _()), _ = () => i.HTTP.get({
            url: l,
            retries: 3 - u - 1,
            signal: n.signal,
            onRequestCreated: () => u++
        }).then(t => 202 === t.status ? d(5e3) : (c(!1), r.default.dispatch({
            type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS",
            target: e,
            index: t.body
        })), t => {
            if (n.signal.aborted) {
                c(!0);
                return
            }
            return 429 === t.status ? d(t.body.retry_after * a.default.Millis.SECOND) : (c(!0), r.default.dispatch({
                type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
                target: e
            }))
        }), c = e => {
            let i = performance.now() - t;
            s.default.track(o.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
                duration_ms: i,
                error: e,
                aborted: n.signal.aborted,
                include_applications: !0,
                retries: Math.max(u - 1, 0),
                kind: null,
                command_type: null
            })
        };
        await _()
    }

    function u(e) {
        r.default.dispatch({
            type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST",
            start: performance.now(),
            target: e
        })
    }
}