function(e, t, n) {
    "use strict";

    function i(e) {
        return Math.max(Math.min(e, 1), 0)
    }

    function s(e, t) {
        let {
            top: n,
            bottom: s,
            left: r,
            right: a
        } = e;
        return {
            top: null != n ? Math.floor(i(n) * t.height) : null,
            left: null != r ? Math.floor(i(r) * t.width) : null,
            bottom: null != s ? Math.floor(i(s) * t.height) : null,
            right: null != a ? Math.floor(i(a) * t.width) : null
        }
    }

    function r(e, t) {
        let {
            width: n,
            height: s
        } = e;
        return {
            width: "auto" === n ? n : Math.floor(i(n) * t.width),
            height: "auto" === s ? s : Math.floor(i(s) * t.height)
        }
    }

    function a(e, t) {
        let {
            top: n,
            bottom: s,
            left: r,
            right: a
        } = e;
        return {
            top: null != n ? i(n / t.height) : null,
            left: null != r ? i(r / t.width) : null,
            bottom: null != s ? i(s / t.height) : null,
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

    function l(e, t, n, i, s) {
        let {
            top: r,
            bottom: a,
            left: o,
            right: l
        } = e;
        if (null == r && null == a ? (r = 0, a = n - s) : null == r && null != a ? r = n - (a + s) : null != r && (a = n - (r + s)), null == o && null == l ? (o = 0, l = t - i) : null == o && null != l ? o = t - (l + i) : null == l && null != o && (l = t - (o + i)), null == r || null == a || null == o || null == l) throw Error("Logically this can never happen based on our if/else statements");
        return {
            top: r,
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
            right: s
        } = e;
        return 0 === t || t <= i ? i = null : t = null, 0 === n || n <= s ? s = null : n = null, {
            top: t,
            left: n,
            bottom: i,
            right: s
        }
    }

    function d(e) {
        let {
            top: t,
            left: n,
            bottom: i,
            right: s
        } = e;
        return i < 0 && (t += i, i = 0), t < 0 && (i += t, t = 0), s < 0 && (n += s, s = 0), n < 0 && (s += n, n = 0), {
            top: t,
            left: n,
            bottom: i,
            right: s
        }
    }

    function c(e, t, n) {
        e = s(e, n);
        let {
            width: i,
            height: a
        } = r(t, n);
        return i = "string" == typeof i ? 0 : i, a = "string" == typeof a ? 0 : a, l(e, n.width, n.height, i, a)
    }

    function f(e, t, n) {
        let {
            top: i,
            left: s
        } = e, {
            x: r,
            y: c
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            x: 0,
            y: 0
        }, {
            width: f,
            height: _
        } = t, h = u(d(l({
            top: i + c,
            left: s + r,
            bottom: null,
            right: null
        }, n.width, n.height, "number" == typeof f ? f : 0, "number" == typeof _ ? _ : 0)));
        return [a(h, n), o(t, n)]
    }

    function _(e, t, n) {
        let {
            top: i,
            right: s
        } = e, {
            x: r,
            y: c
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
            x: 0,
            y: 0
        }, {
            width: f,
            height: _
        } = t, h = u(d(l({
            top: i + c,
            left: null,
            bottom: null,
            right: s - r
        }, n.width, n.height, "number" == typeof f ? f : 0, "number" == typeof _ ? _ : 0)));
        return [a(h, n), o(t, n)]
    }
    n.r(t), n.d(t, {
        getAnchorCoordsFromLayoutSize: function() {
            return s
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
            return l
        },
        getAnchorCoordsFromFullCoords: function() {
            return u
        },
        fitFullCoordsToContainer: function() {
            return d
        },
        getFullCoordsFromLayoutSize: function() {
            return c
        },
        getLeftWidgetSpecs: function() {
            return f
        },
        getRightWidgetSpecs: function() {
            return _
        }
    }), n("70102")
}