function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchBlockedDomainList: function() {
            return c
        }
    }), n("411104");
    var i = n("956067"),
        r = n("544891"),
        a = n("570140"),
        s = n("710845"),
        o = n("873741"),
        l = n("139674");
    let {
        WEBAPP_ENDPOINT: u
    } = window.GLOBAL_ENV, d = "https:".concat(u, "/bad-hash-delta"), _ = new s.default("FetchBlockedDomain");

    function c() {
        return i.default.timeAsync("\uD83D\uDCBE", "fetchBlockedDomainList", E)
    }
    async function E() {
        _.verbose("Fetching blocked domain list");
        try {
            let e;
            let t = parseInt((await r.HTTP.get("https://cdn.discordapp.com/bad-domains/current_revision.txt")).text),
                n = l.default.getCurrentRevision();
            if (_.verbose("Server revision: ".concat(t, ", Client revision: ").concat(n)), null === n || n !== t) {
                try {
                    if (null === n || n > t) {
                        let e = null === n ? "null" : "greater than server revision number";
                        throw Error("Client revision number is " + e)
                    }
                    if (t - n > 15) throw Error("Client revision number is more than ".concat(15, " behind the server revision number"));
                    let a = (await r.HTTP.get({
                        url: d,
                        query: {
                            revision: n
                        }
                    })).body;
                    if (0 === a.ADDED.length && 0 === a.REMOVED.length) {
                        _.verbose("No changes to blocked domains list.");
                        return
                    }
                    _.verbose("Retrieved delta, domains added: ".concat(a.ADDED.length, ", domains removed: ").concat(a.REMOVED.length));
                    let s = await i.default.timeAsync("\uD83D\uDCBE", "getBlockedDomainList", () => l.default.getBlockedDomainList());
                    if (null === s) throw Error("Blocked domain list is null");
                    _.verbose("Blocked domains list length: ".concat(s.size, " before update")), a.ADDED.forEach(e => {
                        if (s.has(e)) throw Error("Unable to add domain which is already in the blockedDomains set: ".concat(e));
                        s.add(e)
                    }), a.REMOVED.forEach(e => {
                        if (!s.has(e)) throw Error("Unable to removed domain which is not in the blockedDomains set: ".concat(e));
                        s.delete(e)
                    }), e = Array.from(s), _.verbose("Delta applied successfully")
                } catch (t) {
                    if (_.verbose("Unable to process domain list delta: ".concat(t.message)), (0, o.isSlowNetwork)()) {
                        _.verbose("Slow network detected, not downloading full list");
                        return
                    }
                    _.verbose("Downloading the full bad domains file"), e = (await r.HTTP.get({
                        url: "https://cdn.discordapp.com/bad-domains/updated_hashes.json"
                    })).body
                }
                _.verbose("Blocked domains list length: ".concat(e.length, " after update")), i.default.time("\uD83D\uDCBE", "Save Blocked Domain List", () => a.default.dispatch({
                    type: "BLOCKED_DOMAIN_LIST_FETCHED",
                    list: e,
                    revision: t
                }))
            }
        } catch (e) {
            _.error(e)
        }
    }
}