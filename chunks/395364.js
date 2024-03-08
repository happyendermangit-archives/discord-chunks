function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("781738"), n("222007");
    var i = n("37983");
    n("884691");
    var l = n("77078"),
        a = n("646630"),
        s = n("925442");

    function r(e, t) {
        if (!("type" in e)) return null;
        if ("timestamp" === e.type) return (0, i.jsx)(o, {
            ...t,
            timestamp: e.parsed
        });
        return null
    }

    function o(e) {
        var t;
        let {
            timestamp: n,
            replace: r
        } = e, o = e => {
            let {
                timestamp: t,
                format: i
            } = e, l = null != t ? Math.floor(t.getTime() / 1e3) : n.timestamp, s = null != i ? i : n.format, o = (0, a.unparseTimestamp)(l, s);
            r(o)
        };
        return (0, i.jsxs)("div", {
            className: s.container,
            children: [(0, i.jsx)(l.DateInput, {
                value: n.parsed,
                onSelect: e => {
                    o({
                        timestamp: e.toDate()
                    })
                }
            }), (0, i.jsx)(l.TimeInput, {
                value: n.parsed,
                onChange: e => {
                    o({
                        timestamp: e.toDate()
                    })
                }
            }), (0, i.jsx)(l.RadioGroup, {
                options: Object.entries(a.TIMESTAMP_FORMATS).map(e => {
                    let [t, i] = e;
                    return {
                        name: i(n.parsed),
                        value: t
                    }
                }),
                value: null !== (t = n.format) && void 0 !== t ? t : a.DEFAULT_TIMESTAMP_FORMAT,
                size: l.RadioGroup.Sizes.SMALL,
                onChange: e => {
                    let {
                        value: t
                    } = e;
                    o({
                        format: t
                    })
                }
            })]
        })
    }
}