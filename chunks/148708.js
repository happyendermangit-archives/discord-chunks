function(e, t) {
    "use strict";
    t.type = function(e) {
        return e.split(/ *; */).shift()
    }, t.params = function(e) {
        return e.split(/ *; */).reduce(function(e, t) {
            var n = t.split(/ *= */),
                r = n.shift(),
                i = n.shift();
            return r && i && (e[r] = i), e
        }, {})
    }, t.parseLinks = function(e) {
        return e.split(/ *, */).reduce(function(e, t) {
            var n = t.split(/ *; */),
                r = n[0].slice(1, -1);
            return e[n[1].split(/ *= */)[1].slice(1, -1)] = r, e
        }, {})
    }, t.cleanHeader = function(e, t) {
        return delete e["content-type"], delete e["content-length"], delete e["transfer-encoding"], delete e.host, t && (delete e.authorization, delete e.cookie), e
    }
}