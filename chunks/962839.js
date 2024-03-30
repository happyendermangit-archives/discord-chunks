function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n.r(t), n.d(t, {
        AvatarSizeSpecs: function() {
            return p
        },
        AvatarSizes: function() {
            return u
        },
        CUTOUT_BORDER_RADIUS: function() {
            return E
        },
        MOBILE_HEIGHT_RATIO: function() {
            return f
        },
        MOBILE_ICON_RADIUS: function() {
            return _
        },
        StatusBackdropColors: function() {
            return s
        },
        StatusBackdropOpacity: function() {
            return l
        },
        TYPING_WIDTH_RATIO: function() {
            return d
        },
        getAvatarSize: function() {
            return y
        },
        getAvatarSpecs: function() {
            return m
        }
    });
    var o, i, a, u, s, l, c, f = 1.5,
        d = 2.5,
        _ = .125,
        E = .2;
    (o = u || (u = {})).SIZE_16 = "SIZE_16", o.SIZE_20 = "SIZE_20", o.SIZE_24 = "SIZE_24", o.SIZE_32 = "SIZE_32", o.SIZE_40 = "SIZE_40", o.SIZE_48 = "SIZE_48", o.SIZE_56 = "SIZE_56", o.SIZE_80 = "SIZE_80", o.SIZE_120 = "SIZE_120", o.SIZE_152 = "SIZE_152", o.DEPRECATED_SIZE_30 = "DEPRECATED_SIZE_30", o.DEPRECATED_SIZE_60 = "DEPRECATED_SIZE_60", o.DEPRECATED_SIZE_100 = "DEPRECATED_SIZE_100", (i = s || (s = {})).BLACK = "black", i.WHITE = "white", (a = l || (l = {}))[a.HIGH = .7] = "HIGH", a[a.LOW = .45] = "LOW";
    var p = Object.freeze((r(c = {}, "SIZE_16", Object.freeze({
        size: 16,
        status: 6,
        stroke: 2,
        offset: 0
    })), r(c, "SIZE_20", Object.freeze({
        size: 20,
        status: 6,
        stroke: 2,
        offset: 0
    })), r(c, "SIZE_24", Object.freeze({
        size: 24,
        status: 8,
        stroke: 3,
        offset: 0
    })), r(c, "SIZE_32", Object.freeze({
        size: 32,
        status: 10,
        stroke: 3,
        offset: 0
    })), r(c, "SIZE_40", Object.freeze({
        size: 40,
        status: 12,
        stroke: 4,
        offset: 0
    })), r(c, "SIZE_48", Object.freeze({
        size: 48,
        status: 12,
        stroke: 4,
        offset: 0
    })), r(c, "SIZE_56", Object.freeze({
        size: 56,
        status: 14,
        stroke: 4,
        offset: 2
    })), r(c, "SIZE_80", Object.freeze({
        size: 80,
        status: 16,
        stroke: 6,
        offset: 4
    })), r(c, "SIZE_120", Object.freeze({
        size: 120,
        status: 24,
        stroke: 8,
        offset: 8
    })), r(c, "SIZE_152", Object.freeze({
        size: 152,
        status: 30,
        stroke: 10,
        offset: 10
    })), r(c, "DEPRECATED_SIZE_30", Object.freeze({
        size: 30,
        status: 0,
        stroke: 0,
        offset: 0
    })), r(c, "DEPRECATED_SIZE_60", Object.freeze({
        size: 60,
        status: 0,
        stroke: 0,
        offset: 0
    })), r(c, "DEPRECATED_SIZE_100", Object.freeze({
        size: 100,
        status: 0,
        stroke: 0,
        offset: 0
    })), c));

    function m(e) {
        return p[e]
    }

    function y(e) {
        if ("number" != typeof e) return p[e].size;
        return e
    }
}