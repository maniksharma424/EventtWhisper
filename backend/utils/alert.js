import axios from "axios";

const sendAlerts = async (event, user) => {
  try {
    const response = await axios.post(
      "https://graph.facebook.com/v16.0/104731305941884/messages",
      {
        messaging_product: "whatsapp",
        to: `91${user?.phone}`,
        type: "template",
        template: {
          name: "alert",
          language: {
            code: "en_US",
          },
          components: [
            {
              type: "header",
              parameters: [
                {
                  type: "image",
                  image: {
                    link: "https://cdn-webcache.wimages.net/img/android_app_icon-30dffff8f6e54d2c8a9c76e301ad79e0.png?vsn=d",
                  },
                },
              ],
            },
            {
              type: "body",
              parameters: [
                {
                  type: "text",
                  text: `Hi ${user?.name},Name-${event?.name},description-${event?.description}`
                },
              ],
            },
            {
              type: "button",
              sub_type: "URL",
              index: "1",
              parameters: [
                {
                  type: "text",
                  text: "https://www.eventwhisper.click",
                },
              ],
            },
          ],
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.META_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );


  } catch (error) {
throw new Error(error)
  }
};


export default sendAlerts;
