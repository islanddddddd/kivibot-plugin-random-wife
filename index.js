const { KiviPlugin, http, segment } = require("@kivibot/core");

const plugin = new KiviPlugin("随机老婆", "1.0.0");

plugin.onMounted((bot, admins) => {
    plugin.onMessage(async (event) => {
        const { raw_message } = event;

        if (raw_message === "随机老婆") {
            const { data } = await http.get("https://api.waifu.pics/sfw/waifu");

            plugin.log(data);

            event.reply(segment.image(data.url));
        }
        if (raw_message === "随机老公") {
            const { data } = await http.get("https://api.catboys.com/img");

            plugin.log(data);

            event.reply(segment.image(data.url));
        }
    });
});

module.exports = { plugin };
