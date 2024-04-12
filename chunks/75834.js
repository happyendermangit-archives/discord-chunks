function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        getInitialStreamTarget: function() {
            return n
        },
        getStreamTarget: function() {
            return c
        }
    }), a("47120");
    var d = a("823379");

    function n(e, t) {
        let a = e.find(e => e.processId === t);
        return null == a ? null : c(e, a)
    }
    let i = "356869127241072640";

    function c(e, t) {
        var a;
        if (null == t) return null;
        if (t.applicationId === i) return function(e, t) {
            let a = t.processPath.length > 1 ? t.processPath[t.processPath.length - 2] : 0,
                d = e.filter(e => e.applicationId === i && e.processPath.includes(a)),
                n = d.find(e => "league of legends.exe" === e.executableName);
            return void 0 !== n ? n : d.length > 0 ? d[0] : null
        }(e, t);
        let n = new Map(e.map(e => [e.processId, e])),
            c = t.processPath.map(e => n.get(e)).find(e => null != e);
        if (null == c) return null;
        let o = e.map(e => {
            let t = e.processPath.findIndex(e => n.has(e));
            return -1 === t ? null : {
                application: e,
                rootedPath: e.processPath.slice(t)
            }
        }).filter(d.isNotNullish).filter(e => e.rootedPath[0] === c.processId);
        o.sort((e, t) => {
            let a = e.rootedPath.map(e => n.get(e)).filter(e => null != e && null != e.windowHandle),
                d = r(t.rootedPath.map(e => n.get(e)).filter(e => null != e && null != e.windowHandle), a);
            return 0 !== d ? d : r(t.rootedPath, e.rootedPath)
        });
        let f = null !== (a = o.find(e => null != e.application.windowHandle)) && void 0 !== a ? a : o[0];
        return null == f ? null : f.application
    }

    function r(e, t) {
        return e.length - t.length
    }
}