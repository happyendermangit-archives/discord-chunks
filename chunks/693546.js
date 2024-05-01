function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("570140"),
        a = n("287734"),
        s = n("131704"),
        o = n("246364"),
        l = n("937111"),
        u = n("981631");
    let d = async e => {
        let t = await i.HTTP.get({
                url: u.Endpoints.GUILD_JOIN_REQUEST_BY_ID(e)
            }),
            n = (0, l.joinRequestFromServer)(t.body);
        return r.default.dispatch({
            type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS",
            joinRequest: n
        }), t
    }, _ = async e => {
        let {
            guildId: t,
            status: n = o.GuildJoinRequestApplicationStatuses.SUBMITTED,
            before: a,
            after: s,
            limit: d = o.MAX_RESULTS_PER_PAGE
        } = e;
        r.default.dispatch({
            type: "GUILD_JOIN_REQUESTS_FETCH_START"
        });
        try {
            var _;
            let e = await i.HTTP.get({
                    url: u.Endpoints.GUILD_JOIN_REQUESTS(t),
                    query: {
                        status: n,
                        limit: d,
                        before: a,
                        after: s
                    }
                }),
                o = e.body.total,
                c = (null !== (_ = e.body.guild_join_requests) && void 0 !== _ ? _ : []).map(l.joinRequestFromServer);
            return r.default.dispatch({
                type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
                status: n,
                requests: c,
                total: o,
                limit: d,
                guildId: t
            }), e
        } catch (e) {
            throw r.default.dispatch({
                type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE"
            }), e
        }
    }, c = async e => {
        try {
            let t = await i.HTTP.del({
                url: u.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e)
            });
            return r.default.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                guildId: e,
                request: null
            }), t
        } catch (e) {
            throw e
        }
    }, E = async (e, t) => {
        try {
            return await i.HTTP.post({
                url: u.Endpoints.GUILD_JOIN_REQUEST_ACK(e, t)
            })
        } catch (e) {} finally {
            r.default.dispatch({
                type: "ACK_APPROVED_GUILD_JOIN_REQUEST",
                id: t,
                guildId: e
            })
        }
    }, I = async function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.GuildJoinRequestApplicationStatuses.APPROVED,
            a = arguments.length > 3 ? arguments[3] : void 0,
            s = await i.HTTP.patch({
                url: u.Endpoints.GUILD_JOIN_REQUEST(e, t),
                body: {
                    action: n,
                    rejection_reason: a
                }
            });
        r.default.dispatch({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            guildId: e,
            status: s.body.application_status,
            request: s.body
        })
    }, T = async (e, t) => {
        let n = await i.HTTP.patch({
            url: u.Endpoints.GUILD_JOIN_REQUESTS(e),
            body: {
                action: t
            }
        });
        return r.default.dispatch({
            type: "GUILD_JOIN_REQUESTS_BULK_ACTION",
            guildId: e,
            action: t
        }), n.body
    }, f = async e => {
        try {
            let {
                body: t
            } = await i.HTTP.post({
                url: u.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e)
            });
            return r.default.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                guildId: e,
                request: t
            }), t
        } catch (e) {
            throw e
        }
    }, S = async () => {
        let e = await i.HTTP.get({
            url: u.Endpoints.USER_JOIN_REQUEST_GUILDS
        });
        r.default.dispatch({
            type: "USER_JOIN_REQUEST_GUILDS_FETCH",
            guilds: e.body
        })
    }, h = async function(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = await i.HTTP.post({
                url: u.Endpoints.GUILD_JOIN_REQUEST_INTERVIEW(e)
            }),
            o = (0, s.createChannelRecordFromServer)(n.body);
        return r.default.dispatch({
            type: "CHANNEL_CREATE",
            channel: o
        }), t && a.default.selectPrivateChannel(o.id), o.id
    };
    t.default = {
        fetchGuildJoinRequest: d,
        fetchGuildJoinRequests: _,
        ackUserGuildJoinRequest: E,
        removeGuildJoinRequest: c,
        updateGuildJoinRequest: I,
        actionAllPendingJoinRequests: T,
        resetGuildJoinRequest: f,
        fetchRequestToJoinGuilds: S,
        setSelectedApplicationTab: (e, t) => {
            r.default.dispatch({
                type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB",
                guildId: e,
                applicationTab: t
            })
        },
        setSelectedSortOrder: (e, t) => {
            r.default.dispatch({
                type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER",
                guildId: e,
                sortOrder: t
            })
        },
        setSelectedGuildJoinRequest: (e, t) => {
            r.default.dispatch({
                type: "GUILD_JOIN_REQUESTS_SET_SELECTED",
                guildId: e,
                request: t
            })
        },
        createOrEnterJoinRequestInterview: h
    }
}