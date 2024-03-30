function(e, t, n) {
    "use strict";

    function r(e) {
        return Math.max(Math.min(e, 1), 0)
    }

    function o(e, t) {
        var n = e.top,
            o = e.bottom,
            i = e.left,
            a = e.right;
        return {
            top: null != n ? Math.floor(r(n) * t.height) : null,
            left: null != i ? Math.floor(r(i) * t.width) : null,
            bottom: null != o ? Math.floor(r(o) * t.height) : null,
            right: null != a ? Math.floor(r(a) * t.width) : null
        }
    }

    function i(e, t) {
        var n = e.width,
            o = e.height;
        return {
            width: "auto" === n ? n : Math.floor(r(n) * t.width),
            height: "auto" === o ? o : Math.floor(r(o) * t.height)
        }
    }

    function a(e, t) {
        var n = e.top,
            o = e.bottom,
            i = e.left,
            a = e.right;
        return {
            top: null != n ? r(n / t.height) : null,
            left: null != i ? r(i / t.width) : null,
            bottom: null != o ? r(o / t.height) : null,
            right: null != a ? r(a / t.width) : null
        }
    }

    function u(e, t) {
        var n = e.width,
            r = e.height;
        return {
            width: "auto" === n ? n : n / t.width,
            height: "auto" === r ? r : r / t.height
        }
    }

    function s(e, t, n, r, o) {
        var i = e.top,
            a = e.bottom,
            u = e.left,
            s = e.right;
        if (null == i && null == a ? (i = 0, a = n - o) : null == i && null != a ? i = n - (a + o) : null != i && (a = n - (i + o)), null == u && null == s ? (u = 0, s = t - r) : null == u && null != s ? u = t - (s + r) : null == s && null != u && (s = t - (u + r)), null == i || null == a || null == u || null == s) throw Error("Logically this can never happen based on our if/else statements");
        return {
            top: i,
            left: u,
            bottom: a,
            right: s
        }
    }

    function l(e) {
        var t = e.top,
            n = e.left,
            r = e.bottom,
            o = e.right;
        return 0 === t || t <= r ? r = null : t = null, 0 === n || n <= o ? o = null : n = null, {
            top: t,
            left: n,
            bottom: r,
            right: o
        }
    }

    function c(e) {
        var t = e.top,
            n = e.left,
            r = e.bottom,
            o = e.right;
        return r < 0 && (t += r, r = 0), t < 0 && (r += t, t = 0), o < 0 && (n += o, o = 0), n < 0 && (o += n, n = 0), {
            top: t,
            left: n,
            bottom: r,
            right: o
        }
    }

    function f(e, t, n) {
        e = o(e, n);
        var r = i(t, n),
            a = r.width,
            u = r.height;
        return a = "string" == typeof a ? 0 : a, u = "string" == typeof u ? 0 : u, s(e, n.width, n.height, a, u)
    }

    function d(e, t, n) {
        var r = e.top,
            o = e.left,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                x: 0,
                y: 0
            },
            f = i.x,
            d = i.y,
            _ = t.width,
            E = t.height;
        return [a(l(c(s({
            top: r + d,
            left: o + f,
            bottom: null,
            right: null
        }, n.width, n.height, "number" == typeof _ ? _ : 0, "number" == typeof E ? E : 0))), n), u(t, n)]
    }

    function _(e, t, n) {
        var r = e.top,
            o = e.right,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                x: 0,
                y: 0
            },
            f = i.x,
            d = i.y,
            _ = t.width,
            E = t.height;
        return [a(l(c(s({
            top: r + d,
            left: null,
            bottom: null,
            right: o - f
        }, n.width, n.height, "number" == typeof _ ? _ : 0, "number" == typeof E ? E : 0))), n), u(t, n)]
    }
    n.r(t), n.d(t, {
        fitFullCoordsToContainer: function() {
            return c
        },
        getAnchorCoordsFromFullCoords: function() {
            return l
        },
        getAnchorCoordsFromLayoutSize: function() {
            return o
        },
        getAnchorPercentageFromLayoutSize: function() {
            return a
        },
        getFullCoordsFromAnchorCoords: function() {
            return s
        },
        getFullCoordsFromLayoutSize: function() {
            return f
        },
        getLeftWidgetSpecs: function() {
            return d
        },
        getRightWidgetSpecs: function() {
            return _
        },
        getSizeFromLayoutSize: function() {
            return i
        },
        getSizePercentageFromSize: function() {
            return u
        }
    })
}