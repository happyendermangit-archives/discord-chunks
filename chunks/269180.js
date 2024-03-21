function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    }), n("70102"), n("222007");
    var i = n("157552"),
        s = n("605250"),
        r = n("831610"),
        a = n("261131"),
        o = n("271938"),
        l = n("86878"),
        u = n("368694"),
        d = n("560733"),
        c = n("152723"),
        _ = n("773336"),
        f = n("253981"),
        E = n("50885"),
        h = n("49111");
    let g = new s.default("Games"),
        m = {},
        p = 0,
        S = null;

    function v() {
        return null != S ? Promise.resolve(S) : (0, _.isDesktop)() ? E.default.ensureModule("discord_game_utils").then(() => {
            let e = E.default.getGameUtils();
            return null != e && null != e.findLaunchable ? (S = e, e) : Promise.reject(Error("game utils not found"))
        }) : Promise.reject(Error("not desktop client"))
    }

    function T(e) {
        let t = {
                id: e.id,
                name: e.name,
                thirdPartySkus: e.thirdPartySkus,
                executables: e.executables.filter(e => e.os === (0, _.getPlatformName)()).map(e => e.name)
            },
            n = e.aliases.map(e => ({
                ...t,
                name: e
            }));
        return [t, ...n]
    }

    function I(e) {
        return {
            id: e
        }
    }
    async function A(e) {
        if (!Array.isArray(e) && (e = [e]), !u.default.isDeveloper && (e = e.filter(e => null == e.thirdPartySkus || -1 === e.thirdPartySkus.findIndex(e => {
                let {
                    distributor: t
                } = e;
                return t === h.Distributors.BATTLENET
            }))), 0 === e.length) throw Error("No remaining launchable queries");
        let t = Date.now();
        t > p && (p = t + 36e5, m = {});
        let n = await v();
        for (let t of e) {
            let e = m[t.id];
            if (null != e) return e;
            let i = await new Promise(e => n.findLaunchable(t, e));
            if (null != i) return m[t.id] = i, i
        }
        throw Error("could not find launchable")
    }

    function C(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        if (e()) {
            t();
            return
        }
        setTimeout(() => {
            250 * i <= 12e4 ? C(e, t, n, i + 1) : n()
        }, 250)
    }

    function y(e) {
        return g.info("launch", e), new Promise((t, n) => {
            let i = f.default.safeParseWithQuery(e.launchTarget);
            null == i ? n(Error("Failed to parse launch target. ".concat(e.launchTarget))) : (window.open(e.launchTarget), t([]))
        })
    }
    var N = {
        waitSubscribed: (e, t) => new Promise((n, i) => C(() => a.default.isSubscribed(e, t), n, i)),
        waitConnected(e) {
            return new Promise(C.bind(this, () => l.default.isConnected(e)))
        },
        isLaunchable: e => A(T(e)).then(e => null != e).catch(() => !1),
        launch: e => A(T(e)).then(y),
        launchDispatchApplication(e, t, n, s, a) {
            let {
                launchOptions: l,
                defaultLaunchOptionId: u,
                installPath: _,
                applicationId: f,
                branchId: E,
                buildId: g,
                shouldPatch: m
            } = e;
            if (null == l || null == u || null == _) throw Error("Couldn't construct launchable for ".concat(e.applicationId));
            null == a && (a = u);
            let p = l[a];
            if (null == p) throw Error("Couldn't construct launchable for ".concat(e.applicationId, ". No launch option."));
            return (0, i.fetchBranches)([E]).then(e => {
                let t = e[0];
                if (null == t) return Promise.reject(Error("branch is null"));
                let {
                    liveBuildId: n
                } = t;
                if (m && n !== g) return Promise.reject(Error("live build id changed"))
            }).then(() => c.default.runLaunchSetup(f, E)).then(() => {
                let e = (0, r.default)(_),
                    i = {
                        DISCORD_INSTANCE_ID: d.default.getId().toString(),
                        DISCORD_ACCESS_TOKEN: null != t ? t : "",
                        DISCORD_CURRENT_LOCALE: n,
                        DISCORD_CURRENT_BRANCH: s,
                        DISCORD_STORAGE_PATH: h.DefaultCloudSyncConfiguration.ROOT_STORAGE_PATH(e, o.default.getId())
                    };
                return c.default.launch(f, E, p.name, i)
            })
        },
        removeShortcuts: e => (0, _.isWindows)() ? v().then(t => {
            var n, i;
            return null !== (i = null === (n = t.removeShortcuts) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== i && i
        }) : Promise.resolve(!1),
        createShortcuts(e, t, n, i, s) {
            if (null == s || !(0, _.isWindows)()) return Promise.resolve(!1);
            let r = "discord:///library/".concat(i, "/launch"),
                a = "".concat(s, "\\icon.ico");
            return v().then(i => {
                var s, o;
                return null !== (o = null === (s = i.createShortcuts) || void 0 === s ? void 0 : s.call(i, e, t, n, r, a)) && void 0 !== o && o
            })
        },
        isGameLaunchable: e => A({
            id: e
        }).then(e => null != e).catch(() => !1),
        launchGame(e) {
            if (l.default.isConnected(e)) return Promise.resolve();
            return A({
                id: e
            }).then(y)
        },
        isProtocolRegistered: e => v().then(t => {
            var n, i;
            return null !== (i = null === (n = t.isProtocolSchemeRegistered) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== i && i
        }),
        setRecentGames(e) {
            v().then(t => {
                var n;
                return null === (n = t.setRecentGames) || void 0 === n ? void 0 : n.call(t, e)
            }).catch(() => {})
        }
    }
}