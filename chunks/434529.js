function(e, t, n) {
    "use strict";

    function i(e) {
        return Math.max(Math.min(e, 1), 0)
    }

    function r(e, t) {
        let {
            top: n,
            bottom: r,
            left: s,
            right: a
        } = e;
        return {
            top: null != n ? Math.floor(i(n) * t.height) : null,
            left: null != s ? Math.floor(i(s) * t.width) : null,
            bottom: null != r ? Math.floor(i(r) * t.height) : null,
            right: null != a ? Math.floor(i(a) * t.width) : null
        }
    }

    function s(e, t) {
        let {
            width: n,
            height: r
        } = e;
        return {
            width: "auto" === n ? n : Math.floor(i(n) * t.width),
            height: "auto" === r ? r : Math.floor(i(r) * t.height)
        }
    }

    function a(e, t) {
        let {
            top: n,
            bottom: r,
            left: s,
            right: a
        } = e;
        return {
            top: null != n ? i(n / t.height) : null,
            left: null != s ? i(s / t.width) : null,
            bottom: null != r ? i(r / t.height) : null,
            right: null != a ? i(a / t.width) : null
        }
    }

    function o(e, t) {
        let {
            width: n,
            height: i
        } = e;
        return {
            width: "auto" === n ? n : n / t.width,
            height: "auto" === i ? i : i / t.height
        }
    }

    function l(e, t, n, i, r) {
        let {
            top: s,
            bottom: a,
            left: o,
            right: l
        } = e;
        if (null == s && null == a ? (s = 0, a = n - r) : null == s && null != a ? s = n - (a + r) : null != s && (a = n - (s + r)), null == o && null == l ? (o = 0, l = t - i) : null == o && null != l ? o = t - (l + i) : null == l && null != o && (l = t - (o + i)), null == s || null == a || null == o || null == l) throw Error("Logically this can never happen based on our if/else statements");
        return {
            top: s,
            left: o,
            bottom: a,
            right: l
        }
    }

    function u(e) {
        let {
            top: t,
            left: n,
            bottom: i,
            right: r
        } = e;
        return 0 === t || t <= i ? i = null : t = null, 0 === n || n <= r ? r = null : n = null, {
            top: t,
            left: n,
            bottom: i,
            right: r
        }
    }

    function d(e) {
        let {
            top: t,
            left: n,
            bottom: i,
            right: r
        } = e;
        return i < 0 && (t += i, i = 0), t < 0 && (i += t, t = 0), r < 0 && (n += r, r = 0), n < 0 && (r += n, n = 0), {
            top: t,
            left: n,
            bottom: i,
            right: r
        }
    }

    function _(e, t, n) {
        e = r(e, n);
        let {
            width: i,
            height: a
        } = s(t, n);
        return i = "string" == typeof i ? 0 : i, a = "string" == typeof a ? 0 : a, l(e, n.width, n.height, i, a)
    }

    function c(e, t, n) {
        let {
            top: i,
            left: r
        } = e, {
            x: s,
            y: _
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            x: 0,
            y: 0
        }, {
            width: c,
            height: E
        } = t;
        return [a(u(d(l({
            top: i + _,
            left: r + s,
            bottom: null,
            right: null
        }, n.width, n.height, "number" == typeof c ? c : 0, "number" == typeof E ? E : 0))), n), o(t, n)]
    }

    function E(e, t, n) {
        let {
            top: i,
            right: r
        } = e, {
            x: s,
            y: _
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            x: 0,
            y: 0
        }, {
            width: c,
            height: E
        } = t;
        return [a(u(d(l({
            top: i + _,
            left: null,
            bottom: null,
            right: r - s
        }, n.width, n.height, "number" == typeof c ? c : 0, "number" == typeof E ? E : 0))), n), o(t, n)]
    }
    n.r(t), n.d(t, {
        fitFullCoordsToContainer: function() {
            return d
        },
        getAnchorCoordsFromFullCoords: function() {
            return u
        },
        getAnchorCoordsFromLayoutSize: function() {
            return r
        },
        getAnchorPercentageFromLayoutSize: function() {
            return a
        },
        getFullCoordsFromAnchorCoords: function() {
            return l
        },
        getFullCoordsFromLayoutSize: function() {
            return _
        },
        getLeftWidgetSpecs: function() {
            return c
        },
        getRightWidgetSpecs: function() {
            return E
        },
        getSizeFromLayoutSize: function() {
            return s
        },
        getSizePercentageFromSize: function() {
            return o
        }
    }), n("411104")
}