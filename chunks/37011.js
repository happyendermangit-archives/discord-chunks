function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChildMapping: function() {
            return o
        },
        mergeChildMappings: function() {
            return i
        }
    });
    var r = n("470079");

    function o(e) {
        var t, n = {};
        return e && (null === (t = r.Children.map(e, function(e) {
            return e
        })) || void 0 === t || t.forEach(function(e) {
            var t = e.key;
            null != t && (n[t] = e)
        })), n
    }

    function i() {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

        function r(e) {
            return n.hasOwnProperty(e) ? n[e] : t[e]
        }
        var o = {},
            i = [];
        for (var a in t) n.hasOwnProperty(a) ? i.length && (o[a] = i, i = []) : i.push(a);
        var u = {};
        for (var s in n) {
            if (o.hasOwnProperty(s))
                for (e = 0; e < o[s].length; e++) {
                    var l = o[s][e];
                    u[o[s][e]] = r(l)
                }
            u[s] = r(s)
        }
        for (e = 0; e < i.length; e++) u[i[e]] = r(i[e]);
        return u
    }
}