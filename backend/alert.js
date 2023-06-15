import axios from "axios";

const sendAlerts = async (name, description, phoneNumber) => {
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
                    link: "https://cdn.dribbble.com/users/60166/screenshots/14845227/media/5f4afd476f860e5e6443cf0bc5ba6a34.jpg?compress=1&resize=400x300",
                  },
                },
              ],
            },
            {
              type: "body",
              parameters: [
                {
                  type: "text",
                  text: `${name} and ${description}`,
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


export default sendAlerts;
