function(e, t, n) {
    "use strict";

    function s(e) {
        return Math.max(Math.min(e, 1), 0)
    }

    function i(e, t) {
        let {
            top: n,
            bottom: i,
            left: r,
            right: a
        } = e;
        return {
            top: null != n ? Math.floor(s(n) * t.height) : null,
            left: null != r ? Math.floor(s(r) * t.width) : null,
            bottom: null != i ? Math.floor(s(i) * t.height) : null,
            right: null != a ? Math.floor(s(a) * t.width) : null
        }
    }

    function r(e, t) {
        let {
            width: n,
            height: i
        } = e;
        return {
            width: "auto" === n ? n : Math.floor(s(n) * t.width),
            height: "auto" === i ? i : Math.floor(s(i) * t.height)
        }
    }

    function a(e, t) {
        let {
            top: n,
            bottom: i,
            left: r,
            right: a
        } = e;
        return {
            top: null != n ? s(n / t.height) : null,
            left: null != r ? s(r / t.width) : null,
            bottom: null != i ? s(i / t.height) : null,
            right: null != a ? s(a / t.width) : null
        }
    }

    function o(e, t) {
        let {
            width: n,
            height: s
        } = e;
        return {
            width: "auto" === n ? n : n / t.width,
            height: "auto" === s ? s : s / t.height
        }
    }

    function d(e, t, n, s, i) {
        let {
            top: r,
            bottom: a,
            left: o,
            right: d
        } = e;
        if (null == r && null == a ? (r = 0, a = n - i) : null == r && null != a ? r = n - (a + i) : null != r && (a = n - (r + i)), null == o && null == d ? (o = 0, d = t - s) : null == o && null != d ? o = t - (d + s) : null == d && null != o && (d = t - (o + s)), null == r || null == a || null == o || null == d) throw Error("Logically this can never happen based on our if/else statements");
        return {
            top: r,
            left: o,
            bottom: a,
            right: d
        }
    }

    function u(e) {
        let {
            top: t,
            left: n,
            bottom: s,
            right: i
        } = e;
        return 0 === t || t <= s ? s = null : t = null, 0 === n || n <= i ? i = null : n = null, {
            top: t,
            left: n,
            bottom: s,
            right: i
        }
    }

    function l(e) {
        let {
            top: t,
            left: n,
            bottom: s,
            right: i
        } = e;
        return s < 0 && (t += s, s = 0), t < 0 && (s += t, t = 0), i < 0 && (n += i, i = 0), n < 0 && (i += n, n = 0), {
            top: t,
            left: n,
            bottom: s,
            right: i
        }
    }

    function f(e, t, n) {
        e = i(e, n);
        let {
            width: s,
            height: a
        } = r(t, n);
        return s = "string" == typeof s ? 0 : s, a = "string" == typeof a ? 0 : a, d(e, n.width, n.height, s, a)
    }

    function _(e, t, n) {
        let {
            top: s,
            left: i
        } = e, {
            x: r,
            y: f
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            x: 0,
            y: 0
        }, {
            width: _,
            height: c
        } = t, g = u(l(d({
            top: s + f,
            left: i + r,
            bottom: null,
            right: null
        }, n.width, n.height, "number" == typeof _ ? _ : 0, "number" == typeof c ? c : 0)));
        return [a(g, n), o(t, n)]
    }

    function c(e, t, n) {
        let {
            top: s,
            right: i
        } = e, {
            x: r,
            y: f
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            x: 0,
            y: 0
        }, {
            width: _,
            height: c
        } = t, g = u(l(d({
            top: s + f,
            left: null,
            bottom: null,
            right: i - r
        }, n.width, n.height, "number" == typeof _ ? _ : 0, "number" == typeof c ? c : 0)));
        return [a(g, n), o(t, n)]
    }
    n.r(t), n.d(t, {
        getAnchorCoordsFromLayoutSize: function() {
            return i
        },
        getSizeFromLayoutSize: function() {
            return r
        },
        getAnchorPercentageFromLayoutSize: function() {
            return a
        },
        getSizePercentageFromSize: function() {
            return o
        },
        getFullCoordsFromAnchorCoords: function() {
            return d
        },
        getAnchorCoordsFromFullCoords: function() {
            return u
        },
        fitFullCoordsToContainer: function() {
            return l
        },
        getFullCoordsFromLayoutSize: function() {
            return f
        },
        getLeftWidgetSpecs: function() {
            return _
        },
        getRightWidgetSpecs: function() {
            return c
        }
    }), n("70102")
}