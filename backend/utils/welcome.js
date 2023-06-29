import axios from "axios";

const welcome = async (name,phone) => {
  try {
    const response = await axios.post(
      "https://graph.facebook.com/v16.0/104731305941884/messages",
      {
        messaging_product: "whatsapp",
        to: `91${phone}`,
        type: "template",
        template: {
          name: "welcome",
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
                  text: `${name}`,
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
                  text: "https://www.eventwhisper.click/dashboard",
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
export default welcome;