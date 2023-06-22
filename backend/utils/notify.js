import axios from "axios";

const notify = async (event,phoneNumber) => {
  try {
    const response = await axios.post(
      "https://graph.facebook.com/v16.0/104731305941884/messages",
      {
        messaging_product: "whatsapp",
        to: `91${phoneNumber}`,
        type: "template",
        template: {
          name: "notify",
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
                    link: "https://www.pngitem.com/pimgs/m/75-757489_post-notification-bell-png-transparent-background-notification-icon.png",
                  },
                },
              ],
            },
            {
              type: "body",
              parameters: [
                {
                  type: "text",
                  text: `${event.day}/${event.month}/${event.year} at ${event.hour}:${event.minutes} ${event.timeZone} you will be notified accordingly`,
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
                  text: "http://stashit.netlify.app/",
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
    console.error(error);
  }
};
export default notify;