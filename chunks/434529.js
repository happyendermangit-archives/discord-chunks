function(e, t, n) {
    "use strict";

    function i(e) {
        return Math.max(Math.min(e, 1), 0)
    }

    function r(e, t) {
        let {
            top: n,
            bottom: r,
            left: a,
            right: s
        } = e;
        return {
            top: null != n ? Math.floor(i(n) * t.height) : null,
            left: null != a ? Math.floor(i(a) * t.width) : null,
            bottom: null != r ? Math.floor(i(r) * t.height) : null,
            right: null != s ? Math.floor(i(s) * t.width) : null
        }
    }

    function a(e, t) {
        let {
            width: n,
            height: r
        } = e;
        return {
            width: "auto" === n ? n : Math.floor(i(n) * t.width),
            height: "auto" === r ? r : Math.floor(i(r) * t.height)
        }
    }

    function s(e, t) {
        let {
            top: n,
            bottom: r,
            left: a,
            right: s
        } = e;
        return {
            top: null != n ? i(n / t.height) : null,
            left: null != a ? i(a / t.width) : null,
            bottom: null != r ? i(r / t.height) : null,
            right: null != s ? i(s / t.width) : null
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
            top: a,
            bottom: s,
            left: o,
            right: l
        } = e;
        if (null == a && null == s ? (a = 0, s = n - r) : null == a && null != s ? a = n - (s + r) : null != a && (s = n - (a + r)), null == o && null == l ? (o = 0, l = t - i) : null == o && null != l ? o = t - (l + i) : null == l && null != o && (l = t - (o + i)), null == a || null == s || null == o || null == l) throw Error("Logically this can never happen based on our if/else statements");
        return {
            top: a,
            left: o,
            bottom: s,
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
            height: s
        } = a(t, n);
        return i = "string" == typeof i ? 0 : i, s = "string" == typeof s ? 0 : s, l(e, n.width, n.height, i, s)
    }

    function c(e, t, n) {
        let {
            top: i,
            left: r
        } = e, {
            x: a,
            y: _
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            x: 0,
            y: 0
        }, {
            width: c,
            height: E
        } = t;
        return [s(u(d(l({
            top: i + _,
            left: r + a,
            bottom: null,
            right: null
        }, n.width, n.height, "number" == typeof c ? c : 0, "number" == typeof E ? E : 0))), n), o(t, n)]
    }

    function E(e, t, n) {
        let {
            top: i,
            right: r
        } = e, {
            x: a,
            y: _
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            x: 0,
            y: 0
        }, {
            width: c,
            height: E
        } = t;
        return [s(u(d(l({
            top: i + _,
            left: null,
            bottom: null,
            right: r - a
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
            return s
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
            return a
        },
        getSizePercentageFromSize: function() {
            return o
        }
    }), n("411104")
}