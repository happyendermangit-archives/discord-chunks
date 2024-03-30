function(e, t, n) {
    "use strict";

    function r() {
        return {
            textValue: "",
            richValue: [{
                type: "line",
                children: [{
                    text: ""
                }]
            }]
        }
    }

    function o(e) {
        return {
            textValue: e,
            richValue: a(e)
        }
    }
    n.r(t), n.d(t, {
        createEmptyState: function() {
            return r
        },
        createState: function() {
            return o
        },
        toRichValue: function() {
            return a
        },
        voidToOptionValue: function() {
            return u
        }
    });
    var i = Object.freeze([Object.freeze({
        type: "line",
        children: Object.freeze([Object.freeze({
            text: ""
        })])
    })]);

    function a(e) {
        return "" !== e ? e.split("\n").map(function(e) {
            return {
                type: "line",
                children: [{
                    text: e
                }]
            }
        }) : i
    }

    function u(e) {
        switch (e.type) {
            case "userMention":
                return {
                    type: "userMention", userId: e.userId
                };
            case "channelMention":
                return {
                    type: "channelMention", channelId: e.channelId
                };
            case "staticRouteLink":
                return {
                    type: "staticRouteLink", channelId: e.channelId
                };
            case "soundboard":
                return {
                    type: "soundboard", soundId: e.soundId
                };
            case "roleMention":
                return {
                    type: "roleMention", roleId: e.roleId
                };
            case "textMention":
                return {
                    type: "textMention", text: e.name
                };
            case "emoji":
                return {
                    type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                };
            case "customEmoji":
                return {
                    type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                };
            case "testInlineVoid":
                throw Error("Unable to convert test types")
        }
        return null
    }
}