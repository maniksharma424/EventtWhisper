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
          name: "eventalert",
          language: {
            code: "en_US",
          },
          components: [
            {
              type: "body",
              parameters: [
                {
                  type: "text",
                  text: `${user?.name} this is a reminder for ${event?.name} - ${event?.description}`,
                },
              ],
            },
            {
              type: "button",
              sub_type: "quick_reply",
              index: "0",
              parameters: [
                {
                  type: "payload",
                  payload:'Than you for using My Cal you will not be notified for any further updates'
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
console.log(response);

  } catch (error) {
    console.log(error);
throw new Error(error)
  }
};


export default sendAlerts;
