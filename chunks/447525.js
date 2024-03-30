function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("757143"), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("660199"),
        a = n("758380");

    function o(e, t) {
        if (!("type" in e)) return null;
        if ("timestamp" === e.type) return (0, i.jsx)(l, {
            ...t,
            timestamp: e.parsed
        });
        return null
    }

    function l(e) {
        var t;
        let {
            timestamp: n,
            replace: o
        } = e, l = e => {
            let {
                timestamp: t,
                format: i
            } = e, r = null != t ? Math.floor(t.getTime() / 1e3) : n.timestamp, a = null != i ? i : n.format;
            o((0, s.unparseTimestamp)(r, a))
        };
        return (0, i.jsxs)("div", {
            className: a.container,
            children: [(0, i.jsx)(r.DateInput, {
                value: n.parsed,
                onSelect: e => {
                    l({
                        timestamp: e.toDate()
                    })
                }
            }), (0, i.jsx)(r.TimeInput, {
                value: n.parsed,
                onChange: e => {
                    l({
                        timestamp: e.toDate()
                    })
                }
            }), (0, i.jsx)(r.RadioGroup, {
                options: Object.entries(s.TIMESTAMP_FORMATS).map(e => {
                    let [t, i] = e;
                    return {
                        name: i(n.parsed),
                        value: t
                    }
                }),
                value: null !== (t = n.format) && void 0 !== t ? t : s.DEFAULT_TIMESTAMP_FORMAT,
                size: r.RadioGroup.Sizes.SMALL,
                onChange: e => {
                    let {
                        value: t
                    } = e;
                    l({
                        format: t
                    })
                }
            })]
        })
    }
}