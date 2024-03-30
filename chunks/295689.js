function(e, t, n) {
    var r, o, i, a, u, s, l;
    r = n.g, o = Date.now ? Date.now() : +new Date, i = r.performance || {}, a = [], u = {}, s = function(e, t) {
        for (var n = 0, r = a.length, o = []; n < r; n++) a[n][e] == t && o.push(a[n]);
        return o
    }, l = function(e, t) {
        for (var n, r = a.length; r--;)(n = a[r]).entryType == e && (void 0 === t || n.name == t) && a.splice(r, 1)
    }, i.now || (i.now = i.webkitNow || i.mozNow || i.msNow || function() {
        return (Date.now ? Date.now() : +new Date) - o
    }), i.mark || (i.mark = i.webkitMark || function(e) {
        var t = {
            name: e,
            entryType: "mark",
            startTime: i.now(),
            duration: 0
        };
        a.push(t), u[e] = t
    }), i.measure || (i.measure = i.webkitMeasure || function(e, t, n) {
        var r, o;
        if (void 0 !== n && void 0 === u[n]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + n + "' does not exist.");
        if (void 0 !== t && void 0 === u[t]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + t + "' does not exist.");
        r = u[t] ? u[t].startTime : 0, o = u[n] ? u[n].startTime : i.now(), a.push({
            name: e,
            entryType: "measure",
            startTime: r,
            duration: o - r
        })
    }), i.getEntriesByType || (i.getEntriesByType = i.webkitGetEntriesByType || function(e) {
        return s("entryType", e)
    }), i.getEntriesByName || (i.getEntriesByName = i.webkitGetEntriesByName || function(e) {
        return s("name", e)
    }), i.clearMarks || (i.clearMarks = i.webkitClearMarks || function(e) {
        l("mark", e)
    }), i.clearMeasures || (i.clearMeasures = i.webkitClearMeasures || function(e) {
        l("measure", e)
    }), r.performance = i, "function" == typeof define && (define.amd || define.ajs) && define("performance", [], function() {
        return i
    })
}