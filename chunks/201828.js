function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getInitialStreamTarget: function() {
            return r
        },
        getStreamTarget: function() {
            return o
        }
    });
    var a = n("162677");

    function r(e, t) {
        var n = e.find(function(e) {
            return e.processId === t
        });
        return null == n ? null : o(e, n)
    }
    var c = "356869127241072640";

    function o(e, t) {
        if (null == t) return null;
        if (t.applicationId === c) {
            var n, r, o, f, d;
            return n = e, o = (r = t).processPath.length > 1 ? r.processPath[r.processPath.length - 2] : 0, void 0 !== (d = (f = n.filter(function(e) {
                return e.applicationId === c && e.processPath.includes(o)
            })).find(function(e) {
                return "league of legends.exe" === e.executableName
            })) ? d : f.length > 0 ? f[0] : null
        }
        var u, l = new Map(e.map(function(e) {
                return [e.processId, e]
            })),
            s = t.processPath.map(function(e) {
                return l.get(e)
            }).find(function(e) {
                return null != e
            });
        if (null == s) return null;
        var b = e.map(function(e) {
            var t = e.processPath.findIndex(function(e) {
                return l.has(e)
            });
            return -1 === t ? null : {
                application: e,
                rootedPath: e.processPath.slice(t)
            }
        }).filter(a.isNotNullish).filter(function(e) {
            return e.rootedPath[0] === s.processId
        });
        b.sort(function(e, t) {
            var n = e.rootedPath.map(function(e) {
                    return l.get(e)
                }).filter(function(e) {
                    return null != e && null != e.windowHandle
                }),
                a = i(t.rootedPath.map(function(e) {
                    return l.get(e)
                }).filter(function(e) {
                    return null != e && null != e.windowHandle
                }), n);
            return 0 !== a ? a : i(t.rootedPath, e.rootedPath)
        });
        var p = null !== (u = b.find(function(e) {
            return null != e.application.windowHandle
        })) && void 0 !== u ? u : b[0];
        return null == p ? null : p.application
    }

    function i(e, t) {
        return e.length - t.length
    }
}