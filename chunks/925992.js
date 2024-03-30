function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("913527"),
        i = n.n(o),
        a = n("217379"),
        u = n.n(a),
        s = n("898511"),
        l = n("225098");
    n("501896");
    var c = n("465724");

    function f(e) {
        var t = e.value,
            n = void 0 === t ? i()().local() : t,
            o = e.minDate,
            a = e.maxDate,
            f = e.onSelect,
            d = e.calendarClassName,
            _ = e.autoFocus,
            E = e.onClickOutside,
            p = r.useCallback(function(e, t) {
                null == f || f(i()(e), t)
            }, [f]),
            m = r.useMemo(function() {
                return n.toDate()
            }, [n]),
            y = r.useMemo(function() {
                return null == a ? void 0 : a.toDate()
            }, [a]),
            I = r.useMemo(function() {
                return null == o ? void 0 : o.toDate()
            }, [o]),
            h = (0, s.useStateFromStores)([l.default], function() {
                return l.default.locale
            }),
            O = r.useRef(null),
            T = r.useCallback(function(e) {
                var t = e.currentTarget;
                t.classList.contains("react-datepicker__day") && setTimeout(function() {
                    if (null === (e = O.current) || void 0 === e ? !void 0 : !e.contains(t)) {
                        var e, n, r = null === (n = O.current) || void 0 === n ? void 0 : n.querySelector('.react-datepicker__day[tabindex="0"]');
                        null != r && r.focus()
                    }
                }, 100)
            }, []);
        return r.createElement("div", {
            ref: O,
            className: c.calendarPicker
        }, r.createElement(u(), {
            calendarClassName: d,
            selected: m,
            onChange: p,
            autoFocus: _,
            fixedHeight: !0,
            inline: !0,
            locale: h,
            maxDate: y,
            minDate: I,
            onKeyDown: T,
            onClickOutside: E
        }))
    }
}